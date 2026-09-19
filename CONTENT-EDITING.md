# Content Editing Guide: Talking Her Sh*t

This guide is written for someone who is NOT a developer.
You should only ever need to edit ONE file: **`config/site.config.js`**

One rule above all others: everything on the site must be true. No invented
numbers, quotes, or testimonials. If a claim can't be traced to a real
episode, release, or source, leave it out.

Keep the show evergreen. Do not add release dates, a launch year, episode
numbering, or copy about when Yanelis started, her first run, or how the show
has grown. Lead with the guest, subject, and reason to watch or listen.

The voice is confident and provocative. Lead with a specific question or
personal stake, then back it up with real guests and topics. Let the show
name carry the attitude. Avoid generic brand slogans, invented confessions,
fake exclusivity, and promises the episode cannot deliver. Keep button
labels direct so visitors know what happens next.

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
headline: "Success looks good.\nWhat does it cost?"
```

### Hero subheadline (the smaller text under the headline)
Find: `subheadline:`

### Host section text
Find: `about:` and edit `heading:` and `body:`. Keep the bio in the present tense.

---

## The "At the mic" strip

Find: `guestCredits:`. This is the credibility strip below the featured video.
Keep it to 4 or 5 real guests, described the way their episodes describe them:

```js
{ name: "OG Vinchenzo", role: "Grammy-winning engineer and producer" },
```

---

## Updating the featured conversation

Find: `latestEpisode:`

This is the feature near the top of the page. It plays on the page.
The hero and host buttons both point to `#latest`, so keep those destinations
as they are when replacing the featured video:

```js
latestEpisode: {
  label:       "Start Here",
  title:       "Your Episode Title",
  description: "One or two sentences on what the episode covers.",
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

## Adding a selected conversation

Find: `episodes:` (the list under "Let's get into it."). Order by the
conversations you want to feature, rather than presenting a chronology:

```js
{
  title:       "Your Episode Title",
  category:    "industry",
  topic:       "Production / The business",
  description: "One sentence on what makes this one worth a listen.",
  duration:    "26 min",
  url:         "https://..."
},
```

To remove an episode, delete its whole `{ ... },` block. Durations help
listeners choose an episode; release dates and origin stories stay off the page.

Use `category: "industry"` for the business, production, or culture of music,
and `category: "personal"` for personal stories, mental health, and audience
questions. The collection filters use these exact values. `topic` is the
short subject line displayed at the top of each card. Keep it specific.

The standalone quote section and share-card download have been removed.

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
Apple Podcasts is currently hidden because the supplied show URL returns
a not-found page. Verify a replacement URL before enabling it again.

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

This photo leads the page. Check both the desktop portrait and phone crop
when replacing it. Keep the host's face clear of the logo and caption.

---

## Connecting the newsletter form

Find: `newsletter:` and set `actionUrl`.

Until `actionUrl` is filled in, the page shows a working "Subscribe on
YouTube" button using `socialLinks.youtube.url`. It does not advertise
unfinished features or imply that an email signup has been completed.

Ask your developer to create a Formspree account and paste the endpoint:
```js
newsletter: {
  actionUrl: "https://formspree.io/f/abcdefgh",
}
```

If an email provider is connected, update `subtext` to describe the actual
email subscription. Do not promise a release schedule unless one is confirmed.

---

## Changing the contact email

Find: `footer:` then `contactEmail:`. It is used in the footer, the
partnerships button, and the guest/topic suggestion link.

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
