# Talking Her Sh*t: By Miss Yanelis

Official website for the **Talking Her Sh*t** podcast.

> Unfiltered. Unbothered. Unapologetic.

---

## Quick Start

Open `index.html` directly in a browser, or serve locally:

```bash
# Any of these work:
npx serve .
python -m http.server 8000
npx live-server
```

Then open: `http://localhost:8000`

---

## Edit Content

All website content (links, episodes, copy, platform URLs) lives in one place:

```
config/site.config.js
```

See **CONTENT-EDITING.md** for plain-language instructions written for a non-technical person.

---

## Deploy

See **SETUP.md** for deployment to GitHub Pages, Vercel, and Netlify.

---

## Documentation

| File | For | Contents |
|------|-----|----------|
| `IMPLEMENTATION-PLAN.md` | Project lead | Full asset manifest, phased build plan, technical notes |
| `HANDOFF.md` | Developer | How to edit, deploy, and extend |
| `CONTENT-EDITING.md` | Client | Plain language content guide |
| `SETUP.md` | Developer | Deployment step by step |

---

## Project Structure

```
├── index.html                    # Deployable website (reads from config)
├── config/
│   └── site.config.js            # ← ALL editable content lives here
├── assets/
│   ├── logos/final/              # Approved logo files (transparent HQ PNG)
│   ├── images/final/             # Portrait + hero assets (approved HQ)
│   └── icons/source/             # Icon sprite sheets (transparent HQ PNG)
├── Talking Her Shit.dc.html      # Design source file (for future design edits)
├── README.md                     # This file
├── IMPLEMENTATION-PLAN.md        # Full implementation plan + asset manifest
├── HANDOFF.md                    # Developer guide
├── CONTENT-EDITING.md            # Client content guide (plain language)
└── SETUP.md                      # Deployment instructions
```

---

## Design Source

The design lives in `Talking Her Shit.dc.html` (a Design Component). Use this file to make visual changes, then export a new `index.html`.

---

## Key TODOs Before Launch

Search `config/site.config.js` for `TODO:`: each one needs a real value:

- [ ] Spotify URL
- [ ] Apple Podcasts URL
- [ ] YouTube URL
- [ ] Amazon Music URL
- [ ] Instagram URL (already set)
- [ ] Newsletter form endpoint
- [ ] Topic submission form endpoint
- [ ] OG image (1200×630px)
- [ ] Audio teaser MP3

---

## Tech Stack

Static HTML + CSS + Vanilla JavaScript. No build step, no framework, no dependencies beyond Google Fonts. Deployable anywhere.
