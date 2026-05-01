# Deploying caramel to Vercel

Pure static HTML — no build step, no framework. Pick whichever flow you prefer.

---

## Option 1 — Drag-and-drop (easiest, no terminal)

1. Go to https://vercel.com/new
2. Sign up / log in (use the GitHub or Google option, it's fastest)
3. Click **"Other"** under "Clone Template" → it'll offer an upload zone, OR
4. Drag this entire **`site/`** folder onto the page
5. Vercel detects no framework, treats it as a static site, and deploys
6. You get a URL like `caramel-portfolio.vercel.app` in ~30 seconds

To update later: just drag the folder in again, or set up the GitHub flow below.

---

## Option 2 — Vercel CLI (fastest for repeat deploys)

```bash
# one-time install
npm i -g vercel

# from inside the site/ folder
cd site
vercel

# follow the prompts:
#   ? Set up and deploy?            yes
#   ? Which scope?                  (your account)
#   ? Link to existing project?     no
#   ? What's your project's name?   caramel
#   ? In which directory is your code located?  ./
#   ? Want to override settings?    no

# when you're happy, push it to production:
vercel --prod
```

Subsequent deploys are just `vercel --prod` from the same folder.

---

## Option 3 — GitHub → Vercel (best for ongoing work)

1. Put the `site/` folder contents into a GitHub repo (the contents — `index.html` should be at the repo root, not nested)
2. On https://vercel.com/new, click "Import Git Repository"
3. Pick the repo, hit Deploy
4. Every `git push` to main re-deploys automatically

---

## What's in this folder

```
site/
├── index.html                # main portfolio
├── barters.html              # case study 01
├── girl-and-bird.html        # case study 02
├── oscar-season.html         # case study 03
├── help-james.html           # case study 04
├── gosh-copenhagen.html      # case study 05
├── styles/
│   └── caramel.css           # shared brand styles (fonts, animations, components)
├── assets/
│   ├── barters-storefront.jpg
│   ├── barters-tote.jpg
│   ├── barters-cupcakes.jpg
│   ├── barters-halong-bay.jpg
│   └── barters-gift-cards.jpg
├── vercel.json               # clean URLs + cache headers
└── DEPLOY.md                 # this file
```

`vercel.json` enables clean URLs — so `caramel.vercel.app/barters` works (no `.html` needed).

---

## Custom domain

Once deployed, you can add a custom domain in the Vercel dashboard:

1. Project → Settings → Domains
2. Add your domain (e.g. `caramel.ie` or `inescaramelo.com`)
3. Vercel walks you through DNS — usually one A record or CNAME

Free SSL is automatic.

---

## Things to update before going live

- [ ] Replace the gradient placeholder in **About** with your portrait photo
- [ ] Drop real images into the four case study placeholders (girl-and-bird, oscar-season, help-james, gosh-copenhagen)
- [ ] Replace the inline SVG logo with your real `caramel` mark — export from Affinity as PNG (transparent) or SVG, save as `assets/logo.png` (or `.svg`), then swap the `<svg>...</svg>` blocks in nav/hero/footer for `<img src="assets/logo.png" alt="caramel" width="36" height="36" />`
- [ ] Update the Instagram and LinkedIn handles in **Contact** (currently placeholders)
- [ ] Phone number formatting if needed
- [ ] (Optional) swap the gift-cards video stills for cleaner stills if "Give th…" caption bothers you

## Local preview

Open `site/index.html` directly in a browser — works fine. Or run any static server:

```bash
# Python
python3 -m http.server 8000
# then visit http://localhost:8000

# Node
npx serve .
```
