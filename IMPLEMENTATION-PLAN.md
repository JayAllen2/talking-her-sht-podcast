# IMPLEMENTATION PLAN
## Talking Her Sh*t by Miss Yanelis

**Project type:** Static one page marketing site
**Stack:** HTML5, CSS3, Vanilla JavaScript (ES5 compatible)
**Dependencies:** Google Fonts (Montserrat) only
**Build step:** None required
**Status:** Live at https://jayallen2.github.io/talking-her-sht-podcast/, populated with real content.

> **Redesign note (October 2026):** the site was restructured following a
> design critique — down from 17 sections to 9, real episode/host content
> replacing placeholders, a rebuilt hero layout, and an accessibility pass.
> Several sections below (Quiz, Poll, Reaction Wall, Clips Wall, Stats,
> Topic Submission, the absolute-positioned hero) **no longer exist** in
> `index.html`. This document is kept for historical asset/decision context;
> where it conflicts with the live `index.html`, the code is correct. See
> `config/site.config.js` for the current content model (`latestEpisode`,
> `episodes`, `highlights`, `newsletter` — not `startHereEpisode`,
> `featuredEpisodes`, `quiz`, `poll`, `clips`, `reactions`, `stats`, `forms`).

---

## 1. PROJECT SUMMARY

A single page luxury podcast landing site. The brand direction is Barbiecore Y2K pink chrome on black glass, positioned as a premium entertainment media property rather than a standard podcast page.

All editable content is centralized in one configuration file. No content is hard coded into the page markup.

**Primary conversion goals, in priority order:**
1. Play an episode
2. Follow on a podcast platform
3. Join the newsletter
4. Follow on Instagram
5. Submit a topic

---

## 2. COMPLETE ASSET MANIFEST

### 2.1 Brand assets in use (approved, final)

| File | Path | Size | Format | Used in |
|------|------|------|--------|---------|
| Logo | `assets/logos/final/talking-her-sht-logo-hq.png` | 1115x1411 | PNG, transparent | Hero center |
| Microphone | `assets/images/final/mic-hq.png` | 1024x1536 | PNG, transparent | Hero right, Final CTA right |
| CD | `assets/images/final/cd-hq.png` | 1024x1536 | PNG, transparent | Hero left (rotating) |
| Portrait | `assets/images/final/yanelis-portrait.jpg` | JPG | JPG | About section |
| Icon sheet A | `assets/icons/source/icons-sheet-a.png` | 1024x1536 | PNG, transparent | Reference only |
| Icon sheet B | `assets/icons/source/icons-sheet-b.png` | 1024x1536 | PNG, transparent | Reference only |

**Critical asset rules:**
- Logo, mic, and CD MUST remain transparent PNG. Converting to JPG produces visible black boxes.
- Logo uses `mix-blend-mode: screen` plus a radial feather mask. Replacing it with a non transparent file will break the effect.
- Do not re-export these at lower resolution. They are displayed at up to 640px tall on large screens.

### 2.2 Icon sheet contents (available for future use)

Sheet A contains: microphone, CD, headphones, energy rings, play button, waveform
Sheet B contains: diamond cluster, headphones variant, sparkle burst, podcast icon, play button, energy rings

These are currently reference assets. Community section icons are drawn as inline SVG for crispness at all sizes.

### 2.3 Assets still needed before launch

| Asset | Target path | Spec | Priority |
|-------|-------------|------|----------|
| OG share image | `assets/logos/final/og-image.jpg` | 1200x630px JPG | High |
| Favicon | `assets/logos/final/favicon.ico` | 32x32 and 180x180 | High |
| Audio teaser | `assets/audio/teaser.mp3` | 15 second MP3, under 500KB | Medium |
| Episode art x3 | `assets/images/episodes/ep001.jpg` etc | 16:9, 1280x720px | Medium |
| Clip thumbnails x4 | `assets/images/clips/clip01.jpg` etc | 9:16, 1080x1920px | Low |

### 2.4 Assets NOT for production

These live in `uploads/` and must not be referenced by the site or committed to the production branch:
- Draft and exploratory image generations
- Screenshot captures
- Non transparent versions of brand assets

