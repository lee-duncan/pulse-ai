'use strict';
/* ═══════════════════════════════════════════════════════
   ⚙  CONFIG — PASTE YOUR GHL EMBED URL BELOW
   ─────────────────────────────────────────────────────
   In GoHighLevel: Calendars (or Forms) → your calendar →
   Share / Embed → copy the URL inside the iframe src="..."
   It looks like one of these:
     https://api.leadconnectorhq.com/widget/booking/AbC123xyz
     https://link.msgsndr.com/widget/booking/AbC123xyz
     https://api.leadconnectorhq.com/widget/form/AbC123xyz
   Paste it between the quotes. That's the only edit needed.
   ═══════════════════════════════════════════════════════ */
var GHL_EMBED_URL = '';

/* Fallback if the embed URL above is left blank */
var URL_BOOK='https://pulse-ai.services';

/* ════ ICON LIBRARY — thin-line SVG, replaces emoji ════ */
function icon(name,size,color){
  size=size||20; color=color||'currentColor';
  var P={
    phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    phoneOff:'<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91"/><line x1="2" y1="2" x2="22" y2="22"/>',
    bolt:'<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>',
    brain:'<path d="M12 5a3 3 0 0 0-5.9-.7A2.5 2.5 0 0 0 4 8.5a2.5 2.5 0 0 0 .5 4.8A3 3 0 0 0 9 17a3 3 0 0 0 3-1.5V5z"/><path d="M12 5a3 3 0 0 1 5.9-.7A2.5 2.5 0 0 1 20 8.5a2.5 2.5 0 0 1-.5 4.8A3 3 0 0 1 15 17a3 3 0 0 1-3-1.5"/>',
    clipboard:'<rect x="8" y="3" width="8" height="4" rx="1"/><path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><path d="M9 13l2 2 4-4"/>',
    plug:'<path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0z"/><path d="M12 17v5"/>',
    shield:'<path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    check:'<path d="M20 6 9 17l-5-5"/>',
    checkCircle:'<circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/>',
    inbox:'<path d="M4 13h4l1.5 3h5L16 13h4"/><path d="M4 13V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7"/><path d="M4 13v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/>',
    calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    chat:'<path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z"/>',
    whatsapp:'<path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z"/><path d="M8.5 8.5c0 4 3 6.5 6.5 6.5.6 0 1-.5 1-1l-1.7-1-1 .8a4.5 4.5 0 0 1-2.3-2.3l.8-1-1-1.7c0-.5-.5-.8-1-.8-.4 0-.8.2-1 .5z"/>',
    target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.5" fill="'+color+'"/>',
    mobile:'<rect x="7" y="2" width="10" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/>',
    globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    shuffle:'<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
    sliders:'<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="17" x2="20" y2="17"/><circle cx="9" cy="7" r="2.5"/><circle cx="15" cy="17" r="2.5"/>',
    sync:'<path d="M21 8a9 9 0 0 0-15-3L3 8M3 4v4h4"/><path d="M3 16a9 9 0 0 0 15 3l3-3M21 20v-4h-4"/>',
    moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>'
  };
  var d=P[name]||P.check;
  return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="'+color+'" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+d+'</svg>';
}

/* ════ DATA ════ */
var EQ=[
 {id:'implants',n:'Sarah Mitchell',av:'SM',c:'#00c9a7',tx:'Dental Implants',tag:'Implants',ph:'+44 7712 334 891',dur:'2m 14s',ch:'Phone',
  s:'Sarah is exploring dental implants after losing an upper molar. She wants to understand the suitability assessment, the treatment timeline and indicative pricing before committing. She is actively comparing two practices and can only attend appointments after 5pm on weekdays.',
  p:['Comparing two practices — speed of response is decisive','Wants indicative costs before booking','Evenings only, after 5pm','Ready to book a consultation this month'],
  a:'Consultation link + implant pricing guide sent by SMS in 6 seconds',sent:92,v:'£3,200–£4,800',nx:'Implant Consultation'},
 {id:'invis',n:'James Patel',av:'JP',c:'#4da8f0',tx:'Invisalign',tag:'Orthodontics',ph:'+44 7834 112 556',dur:'3m 42s',ch:'WhatsApp',
  s:'James is considering Invisalign for mild lower crowding. He was quoted an 18-month plan at another practice and wants a second opinion on whether a shorter timeline is realistic. He is weighing the cost difference between Lite and Full packages.',
  p:['Price-anchored by a competitor quote','Wants a faster treatment timeline','Comparing Lite vs Full packages','Partner also interested — potential second case'],
  a:'Invisalign comparison guide + assessment booking link sent',sent:78,v:'£2,800–£5,500',nx:'Ortho Assessment'},
 {id:'emerg',n:'Chloe Barnes',av:'CB',c:'#f0556a',tx:'Emergency — Dental Pain',tag:'Urgent',ph:'+44 7901 778 203',dur:'1m 28s',ch:'Phone',
  s:'Chloe has acute pain in her lower left molar since yesterday evening, rated 8 out of 10, and cannot eat on that side. She has already called two practices with no same-day availability. She is prepared to pay privately for an appointment today.',
  p:['Acute pain — 8/10, 24 hours duration','Two practices already turned her away','Will pay privately for same-day','Very high conversion probability'],
  a:'Emergency slot offered for 11:00 today — confirmed by SMS',sent:65,v:'£180–£420',nx:'Same-Day Emergency'},
 {id:'bond',n:'Oliver Chen',av:'OC',c:'#8b72f0',tx:'Composite Bonding',tag:'Cosmetic',ph:'+44 7655 443 219',dur:'2m 51s',ch:'Instagram',
  s:'Oliver found the practice through Instagram and wants composite bonding on two chipped upper front teeth ahead of his wedding in six weeks. He referenced a specific before-and-after post and is asking for that exact result. He is ready to book immediately.',
  p:['Warm Instagram lead — referenced your content','Hard deadline: wedding in six weeks','Knows precisely what he wants','Will book today if the price works'],
  a:'Smile assessment link + finance options sent',sent:88,v:'£600–£1,200',nx:'Smile Assessment'},
 {id:'newpat',n:'Priya Sharma',av:'PS',c:'#f0a030',tx:'New Patient — Family',tag:'New Patient',ph:'+44 7723 891 045',dur:'4m 03s',ch:'Website',
  s:'Priya has relocated from Manchester and is registering her family of four with a new private practice. She wants check-ups for all four and is separately interested in whitening for herself. She found the practice through Google and specifically mentioned the reviews.',
  p:['Family of four — high lifetime value','Whitening interest alongside check-ups','Review-driven decision, quality-focused','Wants to understand the practice ethos'],
  a:'Welcome pack + family registration + booking link sent',sent:82,v:'£280–£480 initial · £4k+ LTV',nx:'New Patient Exam'}
];


