/* ICONS
   ----------------------------------------------------------------------------
   The ionicons 4.5.10 CDN this template shipped with no longer serves its SVG
   files (every icon 404s, which the browser reports as a CORS error), so no
   icon ever rendered. These are drawn inline instead: no network request, no
   flash of missing glyph, and the site keeps working offline.

   Markup stays <ion-icon name="..."></ion-icon>; this fills them in. */
const ICONS = {
    'menu':          { s: 'M3 6h18M3 12h18M3 18h18' },
    'close':         { s: 'M6 6l12 12M18 6L6 18' },
    'arrow-forward': { s: 'M5 12h14M13 6l6 6-6 6' },
    'mail':          { s: 'M3 5h18v14H3zM3 6l9 6 9-6' },
    'flag':          { s: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7' },
    'document-text': { s: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h5' },
    'play-circle':   { s: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', f: 'M10 8l6 4-6 4z' },
    /* Certificate: a page with a seal. Drawn here rather than using the stock
       cert_icon.jpeg, which carries a Dreamstime watermark. */
    'certificate':   { s: 'M13 3H5.5A1.5 1.5 0 0 0 4 4.5v15A1.5 1.5 0 0 0 5.5 21H9M13 3l4 4v3M7 8h6M7 11h5M7 14h3M17 20a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM15.6 16.4l1 1 1.8-1.8',
                       f: 'M14.9 19.4l-1.1 3.4 3.2-1.3 3.2 1.3-1.1-3.4a4.9 4.9 0 0 1-4.2 0z' },
    'call':          { s: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z' },
    'location':      { s: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' },
    'time':          { s: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2' },
    'logo-whatsapp': { f: 'M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-5.8c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.3 0-.4.1-.5l.4-.5.3-.5v-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3z' },
    'logo-linkedin': { f: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.71h.05c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.65 4.76 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9z' },
    'logo-github':   { f: 'M12 .5C5.73.5.99 5.24.99 11.5c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53 0-.26-.01-.95-.01-1.87-3.06.66-3.71-1.48-3.71-1.48-.5-1.28-1.23-1.62-1.23-1.62-1-.68.08-.67.08-.67 1.11.08 1.69 1.14 1.69 1.14.98 1.69 2.58 1.2 3.21.92.1-.71.39-1.2.7-1.48-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .92-.29 3.02 1.13a10.4 10.4 0 0 1 5.5 0c2.1-1.42 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.23-2.58 5.16-5.03 5.43.4.34.75 1.02.75 2.06 0 1.49-.01 2.69-.01 3.06 0 .29.2.64.76.53a10.52 10.52 0 0 0 7.51-10.43C23.01 5.24 18.27.5 12 .5z' }
}

const renderIcons = (root) => {
    (root || document).querySelectorAll('ion-icon[name]').forEach(el => {
        const icon = ICONS[el.getAttribute('name')]
        if(!icon || el.firstElementChild) return

        const stroke = icon.s ? `<path d="${icon.s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>` : ''
        const fill   = icon.f ? `<path d="${icon.f}" fill="currentColor"/>` : ''

        el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${stroke}${fill}</svg>`
    })
}

/* MENU SHOW */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*----- ANIMATE -----*/
// GSAP comes from a CDN. If it fails to load, every gsap.from() below would
// throw and take the rest of this file down with it (menu, projects, icons),
// while the intro curtain stayed frozen across the page. So check once.
const hasGSAP = typeof gsap !== 'undefined'

// Only animate selectors that exist on this page, so the shared script can be
// reused across index.html, about.html and projects.html without GSAP warning
// about missing targets.
const animateFrom = (selector, vars) => {
    if(hasGSAP && document.querySelector(selector)) gsap.from(selector, vars)
}

// OVERLAY
if(hasGSAP){
    gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
    gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});
    gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut});
} else {
    // Without GSAP nothing would ever pull the curtain up, so drop it outright.
    document.querySelectorAll('.overlay').forEach(el => { el.style.display = 'none' })
}

// IMG
animateFrom('.home__img', {opacity: 0, duration: 2, delay: 2, x: 60})

// INFORMATION
animateFrom('.home__information', {opacity: 0, duration: 3, delay: 2.3, y: 25})
animateFrom('.anime-text', {opacity: 0, duration: 3, delay: 2.3, y: 25, ease:'expo.out', stagger: .3})

// NAV ITEM
animateFrom('.nav__logo', {opacity:0, duration: 3, delay: 3.2, y: 25, ease:'expo.out'});
animateFrom('.nav__item', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease:'expo.out', stagger: .2})

// SOCIAL
animateFrom('.home__social-link', {opacity: 0, duration: 3, delay: 4, y: 25, ease:'expo.out', stagger: .2})

// ABOUT PAGE
// Reveal on the Y axis only. A translateX here widens the scrollable area and
// gives the page a horizontal scrollbar for the length of the animation.
animateFrom('.about__data', {opacity: 0, duration: 2, delay: 1.8, y: 30, ease:'expo.out'})
animateFrom('.about__img-container', {opacity: 0, duration: 2, delay: 2.1, y: 30, ease:'expo.out'})

// PROJECTS PAGE
animateFrom('.works__title', {opacity: 0, duration: 2, delay: 1.7, y: 30, ease:'expo.out'})
animateFrom('.works__intro', {opacity: 0, duration: 2, delay: 1.9, y: 30, ease:'expo.out'})

/*----- TYPED SPECIALISMS (home hero) -----*/
/* Types each phrase out, holds it, deletes it, then moves to the next.
   EDIT THIS LIST to change what the hero cycles through. */
const TYPED_PHRASES = ['SOC Monitoring', 'ICS / OT Security', 'Penetration Testing']

const typedEl = document.getElementById('home-typed')

if(typedEl){
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if(reduceMotion || TYPED_PHRASES.length === 0){
        // No animation: show the whole list at once, still legible and useful.
        typedEl.textContent = TYPED_PHRASES.join('  ·  ')
    } else {
        const TYPE_MS = 70, DELETE_MS = 35, HOLD_MS = 1700, BETWEEN_MS = 350

        let phrase = 0, chars = 0, deleting = false

        const tick = () => {
            const full = TYPED_PHRASES[phrase]
            chars += deleting ? -1 : 1
            typedEl.textContent = full.slice(0, chars)

            let delay = deleting ? DELETE_MS : TYPE_MS

            if(!deleting && chars >= full.length){
                deleting = true
                delay = HOLD_MS
            } else if(deleting && chars <= 0){
                deleting = false
                phrase = (phrase + 1) % TYPED_PHRASES.length
                delay = BETWEEN_MS
            }

            setTimeout(tick, delay)
        }

        // Wait for the GSAP intro to settle before typing. Without GSAP the
        // hero is visible immediately, so there is nothing to wait for.
        setTimeout(tick, hasGSAP ? 3600 : 400)
    }
}

/*----- ACTIVE NAV LINK -----*/
const navLinks = document.querySelectorAll('.nav__link')

const setActiveLink = (link) => {
    if(!link) return
    navLinks.forEach(navLink => navLink.classList.remove('active-link'))
    link.classList.add('active-link')
}

// Highlight the link matching the page we are currently on.
const currentPage = window.location.pathname.split('/').pop() || 'index.html'

navLinks.forEach(link => {
    const href = link.getAttribute('href') || ''
    if(href === '#' || href.startsWith('mailto:')) return

    const page = href.split('#')[0]
    if(page && page === currentPage) setActiveLink(link)
})

// On pages with in-page sections, keep the highlight in sync with scrolling.
const sections = document.querySelectorAll('#home, #about')

if(sections.length){
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting) return

            setActiveLink(document.querySelector(`.nav__link[href="#${entry.target.id}"]`))
        })
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 })

    sections.forEach(section => sectionObserver.observe(section))
}

/*----- SHARED HELPERS -----*/
const esc = (str) => String(str).replace(/[&<>"']/g, c => (
    {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]
))

/* Adds .is-visible to each element as it scrolls into view, which is what the
   staggered entrance animations key off. */
const revealOnScroll = (elements) => {
    const items = [...elements]
    const revealAll = () => items.forEach(el => el.classList.add('is-visible'))

    if(!('IntersectionObserver' in window)){ revealAll(); return }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting) return
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
        })
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 })

    items.forEach(el => observer.observe(el))

    // These cards start at opacity 0, so if the observer never runs the page
    // is simply blank. Browsers suspend observer callbacks for a document that
    // is not being rendered (opened in a background tab, for instance), so
    // fall back to showing everything rather than risk an empty portfolio.
    setTimeout(() => {
        if(items.some(el => !el.classList.contains('is-visible'))) revealAll()
    }, 2500)
}

/*----- DETAIL MODAL -----*/
/* Shared by projects.html and certifications.html. Exposes openDetailModal(),
   which takes { subtitle, title, tags[], body[], docs[], video }. */
let openDetailModal = null

;(() => {
    const modal = document.getElementById('project-modal')
    if(!modal) return

    const panel      = modal.querySelector('.modal__panel')
    const scroller   = modal.querySelector('.modal__scroll')
    const elSubtitle = document.getElementById('modal-subtitle')
    const elTitle    = document.getElementById('modal-title')
    const elTags     = document.getElementById('modal-tags')
    const elBody     = document.getElementById('modal-body')
    const videoWrap  = document.getElementById('modal-video-section')
    const videoFrame = document.getElementById('modal-video')
    const docsWrap   = document.getElementById('modal-docs-section')
    const docTabs    = document.getElementById('modal-doc-tabs')
    const docFrame   = document.getElementById('modal-doc-frame')
    const docOpen    = document.getElementById('modal-doc-open')

    let lastFocused = null

    const showDoc = (doc, button) => {
        docFrame.src = doc.file + '#view=FitH'
        docOpen.href = doc.file
        docTabs.querySelectorAll('.modal__doc-tab').forEach(b => {
            b.classList.toggle('is-active', b === button)
            b.setAttribute('aria-selected', b === button ? 'true' : 'false')
        })
    }

    const openModal = (item) => {
        lastFocused = document.activeElement

        const tags = item.tags || []
        const body = item.body || []
        const docs = item.docs || []

        elSubtitle.textContent = item.subtitle || ''
        elTitle.textContent    = item.title || ''
        elTags.innerHTML       = tags.map(t => `<span class="modal__tag">${esc(t)}</span>`).join('')
        elTags.hidden          = tags.length === 0
        elBody.innerHTML       = body.map(par => `<p>${esc(par)}</p>`).join('')

        // Video: only attach the src while open, so closing stops playback.
        if(item.video){
            videoFrame.src = item.video
            videoWrap.hidden = false
        } else {
            videoFrame.removeAttribute('src')
            videoWrap.hidden = true
        }

        // Documents: one tab per file, first one shown.
        if(docs.length){
            docsWrap.hidden = false
            docTabs.innerHTML = ''
            docTabs.hidden = docs.length < 2

            docs.forEach((doc, i) => {
                const b = document.createElement('button')
                b.type = 'button'
                b.className = 'modal__doc-tab'
                b.setAttribute('role', 'tab')
                b.textContent = doc.label
                b.addEventListener('click', () => showDoc(doc, b))
                docTabs.appendChild(b)
                if(i === 0) showDoc(doc, b)
            })
        } else {
            docsWrap.hidden = true
            docFrame.removeAttribute('src')
        }

        modal.hidden = false
        document.body.classList.add('modal-open')
        // Force a synchronous reflow so the transition runs from the closed
        // state. requestAnimationFrame would stall in a backgrounded tab.
        void modal.offsetWidth
        modal.classList.add('is-open')
        scroller.scrollTop = 0
        modal.querySelector('.modal__close').focus()
    }

    const closeModal = () => {
        modal.classList.remove('is-open')
        document.body.classList.remove('modal-open')
        videoFrame.removeAttribute('src')
        docFrame.removeAttribute('src')

        const finish = () => {
            modal.hidden = true
            if(lastFocused) lastFocused.focus()
        }

        // Wait for the fade-out unless the user prefers reduced motion.
        if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
            finish()
        } else {
            setTimeout(finish, 250)
        }
    }

    modal.querySelectorAll('[data-close-modal]').forEach(el => {
        el.addEventListener('click', closeModal)
    })

    document.addEventListener('keydown', (e) => {
        if(modal.hidden) return

        if(e.key === 'Escape'){
            closeModal()
            return
        }

        // Keep tabbing inside the dialog while it is open.
        if(e.key === 'Tab'){
            const focusable = panel.querySelectorAll('button, a[href], iframe, [tabindex]:not([tabindex="-1"])')
            if(!focusable.length) return

            const first = focusable[0]
            const last  = focusable[focusable.length - 1]

            if(e.shiftKey && document.activeElement === first){
                e.preventDefault()
                last.focus()
            } else if(!e.shiftKey && document.activeElement === last){
                e.preventDefault()
                first.focus()
            }
        }
    })

    openDetailModal = openModal
})()

/*----- PROJECTS GRID -----*/
/* Runs only on projects.html, where #works-grid and the PROJECTS data exist. */
const worksGrid = document.getElementById('works-grid')

if(worksGrid && typeof PROJECTS !== 'undefined'){

    /* --- Build the cards --- */
    worksGrid.innerHTML = PROJECTS.map((p, i) => `
        <article class="work" style="--work-index:${i}">
            <button class="work__button" type="button" data-project="${esc(p.id)}"
                    aria-label="Open project: ${esc(p.title)}">
                <span class="work__head">
                    <span class="work__title">${esc(p.title)}</span>
                    <span class="work__arrow" aria-hidden="true">
                        <ion-icon name="arrow-forward"></ion-icon>
                    </span>
                </span>
                <span class="work__blurb">${esc(p.blurb)}</span>
                <span class="work__media">
                    <img src="${esc(p.img)}" alt="" loading="lazy" width="900" height="600">
                    <span class="work__badges">
                        ${p.docs.length ? `<span class="work__badge"><ion-icon name="document-text"></ion-icon>${p.docs.length} report${p.docs.length > 1 ? 's' : ''}</span>` : ''}
                        ${p.video ? '<span class="work__badge"><ion-icon name="play-circle"></ion-icon>Video</span>' : ''}
                    </span>
                </span>
                <span class="work__bar" aria-hidden="true"></span>
            </button>
        </article>
    `).join('')

    revealOnScroll(worksGrid.querySelectorAll('.work'))

    worksGrid.querySelectorAll('.work__button').forEach(button => {
        button.addEventListener('click', () => {
            const project = PROJECTS.find(p => p.id === button.dataset.project)
            if(project && openDetailModal) openDetailModal(project)
        })
    })
}

/*----- CERTIFICATIONS GRID -----*/
/* Runs only on certifications.html. Earned certificates open in the shared
   modal; anything in progress renders as a non-interactive status card. */
const certsGrid = document.getElementById('certs-grid')

if(certsGrid && typeof CERTS !== 'undefined'){

    certsGrid.innerHTML = CERTS.map((c, i) => {
        const icon = `
            <span class="cert__icon" aria-hidden="true">
                <ion-icon name="certificate"></ion-icon>
            </span>`

        const text = `
            <span class="cert__title">${esc(c.title)}</span>
            <span class="cert__issuer">${esc(c.issuer)}</span>`

        // In progress: no PDF to open, so this must not be a button.
        if(c.status !== 'done'){
            return `
        <article class="cert cert--progress" style="--cert-index:${i}">
            <div class="cert__inner">
                ${icon}
                ${text}
                <span class="cert__status">
                    <span class="cert__pulse" aria-hidden="true"></span>
                    In progress
                </span>
                <span class="cert__track" aria-hidden="true"><span class="cert__fill"></span></span>
            </div>
        </article>`
        }

        return `
        <article class="cert" style="--cert-index:${i}">
            <button class="cert__inner cert__button" type="button" data-cert="${i}"
                    aria-label="View certificate: ${esc(c.title)}, ${esc(c.issuer)}">
                <span class="cert__shine" aria-hidden="true"></span>
                ${icon}
                ${text}
                <span class="cert__status cert__status--view">
                    View certificate
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </span>
            </button>
        </article>`
    }).join('')

    revealOnScroll(certsGrid.querySelectorAll('.cert'))

    certsGrid.querySelectorAll('.cert__button').forEach(button => {
        button.addEventListener('click', () => {
            const cert = CERTS[Number(button.dataset.cert)]
            if(!cert || !openDetailModal) return

            openDetailModal({
                subtitle: cert.issuer,
                title: cert.title,
                tags: [],
                body: [cert.note],
                docs: [{ label: cert.title, file: cert.file }],
                video: ''
            })
        })
    })
}

/*----- CONTACT FORM -----*/
/* GitHub Pages serves static files, so the site cannot send mail itself. The
   form POSTs to Web3Forms, which relays it to the inbox below.

   Until a real access key is pasted into contact.html, this falls back to
   opening the visitor's mail client, so the form is never simply dead. */
const contactForm = document.getElementById('contact-form')

if(contactForm){
    const status  = document.getElementById('contact-status')
    const name    = document.getElementById('contact-name')
    const email   = document.getElementById('contact-email')
    const message = document.getElementById('contact-message')
    const button  = contactForm.querySelector('.contact__submit')
    const keyEl   = document.getElementById('contact-key')

    const ADDRESS     = 'makgwatatumelo46@gmail.com'
    const PLACEHOLDER = 'PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE'

    const setStatus = (text, kind) => {
        status.textContent = text
        status.classList.toggle('is-error', kind === 'error')
        status.classList.toggle('is-success', kind === 'success')
    }

    const validate = () => {
        const fields = [name, email, message]
        fields.forEach(f => f.classList.remove('is-invalid'))

        const missing = fields.filter(f => !f.value.trim())
        if(missing.length){
            missing.forEach(f => f.classList.add('is-invalid'))
            missing[0].focus()
            setStatus('Please fill in every field before sending.', 'error')
            return false
        }

        // Deliberately loose: just enough to catch a typo, not to reject
        // unusual but valid addresses.
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){
            email.classList.add('is-invalid')
            email.focus()
            setStatus('That email address does not look right.', 'error')
            return false
        }
        return true
    }

    // No key configured yet: compose the message in the visitor's mail app.
    const sendViaMailClient = () => {
        const subject = `Portfolio enquiry from ${name.value.trim()}`
        const body    = `${message.value.trim()}\n\n---\nFrom: ${name.value.trim()}\nEmail: ${email.value.trim()}`

        // Set the status first. Handing off to a mail client can navigate away
        // or be blocked outright, and either way the message should be shown.
        setStatus('Opening your email app. If nothing happens, email me directly at ' + ADDRESS + '.')

        window.location.href = `mailto:${ADDRESS}`
            + `?subject=${encodeURIComponent(subject)}`
            + `&body=${encodeURIComponent(body)}`
    }

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        if(!validate()) return

        if(!keyEl || !keyEl.value || keyEl.value === PLACEHOLDER){
            sendViaMailClient()
            return
        }

        button.disabled = true
        const original = button.textContent
        button.textContent = 'Sending...'
        setStatus('Sending your message...')

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(Object.fromEntries(new FormData(contactForm)))
            })
            const result = await response.json().catch(() => ({}))

            if(response.ok && result.success !== false){
                contactForm.reset()
                setStatus('Thank you. Your message has been sent, I will get back to you shortly.', 'success')
            } else {
                setStatus('Something went wrong sending that. Please email me directly at ' + ADDRESS + '.', 'error')
            }
        } catch (err) {
            // Offline, blocked, or the relay is unreachable.
            setStatus('Could not reach the mail service. Please email me directly at ' + ADDRESS + '.', 'error')
        } finally {
            button.disabled = false
            button.textContent = original
        }
    })

    // Clear the warning state as soon as the visitor starts fixing it.
    ;[name, email, message].forEach(field => {
        field.addEventListener('input', () => {
            if(field.classList.contains('is-invalid')){
                field.classList.remove('is-invalid')
                setStatus('')
            }
        })
    })
}

/* Draw every icon last, so JS-generated cards are covered too. */
renderIcons()