---

## 3. FILE STRUCTURE

```
/
├── index.html                    Deployable site. Self contained markup + styles + script.
├── config/
│   └── site.config.js            ALL editable content. Single source of truth.
├── assets/
│   ├── logos/final/              Approved logo files
│   ├── images/final/             Hero objects + portrait
│   ├── icons/source/             Icon sprite sheets (reference)
│   ├── images/episodes/          (to create) Episode artwork
│   ├── images/clips/             (to create) Clip thumbnails
│   └── audio/                    (to create) Teaser MP3
├── Talking Her Shit.dc.html      Design source. Edit here for visual changes.
├── README.md                     Quick start
├── IMPLEMENTATION-PLAN.md        This file
├── HANDOFF.md                    Developer reference
├── CONTENT-EDITING.md            Non technical content guide
├── SETUP.md                      Deployment instructions
└── .gitignore
```

---

## 4. PAGE ARCHITECTURE

The page renders in this order. Each section has one focal point and one primary action.

| # | Section | ID | Purpose | Primary action |
|---|---------|-----|---------|----------------|
| 1 | Sticky nav | `main-nav` | Persistent access | Listen Now |
| 2 | Hero | `hero` | Brand impact | Listen Now |
| 3 | Drop strip | `drop-strip` | Urgency, return visits | Notify Me |
| 4 | Start Here | - | Reduce decision fatigue | Play recommended episode |
| 5 | Featured Episodes | `episodes` | Content browsing | Play episode |
| 6 | Clips Wall | - | Social traffic capture | Watch full episode |
| 7 | About | `about` | Trust and connection | Listen to her story |
| 8 | Listen Everywhere | `listen` | Platform conversion | Open platform |
| 9 | Stats | - | Social proof | Passive credibility |
| 10 | Community | `community` | Identity and belonging | Follow on Instagram |
| 11 | Quiz | - | Engagement, episode discovery | Play matched episode |
| 12 | Poll | - | Participation, return loop | Get notified |
| 13 | Reaction Wall | - | Peer social proof | Passive credibility |
| 14 | Topic Submission | - | Audience contribution | Submit topic |
| 15 | Newsletter | - | Audience ownership | Subscribe |
| 16 | Final CTA | `cta` | Last conversion moment | Listen Now |
| 17 | Footer | - | Navigation and legal | Social links |

---

## 5. CONFIGURATION SYSTEM

`config/site.config.js` exposes a single global: `window.SITE_CONFIG`.

`index.html` reads it on `DOMContentLoaded` and populates the DOM. Every value has a safe fallback, so a missing key degrades gracefully rather than breaking the page.

**Config sections:**

| Key | Controls |
|-----|----------|
| `brand` | Site name, byline, tagline, description |
| `assets` | All image paths with approval flags and notes |
| `seo` | Page title, meta description, OG image, keywords |
| `hero` | Headline, subheadline, CTA labels and URLs, audio teaser |
| `upcomingEpisode` | Drop strip content. Set `show: false` to hide. |
| `podcastPlatforms` | Platform buttons. Each has `enabled` toggle. |
| `socialLinks` | Footer and nav social links. Each has `enabled` toggle. |
| `startHereEpisode` | Recommended entry point episode |
| `featuredEpisodes` | Episode array. Each has `featured` toggle. |
| `clips` | Clip wall cards |
| `about` | Heading, body, pull quote, CTA |
| `stats` | Stat cards |
| `quiz` | Question and 5 personality options with episode matches |
| `poll` | Question and vote options |
| `reactions` | Community quote cards |
| `forms` | Newsletter and topic submission endpoints |
| `footer` | Copyright, tagline, contact |

---

## 6. IMPLEMENTATION PHASES

### Phase 1: Content population (2 to 3 hours)

Open `config/site.config.js` and search for `TODO:`. Each instance needs a real value.

**Required:**
1. Spotify show URL
2. Apple Podcasts URL
3. YouTube channel URL
4. Amazon Music URL
5. All episode `listenUrl`, `watchUrl`, `shareUrl` values
6. Start Here episode URLs
7. Quiz episode recommendation URLs
8. Real stat numbers