/* Diary bookings — each respects the constraint the patient gave */
var CAL={
 implants:{sys:'Dentally',day:'Tuesday 14 January',
   pre:{t:'16:45',l:'M. Roberts — Review'},
   t:'17:30',mins:'45 min',surg:'Surgery 2',
   post:{t:'18:30',l:'Available'},
   note:'Evening slot honoured — patient stated after 5pm only'},
 invis:{sys:'Dentally',day:'Wednesday 15 January',
   pre:{t:'09:30',l:'A. Doyle — Hygiene'},
   t:'10:15',mins:'30 min',surg:'Surgery 1',
   post:{t:'11:00',l:'Available'},
   note:'Ortho assessment booked · comparison guide already sent'},
 emerg:{sys:'Dentally',day:'Today',
   pre:{t:'10:30',l:'K. Ahmed — Check-up'},
   t:'11:00',mins:'20 min',surg:'Surgery 3',
   post:{t:'11:30',l:'Available'},
   note:'Same-day emergency slot — patient confirmed by SMS'},
 bond:{sys:'Dentally',day:'Thursday 16 January',
   pre:{t:'12:15',l:'L. Wright — Bonding'},
   t:'13:00',mins:'30 min',surg:'Surgery 2',
   post:{t:'13:45',l:'Available'},
   note:'Booked 5 weeks before wedding date — deadline protected'},
 newpat:{sys:'Dentally',day:'Saturday 18 January',
   pre:{t:'09:00',l:'Practice opens'},
   t:'09:30',mins:'60 min · family block',surg:'Surgery 1',
   post:{t:'10:45',l:'Available'},
   note:'Four family members booked into one consecutive block'}
};

/* ════ UTILS ════ */
function go(id){var e=document.getElementById(id);if(e)e.scrollIntoView({behavior:'smooth',block:'start'});}
var _bkLoaded=false, _lastFocus=null;
function book(){
  var m=document.getElementById('bk');
  _lastFocus=document.activeElement;
  m.classList.add('open');
  document.body.style.overflow='hidden';
  if(!_bkLoaded){ mountBk(); _bkLoaded=true; }
  setTimeout(function(){var x=document.getElementById('bk-x'); if(x)x.focus();},420);
  if(window.gtag)gtag('event','booking_modal_open');
  if(window.fbq)fbq('track','Lead');
}
function closeBk(){
  var m=document.getElementById('bk');
  m.classList.remove('open');
  document.body.style.overflow='';
  if(_lastFocus&&_lastFocus.focus)_lastFocus.focus();
}
function mountBk(){
  var mt=document.getElementById('bk-mount'), ld=document.getElementById('bk-load');
  if(GHL_EMBED_URL && GHL_EMBED_URL.trim()!==''){
    var f=document.createElement('iframe');
    f.src=GHL_EMBED_URL;
    f.id='ghl-frame';
    f.setAttribute('scrolling','no');
    f.setAttribute('title','Book a demo with Pulse AI Concierge');
    f.onload=function(){ if(ld)ld.classList.add('gone'); };
    mt.appendChild(f);
    // GHL auto-resize helper
    var s=document.createElement('script');
    s.src='https://link.msgsndr.com/js/form_embed.js';
    s.async=true;
    document.body.appendChild(s);
    setTimeout(function(){ if(ld)ld.classList.add('gone'); },2600);
  } else {
    if(ld)ld.style.display='none';
    mt.innerHTML='<div id="bk-fb"><div style="margin-bottom:16px;opacity:.5">'+icon('calendar',30,'#4a6885')+'</div>'
      +'<p><strong style="color:#fff;font-weight:600">Booking calendar not connected yet.</strong><br>'
      +'Paste your GoHighLevel embed URL into <span class="mono" style="color:var(--cyan);font-size:12px">GHL_EMBED_URL</span> at the top of the script to activate this modal.</p>'
      +'<button class="btn b-pri" onclick="window.open(URL_BOOK,\'_blank\',\'noopener\')">Continue to pulse-ai.services</button></div>';
  }
}
function openM(){document.getElementById('mm').classList.add('open');document.body.style.overflow='hidden';}
function closeM(){document.getElementById('mm').classList.remove('open');document.body.style.overflow='';}
function tick(c,s){s=s||10;return '<svg width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" stroke="'+c+'" stroke-width="3" stroke-linecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';}
function dot(c,l){return '<span class="ldot" style="color:'+c+'"><span class="dw"><i></i><b></b></span>'+(l?'<s>'+l+'</s>':'')+'</span>';}
function wave(n,c,on){var h='<span style="display:inline-flex;align-items:center;gap:3px;height:22px" aria-hidden="true">';for(var i=0;i<n;i++){h+='<span style="display:block;width:3px;min-height:4px;border-radius:2px;background:'+(on?c:'#2c4257')+';'+(on?'animation:wave '+(0.55+(i%4)*0.15)+'s ease-in-out '+(i*0.06)+'s infinite alternate':'height:4px')+'"></span>';}return h+'</span>';}
function money(n){return '£'+Math.round(n).toLocaleString('en-GB');}

/* ════ NAV ════ */
window.addEventListener('scroll',function(){
  document.getElementById('nav').classList.toggle('solid',window.scrollY>50);
},{passive:true});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeM();closeBk();}});

/* ════ REVEAL ════ */
var rvo=new IntersectionObserver(function(es){
  es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');rvo.unobserve(e.target);}});
},{threshold:.12,rootMargin:'0px 0px -60px 0px'});
function bindRV(){document.querySelectorAll('.rv:not(.in)').forEach(function(el){rvo.observe(el);});}

/* ════ STARFIELD ════ */
(function(){
  var c=document.getElementById('stars'),x=c.getContext('2d'),mob=window.innerWidth<720;
  function size(){c.width=window.innerWidth;c.height=window.innerHeight;}size();
  var N=mob?16:44,P=[];
  for(var i=0;i<N;i++)P.push({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-.5)*.16,vy:(Math.random()-.5)*.16,r:Math.random()*1.1+.25,a:Math.random()*.2+.04});
  function loop(){
    x.clearRect(0,0,c.width,c.height);
    for(var i=0;i<P.length;i++){var p=P[i];p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>c.width)p.vx*=-1; if(p.y<0||p.y>c.height)p.vy*=-1;
      x.beginPath();x.arc(p.x,p.y,p.r,0,6.283);x.fillStyle='rgba(0,200,232,'+p.a+')';x.fill();}
    if(!mob){for(var i=0;i<P.length;i++)for(var j=i+1;j<P.length;j++){
      var dx=P[i].x-P[j].x,dy=P[i].y-P[j].y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<110){x.beginPath();x.moveTo(P[i].x,P[i].y);x.lineTo(P[j].x,P[j].y);x.strokeStyle='rgba(0,200,232,'+(.045*(1-d/110))+')';x.lineWidth=.5;x.stroke();}}}
    requestAnimationFrame(loop);
  }
  loop();window.addEventListener('resize',size,{passive:true});
})();

/* ════ COUNTERS ════ */
function cnt(el,to,suf,ms){var t0=null;function s(t){if(!t0)t0=t;var p=Math.min((t-t0)/ms,1);el.textContent=Math.round((1-Math.pow(1-p,3))*to)+suf;if(p<1)requestAnimationFrame(s);}requestAnimationFrame(s);}
(function(){
  var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){
    cnt(document.getElementById('c1'),127,'',1500);
    cnt(document.getElementById('c2'),6,'s',1200);
    cnt(document.getElementById('c3'),24,'',1600);
    cnt(document.getElementById('c4'),0,'',700);
    o.disconnect();}});},{threshold:.4});
  var t=document.getElementById('c1'); if(t)o.observe(t);
})();

