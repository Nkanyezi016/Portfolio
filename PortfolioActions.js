/* ============ DATA ============ */
const GRADIENTS = [
  "linear-gradient(135deg,#667eea,#764ba2)",
  "linear-gradient(135deg,#f093fb,#f5576c)",
  "linear-gradient(135deg,#4facfe,#00f2fe)",
  "linear-gradient(135deg,#43e97b,#38f9d7)",
  "linear-gradient(135deg,#fa709a,#fee140)",
  "linear-gradient(135deg,#30cfd0,#330867)",
];

const PROJECTS = [
  {
    id:"sentinel",
    emoji:"🛡️",
    title:"Sentinel AI",
    caption:"An intelligent monitoring &amp; analysis system built to flag what humans miss, before it becomes a problem.",
    hashtags:"#AI #Python #Automation #MachineLearning",
    tech:["Python","AI/ML","Automation"],
    role:"Solo build",
    status:"In development",
    github:"https://github.com/Nkanyezi016",
    demo:null,
    comments:[
      {who:"nkanyezi.dev", text:"The core idea: continuous monitoring that reasons about what it sees instead of just logging it, then surfaces the alerts that actually matter."},
      {who:"code_reviewer", text:"Clean separation between the detection logic and the alerting layer 👏"},
    ],
    case:{
      problem:"Manual monitoring doesn't scale — important signals get buried in noise, and by the time a human notices, the moment to act has often passed.",
      approach:"Designed a Python-based pipeline that watches for meaningful patterns rather than raw events, applying lightweight AI-driven analysis to separate signal from noise before anything reaches a human.",
      result:"A foundation for a monitoring tool that flags what matters instead of everything — built to be extended with new detectors as new patterns emerge."
    }
  },
 {
    id:"robotworlds",
    emoji:"🤖",
    title:"Robot Worlds",
    caption:"Built a client-server robot simulation using Java — multiple robots, one shared world, real-time state.",
    hashtags:"#Java #OOP #SQLite #Docker #Networking",
    tech:["Java","OOP","SQLite","Docker","Sockets"],
    role:"Solo build",
    status:"Complete",
    github:"https://github.com/Nkanyezi016/MultiplayerRobotGame.git",
    demo:null,
    comments:[
      {who:"nkanyezi.dev", text:"A client-server simulation where robots move, look, and shoot inside a shared grid world. The server owns the world state; clients just send commands and render responses."},
      {who:"code_reviewer", text:"Love how cleanly the protocol layer is separated from the game logic 🔥"},
    ],
    case:{
      problem:"Simulating multiple independent robots that share and affect the same world in real time, without any client trusting another client's data.",
      approach:"Built a Java client-server architecture: the server is the single source of truth for world state and persists it via SQLite, while each client only knows what its own robot can 'see'. Object-oriented design keeps robot behaviours, obstacles, and commands cleanly separated, and the whole thing runs in Docker for consistent environments.",
      result:"A working multiplayer simulation that demonstrates solid networking, concurrency-safe state handling, and OOP architecture end to end."
    }
  },
{
    id:"salon",
    emoji:"💅",
    title:"Salon Search & Booking",
    caption:"Search salons, view services, and book appointments — without the back-and-forth DMs.",
    hashtags:"#JavaScript #FullStack #UIUX #Booking",
    tech:["JavaScript","HTML/CSS","Booking logic"],
    role:"Solo build",
    status:"Complete",
    github:"https://github.com/Nkanyezi016/SalonSearchAndBooking.git",
    demo:null,
    comments:[
      {who:"nkanyezi.dev", text:"Built so a user can search nearby salons, browse services and prices, and lock in a booking slot in a few taps."},
      {who:"beta_tester", text:"Booking flow feels genuinely quick to use 👍"},
    ],
    case:{
      problem:"Booking a salon appointment usually means calls, DMs, or waiting for a reply — slow for the client and hard to manage for the salon.",
      approach:"Designed a search-and-book flow: browse salons, compare services and pricing, then reserve a slot directly, with the interface doing the work a phone call used to do.",
      result:"A self-serve booking experience that removes the manual back-and-forth for both client and salon."
    }
  },
{
    id:"ridesafety",
    emoji:"🚕",
    title:"Ride Safety Check",
    caption:"A quick way to verify that your Uber or Bolt driver is who the app says they are, before you get in.",
    hashtags:"#Safety #JavaScript #API #MobileFirst",
    tech:["JavaScript","API integration","Mobile-first design"],
    role:"Solo build",
    status:"In development",
    github:"https://github.com/Nkanyezi016",
    demo:null,
    comments:[
      {who:"nkanyezi.dev", text:"The goal is simple: give riders a fast, independent way to double-check driver and vehicle details before getting into the car."},
      {who:"friend_of_dev", text:"This is such a needed idea, especially for late-night rides 🙏"},
    ],
    case:{
      problem:"Ride-hailing apps show driver details, but riders have no quick, independent way to double-check that the car and driver in front of them actually match before getting in.",
      approach:"Building a lightweight mobile-first check: enter the details shown in your ride app, and cross-reference them in a focused, no-friction interface.",
      result:"A safety-first companion tool aimed at giving riders one extra layer of confidence on every trip."
    }
  },
{
    id:"downloadorg",
    emoji:"🗂️",
    title:"Smart Download Organizer",
    caption:"A script that watches your Downloads folder and files everything away — automatically.",
    hashtags:"#Python #Automation #ProductivityTool #FileSystem",
    tech:["Python","File system automation"],
    role:"Solo build",
    status:"Complete",
    github:"https://github.com/Nkanyezi016",
    demo:null,
    comments:[
      {who:"nkanyezi.dev", text:"Sorts files into folders by type automatically the moment they land in Downloads — built this because I was tired of doing it by hand."},
      {who:"code_reviewer", text:"Small tool, but this is the kind of automation that saves real hours over a year."},
    ],
    case:{
      problem:"Downloads folders turn into digital junk drawers — screenshots, PDFs, installers, and archives all piling up in one place.",
      approach:"Wrote a Python script that watches the Downloads folder and automatically sorts new files into the right destination folder based on type, rules, and simple heuristics.",
      result:"Hours saved on manual tidying, and a Downloads folder that stays usable instead of becoming a graveyard of loose files."
    }
  },
  {
    id:"serverless",
    emoji:"☁️",
    title:"Serverless Web App",
    caption:"A cloud-native web app built on serverless architecture — no servers to babysit, just code that scales.",
    hashtags:"#Serverless #CloudComputing #CICD #Docker",
    tech:["Serverless architecture","CI/CD","Docker","Cloud"],
    role:"Solo build",
    status:"Complete",
    github:"https://github.com/Nkanyezi016",
    demo:null,
    comments:[
      {who:"nkanyezi.dev", text:"Built to explore serverless patterns properly — functions that scale on demand, wired up with a CI/CD pipeline so every push ships itself."},
      {who:"code_reviewer", text:"Great excuse to actually learn the deploy pipeline, not just the code 💯"},
    ],
    case:{
      problem:"Traditional server setups mean paying for idle capacity and spending time on infrastructure instead of features.",
      approach:"Rebuilt the app on a serverless architecture so compute scales automatically with demand, backed by a CI/CD pipeline so every change deploys itself, containerised where it matters for consistency.",
      result:"A cloud-native app with near-zero idle cost and a deploy pipeline that removed manual release steps entirely."
    }
  },
];