**Optional but recommended:**
9. TikTok URL (set `enabled: true`)
10. Contact email
11. Upcoming episode title and drop day

### Phase 2: Asset production (2 to 4 hours)

1. Create OG image, 1200x630px, save as `assets/logos/final/og-image.jpg`
2. Create favicon set, save to `assets/logos/final/`
3. Add favicon link tags to `index.html` inside `<head>`
4. Export 15 second teaser MP3 to `assets/audio/teaser.mp3`
5. Produce episode artwork at 16:9, populate `thumbnailPath` in each episode object
6. Produce clip thumbnails at 9:16 (optional; gradient placeholders look intentional)

### Phase 3: Form integration (1 hour)

**Recommended provider: Formspree**

1. Create a Formspree account
2. Create two forms: Newsletter and Topic Submission
3. Copy each endpoint URL into `config/site.config.js` under `forms`
4. Test both submissions

Alternatives that work with the same pattern: Mailchimp, ConvertKit, Klaviyo, Beehiiv, Airtable, Google Forms.

The form handlers in `index.html` (`handleNews`, `handleTopic`) POST a `FormData` payload to the configured `actionUrl`. If no URL is set, the form shows a success state without sending. This is intentional so the page never appears broken pre launch.

### Phase 4: Audio teaser wiring (30 minutes)

The teaser button currently animates a simulated 15 second progress bar. To connect real audio:

In `index.html`, find `function toggleTeaser()`. Replace the `setInterval` simulation with:

```js
var audio = new Audio(hero.audioTeaserFile);
audio.play();
audio.ontimeupdate = function () {
  var pct = (audio.currentTime / audio.duration) * 100;
  document.getElementById('teaser-bar').style.width = pct + '%';
};
audio.onended = function () { /* reset UI */ };
```

### Phase 5: Analytics (30 minutes)

Insert a tracking script before `</head>` in `index.html`.

**Recommended events to track:**
- `listen_click` on any Listen Now button
- `platform_click` with platform label
- `episode_play` with episode ID
- `quiz_complete` with selected personality
- `poll_vote` with selected option
- `newsletter_submit`
- `topic_submit`

### Phase 6: Deployment (30 minutes)

See `SETUP.md`. Vercel is the fastest path: connect the repo, no build command, deploy.

Pre deploy checklist:
- [ ] All TODO values replaced
- [ ] Forms tested and receiving submissions
- [ ] OG image present and correct dimensions
- [ ] Favicon present and linked
- [ ] Tested on Chrome, Safari, Firefox
- [ ] Tested on iOS Safari and Android Chrome
- [ ] No horizontal scroll on any breakpoint
- [ ] No console errors

---

## 7. TECHNICAL NOTES

### Responsive breakpoints

| Breakpoint | Behavior |
|------------|----------|
| Above 1100px | Full desktop layout, mic at full height |
| 1100px and below | Mic scales down to prevent overlap with centered content |
| 860px and below | Mic hidden, nav collapses to hamburger, all grids stack to single column, clips go 2 up |
| 540px and below | Clips stack to single column, stats go 2 up, poll stacks |

### Hero composition rules (superseded — kept for history)

**This section describes the pre-redesign hero and is no longer accurate.**
The original absolute two-zone layout (logo top-anchored at `6vh`, content
bottom-anchored at `10vh`) overlapped at real-world viewport sizes — a design
critique caught the logo's byline text ghosting behind the headline at
1280×720, and the CD graphic overlapping the headline entirely on mobile
(it had no breakpoint hiding it, unlike the mic).

The current hero (`#hero .hero-grid` in `index.html`) uses a CSS grid instead:
text in one column, the mic art in a separate column, single-column stack on
mobile. This guarantees the two can never overlap at any viewport size,
instead of relying on vh-based math staying clear by coincidence. The CD
graphic was removed entirely (redundant with the mic, and its removal is what
actually fixed the mobile overlap, not a breakpoint patch).