/* ════ TICKER ════ */
(function(){
  var I=[
   {n:'Sarah Mitchell',t:'Dental Implants',p:'Westbrook Dental',ch:'Phone',s:'Booked',c:'#00c9a7',av:'SM',sc:'#00d9a0'},
   {n:'James Patel',t:'Invisalign',p:'City Smile Clinic',ch:'WhatsApp',s:'Qualified',c:'#4da8f0',av:'JP',sc:'#00c8e8'},
   {n:'Oliver Chen',t:'Composite Bonding',p:'The Dental Suite',ch:'Instagram',s:'Booked',c:'#8b72f0',av:'OC',sc:'#00d9a0'},
   {n:'Emma Walsh',t:'Whitening',p:'Harley Dental',ch:'Website',s:'Captured',c:'#f0a030',av:'EW',sc:'#c9963a'},
   {n:'Priya Sharma',t:'New Patient — Family',p:'Pearl Dental',ch:'SMS',s:'Booked',c:'#f0a030',av:'PS',sc:'#00d9a0'},
   {n:'Marcus Hill',t:'Full Arch',p:'Southgate Practice',ch:'Google Ad',s:'Qualified',c:'#00c9a7',av:'MH',sc:'#00c8e8'},
   {n:'Chloe Barnes',t:'Emergency',p:'Westbrook Dental',ch:'Phone',s:'Urgent',c:'#f0556a',av:'CB',sc:'#f0556a'},
   {n:'Tom Nguyen',t:'Veneers',p:'Elite Dental',ch:'Instagram',s:'Booked',c:'#8b72f0',av:'TN',sc:'#00d9a0'},
   {n:'Amara Osei',t:'Orthodontics',p:'Smile Works',ch:'WhatsApp',s:'Captured',c:'#4da8f0',av:'AO',sc:'#00c8e8'},
   {n:'Rachel Kim',t:'Full Restoration',p:'The Dental Suite',ch:'Website',s:'Booked',c:'#00c9a7',av:'RK',sc:'#00d9a0'}
  ];
  var h=I.map(function(i){
    return '<div class="tk-i"><div class="tk-av" style="background:'+i.c+'1f;border:1px solid '+i.c+'40;color:'+i.c+'">'+i.av+'</div>'
    +'<div><div class="tk-n">'+i.n+'</div><div class="tk-d">'+i.t+' · '+i.p+'</div></div>'
    +'<div class="tk-ch">'+i.ch+'</div>'
    +'<div class="tk-s" style="background:'+i.sc+'18;color:'+i.sc+';border:1px solid '+i.sc+'30">'+i.s+'</div></div>';
  }).join('');
  document.getElementById('tkt').innerHTML=h+h;
})();

/* ════ LEAK CARD ════ */
(function(){
  var rows=[
    {l:'Enquiries received',v:'320',c:'#e6eef8',pct:100,bar:'#4a6885'},
    {l:'Answered in time',v:'240',c:'#00d9a0',pct:75,bar:'#00d9a0'},
    {l:'Enquiries missed',v:'80',c:'#f0556a',pct:25,bar:'#f0556a'},
    {l:'Recoverable new patients',v:'58 / month',c:'#c9963a',pct:72,bar:'#c9963a'}
  ];
  var el=document.getElementById('leakrows');
  el.innerHTML=rows.map(function(r,i){
    return '<div class="leak-row"><div style="flex:1"><div style="display:flex;justify-content:space-between;align-items:baseline">'
    +'<span class="leak-lbl">'+r.l+'</span><span class="leak-val" style="color:'+r.c+'">'+r.v+'</span></div>'
    +'<div class="leak-bar"><div class="leak-fill" data-w="'+r.pct+'" style="background:'+r.bar+'"></div></div></div></div>';
  }).join('');
  var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){
    el.querySelectorAll('.leak-fill').forEach(function(f,i){setTimeout(function(){f.style.width=f.dataset.w+'%';},i*140);});
    var tot=document.getElementById('leaktotal'),target=58*200*12,t0=null;
    function s(t){if(!t0)t0=t;var p=Math.min((t-t0)/1800,1);tot.textContent=money((1-Math.pow(1-p,3))*target);if(p<1)requestAnimationFrame(s);}
    setTimeout(function(){requestAnimationFrame(s);},500);
    o.disconnect();}});},{threshold:.35});
  o.observe(document.getElementById('leakcard'));
})();

/* ════ STEPS ════ */
(function(){
  var S=[
   {i:'inbox',l:'Enquiry Lands',d:'Any channel. Any hour. Including 9pm Sunday.',c:'#4a6885',n:'01'},
   {i:'bolt',l:'Pulse AI Answers',d:'Under two seconds. Every single time.',c:'#00c8e8',n:'02'},
   {i:'mic',l:'Intent Captured',d:'Treatment, timing and urgency understood.',c:'#c9963a',n:'03'},
   {i:'clipboard',l:'Lead Qualified',d:'Value, readiness and priority scored.',c:'#8b72f0',n:'04'},
   {i:'calendar',l:'Action Triggered',d:'Booking link or guide sent automatically.',c:'#00d9a0',n:'05'},
   {i:'checkCircle',l:'PMS Updated',d:'Record written. Team notified. Done.',c:'#00c8e8',n:'06'}
  ];
  var g=document.getElementById('steps'),a=0,timer;
  function draw(){
    var line=g.querySelector('.steps-line');g.innerHTML='';if(line)g.appendChild(line);
    S.forEach(function(s,i){
      var d=document.createElement('div');d.className='step'+(a===i?' on':'');
      d.onclick=function(){a=i;draw();reset();};
      d.innerHTML='<div class="step-n">'+s.n+'</div>'
      +'<div class="step-ic" style="'+(a===i?'background:'+s.c+'16;border-color:'+s.c+';box-shadow:0 0 32px '+s.c+'38;':'')+'">'+icon(s.i,24,a===i?s.c:'#4a6885')
      +(a===i?'<span style="position:absolute;inset:-9px;border-radius:50%;border:1px solid '+s.c+'30;animation:ring 2s ease-out infinite" aria-hidden="true"></span>':'')+'</div>'
      +'<div><div class="step-l">'+s.l+'</div><div class="step-d">'+s.d+'</div></div>';
      g.appendChild(d);
    });
  }
  function reset(){clearInterval(timer);timer=setInterval(function(){a=(a+1)%6;draw();},2800);}
  draw();reset();
})();

/* ════ CHANNELS ════ */
(function(){
  var C=[
   {i:'phone',n:'Phone Calls',d:'Inbound, overflow and out-of-hours',c:'#00c8e8',p:'24/7'},
   {i:'whatsapp',n:'WhatsApp',d:'Messages and voice notes',c:'#25d366',p:'Instant'},
   {i:'target',n:'Paid Ads',d:'Google and Meta lead forms',c:'#f0a030',p:'Captured'},
   {i:'mobile',n:'Social DMs',d:'Instagram and Facebook',c:'#8b72f0',p:'Unified'},
   {i:'globe',n:'Website & SMS',d:'Web chat, forms and text',c:'#00d9a0',p:'Tracked'}
  ];
  var col=document.getElementById('chcol');
  col.innerHTML='<div style="font-size:10px;font-weight:700;color:var(--faint);letter-spacing:.16em;text-transform:uppercase;margin-bottom:4px">Enquiries In</div>'
  +C.map(function(c){
    return '<div class="ch"><div class="ch-ic" style="background:'+c.c+'16;border:1px solid '+c.c+'2e">'+icon(c.i,20,c.c)+'</div>'
    +'<div style="flex:1"><div class="ch-n">'+c.n+'</div><div class="ch-d">'+c.d+'</div></div>'
    +'<span class="ch-p" style="background:'+c.c+'14;color:'+c.c+';border:1px solid '+c.c+'2e">'+c.p+'</span></div>';
  }).join('');
})();

