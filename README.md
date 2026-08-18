# Shaik Arshad — Portfolio

A single-page React portfolio built with Vite, styled after a BI report: a
cover page of KPI cards, then pages for skills, projects, credentials, and
contact, navigated with a sticky tab strip (like report page tabs in Power BI).

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/`.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. If your repo is **not** `<your-username>.github.io`, open `vite.config.js`
   and confirm `base` is set correctly (the default `'./'` works for most
   GitHub Pages setups, including project pages).
3. Install the deploy helper (already in `devDependencies`) and add a script,
   or run directly:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```
4. In your repo's **Settings → Pages**, set the source to the `gh-pages`
   branch. Your site will be live at
   `https://<your-username>.github.io/<repo-name>/`.

## Editing content

All page content (name, links, projects, skills, education, certifications)
lives in plain data arrays at the top of `src/App.jsx` — edit those objects
directly, no need to touch the JSX layout below them.