const STORIES = {
  about:{
    username:"About",
    slides:[
      {emoji:"👋🏽",headline:"Hi, I'm Nkanyezi.",sub:""},
      {emoji:"📊",headline:"Mathematics & Statistics graduate",sub:"BSc in Mathematics & Mathematical Statistics."},
      {emoji:"💻",headline:"Software Engineer in training",sub:"Turning theory into things that actually run."},
      {emoji:"🚀",headline:"Interested in Data Engineering",sub:"Fascinated by how data moves, breaks, and gets fixed."},
      {emoji:"🤝",headline:"Let's build something.",sub:"Say hi — I reply fast.",cta:{label:"Message me",action:"contact"}},
    ]
  },
  education:{
    username:"Education",
    slides:[
      {emoji:"🎓",headline:"BSc Mathematics & Mathematical Statistics",sub:""},
      {emoji:"📈",headline:"70% overall degree average",sub:"Across the full BSc programme."},
      {emoji:"💻",headline:"96% average in Software Engineering",sub:"The modules where math met code."},
      {emoji:"🧭",headline:"From theorems to terminals",sub:"Turning statistical thinking into working software."},
    ]
  },
  projects:{
    username:"Projects",
    slides:[
      {emoji:"🛡️",headline:"Sentinel AI",sub:"Intelligent monitoring & analysis."},
      {emoji:"🤖",headline:"Robot Worlds",sub:"Client-server robot simulation in Java."},
      {emoji:"💅",headline:"Salon Search & Booking",sub:"Search, view, and book — instantly."},
      {emoji:"🚕",headline:"Ride Safety Check",sub:"Verify your Uber/Bolt driver before you get in."},
      {emoji:"🗂️",headline:"Smart Download Organizer",sub:"Your Downloads folder, auto-tidied."},
      {emoji:"☁️",headline:"Serverless Web App",sub:"Cloud-native, CI/CD-deployed."},
      {emoji:"⬇️",headline:"See them all below",sub:"Scroll the grid to explore every project.",cta:{label:"View projects",action:"posts"}},
    ]
  },
  skills:{
    username:"Skills",
    slides:[
      {emoji:"🗣️",headline:"Languages I speak (to computers)",sub:"Java · Python · HTML · JavaScript · CSS · SQL"},
      {emoji:"⚙️",headline:"Tools & practices",sub:"Git · VS Code · CI/CD · Docker"},
      {emoji:"🧠",headline:"How I think",sub:"Object-Oriented Programming · Problem Solving"},
      {emoji:"➕",headline:"5+ languages.",sub:"Always learning the next one."},
    ]
  },
  achievements:{
    username:"Achievements",
    slides:[
      {emoji:"💻",headline:"96%",sub:"Average in Software Engineering."},
      {emoji:"📊",headline:"70%",sub:"Overall BSc Mathematics & Statistics average."},
      {emoji:"🚀",headline:"5+",sub:"Projects shipped, from simulations to serverless apps."},
      {emoji:"🗣️",headline:"5+",sub:"Programming languages, and counting."},
      {emoji:"✨",headline:"Still counting.",sub:"This is just the beginning.",cta:{label:"Get in touch",action:"contact"}},
    ]
  }
};
 