/* ════ DEMO SIMULATOR ════ */
(function(){
  var sel=0,stage='idle',txt='',tm=null,ch=0;
  function mob(){return window.innerWidth<=960;}
  function sb(){
    if(mob())return;
    var e=document.getElementById('dsb');
    e.innerHTML='<div class="d-sbt">Choose a scenario</div>'+EQ.map(function(q,i){
      return '<button class="d-btn" data-i="'+i+'" style="border-color:'+(sel===i?q.c+'55':'rgba(0,200,232,.09)')+';background:'+(sel===i?q.c+'0e':'transparent')+'">'
      +'<span style="width:34px;height:34px;border-radius:50%;background:'+q.c+'1c;border:1.5px solid '+q.c+'55;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:'+q.c+';flex-shrink:0">'+q.av+'</span>'
      +'<span style="flex:1"><span style="display:block;font-size:13px;font-weight:600;color:'+(sel===i?'#fff':'var(--body)')+'">'+q.n+'</span>'
      +'<span style="display:block;font-size:11px;color:'+(sel===i?q.c:'var(--faint)')+';margin-top:2px">'+q.tx+'</span></span>'
      +(q.id==='emerg'?'<span style="width:7px;height:7px;border-radius:50%;background:#f0556a;box-shadow:0 0 7px #f0556a;flex-shrink:0"></span>':'')+'</button>';
    }).join('');
    e.querySelectorAll('.d-btn').forEach(function(b){b.onclick=function(){pick(+b.dataset.i);};});
  }
  function pl(){
    if(!mob())return;
    document.getElementById('pillrow').style.display='block';
    var e=document.getElementById('pills');
    e.innerHTML=EQ.map(function(q,i){
      return '<button class="pill" data-i="'+i+'" style="border-color:'+(sel===i?q.c+'55':'rgba(0,200,232,.09)')+';background:'+(sel===i?q.c+'0e':'transparent')+'">'
      +'<span style="width:30px;height:30px;border-radius:50%;background:'+q.c+'1c;border:1.5px solid '+q.c+'55;display:flex;align-items:center;justify-content:center;font-size:9.5px;font-weight:700;color:'+q.c+'">'+q.av+'</span>'
      +'<span style="text-align:left"><span style="display:block;font-size:12px;font-weight:600;color:'+(sel===i?'#fff':'var(--body)')+';white-space:nowrap">'+q.n+'</span>'
      +'<span style="display:block;font-size:10px;color:'+(sel===i?q.c:'var(--faint)')+';white-space:nowrap">'+q.tx+'</span></span></button>';
    }).join('');
    e.querySelectorAll('.pill').forEach(function(b){b.onclick=function(){pick(+b.dataset.i);};});
  }
  function pick(i){if(tm)clearInterval(tm);sel=i;stage='idle';txt='';ch=0;sb();pl();draw();}
  function draw(){
    var q=EQ[sel],el=document.getElementById('dmain'),sm=window.innerWidth<=640;
    var lbl={idle:'Ready',ringing:'Incoming enquiry',answered:'Connected',analysing:'AI processing',done:'Enquiry complete'};
    var body='';
    if(stage==='idle'){
      body='<div style="text-align:center;padding:44px 0">'+icon('phone',44,'#4a6885')+''
      +'<p style="font-size:14px;color:var(--body);margin:0 auto 28px;max-width:330px;line-height:1.7;font-weight:300">Watch Pulse AI take this enquiry from first ring to qualified, actioned and logged — with nobody on your team involved.</p>'
      +'<button class="btn b-pri" onclick="window._run()">'
      +'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.66 10a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 0h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>Simulate This Enquiry</button></div>';
    } else if(stage==='ringing'){
      body='<div style="text-align:center;padding:38px 0"><div class="rw" aria-hidden="true"><div class="rp"></div><div class="rp"></div><div class="ri">'+icon('phone',26,'#00c8e8')+'</div></div>'
      +'<div class="mono" style="color:var(--cyan);font-size:13px;animation:blink 1s infinite">Pulse AI answering…</div></div>';
    } else {
      var done=stage==='done',an=stage==='analysing';
      var C=[{l:'Answered',k:true},{l:'Intent Captured',k:stage!=='answered'},{l:'Qualified',k:done},{l:'Action Sent',k:done},{l:'PMS Updated',k:done}];
      body='<div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:18px">'
      +C.map(function(c){return '<span class="chip" style="background:'+(c.k?'rgba(0,217,160,.09)':'var(--ink4)')+';border:1px solid '+(c.k?'rgba(0,217,160,.32)':'var(--line)')+'">'
      +(c.k?tick('#00d9a0',9):'<span style="width:9px;height:9px;border-radius:50%;border:1.5px solid var(--faint);display:block"></span>')
      +'<span style="color:'+(c.k?'var(--green)':'var(--faint)')+'">'+c.l+'</span></span>';}).join('')+'</div>'
      +'<div style="background:var(--ink);border-radius:var(--r-md);padding:'+(sm?16:20)+'px;border:1px solid var(--line);margin-bottom:14px">'
      +'<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:13px">'
      +'<span style="display:flex;align-items:center;gap:9px"><span style="width:22px;height:22px;border-radius:6px;background:rgba(0,200,232,.14);display:flex;align-items:center;justify-content:center">'
      +'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#00c8e8" stroke-width="2.5" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span>'
      +'<span style="font-size:10.5px;font-weight:700;color:var(--cyan);letter-spacing:.14em;text-transform:uppercase">AI Enquiry Summary</span></span>'
      +(an?wave(6,'#00c8e8',true):'')+'</div>'
      +'<p id="aitxt" style="font-size:'+(sm?13:14)+'px;color:var(--off);line-height:1.78;min-height:82px;font-weight:300">'+txt+(an?'<span style="display:inline-block;width:2px;height:13px;background:#00c8e8;margin-left:2px;animation:blink .7s infinite;vertical-align:middle"></span>':'')+'</p></div>';
      if(done){
        body+='<div class="kps">'+q.p.map(function(p,i){
          return '<div class="kp" style="animation-delay:'+(i*.08)+'s"><span style="width:15px;height:15px;border-radius:4px;background:'+q.c+'1c;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px">'+tick(q.c,9)+'</span>'
          +'<span style="font-size:12px;color:var(--body);line-height:1.55;font-weight:300">'+p+'</span></div>';}).join('')+'</div>'
        +'<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;padding:16px 0;border-top:1px solid var(--line);margin-bottom:14px">'
        +'<div><div style="font-size:9.5px;color:var(--faint);margin-bottom:6px;text-transform:uppercase;letter-spacing:.1em">Sentiment</div>'
        +'<div style="height:3px;border-radius:2px;background:var(--line);margin-bottom:6px"><div style="height:100%;border-radius:2px;width:'+q.sent+'%;background:linear-gradient(90deg,var(--gold),var(--green))"></div></div>'
        +'<span class="mono" style="font-size:12px;color:var(--green)">'+q.sent+'%</span></div>'
        +'<div><div style="font-size:9.5px;color:var(--faint);margin-bottom:6px;text-transform:uppercase;letter-spacing:.1em">Est. Value</div>'
        +'<div class="mono" style="font-size:'+(sm?11:12.5)+'px;color:var(--gold);font-weight:500;line-height:1.4">'+q.v+'</div></div>'
        +'<div><div style="font-size:9.5px;color:var(--faint);margin-bottom:6px;text-transform:uppercase;letter-spacing:.1em">Next Step</div>'
        +'<div style="font-size:'+(sm?11:12.5)+'px;color:var(--off);font-weight:500">'+q.nx+'</div></div></div>'
        +'<div style="display:flex;align-items:flex-start;gap:10px;background:rgba(0,217,160,.06);border:1px solid rgba(0,217,160,.2);border-radius:var(--r-sm);padding:13px 15px;margin-bottom:15px">'
        +'<span style="margin-top:2px;flex-shrink:0">'+tick('#00d9a0',11)+'</span>'
        +'<span style="font-size:'+(sm?12:13)+'px;color:var(--off);font-weight:300;line-height:1.6"><strong style="color:var(--green);font-weight:600">Automated: </strong>'+q.a+'</span></div>'
        +(function(){
          var k=CAL[q.id]; if(!k)return '';
          return '<div class="pmsv">'
          +'<div class="pmsv-hd"><span class="pmsv-sys">'
          +'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="2.2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>'
          +k.sys+' · Appointment Diary</span>'
          +'<span class="pmsv-sync">'+tick('#00d9a0',9)+'Synced</span></div>'
          +'<div class="pmsv-day">'+k.day+'</div>'
          +'<div class="pmsv-slots">'
          +'<div class="slot taken"><div class="slot-t">'+k.pre.t+'</div><div class="slot-b"><span>'+k.pre.l+'</span></div></div>'
          +'<div class="slot nu" style="color:'+q.c+'"><div class="slot-t" style="color:'+q.c+';font-weight:500">'+k.t+'</div>'
          +'<div class="slot-b" style="border-color:'+q.c+'88;background:'+q.c+'12">'
          +'<div style="flex:1;min-width:0"><div class="slot-nm">'+q.n+'</div>'
          +'<div class="slot-mt" style="color:'+q.c+'">'+q.nx+' · '+k.mins+' · '+k.surg+'</div></div>'
          +'<span class="slot-badge" style="background:'+q.c+';color:#02060c">NEW</span></div></div>'
          +'<div class="slot free"><div class="slot-t">'+k.post.t+'</div><div class="slot-b"><span>'+k.post.l+'</span></div></div>'
          +'</div>'
          +'<div class="pmsv-ft">'+tick('#00d9a0',11)+'<span>'+k.note+'</span></div></div>';
        })()
        +'<div style="display:flex;gap:10px"><button class="btn b-ghost" style="flex:1" onclick="window._rst()">↩ Reset</button>'
        +'<button class="btn b-pri" style="flex:1;font-size:14px" onclick="window._nxt()">Next Scenario →</button></div>';
      }
    }
    el.innerHTML='<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;gap:12px">'
    +'<div style="display:flex;align-items:center;gap:14px">'
    +'<div style="width:'+(sm?44:54)+'px;height:'+(sm?44:54)+'px;border-radius:50%;background:'+q.c+'1c;border:2px solid '+q.c+(stage==='idle'?'35':'88')+';display:flex;align-items:center;justify-content:center;font-size:'+(sm?13:15)+'px;font-weight:700;color:'+q.c+';box-shadow:'+(stage!=='idle'?'0 0 22px '+q.c+'42':'none')+';transition:all .5s;flex-shrink:0">'+q.av+'</div>'
    +'<div><div style="font-size:9.5px;color:var(--faint);letter-spacing:.14em;text-transform:uppercase;margin-bottom:4px">'+lbl[stage]+'</div>'
    +'<div class="serif" style="font-size:'+(sm?20:25)+'px;font-weight:600;color:#fff;line-height:1">'+q.n+'</div>'
    +'<div style="font-size:11.5px;color:var(--faint);margin-top:4px">'+q.ch+' · '+q.ph+' · '+q.dur+'</div></div></div>'
    +'<span style="padding:5px 13px;border-radius:99px;font-size:9.5px;font-weight:700;background:'+q.c+'16;color:'+q.c+';border:1px solid '+q.c+'32;flex-shrink:0;letter-spacing:.05em">'+q.tag.toUpperCase()+'</span></div>'+body;
  }
  function run(){
    if(tm)clearInterval(tm);txt='';ch=0;stage='ringing';draw();
    setTimeout(function(){stage='answered';draw();
      setTimeout(function(){stage='analysing';draw();
        var full=EQ[sel].s;
        tm=setInterval(function(){
          if(ch<=full.length){txt=full.slice(0,ch++);var e=document.getElementById('aitxt');
            if(e)e.innerHTML=txt+'<span style="display:inline-block;width:2px;height:13px;background:#00c8e8;margin-left:2px;animation:blink .7s infinite;vertical-align:middle"></span>';}
          else{clearInterval(tm);stage='done';draw();}
        },13);
      },900);
    },1500);
  }
  window._run=run;
  window._rst=function(){if(tm)clearInterval(tm);stage='idle';txt='';ch=0;draw();};
  window._nxt=function(){pick((sel+1)%EQ.length);};
  sb();pl();draw();
  var w=window.innerWidth;
  window.addEventListener('resize',function(){if(Math.abs(window.innerWidth-w)>60){w=window.innerWidth;sb();pl();draw();}},{passive:true});
})();

