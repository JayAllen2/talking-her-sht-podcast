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

### Host section text
Find: `about:` and edit `heading:`, `body:`, and `quote:`

---

## Updating the latest episode

Find: `latestEpisode:`

This is the one big feature block near the top of the page, and it also
drives the hero's main "Watch Latest Episode" button (`hero.primaryButtonUrl`)
and the Host section's "Watch Her Latest" button (`about.buttonUrl`) — update
all three together when a new episode drops:

```js
latestEpisode: {
  label:       "Latest Episode",
  title:       "Your Episode Title",
  description: "One or two sentences on what the episode covers.",
  date:        "Month Day, Year",
  duration:    "26 min",
  source:      "YouTube",
  watchLabel:  "Watch on YouTube",
  watchUrl:    "https://www.youtube.com/watch?v=..."
}
```

---

## Adding an episode to the archive

Find: `episodes:` — this is the compact list under "More Episodes."
New episodes go at the **top** of the array (newest first):

```js
{
  title:       "Your Episode Title",
  description: "One sentence on what makes this one worth a listen.",
  date:        "Month Day, Year",
  duration:    "26 min",
  url:         "https://..."
},
```

To remove an episode, delete its whole `{ ... },` block.

---

## Changing the "Worth Hearing" highlights

Find: `highlights:` — three short real quotes pulled from actual episodes,
each linking to that episode. Keep these to real hooks from real episodes,
not made-up testimonials:

```js
{
  quote:  "A specific, real line describing what the episode covers.",
  credit: "Episode Title",
  url:    "https://..."
}
```

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

Find: `newsletter:` and update `actionUrl`.

Ask your developer to create a Formspree account and paste the endpoint URL here:
```js
newsletter: {
  actionUrl: "https://formspree.io/f/abcdefgh",
}
```

The `heading` and `subtext` fields are the section's headline and description —
update `subtext` if the release schedule changes (right now it says "no fixed
schedule yet," which is accurate as of the last update — change it once a
regular cadence is confirmed).

---

## Changing the contact email

Find: `footer:` → `contactEmail:`. This appears in the footer and under the
newsletter form ("Got a topic, question, or story? Email...").

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