const BIO_PHRASES = [
  "Software Engineer in training 💻",
  "Mathematics & Statistics graduate 📊",
  "Data Engineering enthusiast 🚀",
  "Turning data into decisions",
  "Building one commit at a time"
];
 
/* ============ TOAST ============ */
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(showToast._tm);
  showToast._tm = setTimeout(()=>t.classList.remove('show'), 2200);
}
 
/* ============ BIO TYPEWRITER ============ */
(function typewriter(){
  const el = document.getElementById('bioRotating');
  let phraseIdx = 0, charIdx = 0, deleting = false;
  function tick(){
    const phrase = BIO_PHRASES[phraseIdx];
    if(!deleting){
      charIdx++;
      el.innerHTML = phrase.slice(0,charIdx) + '<span class="cursor">&nbsp;</span>';
      if(charIdx === phrase.length){ deleting = true; setTimeout(tick, 1400); return; }
    } else {
      charIdx--;
      el.innerHTML = phrase.slice(0,charIdx) + '<span class="cursor">&nbsp;</span>';
      if(charIdx === 0){ deleting = false; phraseIdx = (phraseIdx+1) % BIO_PHRASES.length; }
    }
    setTimeout(tick, deleting ? 35 : 65);
  }
  tick();
})();
 
/* ============ TABS ============ */
document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click', ()=>{
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('panel-'+tab.dataset.tab).classList.add('active');
  });
});
 