The logo still uses `mix-blend-mode: screen` — that part is unchanged and
still eliminates the PNG's black bounding box. Do not remove it.

### Animation inventory

| Effect | Implementation | Performance |
|--------|----------------|-------------|
| Particle field | Canvas, 38 particles, rAF | Low cost |
| Cursor glow | CSS transform, rAF, lerped | Low cost |
| Hero parallax | CSS transform, rAF, lerped | Low cost |
| CD rotation | CSS `@keyframes` | GPU accelerated |
| Mic float | CSS `@keyframes` | GPU accelerated |
| Logo float | CSS `@keyframes` | GPU accelerated |
| 3D card tilt | JS mousemove, CSS perspective | Per card, only on hover |
| Card shimmer sweep | CSS `@keyframes` pseudo element | GPU accelerated |
| Ambient blobs | CSS `@keyframes` with blur | Moderate; blur is expensive on low end devices |
| Scroll reveal | IntersectionObserver-free scroll listener, passive | Low cost |

If performance issues appear on low end mobile, the ambient blobs (`.blob`) are the first thing to disable via a media query.

### Browser support

Chrome, Safari, Firefox, Edge, current and previous major versions. iOS Safari 14+. Android Chrome 90+.

`mix-blend-mode`, `backdrop-filter`, `aspect-ratio`, and CSS `mask-image` are all used. All have webkit prefixes where needed.

---

## 8. KNOWN PLACEHOLDERS

| Item | Current state | Blocks launch? |
|------|---------------|----------------|
| All platform URLs | `"#"` | Yes |
| Episode URLs | `"#"` | Yes |
| Newsletter endpoint | Empty | Yes |
| Topic form endpoint | Empty | Yes |
| OG image | File missing | Yes, for social sharing |
| Favicon | Not linked | Recommended |
| Audio teaser | Simulated progress | No, degrades gracefully |
| Episode thumbnails | Gradient placeholders | No, placeholders look intentional |
| Clip thumbnails | Gradient placeholders | No |
| Stats | Placeholder numbers | No, but should be real |
| Poll results | Static distribution | No, connect backend later |
| TikTok link | Disabled | No |

---

## 9. FUTURE ENHANCEMENTS

Ordered by impact to effort ratio.

1. **Real poll backend** (Firebase or Supabase). Persists votes, shows live results. Roughly 4 hours.
2. **Episode filter logic.** The filter pills are currently visual. Wire them to filter the episode array by `moodTag`. Roughly 1 hour.
3. **Embedded player.** Replace the mini player with a real Spotify or YouTube embed. Roughly 2 hours.
4. **Episode detail pages.** Move from single page to a small multi page site as the catalog grows. Roughly 8 hours.
5. **CMS integration.** If the client wants to add episodes without touching code, connect the config to a headless CMS such as Sanity or Contentful. Roughly 12 hours.
6. **Merch section.** If commerce is on the roadmap, a Shopify Buy Button integrates cleanly with the existing card system.

---

## 10. HANDOFF CHECKLIST

**Design side, complete:**
- [x] Visual direction approved
- [x] Hero composition locked and centered
- [x] All assets cut out cleanly with no visible boxes or edges
- [x] Responsive behavior defined across four breakpoints
- [x] Motion system defined and performance tested
- [x] All 17 sections built and populated
- [x] Contrast verified on all text
- [x] No text overlaps any asset

**Engineering side, to do:**
- [ ] Populate all config TODO values
- [ ] Produce and add remaining assets
- [ ] Connect form provider
- [ ] Wire real audio teaser
- [ ] Add analytics
- [ ] Cross browser and cross device QA
- [ ] Deploy to production
- [ ] Connect custom domain

**Client side, to provide:**
- [ ] All podcast platform URLs
- [ ] Episode links and artwork
- [ ] Real stat numbers
- [ ] Preferred email provider account
- [ ] 15 second audio teaser clip
- [ ] Contact email address
- [ ] Domain name

---

## 11. POINTS OF CONTACT

Design source file: `Talking Her Shit.dc.html`
Content owner: Miss Yanelis
Instagram: https://www.instagram.com/missyanelis/
