// POST /api/openai-lead-conversion
//
// Receives a server-to-server call from a GoHighLevel workflow after a
// genuine website form submission, and forwards a "lead_created" event to
// the OpenAI Ads Conversions API.
//
// Auth: caller must send header  x-ghl-webhook-secret  matching the
// GHL_WEBHOOK_SECRET environment variable. There is no other access
// control (no CORS is needed — this is called server-to-server by GHL,
// never from the browser).
//
// validate_only is false — OpenAI validated a test event successfully,
// so events sent from here now count as real conversions.

const crypto = require('crypto');

const OPENAI_EVENTS_URL = 'https://bzr.openai.com/v1/events?pid=GHeNrYvLkKkvJp2WBfsdB8';
const SOURCE_URL = 'https://www.pulse-ai.services/';

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  const expectedSecret = process.env.GHL_WEBHOOK_SECRET;
  const providedSecret = req.headers['x-ghl-webhook-secret'];
  if (!expectedSecret || !providedSecret || providedSecret !== expectedSecret) {
    return res.status(401).json({ ok: false, error: 'unauthorized' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      body = null;
    }
  }
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ ok: false, error: 'invalid_json_body' });
  }

  const contactId = typeof body.contact_id === 'string' ? body.contact_id.trim() : '';
  const rawEmail = typeof body.email === 'string' ? body.email : '';
  const oppref = typeof body.oppref === 'string' ? body.oppref.trim() : '';

  if (!contactId) {
    return res.status(400).json({ ok: false, error: 'missing_contact_id' });
  }

  const apiKey = process.env.OPENAI_ADS_CONVERSION_KEY;
  if (!apiKey) {
    console.error('[openai-lead-conversion] OPENAI_ADS_CONVERSION_KEY is not configured');
    return res.status(500).json({ ok: false, error: 'server_not_configured' });
  }

  const eventId = crypto.randomUUID();

  const event = {
    id: eventId,
    type: 'lead_created',
    timestamp_ms: Date.now(),
    source_url: SOURCE_URL,
    action_source: 'web',
    data: { type: 'customer_action' }
  };

  // Email is hashed server-side; the raw address is never sent onward,
  // logged, or included in this endpoint's response.
  const normalizedEmail = rawEmail.trim().toLowerCase();
  if (normalizedEmail) {
    event.user = {
      email_sha256: crypto.createHash('sha256').update(normalizedEmail).digest('hex')
    };
  }

  if (oppref) {
    event.oppref = oppref;
  }

  // contact_id is kept for our own logging/response only — it is not part
  // of the OpenAI event schema, so it is deliberately not attached here.

  const payload = {
    validate_only: false,
    events: [event]
  };

  let openaiStatus = null;
  let openaiBody = null;

  try {
    const openaiRes = await fetch(OPENAI_EVENTS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + apiKey
      },
      body: JSON.stringify(payload)
    });

    openaiStatus = openaiRes.status;
    const text = await openaiRes.text();
    try {
      openaiBody = JSON.parse(text);
    } catch (e) {
      openaiBody = text;
    }
  } catch (err) {
    console.error('[openai-lead-conversion] request to OpenAI failed:', err.message);
    return res.status(502).json({
      ok: false,
      error: 'openai_request_failed',
      event_id: eventId,
      contact_id: contactId
    });
  }

  console.log(
    '[openai-lead-conversion] contact_id=' + contactId +
    ' event_id=' + eventId +
    ' openai_status=' + openaiStatus
  );

  const accepted = typeof openaiStatus === 'number' && openaiStatus >= 200 && openaiStatus < 300;

  return res.status(200).json({
    ok: accepted,
    event_id: eventId,
    contact_id: contactId,
    validate_only: false,
    openai_status: openaiStatus,
    openai_response: openaiBody
  });
};