/* ════ DASHBOARD ════ */
(function(){
  var bars=[14,22,17,30,26,36,40,33,42,38,45,48];
  var kan={'New':[EQ[0],EQ[1],EQ[4]],'In Progress':[EQ[2],EQ[1]],'Booked':[EQ[0],EQ[3],EQ[4]]};
  var cc={'New':'#00c8e8','In Progress':'#c9963a','Booked':'#00d9a0'};
  var M=[{l:'Enquiries Answered',v:127,c:'#00c8e8'},{l:'Qualified',v:83,c:'#c9963a'},{l:'Consultations Booked',v:24,c:'#00d9a0'},{l:'Missed',v:0,c:'#8b72f0'}];
  var F=['All','Implants','Cosmetic','Emergency','New Patient'],f='All';
  function draw(){
    var el=document.getElementById('dashcard'),sm=window.innerWidth<=640;
    var mh=M.map(function(m){return '<div class="mb"><div style="font-size:10px;color:var(--faint);margin-bottom:9px">'+m.l+'</div><div class="mono" style="font-size:'+(sm?23:29)+'px;font-weight:400;color:'+m.c+'">'+m.v+'</div></div>';}).join('');
    var bh=bars.map(function(v,i){var h=Math.round(v/48*(sm?36:50)),last=i===bars.length-1;
      return '<div style="flex:1;display:flex;align-items:flex-end;height:100%"><div style="width:100%;border-radius:3px 3px 0 0;height:'+h+'px;background:'+(last?'linear-gradient(to top,#00c8e8,#00c8e870)':'rgba(0,200,232,.22)')+'"></div></div>';}).join('');
    var kh=Object.keys(kan).map(function(k){var it=kan[k];
      return '<div class="kcol"><div class="kh"><span style="width:6px;height:6px;border-radius:50%;background:'+cc[k]+';display:block"></span>'
      +'<span style="font-size:10.5px;font-weight:700;color:'+cc[k]+';text-transform:uppercase;letter-spacing:.1em">'+k+'</span>'
      +'<span style="margin-left:auto;font-size:10px;padding:2px 8px;border-radius:99px;background:'+cc[k]+'16;color:'+cc[k]+'">'+it.length+'</span></div>'
      +it.map(function(q){return '<div class="ki"><div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">'
      +'<span style="width:22px;height:22px;border-radius:50%;background:'+q.c+'1c;border:1px solid '+q.c+'40;display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:700;color:'+q.c+'">'+q.av+'</span>'
      +'<span style="font-size:12px;font-weight:600;color:var(--off)">'+q.n+'</span></div>'
      +'<div style="font-size:11px;color:var(--faint)">'+q.tx+' · '+q.ch+'</div>'
      +'<div class="mono" style="font-size:10px;color:var(--gold);margin-top:5px">'+q.v+'</div></div>';}).join('')+'</div>';}).join('');
    el.innerHTML='<div class="d-chr"><div class="tl" aria-hidden="true"><span style="background:#ff5f57"></span><span style="background:#ffbd2e"></span><span style="background:#28ca41"></span></div>'
    +'<div style="display:flex;gap:6px;flex-wrap:wrap">'+F.map(function(x){return '<button class="fp'+(f===x?' on':'')+'" data-f="'+x+'">'+x+'</button>';}).join('')+'</div>'
    +dot('#00d9a0','Real-time')+'</div>'
    +'<div style="padding:'+(sm?16:24)+'px">'
    +'<div style="display:grid;grid-template-columns:repeat('+(sm?2:4)+',1fr);gap:'+(sm?10:14)+'px;margin-bottom:'+(sm?16:22)+'px">'+mh+'</div>'
    +'<div style="background:var(--ink);border-radius:var(--r-md);padding:'+(sm?'13px 14px':'16px 19px')+';border:1px solid var(--line);margin-bottom:'+(sm?16:22)+'px">'
    +'<div style="display:flex;justify-content:space-between;margin-bottom:13px"><span style="font-size:12px;font-weight:600;color:var(--off)">Enquiry Activity — Today</span><span style="font-size:10px;color:var(--faint)">12-hour window</span></div>'
    +'<div style="display:flex;align-items:flex-end;gap:'+(sm?3:4)+'px;height:'+(sm?38:54)+'px">'+bh+'</div>'
    +'<div style="display:flex;justify-content:space-between;margin-top:7px"><span style="font-size:9px;color:var(--faint)">09:00</span><span style="font-size:9px;color:var(--faint)">Now</span></div></div>'
    +'<div style="display:flex;gap:16px;flex-wrap:wrap">'+kh+'</div></div>';
    el.querySelectorAll('.fp').forEach(function(b){b.onclick=function(){f=b.dataset.f;draw();};});
  }
  draw();
  var w=window.innerWidth;
  window.addEventListener('resize',function(){if(Math.abs(window.innerWidth-w)>60){w=window.innerWidth;draw();}},{passive:true});
})();

