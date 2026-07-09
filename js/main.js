/* ============================================================================
   Nakedi Tumelo Peta — Portfolio interactions (v3)
   Bento skills · alternating flagship rows + reveal-on-hover grid (real report
   thumbnails) · scroll-driven certifications timeline · directional reveals.
   Vanilla JS, no dependencies.
   ============================================================================ */
(function () {
  "use strict";

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (m) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const icon = (id, cls = "") => `<svg class="${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;

  const ACCENT = {
    "SOC Operations": "var(--c-soc)",
    "Detection Engineering": "var(--c-detect)",
    "ML for Security": "var(--c-ml)",
    "Penetration Testing": "var(--c-pentest)",
    "Embedded Security": "var(--c-embed)",
  };
  const thumbOf = (p) => `assets/img/reports/${p.id}.png`;

  /* ---- Terminal artifact rendering ------------------------------------- */
  function hlLine(raw) {
    let s = esc(raw);
    s = s.replace(/(\/\/.*)$/, '<span class="cmt">$1</span>');
    if (!/\/\//.test(raw)) s = s.replace(/(\d[\d,]*)/g, '<span class="num">$1</span>');
    let cls = "l";
    const t = raw.trim();
    if (t.startsWith("[alert]") || /\bRCE\b|CVSS|reverse shell/i.test(raw)) cls += " ln-hot";
    else if (/approval|captured|established|approved/i.test(raw)) cls += " ln-ok";
    return `<span class="${cls}">${s || " "}</span>`;
  }
  function terminal(label, lines, foot) {
    return `<div class="terminal">
      <div class="terminal__bar"><span class="terminal__dot r"></span><span class="terminal__dot y"></span><span class="terminal__dot g"></span><span class="terminal__title">${esc(label)}</span></div>
      <div class="terminal__body" aria-hidden="true">${lines.map(hlLine).join("\n")}</div>
      ${foot ? `<div class="terminal__foot">${foot}</div>` : ""}
    </div>`;
  }

  /* ---- CONFIG links + micro-interactions ------------------------------- */
  function wireConfig() {
    const mail = `mailto:${CONFIG.email}`;
    [["navResume", CONFIG.resume], ["heroResume", CONFIG.resume],
     ["contactResume", CONFIG.resume], ["contactEmail", mail]]
      .forEach(([id, href]) => { const el = document.getElementById(id); if (el) el.href = href; });

    const socials = [
      { id: "i-github",   label: "GitHub",    href: CONFIG.github,    handle: "@naksMann" },
      { id: "i-linkedin", label: "LinkedIn",  href: CONFIG.linkedin,  handle: "in/…" },
      { id: "i-shield",   label: "TryHackMe", href: CONFIG.tryhackme, handle: "p/…" },
      { id: "i-mail",     label: "Email",     href: mail,             handle: "" },
    ];
    $("#socialRow").innerHTML = socials.map((s) =>
      `<a class="social-link" href="${esc(s.href)}"${s.href.startsWith("mailto") ? "" : ' target="_blank" rel="noopener"'}>
         ${icon(s.id)} <span>${esc(s.label)}</span>${s.handle ? `<span class="handle">${esc(s.handle)}</span>` : ""}
       </a>`).join("");

    const img = $("#aboutPhoto"), mark = $("#monoMark"), scan = $(".about__scan");
    if (img) {
      img.onload = () => { img.style.display = "block"; if (mark) mark.style.display = "none"; if (scan) scan.style.display = "none"; };
      img.onerror = () => { img.style.display = "none"; if (mark) mark.style.display = ""; };
      img.src = CONFIG.profilePhoto;
    }
    $("#year").textContent = new Date().getFullYear();

    const copyBtn = $("#copyEmail");
    if (copyBtn) copyBtn.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(CONFIG.email); showToast("Email copied to clipboard"); }
      catch { showToast(CONFIG.email); }
    });
  }
  function showToast(msg) {
    const t = $("#toast"); $("#toastMsg").textContent = msg;
    t.classList.add("show"); clearTimeout(showToast._t);
    showToast._t = setTimeout(() => t.classList.remove("show"), 2600);
  }

  /* ---- Skills: bento (explicit layout order) --------------------------- */
  /* Per-category "magical/technological" SVG backgrounds — brand palette, animated via CSS.
     SOC=radar sweep · Cloud=data-flow pipelines · Pentest=targeting reticle ·
     ML=neural net · ICS/OT=circuit traces · Dev=code brackets + stream. */
  const SKILL_BG = {
    "SOC Operations": `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" fill="none">
      <g stroke="#d4af37" stroke-width="1" opacity=".4"><circle cx="300" cy="80" r="38"/><circle cx="300" cy="80" r="76"/><circle cx="300" cy="80" r="114"/><line x1="186" y1="80" x2="414" y2="80"/><line x1="300" y1="-34" x2="300" y2="194"/></g>
      <polygon class="bgsweep" points="300,80 300,-34 388,-4" fill="#d4af37" opacity=".16" style="--ox:300px;--oy:80px"/>
      <circle class="bgpulse2" cx="348" cy="42" r="3" fill="#e8c766"/><circle class="bgpulse2" cx="256" cy="132" r="2.5" fill="#e8c766" style="animation-delay:1.1s"/></svg>`,
    "Cloud & Automation": `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" fill="none">
      <g stroke="#d4af37" stroke-width="1.1" opacity=".45"><path d="M-20 70 C 120 24 200 128 420 78"/><path d="M-20 150 C 130 132 220 196 420 150"/><path d="M-20 232 C 120 214 210 150 420 214"/></g>
      <g stroke="#e8c766" stroke-width="2"><path class="bgflow" d="M-20 70 C 120 24 200 128 420 78"/><path class="bgflow" d="M-20 150 C 130 132 220 196 420 150" style="animation-delay:1s"/><path class="bgflow" d="M-20 232 C 120 214 210 150 420 214" style="animation-delay:.5s"/></g>
      <g fill="#e8c766"><circle class="bgpulse" cx="200" cy="100" r="3"/><circle class="bgpulse" cx="222" cy="172" r="3" style="animation-delay:.8s"/></g></svg>`,
    "Penetration Testing": `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" fill="none">
      <g stroke="#f2555b" stroke-width="1.2" opacity=".5"><circle cx="200" cy="150" r="30"/><circle cx="200" cy="150" r="58"/><line x1="200" y1="98" x2="200" y2="202"/><line x1="148" y1="150" x2="252" y2="150"/><path d="M160 110 h-14 v14 M240 110 h14 v14 M160 190 h-14 v-14 M240 190 h14 v-14"/></g>
      <circle class="bgpulse2" cx="200" cy="150" r="5" fill="#f2555b"/><line class="bgscan" x1="40" y1="18" x2="40" y2="282" stroke="#f2555b" stroke-width="1" opacity=".4"/></svg>`,
    "Machine Learning for Security": `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" fill="none">
      <g stroke="#6fb3b8" stroke-width=".8" opacity=".4"><path d="M70 80 L200 60 M70 80 L200 150 M70 80 L200 240 M70 220 L200 60 M70 220 L200 150 M70 220 L200 240 M200 60 L330 110 M200 150 L330 110 M200 150 L330 190 M200 240 L330 190"/></g>
      <g fill="#6fb3b8"><circle class="bgpulse" cx="70" cy="80" r="4"/><circle class="bgpulse" cx="70" cy="220" r="4" style="animation-delay:.4s"/><circle class="bgpulse" cx="200" cy="60" r="4" style="animation-delay:.8s"/><circle class="bgpulse" cx="200" cy="150" r="4.5" fill="#d4af37" style="animation-delay:1.2s"/><circle class="bgpulse" cx="200" cy="240" r="4" style="animation-delay:1.6s"/><circle class="bgpulse" cx="330" cy="110" r="4" style="animation-delay:2s"/><circle class="bgpulse" cx="330" cy="190" r="4" style="animation-delay:2.4s"/></g></svg>`,
    "ICS / OT Security": `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" fill="none">
      <g stroke="#8ba3bd" stroke-width="1.2" opacity=".45"><path d="M-20 70 H80 V140 H180 V40 H300 V200 H420"/><path d="M-20 212 H120 V150 H240 V252 H420"/><path d="M60 300 V182 H160"/></g>
      <g fill="#8ba3bd"><rect x="76" y="136" width="8" height="8"/><rect x="176" y="36" width="8" height="8"/><rect x="296" y="196" width="8" height="8"/><rect x="236" y="248" width="8" height="8"/></g>
      <path class="bgflow" d="M-20 70 H80 V140 H180 V40 H300 V200 H420" stroke="#e8c766" stroke-width="2"/><circle class="bgpulse2" cx="180" cy="40" r="4" fill="#e8c766"/></svg>`,
    "Development": `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" fill="none">
      <g class="bgdrift" stroke="#c68a4e" stroke-width="3" opacity=".5"><path d="M120 92 L82 150 L120 208"/><path d="M280 92 L318 150 L280 208"/><line x1="214" y1="82" x2="186" y2="218" stroke-width="2.5"/></g>
      <g stroke="#e8c766" stroke-width="1.5" opacity=".7"><path class="bgflow" d="M-20 46 H140"/><path class="bgflow" d="M260 256 H420" style="animation-delay:1s"/></g>
      <rect class="bgpulse" x="150" y="248" width="10" height="16" fill="#c68a4e"/></svg>`,
  };
  /* Higgsfield-generated backgrounds (5 tiles); Development keeps its SVG motif. */
  const SKILL_IMG = {
    "SOC Operations": "assets/img/skills/soc.webp",
    "Cloud & Automation": "assets/img/skills/cloud.webp",
    "Penetration Testing": "assets/img/skills/pentest.webp",
    "Machine Learning for Security": "assets/img/skills/ml.webp",
    "ICS / OT Security": "assets/img/skills/ics.webp",
  };
  const BENTO = [
    { group: "SOC Operations", span: "btile--xl", accent: "var(--c-soc)",
      snippet: ['<span class="kw">SecurityEvent</span>', '| where EventID == <span class="num">4625</span>', '| summarize c=count() by Account'] },
    { group: "Cloud & Automation", span: "btile--wide", accent: "var(--gold)" },
    { group: "Penetration Testing", span: "", accent: "var(--c-pentest)" },
    { group: "Machine Learning for Security", span: "", accent: "var(--c-ml)" },
    { group: "ICS / OT Security", span: "btile--wide", accent: "var(--c-detect)" },
    { group: "Development", span: "btile--wide", accent: "var(--c-embed)" },
  ];
  function renderSkills() {
    const byName = Object.fromEntries(SKILLS.map((g) => [g.group, g]));
    $("#skillsGrid").innerHTML = BENTO.map((cfg, i) => {
      const g = byName[cfg.group]; if (!g) return "";
      const snip = cfg.snippet ? `<div class="btile__snip">${cfg.snippet.join("\n")}</div>` : "";
      const bg = SKILL_IMG[cfg.group]
        ? `<div class="btile__bg btile__bg--img"><img src="${SKILL_IMG[cfg.group]}" alt="" loading="lazy"></div>`
        : (SKILL_BG[cfg.group] ? `<div class="btile__bg">${SKILL_BG[cfg.group]}</div>` : "");
      return `<article class="btile ${cfg.span} reveal" style="--tile-accent:${cfg.accent};--d:${i * 45}ms">
        ${bg}
        <div class="btile__head"><h3>${esc(g.group)}</h3><span class="btile__n">${String(g.items.length).padStart(2, "0")}</span></div>
        <div class="chips">${g.items.map((it) => `<span class="chip">${esc(it)}</span>`).join("")}</div>
        ${snip}
      </article>`;
    }).join("");
  }

  /* ---- Projects -------------------------------------------------------- */
  let activeFilter = "All";
  const tagList = (p) => p.tags.slice(0, 3).map((t) => `<span>${esc(t)}</span>`).join('<span class="dot">·</span>');

  function featureRow(p, i) {
    const media = p.artifact
      ? terminal(p.artifact.label, p.artifact.lines)
      : `<span class="frow__thumb"><img src="${thumbOf(p)}" alt="${esc(p.title)} report" loading="lazy"></span>`;
    const reports = p.reports.map((r) =>
      `<a class="btn btn--ghost btn--sm" href="${esc(r.href)}" target="_blank" rel="noopener">${icon("i-doc")} ${esc(r.label)}</a>`).join("");
    const gh = p.github ? `<a class="btn btn--ghost btn--sm" href="${esc(p.github)}" target="_blank" rel="noopener">${icon("i-github")} Code</a>` : "";
    return `<article class="frow" data-cat="${esc(p.category)}" data-id="${esc(p.id)}">
      <div class="frow__copy reveal ${i % 2 ? "reveal--right" : "reveal--left"}">
        <span class="frow__flag">${icon("i-star")} Flagship engagement</span>
        <h3>${esc(p.title)}</h3>
        <div class="frow__sub">${esc(p.subtitle)}</div>
        <p class="frow__kicker">${esc(p.kicker || p.summary)}</p>
        <div class="frow__tags">${tagList(p)}</div>
        <div class="frow__actions">
          <button class="btn btn--primary btn--sm" type="button" data-open="${esc(p.id)}">Full case study ${icon("i-arrow")}</button>
          ${reports}${gh}
        </div>
      </div>
      <div class="frow__media reveal ${i % 2 ? "reveal--left" : "reveal--right"}">${media}</div>
    </article>`;
  }

  function revealCard(p, i) {
    const avail = [];
    if (["honeypot", "insider-threat", "facial-recognition"].includes(p.id)) avail.push(icon("i-video"));
    if (p.github) avail.push(icon("i-github"));
    return `<button class="pcard reveal" data-cat="${esc(p.category)}" data-id="${esc(p.id)}"
              style="--tag-accent:${ACCENT[p.category]};--d:${(i % 3) * 60}ms" aria-label="Open ${esc(p.title)}">
      <div class="pcard__media"><img src="${thumbOf(p)}" alt="${esc(p.title)} report page" loading="lazy"></div>
      <div class="pcard__scrim"></div>
      <div class="pcard__top"><span class="cat-tag" style="--tag-accent:${ACCENT[p.category]}">${esc(p.category)}</span>
        ${avail.length ? `<span class="pcard__avail">${avail.join("")}</span>` : `<span class="pcard__idx">0${i + 1}</span>`}</div>
      <div class="pcard__body">
        <h3>${esc(p.title)}</h3>
        <div class="pcard__sub">${esc(p.subtitle)}</div>
        <div class="pcard__reveal">
          <p class="pcard__kicker">${esc(p.kicker || p.summary)}</p>
          <span class="pcard__foot">Open case study ${icon("i-arrow")}</span>
        </div>
      </div>
    </button>`;
  }

  function renderProjects() {
    const featured = PROJECTS.filter((p) => p.featured);
    const rest = PROJECTS.filter((p) => !p.featured);
    $("#projectFeatured").innerHTML = featured.map(featureRow).join("");
    $("#projectGrid").innerHTML = rest.map(revealCard).join("");
    $$("#projectGrid .pcard").forEach((c) => c.addEventListener("click", () => openModal(c.dataset.id)));
    $$('#projectFeatured [data-open]').forEach((b) =>
      b.addEventListener("click", () => openModal(b.getAttribute("data-open"))));
  }

  function renderFilters() {
    const counts = {};
    PROJECTS.forEach((p) => { counts[p.category] = (counts[p.category] || 0) + 1; });
    $("#filterBar").innerHTML = CATEGORIES.map((cat) => {
      const n = cat === "All" ? PROJECTS.length : (counts[cat] || 0);
      return `<button class="filter-btn" type="button" aria-pressed="${cat === activeFilter}" data-cat="${esc(cat)}">${esc(cat)}<span class="count">${n}</span></button>`;
    }).join("");
    $$("#filterBar .filter-btn").forEach((b) => b.addEventListener("click", () => setFilter(b.dataset.cat)));
  }
  function setFilter(cat) {
    activeFilter = cat;
    $$("#filterBar .filter-btn").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.cat === cat)));
    $$("#projectFeatured .frow, #projectGrid .pcard").forEach((el) =>
      el.classList.toggle("is-hidden", !(cat === "All" || el.dataset.cat === cat)));
  }

  /* ---- Certifications: scroll timeline --------------------------------- */
  function renderTimeline() {
    $("#certRows").innerHTML = CERTS.map((c) => {
      const badge = c.status === "progress"
        ? `<span class="badge badge--progress">In Progress</span>`
        : `<span class="badge badge--done">Completed</span>`;
      const link = c.file ? `<a class="tlrow__link" href="${esc(c.file)}" target="_blank" rel="noopener">View ${icon("i-external")}</a>` : "";
      return `<div class="tlrow reveal">
        <div class="tlrow__node"></div>
        <div class="tlrow__meta"><div class="tlrow__issuer">${esc(c.issuer)}</div><div class="tlrow__note">${esc(c.note || "")}</div></div>
        <div class="tlrow__card">
          <span class="tlrow__icon">${icon("i-cert")}</span>
          <div><div class="tlrow__title">${esc(c.title)}</div><div class="tlrow__cardmeta">${badge}${link}</div></div>
        </div>
      </div>`;
    }).join("");
  }
  function initTimelineScroll() {
    const tl = $(".timeline"), fill = $("#tlFill");
    if (!tl || !fill) return;
    const onScroll = () => {
      const r = tl.getBoundingClientRect();
      const mid = window.innerHeight * 0.6;
      const prog = (mid - r.top) / r.height;
      fill.style.height = Math.max(0, Math.min(1, prog)) * 100 + "%";
    };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
  }

  /* ---- Modal ----------------------------------------------------------- */
  const modal = $("#modal"), panel = $("#modalPanel");
  let lastFocused = null;

  function videoBlock(p) {
    if (!["honeypot", "insider-threat", "facial-recognition"].includes(p.id)) return "";
    if (p.videoEmbed) {
      return `<h4>Demo</h4><div class="video-wrap"><iframe src="${esc(p.videoEmbed)}" title="${esc(p.title)} demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
    }
    return `<h4>Demo</h4><div class="video-wrap"><div class="video-ph">${icon("i-play")}
      <div>Demo video — paste a YouTube/Vimeo embed URL into <code>videoEmbed</code> for this project in <code>js/data.js</code></div></div></div>`;
  }
  function openModal(id) {
    const p = PROJECTS.find((x) => x.id === id); if (!p) return;
    lastFocused = document.activeElement;
    const reports = p.reports.map((r) => `<a class="btn btn--primary btn--sm" href="${esc(r.href)}" target="_blank" rel="noopener">${icon("i-doc")} ${esc(r.label)}</a>`).join("");
    const gh = p.github ? `<a class="btn btn--ghost btn--sm" href="${esc(p.github)}" target="_blank" rel="noopener">${icon("i-github")} View Code</a>` : "";
    const artifact = p.artifact ? `<h4>Artifact</h4><div class="modal__art">${terminal(p.artifact.label, p.artifact.lines)}</div>` : "";
    panel.innerHTML = `
      <div class="modal__head">
        <button class="modal__close" id="modalClose" aria-label="Close">${icon("i-close")}</button>
        <div class="modal__eyebrow"><span class="cat-tag" style="--tag-accent:${ACCENT[p.category]}">${esc(p.category)}</span></div>
        <h2 class="modal__title" id="modalTitle">${esc(p.title)}</h2>
        <div class="modal__sub">${esc(p.subtitle)}</div>
      </div>
      <div class="modal__metrics">${p.metrics.map((m) => `<div class="modal__metric"><div class="v">${esc(m.value)}</div><div class="l">${esc(m.label)}</div></div>`).join("")}</div>
      <div class="modal__body">
        <h4>Overview</h4>
        <ul class="detail-list">${p.details.map((d) => `<li>${d}</li>`).join("")}</ul>
        ${artifact}${videoBlock(p)}
        <h4>Tools &amp; technologies</h4>
        <div class="tool-list">${p.tools.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
        <div class="modal__actions">${reports}${gh}</div>
      </div>`;
    modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); document.body.classList.add("modal-open");
    $("#modalClose").addEventListener("click", closeModal);
    $(".modal__dialog").scrollTop = 0;
    $("#modalClose").focus({ preventScroll: true });
  }
  function closeModal() {
    modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); document.body.classList.remove("modal-open");
    if (lastFocused) lastFocused.focus();
  }
  modal.addEventListener("click", (e) => { if (e.target.hasAttribute("data-close")) closeModal(); });
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "Tab") {
      const f = $$('a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])', panel);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---- Nav ------------------------------------------------------------- */
  function initNav() {
    const nav = $("#nav"), toggle = $("#navToggle"), links = $("#navLinks");
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    $$("#navLinks a").forEach((a) => a.addEventListener("click", () => {
      links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false");
    }));
  }

  /* ---- Reveal ---------------------------------------------------------- */
  function initReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("in")); return;
    }
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
  }

  /* ---- Living network-telemetry background ----------------------------- */
  function initNetBG() {
    const cv = document.getElementById("netbg"); if (!cv) return;
    const ctx = cv.getContext("2d");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const GOLD = "212,175,55", RED = "242,85,91", MAXD = 150;
    let w, h, dpr, nodes = [], packets = [], raf = 0, running = true;
    const rnd = (a, b) => a + Math.random() * (b - a);

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(22, Math.min(60, Math.round((w * h) / 27000)));
      nodes = Array.from({ length: count }, () => ({ x: rnd(0, w), y: rnd(0, h), vx: rnd(-0.12, 0.12), vy: rnd(-0.12, 0.12) }));
      packets = [];
    }
    function edges(lineAlpha) {
      for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < MAXD) { ctx.strokeStyle = `rgba(${GOLD},${(1 - d / MAXD) * lineAlpha})`; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
    }
    function dots(alpha) { ctx.fillStyle = `rgba(${GOLD},${alpha})`; for (const n of nodes) { ctx.beginPath(); ctx.arc(n.x, n.y, 1.4, 0, 7); ctx.fill(); } }
    function spawnPacket() {
      const a = nodes[(Math.random() * nodes.length) | 0];
      const near = nodes.filter((n) => n !== a && Math.hypot(n.x - a.x, n.y - a.y) < MAXD * 1.4);
      if (near.length) packets.push({ a, b: near[(Math.random() * near.length) | 0], t: 0, sp: rnd(0.006, 0.014), hot: Math.random() < 0.28 });
    }
    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) { n.x += n.vx; n.y += n.vy; if (n.x < 0 || n.x > w) n.vx *= -1; if (n.y < 0 || n.y > h) n.vy *= -1; }
      edges(0.13); dots(0.34);
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i]; p.t += p.sp;
        if (p.t >= 1) { packets.splice(i, 1); continue; }
        const x = p.a.x + (p.b.x - p.a.x) * p.t, y = p.a.y + (p.b.y - p.a.y) * p.t, c = p.hot ? RED : GOLD;
        ctx.fillStyle = `rgba(${c},0.85)`; ctx.beginPath(); ctx.arc(x, y, 2, 0, 7); ctx.fill();
        ctx.fillStyle = `rgba(${c},0.22)`; ctx.beginPath(); ctx.arc(x, y, 5.5, 0, 7); ctx.fill();
      }
      if (packets.length < 5 && Math.random() < 0.035) spawnPacket();
      if (running) raf = requestAnimationFrame(frame);
    }
    const paintStatic = () => { edges(0.13); dots(0.34); };
    resize(); paintStatic();  // immediate content — never blank, even before rAF / while hidden
    window.addEventListener("resize", () => { resize(); paintStatic(); }, { passive: true });
    if (reduce || location.hash === "#staticbg") return;  // reduced-motion (or ?#staticbg): keep the static frame, no loop
    const start = () => { if (!running) { running = true; raf = requestAnimationFrame(frame); } };
    const stop  = () => { running = false; cancelAnimationFrame(raf); };
    running = false;
    document.addEventListener("visibilitychange", () => { document.hidden ? stop() : start(); });
    if (!document.hidden) start();
  }

  document.addEventListener("DOMContentLoaded", () => {
    wireConfig(); renderSkills(); renderTimeline(); renderFilters(); renderProjects();
    initNav(); initReveal(); initTimelineScroll(); initNetBG();
  });
})();