/* ============ MESSAGE BUTTON -> CONTACT ============ */
document.getElementById('messageBtn').addEventListener('click', ()=>{
  document.getElementById('contact').scrollIntoView({behavior:'smooth', block:'center'});
});
 
/* ============ BUILD POST CARDS ============ */
const postsGrid = document.getElementById('postsGrid');
PROJECTS.forEach((p, i)=>{
  const card = document.createElement('div');
  card.className = 'post-card';
  card.innerHTML = `
    <div class="post-head">
      <div class="post-head-left">
        <div class="post-avatar">${p.emoji}</div>
        <span class="post-user">nkanyezi.dev</span>
      </div>
      <button class="post-more" data-info="${p.id}">⋮</button>
    </div>
    <div class="post-media" style="background:${GRADIENTS[i % GRADIENTS.length]}" data-case="${p.id}">
      <span class="heart-burst">❤️</span>
      <div class="post-emoji">${p.emoji}</div>
      <div class="post-title">${p.title}</div>
    </div>
    <div class="post-actions">
      <button class="like-btn" data-like="${p.id}">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 000-7.8z"/></svg>
      </button>
      <button data-comment="${p.id}">💬</button>
      <button data-share="${p.id}">↗</button>
    </div>
    <div class="post-likes" data-likecount="${p.id}">${120 + i*17} likes</div>
    <div class="post-caption"><b>nkanyezi.dev</b>${p.caption}</div>
    <div class="post-hashtags">${p.hashtags}</div>
  `;
  postsGrid.appendChild(card);
});
 
/* ============ LIKE BUTTON ============ */
document.addEventListener('click', (e)=>{
  const likeBtn = e.target.closest('[data-like]');
  if(likeBtn){
    const id = likeBtn.dataset.like;
    likeBtn.classList.toggle('liked');
    const countEl = document.querySelector(`[data-likecount="${id}"]`);
    let n = parseInt(countEl.textContent);
    if(likeBtn.classList.contains('liked')){ n++; showToast('❤️ Liked'); }
    else { n--; }
    countEl.textContent = n + ' likes';
  }
});
 
/* double-click / click image = like burst */
document.addEventListener('click', (e)=>{
  const media = e.target.closest('.post-media');
  if(media && !e.target.closest('.heart-burst')){
    // single click opens case study (handled below); trigger heart burst only on the icon area is complex,
    // so we use dblclick for the burst instead (see listener below), keep single click for case study.
  }
});
document.addEventListener('dblclick', (e)=>{
  const media = e.target.closest('.post-media');
  if(media){
    const burst = media.querySelector('.heart-burst');
    burst.classList.remove('burst'); void burst.offsetWidth; burst.classList.add('burst');
    const id = media.dataset.case;
    const likeBtn = document.querySelector(`[data-like="${id}"]`);
    if(likeBtn && !likeBtn.classList.contains('liked')){ likeBtn.click(); }
  }
});
 
/* ============ CLICK IMAGE -> CASE STUDY ============ */
document.addEventListener('click', (e)=>{
  const media = e.target.closest('.post-media');
  if(media){
    openCase(media.dataset.case);
  }
});
 
function findProject(id){ return PROJECTS.find(p=>p.id===id); }
 