/* ════ BAR CHART ════ */
(function(){
  var W=['W1','W2','W3','W4','W5','W6','W7','W8'],B=[12,13,11,14,12,13,14,13],A=[12,16,22,29,36,44,50,55],MX=60;
  var ch=document.getElementById('bars'),lb=document.getElementById('blbl');
  W.forEach(function(w,i){
    var g=document.createElement('div');g.className='bg';
    var b1=document.createElement('div'),b2=document.createElement('div');
    b1.className='bar';b2.className='bar';
    b1.style.cssText='width:44%;background:#4a6885;opacity:.45;transition-delay:'+(i*.07)+'s';
    b1.setAttribute('data-v',B[i]+' enquiries');
    b2.style.cssText='width:44%;background:linear-gradient(to top,#00c8e8,#5ce4ff);box-shadow:0 0 10px rgba(0,200,232,.3);transition-delay:'+(i*.07+.05)+'s';
    b2.setAttribute('data-v',A[i]+' enquiries');
    b1.dataset.h=Math.round(B[i]/MX*162);b2.dataset.h=Math.round(A[i]/MX*162);
    g.appendChild(b1);g.appendChild(b2);ch.appendChild(g);
    var l=document.createElement('div');l.textContent=w;lb.appendChild(l);
  });
  var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){
    ch.querySelectorAll('.bar').forEach(function(b){b.style.height=b.dataset.h+'px';});o.disconnect();}});},{threshold:.3});
  o.observe(ch);
})();

/* ════ LINE CHART ════ */
(function(){
  var svg=document.getElementById('lsvg');
  var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){
    var lb=document.getElementById('lb'),la=document.getElementById('la'),ab=document.getElementById('ab'),aa=document.getElementById('aa'),dl=document.getElementById('dl');
    lb.style.transition='stroke-dashoffset 2s ease';lb.style.strokeDashoffset='0';
    la.style.transition='stroke-dashoffset 2.4s .3s ease';la.style.strokeDashoffset='0';
    setTimeout(function(){ab.style.transition='opacity .9s';ab.style.opacity='.5';},1700);
    setTimeout(function(){aa.style.transition='opacity .9s';aa.style.opacity='.85';},1950);
    setTimeout(function(){dl.style.transition='opacity .6s';dl.style.opacity='1';},2400);
    o.disconnect();}});},{threshold:.3});
  o.observe(svg);
})();

/* ════ ROI CALCULATOR ════
   Deliberately whole-number arithmetic. Every figure shown on screen is the
   exact product of the figures above it, so an owner can verify it in their head:
       missed/week x 4 weeks  ->  x 72% recovered  ->  x consultation fee          */
var RECOVERY   = 0.72;   // share of missed enquiries Pulse AI captures — shown on screen
var TREAT_RATE = 0.33;   // share of new patients who go on to accept treatment
var TREAT_VAL  = 1200;   // average treatment plan value   (tune these two freely)

