# Content Editing Guide: Talking Her Sh*t

This guide is written for someone who is NOT a developer.
You should only ever need to edit ONE file: **`config/site.config.js`**

One rule above all others: everything on the site must be true. No invented
numbers, quotes, or testimonials. If a claim can't be traced to a real
episode, release, or source, leave it out.

---

## How to open and edit the config file

1. Open the project folder on your computer
2. Find the file: `config/site.config.js`
3. Open it with any text editor (Notepad, TextEdit, VS Code, etc.)
4. Make your changes: follow the examples below
5. Save the file
6. Refresh the website in your browser to see the change

---

## Changing text on the page

### Hero headline (the big text on the main screen)
Find: `headline:`
Change the text between the quotes. Use `\n` for a new line.
```
headline: "Unfiltered.\nUnbothered.\nUnapologetic."
```

### Hero subheadline (the smaller text under the headline)
Find: `subheadline:`

### Host section text
Find: `about:` and edit `heading:`, `body:`, and `quote:`

---

## The "Guests have included" strip

Find: `guestCredits:`. This is the thin credibility strip under the hero.
Keep it to 4 or 5 real guests, described the way their episodes describe them:

```js
{ name: "OG Vinchenzo", role: "Grammy-winning engineer and producer" },
```

---

## Updating the latest episode

Find: `latestEpisode:`

This is the big feature block near the top of the page. It plays right on
the page, and it also drives the hero's main "Watch Latest Episode" button
(`hero.primaryButtonUrl`) and the Host section's "Watch Her Latest" button
(`about.buttonUrl`). Update all three together when a new episode drops:

```js
latestEpisode: {
  label:       "Latest Episode",
  title:       "Your Episode Title",
  description: "One or two sentences on what the episode covers.",
  date:        "Jun 25, 2026",
  duration:    "26 min",
  source:      "YouTube",
  youtubeId:   "UCpr_kE2s9E",
  watchLabel:  "Watch on YouTube",
  watchUrl:    "https://www.youtube.com/watch?v=UCpr_kE2s9E"
}
```

`youtubeId` is the part after `v=` in the YouTube link. It powers the
on-page player and its thumbnail, so it has to match `watchUrl`.

---

## Adding an episode to the archive

Find: `episodes:` (the list under "Six Conversations"). New episodes go at
the **top** of the list, newest first:

```js
{
  title:       "Your Episode Title",
  description: "One sentence on what makes this one worth a listen.",
  date:        "Jun 25, 2026",
  duration:    "26 min",
  url:         "https://..."
},
```

To remove an episode, delete its whole `{ ... },` block. If the archive
grows past the 2021 to 2022 run, update the section heading in
`index.html` (search for "Six Conversations").

---

## Changing the featured quote

Find: `featuredQuote:`. This is the one oversized quote on the page. It must
come from a real episode, not a made-up testimonial:

```js
featuredQuote: {
  quote:      "A real line from a real episode.",
  credit:     "The latest episode, with Guest Name",
  linkLabel:  "Watch",
  url:        "https://...",
  shareImage: "./assets/logos/final/share-quote-kruziano.jpg"
}
```

`shareImage` is a generated 1080 by 1080 downloadable image (the "Save
image to share" link under the quote). It is not a photo you can just swap.
If you change the quote text, ask your developer to regenerate the image,
or the share image will still show the old quote.

---

## Partnerships & Press block

Find: `business:`. The button emails `footer.contactEmail` with the
`subject` line filled in. Edit `heading`, `text`, and `buttonText` freely.

---

## Changing podcast platform links

Find: `podcastPlatforms:`

```js
{ label: "YouTube", url: "https://www.youtube.com/@yourchannel", enabled: true },
```

To **hide** a platform button, change `enabled: true` to `enabled: false`.

---

## Changing the Instagram / social links

Find: `socialLinks:`

```js
instagram: { label: "Instagram", url: "https://www.instagram.com/yourhandle/", enabled: true },
```

To show TikTok, change `enabled: false` to `enabled: true` and add the URL.

---

## Replacing the portrait photo

1. Save your new photo to: `assets/images/final/`
2. Name it: `yanelis-portrait.jpg` (replacing the old one)
   OR name it something else and update the config:

Find: `portrait:` inside `assets:`
```js
portrait: {
  path: "./assets/images/final/your-new-photo.jpg",
  ...
}
```

This photo is used in two places: the small circular badge in the hero,
and the large photo in the Host section.

---

## Connecting the newsletter form

Find: `newsletter:` and set `actionUrl`.

Until `actionUrl` is filled in, the page does NOT show a signup form. It
shows an "Email To Get Notified" button instead, so nobody is told they
signed up for a list that doesn't exist yet.

Ask your developer to create a Formspree account and paste the endpoint:
```js
newsletter: {
  actionUrl: "https://formspree.io/f/abcdefgh",
}
```

The `subtext` line currently says there's no fixed schedule. Change it once
a regular release day is confirmed.

---

## Changing the contact email

Find: `footer:` then `contactEmail:`. It is used in the footer, the
partnerships button, the newsletter fallback, and the "Got a topic" line.

---

## The pre-show soundtrack

Find `soundtrack:` in the configuration. Change `title` and `path` to replace
the track, or set `enabled: false` to remove the music controls. `volume` is
the initial level from 0 to 1; returning visitors keep their own level.

The supplied TALKINTHAT master is preserved outside the site. The website
uses a smaller MP3 with a quieter mix and a gentle ending for repeat playback.
It does not download until a visitor enables music. First-time visitors tap
**Sound on**; returning visitors' choice is remembered, subject to their
browser's playback rules. The small speaker button in the corner opens
the sound switch and volume control. The full panel stays hidden otherwise.

Episodes always take priority. Starting the on-page YouTube player or native
audio/video pauses the soundtrack immediately. Pausing an episode keeps the
music quiet. At the end, music returns only if it was enabled. **Resume music**
pauses the on-page episode first. Opening a supported listening or social
platform also pauses the track; it stays paused when the visitor returns
until they explicitly resume it. Another website's playback cannot be
monitored, so this handoff is intentionally conservative.

Switching away from the site pauses background music. Turning sound off is
remembered across visits. No music preference is sent to a server.

---

## Things to NEVER change

- Never delete `window.SITE_CONFIG = {` at the top
- Never delete the closing `};` at the bottom
- Never remove the quotes around text values
- Never change the file name or move it out of the `config/` folder
- If something breaks, undo your last change (Ctrl+Z / Cmd+Z) and save again

---

## Need help?

Give this file and the `config/site.config.js` file to your developer.
They can make the change for you in under 5 minutes.
