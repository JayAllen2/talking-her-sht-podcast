# Deployment Setup: Talking Her Sh*t

The site is a static HTML/CSS/JS project with no build step.
It can be deployed to any static hosting platform.

---

## Local Preview

```bash
# Option A
npx serve .

# Option B
python -m http.server 8000

# Option C: VS Code
Install "Live Server" → Right-click index.html → Open with Live Server
```

---

## GitHub Pages

1. Push the project to a GitHub repository
2. Go to **Settings → Pages**
3. Set **Source** to `Deploy from a branch`
4. Set **Branch** to `main`, folder to `/ (root)`
5. Click **Save**
6. Site is live at: `https://yourusername.github.io/repo-name/`

**Custom domain:**
- Add a `CNAME` file to the project root containing your domain (e.g. `talkinghersh-t.com`)
- Point your domain's DNS to GitHub Pages (see GitHub docs)

---

## Vercel (recommended: fastest)

1. Push to GitHub
2. Go to vercel.com → **New Project**
3. Import your GitHub repository
4. Framework Preset: **Other** (static)
5. No build command needed: leave blank
6. Output directory: leave as default (`.`)
7. Click **Deploy**

**Auto-deploy:** Every `git push` to `main` triggers a new deploy automatically.

**Custom domain:** Add in Vercel dashboard → Domains.

---

## Netlify

1. Push to GitHub (or drag-and-drop the project folder to netlify.com)
2. Go to netlify.com → **Add new site → Import an existing project**
3. Connect GitHub and select the repository
4. Build command: leave **empty**
5. Publish directory: leave as `.` (root)
6. Click **Deploy site**

**Auto-deploy:** Every push to `main` triggers a new deploy.

**Custom domain:** Site settings → Domain management.

---

## Cloudflare Pages

1. Go to dash.cloudflare.com → **Pages → Create a project**
2. Connect GitHub repository
3. Build command: leave **empty**
4. Build output directory: `/`
5. Deploy

---

## Manual Upload (FTP / cPanel)

Upload the entire project folder contents to your web host's `public_html` or `www` directory.
Make sure `index.html` is at the root.

---

## Asset Checklist Before Deploying

Confirm all assets are in place:

- [ ] `assets/logos/final/talking-her-sht-logo-hq.png`
- [ ] `assets/images/final/mic-hq.png`
- [ ] `assets/images/final/cd-hq.png`
- [ ] `assets/images/final/yanelis-portrait.jpg`
- [ ] `assets/icons/source/icons-sheet-a.png`
- [ ] `assets/icons/source/icons-sheet-b.png`
- [ ] `config/site.config.js`: all TODO values replaced with real ones
- [ ] OG image at `assets/logos/final/og-image.jpg` (1200×630px)
- [ ] Audio teaser at `assets/audio/teaser.mp3` (if using)

---

## Environment Variables

This project does not use environment variables. All configuration is in `config/site.config.js`.

---

## HTTPS

All major platforms (Vercel, Netlify, GitHub Pages, Cloudflare Pages) provide free HTTPS automatically.
No setup needed.

---

## Performance Notes

- Google Fonts are loaded asynchronously: no render-blocking
- All brand assets are preloaded via standard `<img>` with browser caching
- Particle canvas runs at 60fps via `requestAnimationFrame`
- Images: keep PNGs under 3MB, JPGs under 500KB
- Do NOT convert transparent PNGs to JPEG: they will show white boxes
