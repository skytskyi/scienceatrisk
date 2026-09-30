# Science At Risk! — homepage redesign

Local static copy of the [scienceatrisk.org](https://scienceatrisk.org/) homepage with a reworked first screen and header.

## What's changed

- **Header** — menu is always visible on desktop (≥ 1200px), burger on smaller screens. On the first screen the logo slot shows `!!!`; on every other screen it shows the full SC!ENCE AT R!SK! logo, with a soft fade between them. Language switch `ENG / UA` on the right.
- **First screen** — big SC!ENCE AT R!SK! logo and subtitle at the top, the Stories slider pinned to the bottom of the screen.
- **Order of screens** — "Find Ukrainian scientists for collaboration" moved right after the first screen.
- Google Analytics and reCAPTCHA scripts removed.

All overrides live in [`css/custom.css`](css/custom.css) and [`js/custom.js`](js/custom.js); the original `css/style.min.css` is untouched. The only edit to the original bundle is Swiper `slidesPerView: 1.05 → 1` in `js/client.bundle.js`.

## Run locally

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765.

Menu links, the search form and the contact form still point to the live site.
