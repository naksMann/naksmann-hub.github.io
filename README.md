# Nakedi Tumelo Peta — Cyber Security Portfolio

Portfolio site for **Nakedi Tumelo Peta**, Junior Cybersecurity Analyst.
SOC monitoring, incident response, penetration testing and ICS/OT security.

**Live:** https://naksmann.github.io/naksmann-hub.github.io/

## Pages

| Page | Contents |
|---|---|
| `index.html` | Hero, with rotating specialisms and social links |
| `about.html` | Background and grouped skills |
| `projects.html` | Six engagements, each opening a modal with its report and video |
| `certifications.html` | Five earned certificates plus Security+ and CCNA in progress |
| `contact.html` | Contact details and message form |

## Stack

Static HTML, CSS and vanilla JavaScript. No build step, no framework, no
package manager. GSAP (CDN) drives the intro animation; icons are inline SVG
drawn by `renderIcons()` in `assets/js/main.js`.

## Editing content

Content is data-driven, so the HTML rarely needs touching:

- **Projects** — `assets/js/projects.js`. Each entry has `title`, `subtitle`,
  `img`, `blurb`, `tags`, `body`, `docs` and `video`.
- **Certifications** — `assets/js/certs.js`. Set `status` to `"done"` with a
  `file` path, or `"progress"` with an empty `file`.
- **Rotating hero text** — `TYPED_PHRASES` near the top of the typed block in
  `assets/js/main.js`.

## Contact form

GitHub Pages serves static files and cannot send mail, so the form posts to
[Web3Forms](https://web3forms.com).

To enable delivery, replace `PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE` in
`contact.html` with a real access key. Until then the form falls back to
opening the visitor's email client, so it is never dead.

## Local preview

```bash
python -m http.server 5601
```

Then open http://localhost:5601.

## Layout notes

- Paths are relative throughout, so the site works both at a domain root and
  under a project subpath.
- `.nojekyll` stops GitHub running the files through Jekyll.
- Breakpoint is 768px: the mobile block is `max-width: 767.98px` so the two
  do not both apply at exactly 768px.
