# Pulse AI Concierge — Landing Page

The official marketing site for **Pulse AI Concierge**, the AI enquiry
infrastructure for private dental practices.

A single static page. No build step, no framework, no dependencies — just
`index.html`, one stylesheet, one script and one image. It loads fast and
deploys anywhere.

---

## Project structure

```
pulse-ai-site/
├── index.html        # Page markup
├── styles.css        # All styling (design tokens at the top)
├── script.js         # Interactivity — simulator, ROI calculator, charts, ECG trace
├── assets/
│   └── logo.png       # Transparent Pulse AI Concierge wordmark
├── vercel.json        # Deploy config (clean URLs, caching, security headers)
├── .gitignore
└── README.md
```

---

## Deploy to Vercel (recommended)

### First time

1. Push this folder to a new GitHub repository (see below).
2. Go to **[vercel.com/new](https://vercel.com/new)** and sign in with GitHub.
3. **Import** the repository.
4. Framework preset: **Other** (it's a static site — no build needed).
   - Build command: *leave empty*
   - Output directory: *leave empty* (serves the root)
5. Click **Deploy**. You'll have a live `*.vercel.app` URL in about 20 seconds.

### Custom domain (pulse-ai.services)

1. In your Vercel project → **Settings → Domains → Add**.
2. Enter `pulse-ai.services`.
3. Vercel shows the DNS records to set. At your domain registrar, add them
   (usually an `A` record to Vercel's IP and a `CNAME` for `www`).
4. SSL is issued automatically. Propagation is usually under an hour.

Every future `git push` to the main branch redeploys automatically.

---

## Push to GitHub

From inside this folder:

```bash
git init
git add .
git commit -m "Pulse AI Concierge landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pulse-ai-site.git
git push -u origin main
```

---

## Before you go live — two edits

### 1. Connect the booking calendar

Open `script.js`, find this near the top:

```js
var GHL_EMBED_URL = '';
```

Paste your GoHighLevel booking widget URL between the quotes. In GHL:
**Calendars → your calendar → Share → Embed**, and copy the URL inside
`src="..."`. Every "Book A Demo" button opens it in a modal.

Until it's set, the buttons show a friendly "not connected yet" fallback.

### 2. Replace the placeholder social proof

The testimonials, practice names and headline stats
(`+340%`, `£14,200/mo`, `UK's #1 rated`) in `script.js` and `index.html`
are **realistic placeholders, not real client data**. Swap in genuine,
signed-off results before publishing.

---

## Tuning the ROI calculator

Near the top of the ROI section in `script.js`:

```js
var RECOVERY   = 0.72;   // share of missed enquiries Pulse AI recovers (shown on screen)
var TREAT_RATE = 0.33;   // share of new patients who accept treatment
var TREAT_VAL  = 1200;   // average treatment plan value
```

Adjust these to match your real figures. The on-screen maths updates
automatically.

---

## Local preview

No tooling required. Either open `index.html` directly, or serve it:

```bash
# Python
python3 -m http.server 8000

# or Node
npx serve
```

Then visit `http://localhost:8000`.

---

## Notes

- **No dependencies.** Fonts load from Google Fonts; everything else is local.
- **Accessible.** Semantic markup, ARIA labels, keyboard-navigable, honours
  `prefers-reduced-motion`.
- **Self-contained.** The logo is a local asset; the ECG animation is inline SVG.

© Artificial Intelligence Solutions & Services Ltd. All rights reserved.
