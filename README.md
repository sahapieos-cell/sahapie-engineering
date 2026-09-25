# Sahapie Engineering — Netlify-ready Phase 1

This package is based on the latest Sahapie Engineering Motion Site source (version 47, retrieved 25 September 2026). The original Home and Contact Us markup, styles, scripts, and local image/video assets are in `site/`. Five additional routes have Coming Soon pages. Header and footer navigation to these routes is available on both live pages.

## Run and deploy

1. Install Node.js 20 or later.
2. Run `npm ci` then `npm run build`.
3. Upload this project folder to a Git repository connected to Netlify, or use Netlify CLI to deploy `dist/` after building.

Netlify build command: `npm run build`  
Netlify publish directory: `dist`

The project has no npm dependencies and requires no environment variables. Local images and project videos are bundled in `site/assets/`. Google Fonts, the embedded Google Map, and the original externally hosted WhatsApp/LINE icon URLs still require a network connection. The original Contact form is a front-end interaction; connect it to an email or form service before relying on it to deliver inquiries. WhatsApp and LINE links in the source are marked pending because no destination URLs were supplied.

Edit `site/index.html`, `site/contact/index.html`, or the Coming Soon pages under `site/<route>/`. Run `npm run build` after edits. The original `site/contact.html` is retained for source continuity; the clean URL `/contact/` is the live route.