(function(){
  var v={q:40,m:8,f:90};
  var S={q:document.getElementById('S1'),m:document.getElementById('S2'),f:document.getElementById('S3')};
  function pc(el){var mn=+el.min,mx=+el.max;return mx>mn?Math.round((el.value-mn)/(mx-mn)*100):0;}
  function trk(el,c){el.style.background='linear-gradient(to right,'+c+' '+pc(el)+'%,#0c1e33 '+pc(el)+'%)';}
  function n(x){return Math.round(x).toLocaleString('en-GB');}

  function draw(){
    var sm=window.innerWidth<=640;
    var missWk = Math.min(v.m, v.q);          // can't miss more than arrive
    var missMo = missWk * 4;                  // 4 weeks — clean and conservative
    var pats   = Math.round(missMo * RECOVERY);   // rounded HERE, then used everywhere below
    var revMo  = pats * v.f;                  // exact: pats x fee
    var patYr  = pats * 12;
    var revYr  = revMo * 12;
    var rate   = v.q>0 ? Math.round(missWk/v.q*100) : 0;
    var out=document.getElementById('rout');

    if(v.q===0){
      out.innerHTML='<div class="rempty"><div style="opacity:.4;margin-bottom:14px">'+icon('phone',30,'#4a6885')+'</div>'
      +'<h4 class="serif">Set your enquiry volume</h4>'
      +'<p>Drag the first slider to roughly how many enquiries reach your practice each week — across every channel.</p></div>';
      return;
    }
    if(pats<1){
      out.innerHTML='<div class="rempty"><div style="opacity:.4;margin-bottom:14px">'+icon('checkCircle',30,'#00d9a0')+'</div>'
      +'<h4 class="serif">Nothing to recover</h4>'
      +'<p>On these numbers you\'re capturing everything that comes in. That\'s rare — most practices find the true figure is higher than they\'d guess, particularly outside surgery hours.</p></div>';
      return;
    }

    var free = (v.f===0);
    var heroBig  = free ? n(pats) : money(revMo);
    var heroUnit = free ? '<span style="font-size:.34em;font-weight:400;color:var(--body);margin-left:8px">new patients</span>' : '';
    var heroSub  = free
      ? 'a month, walking in somewhere else'
      : 'a month in new patient consultation fees <strong style="color:var(--off);font-weight:600">alone</strong>';

    out.innerHTML='<div class="rres">'
      +'<div style="font-size:10px;color:var(--faint);letter-spacing:.14em;text-transform:uppercase;margin-bottom:12px;position:relative">Currently slipping away</div>'
      +'<div class="rbig" aria-live="polite">'+heroBig+heroUnit+'</div>'
      +'<div style="font-size:13px;color:var(--body);margin-top:12px;font-weight:300;position:relative;line-height:1.6">'+heroSub+'</div>'
      +'<div class="rsub">'
      +'<div class="rsc" style="background:rgba(0,200,232,.08);border:1px solid rgba(0,200,232,.18)">'
      +'<div class="mono" style="font-size:'+(sm?15:18)+'px;color:var(--cyan);font-weight:500">'+n(pats)+'</div>'
      +'<div style="font-size:10px;color:var(--faint);margin-top:4px">new patients / month</div></div>'
      +'<div class="rsc" style="background:rgba(0,217,160,.08);border:1px solid rgba(0,217,160,.18)">'
      +'<div class="mono" style="font-size:'+(sm?15:18)+'px;color:var(--green);font-weight:500">'+(free?n(patYr):money(revYr))+'</div>'
      +'<div style="font-size:10px;color:var(--faint);margin-top:4px">'+(free?'new patients / year':'per year')+'</div></div>'
      +'</div></div>'

      /* Every row shows its own arithmetic */
      +'<div class="rrow"><span style="font-size:13px;color:var(--body);font-weight:300">Missed a month <span style="color:var(--faint)">('+missWk+' a week × 4)</span></span>'
      +'<span class="mono" style="font-size:14px;font-weight:500;color:var(--red)">'+n(missMo)+'</span></div>'
      +'<div class="rrow"><span style="font-size:13px;color:var(--body);font-weight:300">Pulse AI recovers <span style="color:var(--faint)">(72% of '+n(missMo)+')</span></span>'
      +'<span class="mono" style="font-size:14px;font-weight:500;color:var(--cyan)">'+n(pats)+'</span></div>'
      +(free?''
        :'<div class="rrow"><span style="font-size:13px;color:var(--body);font-weight:300">Consultation fees <span style="color:var(--faint)">('+n(pats)+' × '+money(v.f)+')</span></span>'
        +'<span class="mono" style="font-size:14px;font-weight:500;color:var(--green)">'+money(revMo)+'</span></div>')
      +'<div class="rrow" style="background:transparent;border-color:transparent;padding-top:4px;padding-bottom:4px">'
      +'<span style="font-size:11.5px;color:var(--faint);font-weight:300">That\'s '+rate+'% of every enquiry your practice receives</span></div>'

      +'<div class="upside"><div class="up-hd">'
      +'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2.4" stroke-linecap="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>'
      +'And this is before treatment</div><p>'
      +(free
        ? 'Your consultation is free — so every penny of value sits in what happens next. Those <strong>'+n(patYr)+' new patients a year</strong> never got the chance to say yes.'
        : 'That\'s <strong>'+n(patYr)+' new patients a year</strong> you never met. The consultation fee is only the door.')
      +' If just a third accept an average '+money(TREAT_VAL)+' treatment plan, that\'s <em>'+money(patYr*TREAT_RATE*TREAT_VAL)+'</em> more — and this calculator counts none of it.</p></div>'

      +'<button class="btn b-pri b-full" style="margin-top:14px;padding:17px" onclick="book()">'
      +'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>'
      +'Book A Demo — Model This On My Practice</button>'
      +'<p class="rnote">Recovery rate based on aggregate performance across our practice base. Your demo uses your real figures, not these.</p>';
  }

  function syncMax(){
    var cap=Math.max(0,v.q);
    S.m.max=cap;
    document.getElementById('S2max').textContent=cap;
    if(v.m>cap){v.m=cap;S.m.value=cap;document.getElementById('L2').textContent=(cap===0?'None':cap+' a week');}
    trk(S.m,'#f0a030');
  }
  function bind(el,key,lab,col,fmt){
    function h(e){v[key]=+e.target.value;document.getElementById(lab).textContent=fmt(v[key]);trk(el,col);
      if(key==='q')syncMax();
      draw();}
    el.addEventListener('input',h,{passive:true});
    el.addEventListener('change',h,{passive:true});
    trk(el,col);
  }
  bind(S.q,'q','L1','#00c8e8',function(x){return x;});
  bind(S.m,'m','L2','#f0a030',function(x){return x===0?'None':x+' a week';});
  bind(S.f,'f','L3','#00d9a0',function(x){return x===0?'Free':money(x);});
  syncMax();
  draw();
  var w=window.innerWidth;
  window.addEventListener('resize',function(){if(Math.abs(window.innerWidth-w)>60){w=window.innerWidth;draw();}},{passive:true});
})();

/* ════ FEATURES ════ */
(function(){
  var F=[
   {i:'phone',t:'Every Enquiry Answered',b:'Phone, WhatsApp, Instagram, ad forms, web chat, SMS. Any hour, any volume, any day. No voicemail. No queue. No enquiry left without a reply.'},
   {i:'brain',t:'Understands What They Want',b:'Pulse AI reads treatment intent, urgency, budget signals and emotional state — then handles the enquiry accordingly. An emergency is not treated like a whitening query.'},
   {i:'bolt',t:'Responds In Six Seconds',b:'Booking links, pricing guides and confirmations go out before your team has seen the notification. In a market where speed decides the sale, you are always first.'},
   {i:'clipboard',t:'Qualified Before It Reaches You',b:'Every enquiry arrives scored, summarised and prioritised against your criteria. Your team spends its time on patients, not triage.'},
   {i:'plug',t:'Writes Into Your PMS',b:'Dentally, SOE, Exact, R4, Carestream and custom APIs. Patient records created and updated automatically. Nobody keys anything in twice.'},
   {i:'shield',t:'Takes Pressure Off Your Team',b:'Your front desk stops firefighting the phone and starts looking after the patient in front of them. Retention goes up. Turnover goes down.'}
  ];
  document.getElementById('fg').innerHTML=F.map(function(f){
    return '<div class="fc"><div class="fi" aria-hidden="true">'+icon(f.i,26,'#00c8e8')+'</div><h3 class="ft serif">'+f.t+'</h3><p class="fb">'+f.b+'</p></div>';}).join('');
})();

