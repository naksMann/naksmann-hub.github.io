# Nakedi Tumelo Peta — Cybersecurity Portfolio

A fast, responsive, single-page portfolio showcasing 10 SOC / penetration-testing /
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

---

## Quick start (preview locally)

From this folder:

```bash
python -m http.server 5500
```

Then open <http://localhost:5500>. (Any static server works — you can also just open
`index.html`, though a server is recommended so the PDF links resolve cleanly.)

---

## ✅ Fill these in before publishing

All editable content lives in **`js/data.js`** at the top, in the `CONFIG` object:

| Placeholder | Where | Notes |
|---|---|---|
| **Email** | `CONFIG.email` | Replace `your.email@example.com` |
| **LinkedIn URL** | `CONFIG.linkedin` | Your profile URL |
| **TryHackMe URL** | `CONFIG.tryhackme` | Your profile URL |
| **Profile photo** | drop file at `assets/img/profile.jpg` | Square ~600×600. Until then, a labelled placeholder shows in the About section. |
| **Résumé** | `assets/resume/Nakedi_Tumelo_Peta_CV.pdf` | **Already wired** to your real 1-page SOC CV — replace the file to update it. |
| **Demo videos (projects 7, 8, 9)** | each project's `videoEmbed` in `js/data.js` | Paste a **YouTube/Vimeo _embed_ URL** (e.g. `https://www.youtube.com/embed/XXXX`). Until then, each shows a labelled placeholder. See note below. |

### Why the videos need YouTube/Vimeo
Your three demo recordings are **325 MB – 1 GB+ each** — too large to bundle into a
hostable site (GitHub Pages caps files at 100 MB). Upload each as an **unlisted**
YouTube/Vimeo video, then paste its embed URL into the matching `videoEmbed` field.
The player then appears automatically inside that project's modal.

---

## What's wired with real files

- **All 10 project reports** — real PDFs in `assets/reports/`, linked from each project modal.
- **Certificates** — real PDFs for **Deloitte** and **SANCS** (×2) in `assets/certs/`.
  EC-Council, SANS, IT Varsity, and WeThinkCode show as completed but have no PDF linked
  yet — drop the files in `assets/certs/` and add the path to that cert's `file` field in `data.js`.
- **CompTIA Security+** — marked **In Progress** (change `status: "progress"` → `"done"` in `data.js` when complete).
- Project figures (accuracy, AUC, CVSS scores, attack counts, etc.) were pulled from the
  actual source reports, not just summaries.

---

## Editing content

Everything renders from **`js/data.js`**:

- `PROFILE` / `CONFIG` — identity, links, résumé path.
- `SKILLS` — grouped skill badges.
- `PROJECTS` — the 10 project cards + modal detail (metrics, overview bullets, tools, report links, GitHub, video).
- `CERTS` — certification cards.

Change text there and reload — no compilation needed.

---

## File structure

```
index.html            # markup + inline SVG icon sprite (no emoji)
css/styles.css        # design tokens + all components
js/data.js            # ← ALL content lives here (edit this)
js/main.js            # rendering, filtering, modal, nav, scroll reveals
assets/
  reports/            # 10 project report PDFs (real)
  certs/              # certificate PDFs (real: Deloitte, SANCS ×2)
  resume/             # your CV (real, replaceable)
  img/
    profile.jpg       # add your photo here (optional; monogram shown until then)
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