function openCase(id){
  const p = findProject(id);
  const idx = PROJECTS.indexOf(p);
  const box = document.getElementById('caseContent');
  box.innerHTML = `
    <div class="case-hero" style="background:${GRADIENTS[idx % GRADIENTS.length]}">
      <div class="ce">${p.emoji}</div>
      <div class="ct">${p.title}</div>
    </div>
    <div class="modal-content">
      <div class="case-tags">${p.tech.map(t=>`<span class="case-tag">${t}</span>`).join('')}</div>
      <div class="case-section-title">The problem</div>
      <div class="case-text">${p.case.problem}</div>
      <div class="case-section-title">The approach</div>
      <div class="case-text">${p.case.approach}</div>
      <div class="case-section-title">The result</div>
      <div class="case-text">${p.case.result}</div>
      <div class="case-links">
        <a class="primary" href="${p.github}" target="_blank">View on GitHub</a>
        ${p.demo ? `<a class="secondary" href="${p.demo}" target="_blank">Live demo</a>` : ''}
      </div>
    </div>
  `;
  openModal('caseModal');
}
 
/* ============ ⋮ INFO MODAL ============ */
document.addEventListener('click', (e)=>{
  const btn = e.target.closest('[data-info]');
  if(btn){
    const p = findProject(btn.dataset.info);
    document.getElementById('infoContent').innerHTML = `
      <div class="info-row"><span>Project</span><span>${p.title}</span></div>
      <div class="info-row"><span>Role</span><span>${p.role}</span></div>
      <div class="info-row"><span>Status</span><span>${p.status}</span></div>
      <div class="info-row"><span>Tech stack</span><span>${p.tech.join(', ')}</span></div>
      <div class="info-row"><span>Repository</span><span><a href="${p.github}" target="_blank" style="color:var(--purple);text-decoration:none;">GitHub ↗</a></span></div>
    `;
    openModal('infoModal');
  }
});
 
/* ============ 💬 COMMENT MODAL ============ */
document.addEventListener('click', (e)=>{
  const btn = e.target.closest('[data-comment]');
  if(btn){
    const p = findProject(btn.dataset.comment);
    const html = p.comments.map(c=>`
      <div class="comment-item">
        <div class="comment-avatar">${c.who === 'nkanyezi.dev' ? '👩🏽‍💻' : '💬'}</div>
        <div class="comment-body">
          <div><b>${c.who}</b><span class="comment-text">${c.text}</span></div>
          <div class="comment-meta">${c.who === 'nkanyezi.dev' ? 'Author' : 'reviewer'}</div>
        </div>
      </div>
    `).join('') + `
      <div class="comment-input-row">
        <span>😊</span>
        <input type="text" placeholder="Add a comment…" disabled>
      </div>
    `;
    document.getElementById('commentContent').innerHTML = html;
    openModal('commentModal');
  }
});
 
/* ============ ↗ SHARE MODAL ============ */
document.addEventListener('click', (e)=>{
  const btn = e.target.closest('[data-share]');
  if(btn){
    const p = findProject(btn.dataset.share);
    document.getElementById('shareContent').innerHTML = `
      <div class="share-option" data-open="${p.github}">
        <div class="share-icon">🐙</div> View on GitHub
      </div>
      ${p.demo ? `<div class="share-option" data-open="${p.demo}"><div class="share-icon">🌐</div> Live demo</div>` : ''}
      <div class="share-option" data-copy="${p.github}">
        <div class="share-icon">🔗</div> Copy link
      </div>
    `;
    openModal('shareModal');
  }
});
document.addEventListener('click', (e)=>{
  const openIt = e.target.closest('[data-open]');
  if(openIt){ window.open(openIt.dataset.open, '_blank'); }
  const copyIt = e.target.closest('[data-copy]');
  if(copyIt){
    navigator.clipboard?.writeText(copyIt.dataset.copy).catch(()=>{});
    showToast('🔗 Link copied');
    closeModal('shareModal');
  }
});
 
