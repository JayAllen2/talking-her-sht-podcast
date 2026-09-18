# Content Editing Guide: Talking Her Sh*t

This guide is written for someone who is NOT a developer.
You should only ever need to edit ONE file: **`config/site.config.js`**

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
```
subheadline: "Bold conversations, real stories, and the kind of energy you cannot ignore."
```

### About section text
Find: `about:` and edit `heading:`, `body:`, and `quote:`

---

## Changing podcast platform links

Find: `podcastPlatforms:`

Replace each `url: "#"` with the real link:
```js
{ label: "Spotify", url: "https://open.spotify.com/show/YOURSHOWID", enabled: true },
{ label: "Apple",   url: "https://podcasts.apple.com/podcast/YOURSHOW", enabled: true },
```

To **hide** a platform button, change `enabled: true` to `enabled: false`.

---

## Changing the Instagram / social links

Find: `socialLinks:`

Update the `url` next to `instagram:`:
```js
instagram: { label: "Instagram", url: "https://www.instagram.com/yourhandle/", enabled: true },
```

To show TikTok, change `enabled: false` to `enabled: true` and add the URL.

---

## Adding or updating episodes

Find: `featuredEpisodes:`

To add a new episode, copy an existing episode block and paste it with new information:
```js
{
  id:            "ep004",
  episodeNumber: "EP 004",
  title:         "Your Episode Title",
  description:   "Your episode description here.",
  duration:      "44 min",
  moodTag:       "Hot Takes",
  listenUrl:     "https://open.spotify.com/episode/...",
  watchUrl:      "https://youtube.com/watch?v=...",
  shareUrl:      "https://...",
  thumbnailPath: "",
  featured:      true
},
```

To **hide** an episode, change `featured: true` to `featured: false`.

---

## Changing the "This Week" announcement strip

Find: `upcomingEpisode:`

```js
upcomingEpisode: {
  show:    true,
  label:   "This Week On Talking Her Sh*t",
  title:   "\"Your New Episode Title\"",
  dropDay: "Drops Friday",
}
```

To **hide** the strip entirely, change `show: true` to `show: false`.

---

## Changing stats (downloads, episodes, views)

Find: `stats:`

```js
stats: [
  { number: "50K+", label: "Downloads"   },
  { number: "100+", label: "Episodes"    },
  { number: "1M+",  label: "Views"       },
  { number: "24/7", label: "New Moments" }
]
```

Change the `number` and `label` values to whatever is current.

---

## Changing the poll question and options

Find: `poll:`

```js
poll: {
  question: "What Should We Talk About Next?",
  options:  ["Relationships", "Friendship", "Soft Life", "Money", "Drama", "Self-Worth", "Hot Takes"]
}
```

Add, remove, or rename options as needed.

---

## Changing the quiz episode recommendations

Find: `quiz:` and then `options:`

Each option has a `title`, `desc`, and `episode`. Update the `episode` text and `url` to point to real episodes.

---

## Replacing the portrait photo

1. Save your new photo to: `assets/images/final/`
2. Name it: `yanelis-portrait.jpg` (replacing the old one)
  : OR: name it something else and update the config:

Find: `portrait:` inside `assets:`
```js
portrait: {
  path: "./assets/images/final/your-new-photo.jpg",
  ...
}
```

---

## Connecting the newsletter or contact forms

Find: `forms:` and update the `actionUrl` for each form.

Ask your developer to create a Formspree account and paste the endpoint URL here.
Example:
```js
newsletter: {
  actionUrl: "https://formspree.io/f/abcdefgh",
}
```

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
