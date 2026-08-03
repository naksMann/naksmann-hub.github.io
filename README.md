# Nakedi Tumelo Peta — Cybersecurity Portfolio

A fast, responsive, single-page portfolio showcasing 11 SOC / penetration-testing /
ML-for-security / embedded projects. Built as static **HTML + CSS + vanilla JS** —
no build step, deploys anywhere.

Design system: near-black ink · refined **gold** (primary) · deep **red** (severity/threat)
accents — an enterprise SOC-analyst look, not a neon "hacker" cliché. Type is
**Space Grotesk** (headings) / **IBM Plex Sans** (body) / **IBM Plex Mono** (terminals & data).
Layout varies per section by intent — an asymmetric hero with a live SOC console, a **bento**
skills grid, **alternating flagship rows + reveal-on-hover cards** for projects (using real
report-page thumbnails), and a **scroll-driven timeline** for certifications. A faint
network-graph motif and a single blinking terminal cursor are the security signatures.
Fully accessible (keyboard nav, focus rings, `prefers-reduced-motion`, AA contrast) and mobile-first.

Live at: https://naksmann-hub.github.io

---

## Quick start (preview locally)

From this folder:

```bash
python -m http.server 5500
```

Then open <http://localhost:5500>. (Any static server works — you can also just open
`index.html`, though a server is recommended so the PDF links resolve cleanly.)

---

## Current status

- **All 11 project reports** — real PDFs in `assets/reports/`, linked from each project modal.
- **All active certifications** have a linked PDF in `assets/certs/` (MWR, EC-Council,
  Deloitte, SANCS ×2, IT Varsity, WeThinkCode_). **CompTIA Security+** is genuinely
  in progress (`status: "progress"` in `data.js`) — no PDF until it's earned.
- **Demo videos** for the three lab-recording projects (honeypot, insider threat,
  facial recognition) are wired to their public YouTube walkthroughs.
- Three of the projects also have their own standalone GitHub repos, linked via
  each card's **Code** button:
  [honeypot-threat-analysis](https://github.com/naksMann/honeypot-threat-analysis),
  [soc-insider-threat-detection](https://github.com/naksMann/soc-insider-threat-detection),
  [facial-recognition-access-control](https://github.com/naksMann/facial-recognition-access-control).
- Project figures (accuracy, AUC, CVSS scores, attack counts, etc.) were pulled from the
  actual source reports, not just summaries.

---

## Editing content

Everything renders from **`js/data.js`**:

- `PROFILE` / `CONFIG` — identity, links, résumé path.
- `SKILLS` — grouped skill badges.
- `PROJECTS` — the 11 project cards + modal detail (metrics, overview bullets, tools, report links, GitHub, video).
- `CERTS` — certification cards.

Change text there and reload — no compilation needed.

---

## File structure

```
index.html            # markup + inline SVG icon sprite (no emoji)
css/styles.css        # design tokens + all components
js/data.js             # ← ALL content lives here (edit this)
js/main.js             # rendering, filtering, modal, nav, scroll reveals
assets/
  reports/            # 11 project report PDFs (real)
  certs/              # certificate PDFs (real)
  resume/             # your CV (real, replaceable)
  img/
    profile.jpg       # profile photo
    reports/          # page-1 thumbnails auto-rendered from each report PDF
```

**Regenerating the report thumbnails** (only if you replace a report PDF): the card/hover
images in `assets/img/reports/*.png` were rendered from page 1 of each report with PyMuPDF —
`pip install PyMuPDF`, then render `doc[0].get_pixmap(matrix=fitz.Matrix(1.5,1.5)).save(...)`
for the changed report.

---

## Deploy

**GitHub Pages** — push this folder to a repo, then Settings → Pages → deploy from
`main` / root. (Repo is well under limits now that videos are external.)

**Netlify / Vercel / Cloudflare Pages** — drag-and-drop the folder or connect the repo;
no build command, publish directory = root.

---

*Built with the `ui-ux-pro-max` design-intelligence skill.*