/* ============ MODAL HELPERS ============ */
function openModal(id){ document.getElementById(id).classList.add('open'); }
function closeModal(id){ document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(ov=>{
  ov.addEventListener('click', (e)=>{
    if(e.target === ov || e.target.closest('[data-close]')){ ov.classList.remove('open'); }
  });
});
 
/* ============ STORY VIEWER ============ */
let currentStorySlides = [];
let currentSlideIdx = 0;
let storyTimer = null;
const SLIDE_MS = 4200;
 
function openStory(key){
  const data = STORIES[key];
  if(!data) return;
  currentStorySlides = data.slides;
  currentSlideIdx = 0;
  document.getElementById('storyUsername').textContent = data.username;
 
  const bars = document.getElementById('storyBars');
  bars.innerHTML = currentStorySlides.map(()=>`<div class="story-bar"><div class="story-bar-fill"></div></div>`).join('');
 
  const body = document.getElementById('storyBody');
  body.querySelectorAll('.story-slide').forEach(s=>s.remove());
  currentStorySlides.forEach((s, i)=>{
    const div = document.createElement('div');
    div.className = 'story-slide';
    div.dataset.idx = i;
    div.innerHTML = `
      <div class="story-emoji">${s.emoji}</div>
      <div class="story-headline">${s.headline}</div>
      ${s.sub ? `<div class="story-sub">${s.sub}</div>` : ''}
      ${s.cta ? `<a href="#" class="story-cta" data-cta="${s.cta.action}">${s.cta.label}</a>` : ''}
    `;
    body.appendChild(div);
  });
 
  document.getElementById('storyOverlay').classList.add('open');
  showSlide(0);
}
 
function showSlide(i){
  const bars = document.querySelectorAll('.story-bar');
  const slides = document.querySelectorAll('.story-slide');
  clearTimeout(storyTimer);
 
  bars.forEach((b, idx)=>{
    b.classList.remove('active','done');
    b.querySelector('.story-bar-fill').style.transition = 'none';
    b.querySelector('.story-bar-fill').style.width = '0%';
    if(idx < i) b.classList.add('done');
  });
  slides.forEach((s, idx)=> s.classList.toggle('active', idx===i));
 
  if(i >= slides.length){ closeStory(); return; }
  currentSlideIdx = i;
 
  requestAnimationFrame(()=>{
    const activeBar = bars[i];
    activeBar.classList.add('active');
    const fill = activeBar.querySelector('.story-bar-fill');
    requestAnimationFrame(()=>{
      fill.style.transition = `width ${SLIDE_MS}ms linear`;
      fill.style.width = '100%';
    });
  });
 
  storyTimer = setTimeout(()=> showSlide(i+1), SLIDE_MS);
}
 
function closeStory(){
  clearTimeout(storyTimer);
  document.getElementById('storyOverlay').classList.remove('open');
}
 
document.getElementById('avatarOpenStory').addEventListener('click', ()=>openStory('about'));
document.querySelectorAll('.story-item').forEach(btn=>{
  btn.addEventListener('click', ()=>openStory(btn.dataset.story));
});
document.getElementById('storyClose').addEventListener('click', closeStory);
document.getElementById('storyPrev').addEventListener('click', ()=>{
  showSlide(Math.max(0, currentSlideIdx-1));
});
document.getElementById('storyNext').addEventListener('click', ()=>{
  showSlide(currentSlideIdx+1);
});
document.addEventListener('keydown', (e)=>{
  if(!document.getElementById('storyOverlay').classList.contains('open')) return;
  if(e.key === 'Escape') closeStory();
  if(e.key === 'ArrowLeft') showSlide(Math.max(0, currentSlideIdx-1));
  if(e.key === 'ArrowRight') showSlide(currentSlideIdx+1);
});
document.addEventListener('click', (e)=>{
  const cta = e.target.closest('[data-cta]');
  if(cta){
    e.preventDefault();
    const action = cta.dataset.cta;
    closeStory();
    if(action === 'contact'){
      setTimeout(()=>document.getElementById('contact').scrollIntoView({behavior:'smooth', block:'center'}), 250);
    } else if(action === 'posts'){
      setTimeout(()=>document.getElementById('panel-posts').scrollIntoView({behavior:'smooth', block:'start'}), 250);
    }
  }
});