# Bathroom Kitchen Home

Website for Bathroom Kitchen Home, a bathroom, kitchen & home renovation store at 98 Cleveland Street, Stones Corner, QLD 4120.

## Stack

Node.js + Express, EJS templates, vanilla CSS/JS (no build step required).

## Run locally

```bash
npm install
npm start
```

Visit http://localhost:3000

For auto-restart on file changes during development:

```bash
npm run dev
```

## Pages

- `/` — Home (hero, intro, CTA, showroom location & map, work showcase, testimonials)
- `/about` — About / why choose us
- `/gallery` — Gallery hub linking to the 3 category galleries
- `/gallery/bathroom`, `/gallery/kitchen`, `/gallery/home` — Category galleries
- `/contact` — Contact form + showroom map

## Contact form emails

By default, form submissions are just logged to the console. To have them actually emailed, copy `.env.example` to `.env` and fill in `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, and `CONTACT_TO_EMAIL`.

## Content

- Product/gallery data lives in `data/products.js`, testimonials in `data/testimonials.js` — edit these to update copy or swap images.
- All imagery is sourced from Unsplash (free-to-use) via direct CDN links; swap in real project photos when available.
- The BKH logo lives at `public/images/logo-navy.png` (light backgrounds), `logo-white.png` (dark backgrounds), and `favicon-mark.png` (browser tab icon).
