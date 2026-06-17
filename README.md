# Swan Valley Brew Co. & Flea Market

One-page site for the coffee shop + flea market in Forsyth, MO.
Plain HTML / CSS / JS — no build step, no dependencies. Fonts load from Google Fonts.

## Files

```
swan-valley-site/
├── index.html      # markup
├── styles.css      # all styling
├── script.js       # live open/closed status + today highlight
└── assets/
    ├── logo-mark.png        # swan mark (nav + hero)
    ├── logo-full.png        # full logo (footer)
    ├── logo-mark-cream.png  # cream mark (reviews band)
    └── favicon.png
```

## Run locally

Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Push to GitHub

```bash
cd swan-valley-site
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

To publish free with GitHub Pages: in the repo, go to
**Settings → Pages → Build and deployment → Source: Deploy from a branch**,
pick `main` / `root`, and save. The site goes live at
`https://YOUR_USERNAME.github.io/YOUR_REPO/`.

## Editing notes

- **Hours** live in `index.html` inside `.receipt`. The `data-day` attribute
  (0 = Sun … 6 = Sat) drives the "today" highlight; keep it in sync if you
  change days. Open/close times are set in `script.js` (`OPEN_FROM`/`OPEN_TO`).
- **Menu / market categories** (the chip lists) are placeholders — swap in
  what you actually carry.
- **Reviews link** points to a Google search; replace it with your direct
  Google Business profile URL when you have it.
- **Colors** are CSS variables at the top of `styles.css`
  (`--honey`, `--pine`, etc.).
