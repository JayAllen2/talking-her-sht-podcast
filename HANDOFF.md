# Developer Handoff: Talking Her Sh*t

> **Redesign note (October 2026):** this file predates a restructure driven by
> a design critique (17 sections → 9, real content, rebuilt hero, a11y pass).
> Sections 4 and 6 below (episodes, quiz) describe fields that no longer exist
> — see `config/site.config.js` directly for the current schema
> (`latestEpisode`, `episodes`, `highlights`, `newsletter`). Everything else
> in this file (running locally, deploying, asset replacement, GitHub push)
> is still accurate.

## 1. What the site is

A one-page luxury podcast landing site for **Talking Her Sh*t by Miss Yanelis**.
Static HTML/CSS/JS. No build step required. Reads all content from `config/site.config.js`.

Visual direction: Luxury Barbiecore · Y2K pink chrome · Black glass · Premium entertainment brand.

---

## 2. How to run locally

```bash
# Option A: Node
npx serve .

# Option B: Python
python -m http.server 8000

# Option C: VS Code
Install "Live Server" extension → Right-click index.html → Open with Live Server
```

---

## 3. How to deploy

See **SETUP.md** for step-by-step instructions for:
- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

All require only an `index.html` at the root: no build step.

---

## 4. How to edit podcast links

Open `config/site.config.js`. Find `podcastPlatforms`:

```js
podcastPlatforms: [
  { label: "Spotify", url: "https://open.spotify.com/show/YOUR_ID", enabled: true },
  ...
]
```

Replace each `url` value. Set `enabled: false` to hide a platform button.

---

## 5. How to edit social links

In `config/site.config.js`, find `socialLinks`:

```js
socialLinks: {
  instagram: { label: "Instagram", url: "https://www.instagram.com/missyanelis/", enabled: true },
  tiktok:    { label: "TikTok",    url: "https://tiktok.com/@yourhandle",          enabled: true },
  ...
}
```

---

## 6. How to edit episodes

In `config/site.config.js`, find `featuredEpisodes`. Each episode is an object:

```js
{
  id:            "ep004",
  episodeNumber: "EP 004",
  title:         "Episode Title Here",
  description:   "Episode description here.",
  duration:      "44 min",
  moodTag:       "Real Talk",
  listenUrl:     "https://open.spotify.com/episode/...",
  watchUrl:      "https://youtube.com/watch?v=...",
  shareUrl:      "https://...",
  thumbnailPath: "./assets/images/episodes/ep004.jpg",
  featured:      true
}
```

Add new episodes to the array. Set `featured: false` to hide one.

---

## 7. How to update images and assets

**Portrait (Miss Yanelis):**
Replace `assets/images/final/yanelis-portrait.jpg` with the new photo.
Keep the same filename, or update `assets.portrait.path` in the config.

**Logo:**
Replace `assets/logos/final/talking-her-sht-logo-hq.png`.
Must be a transparent PNG. Do not use a JPEG or screenshot.

**Mic / CD:**
Replace `assets/images/final/mic-hq.png` or `cd-hq.png`.
Must be transparent PNGs. Do not compress to JPEG (loses transparency).

**Episode thumbnails:**
Save to `assets/images/episodes/ep-XXX.jpg` and set `thumbnailPath` in the config.

---

## 8. How to update the audio teaser

1. Export a 15-second MP3 clip.
2. Save it to `assets/audio/teaser.mp3`.
3. Update `hero.audioTeaserFile` in the config if you use a different filename.
4. Update `hero.audioTeaserDuration` to match the length.

Currently the teaser button shows a simulated progress bar. To connect real audio playback, find `toggleTeaser()` in `index.html` and add `new Audio(hero.audioTeaserFile).play()`.

---

## 9. How to update newsletter / topic forms

In `config/site.config.js`, find `forms`:

```js
forms: {
  newsletter: {
    actionUrl: "https://formspree.io/f/YOUR_FORM_ID",
    provider:  "formspree"
  },
  topicSubmission: {
    actionUrl: "https://formspree.io/f/YOUR_FORM_ID",
    provider:  "formspree"
  }
}
```

Replace `actionUrl` with your provider's endpoint. Once set, form submissions POST to that URL automatically.

---

## 10. How to connect real form providers

**Formspree (recommended: easiest):**
1. Create account at formspree.io
2. Create a new form → copy the endpoint URL
3. Paste into `forms.newsletter.actionUrl`
4. Done: submissions go to email instantly

**Mailchimp:**
1. Create a signup form in Mailchimp
2. Get the "Action URL" from the embedded form code
3. Paste into `forms.newsletter.actionUrl`

**ConvertKit / Beehiiv / Klaviyo:**
Each provides a form action URL. Use the same pattern.

**Google Forms (topic submission):**
1. Create a Google Form
2. Get the pre-filled link or action URL from "Get link"
3. For direct POST: use the form's action URL (inspect the embed code)

**Custom backend:**
Replace `handleTopicSubmit()` and `handleNewsSubmit()` in `index.html` with your own API calls.

---

## 11. How to change SEO metadata

In `config/site.config.js`, find `seo`:

```js
seo: {
  pageTitle:       "Talking Her Sh*t: By Miss Yanelis",
  metaDescription: "Your meta description here.",
  ogImage:         "./assets/logos/final/og-image.jpg",
  keywords:        "..."
}
```

**OG Image:** Create a 1200×630px image and save to `assets/logos/final/og-image.jpg`.

---

## 12. How to push updates to GitHub

```bash
git add .
git commit -m "Update episode links and Spotify URL"
git push origin main
```

If using GitHub Pages with automatic deployment, the site updates within 1-2 minutes.

---

## 13. Known placeholder areas

| Area | Status | Action needed |
|------|--------|---------------|
| All platform URLs | `"#"` placeholder | Replace with real URLs |
| Newsletter form | No endpoint | Add Formspree/Mailchimp URL |
| Topic form | No endpoint | Add Formspree URL |
| Episode thumbnails | Empty string | Add artwork JPGs |
| OG image | File missing | Create 1200×630px image |
| Audio teaser | Simulated only | Add real MP3 file |
| TikTok link | Disabled | Enable + add URL when ready |
| Stats numbers | Placeholder | Update with real metrics |

---

## 14. Recommended next steps

1. **Fill in all TODO values** in `config/site.config.js`
2. **Connect Formspree** for newsletter and topic forms
3. **Create OG image** (1200×630px) for social sharing
4. **Add episode thumbnails** to `assets/images/episodes/`
5. **Add teaser MP3** to `assets/audio/`
6. **Set up GitHub Pages** or deploy to Vercel
7. **Add favicon**: save to `assets/logos/final/favicon.ico` and add `<link rel="icon">` to `index.html`
8. **Add Google Analytics** or similar: insert tracking script before `</head>` in `index.html`
9. **Connect poll to real backend** (Firebase/Supabase) for persistent vote tracking
10. **Update stats** in config as real numbers grow
