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

Live on GitHub Pages: **https://jayallen2.github.io/talking-her-sht-podcast/**

Repo: https://github.com/JayAllen2/talking-her-sht-podcast, pushes to `master` redeploy automatically within a minute or two.

See **SETUP.md** for the full deployment guide (GitHub Pages, Vercel, Netlify) and custom domain instructions.

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
│   ├── icons/source/             # Icon sprite sheets (transparent HQ PNG)
│   ├── styles/editorial.css      # Current responsive site design
│   ├── styles/soundtrack.css     # Compact soundtrack control
│   └── scripts/soundtrack.js     # Soundtrack and episode coordination
├── Talking Her Shit.dc.html      # Design source file (for future design edits)
├── README.md                     # This file
├── IMPLEMENTATION-PLAN.md        # Full implementation plan + asset manifest
├── HANDOFF.md                    # Developer guide
├── CONTENT-EDITING.md            # Client content guide (plain language)
└── SETUP.md                      # Deployment instructions
```

---

## Design Source

`Talking Her Shit.dc.html` is the original design-tool export, it predates the
October 2026 content/accessibility redesign described in `IMPLEMENTATION-PLAN.md`
and no longer matches the live layout. Treat `index.html` and
`assets/styles/editorial.css` as the source of truth for the current design;
only use the `.dc.html` file for historical reference.

The current page opens with Yanelis's portrait and the full approved logo,
followed by a large interview player, a collection with topic filters, and
one combined subscription/listening section. The standalone question and
share-card download are intentionally removed. Release dates remain off the site.

---

## Key TODOs Before Launch

Search `config/site.config.js` for `TODO:`: each one needs a real value:

- [x] YouTube and Spotify URLs (real, verified); Apple is hidden until its link is repaired
- [x] Instagram URL (real, show account)
- [x] Featured video + selected conversations, presented without release dates
- [x] OG image, favicon set (generated from brand assets)
- [ ] Amazon Music URL, not found yet, platform button disabled until then
- [ ] Newsletter form endpoint (Formspree or similar)
- [ ] Real download/view counts if you want to display them anywhere
- [ ] Audio teaser MP3, the old simulated-progress-bar teaser was removed as
      part of the redesign (it faked playback with no real audio); if you want
      a real 15s teaser clip, that's a new feature, not a restored one

---

## Tech Stack

Static HTML + CSS + Vanilla JavaScript. No build step, no framework, no dependencies beyond Google Fonts. Deployable anywhere.