/* ════ TESTIMONIALS ════ */
(function(){
  var T=[
   {q:'We tracked it for a fortnight and found we had missed thirty-one calls. Not voicemails — calls that just rang out. Pulse AI answers every one of them now. Fourteen extra consultations in the first month.',n:'Dr. Claire Sutton',r:'Principal, Westbrook Dental',m:'+£31,400 in month one',av:'CS',c:'#00c9a7'},
   {q:'I have installed a lot of systems over the years and most create more work than they remove. This one genuinely removed work. My front desk got their day back and our conversion went up at the same time.',n:'Dr. Arjun Mehta',r:'Owner, The Dental Suite London',m:'Paid for itself in 9 days',av:'AM',c:'#4da8f0'},
   {q:'I was the sceptic. Then I watched it handle a live implant enquiry — captured everything, sent the guide, logged it in Dentally before I had finished my coffee. We signed that afternoon.',n:'Dr. Sarah Okafor',r:'Director, Pearl Dental Group',m:'3 practices, live in 48 hours',av:'SO',c:'#8b72f0'}
  ];
  document.getElementById('tg').innerHTML=T.map(function(t){
    return '<div class="tc"><div class="ts">★★★★★</div><blockquote class="tq">“'+t.q+'”</blockquote>'
    +'<div class="ta"><span class="tav" style="background:'+t.c+'20;border:1.5px solid '+t.c+'55;color:'+t.c+'">'+t.av+'</span>'
    +'<span><span style="display:block" class="tn">'+t.n+'</span><span style="display:block" class="tr">'+t.r+'</span>'
    +'<span style="display:block" class="tmetric">'+t.m+'</span></span></div></div>';}).join('');
})();

/* ════ FAQ ════ */
(function(){
  var Q=[
   {q:'Will patients know they are speaking to an AI?',a:'Pulse AI introduces itself as the practice concierge and never pretends to be a named member of your team. In practice, patients care far more about being answered immediately and accurately than about who answered. Anything requiring clinical judgement is escalated to a human, always — the AI qualifies and books, it does not diagnose.'},
   {q:'What happens to our existing phone number and team?',a:'Nothing changes. Your number stays exactly as it is. Pulse AI can sit as overflow (picking up only what your team cannot get to), as out-of-hours cover, or as the first line for every enquiry. Most practices start with overflow and out-of-hours, then expand once they see the capture rate.'},
   {q:'How long does implementation actually take?',a:'Two working days from signed to answering. We configure your tone, treatment criteria, pricing boundaries and escalation rules, connect to your PMS, and run a supervised test period before going live. There is no IT project and no downtime.'},
   {q:'Is this compliant with UK GDPR and NHS data standards?',a:'Yes. Patient data is encrypted in transit and at rest, processed within UK jurisdiction, and every interaction carries a full audit trail. We provide a DPA as standard and can support your practice through a DPIA if your governance requires one.'},
   {q:'What if the AI gets something wrong?',a:'It escalates rather than guesses. Confidence thresholds and escalation triggers are set by you — clinical questions, complaints, anything outside its defined scope routes to a human immediately with the full conversation attached. You review every interaction in the dashboard and refine as you go.'},
   {q:'How is this priced?',a:'A flat monthly platform fee based on practice size and channel coverage. No per-call charges, no per-minute billing and no percentage of revenue. Most practices recover the annual cost within the first two to three weeks of captured enquiries. We will model this on your actual numbers during the demo.'},
   {q:'We are a multi-site group. Does it scale?',a:'Yes. Each site can run its own tone, criteria, availability and escalation rules while reporting into a single group dashboard. You get per-site performance and a consolidated view of enquiry capture across the group.'}
  ];
  var el=document.getElementById('faqlist');
  el.innerHTML=Q.map(function(f,i){
    return '<div class="fq" data-i="'+i+'"><button class="fq-q"><span>'+f.q+'</span><span class="fq-ic" aria-hidden="true"></span></button>'
    +'<div class="fq-a"><p>'+f.a+'</p></div></div>';}).join('');
  el.querySelectorAll('.fq').forEach(function(d){
    d.querySelector('.fq-q').onclick=function(){
      var open=d.classList.contains('open');
      el.querySelectorAll('.fq').forEach(function(o){o.classList.remove('open');});
      if(!open)d.classList.add('open');
    };
  });
})();


/* ════ ECG LIVE TRACE ════
   Path traced directly from the logo artwork:
   baseline y=256.6 · spike x=833-946 · trough y=292 · R-wave peak y=209 */
var ECG_D='M 76,256.6 L 824,256.5 L 832,252 L 840,245.8 L 848,235.7 L 856,235.1 L 864,246.1 '
 +'L 872,262.5 L 880,278.9 L 888,290.7 L 896,283.9 L 904,263.4 L 912,239.9 L 920,216.1 '
 +'L 928,210.7 L 936,228.6 L 944,247.3 L 952,256 L 1006,256.6';
function ecgInit(){
  var MAP=[['.hub-c img','lk-hub'],['.f-logo','lk-fin'],['.nav-logo img','lk-nav'],['.ft-logo','lk-ft'],['#mm img','lk-mm']];
  MAP.forEach(function(pair){
    var sel=pair[0], mod=pair[1];
    document.querySelectorAll(sel).forEach(function(img){
      if(img.parentNode.classList&&img.parentNode.classList.contains('lock'))return;
      var w=document.createElement('span'); w.className='lock '+mod;
      img.parentNode.insertBefore(w,img); w.appendChild(img);
      var s=document.createElementNS('http://www.w3.org/2000/svg','svg');
      s.setAttribute('class','ecg');
      s.setAttribute('viewBox','0 0 1024 388');
      s.setAttribute('aria-hidden','true');
      s.innerHTML='<path class="tail" pathLength="100" d="'+ECG_D+'"/>'
                 +'<path class="head" pathLength="100" d="'+ECG_D+'"/>';
      w.appendChild(s);
    });
  });
}

/* static section icons */
(function(){
  var map={pbi1:['moon','#f0556a'],pbi2:['shuffle','#f0556a'],pbi3:['sync','#f0556a'],
           ppi1:['plug','#00c8e8'],ppi2:['sync','#00c8e8'],ppi3:['shield','#00c8e8'],ppi4:['sliders','#00c8e8']};
  Object.keys(map).forEach(function(id){var el=document.getElementById(id);if(el)el.innerHTML=icon(map[id][0],17,map[id][1]);});
})();
/* ════ INIT ════ */
bindRV();
ecgInit();
window.addEventListener('load',function(){bindRV();ecgInit();});