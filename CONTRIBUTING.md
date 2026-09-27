# Contributing — sitewhizz-landing

## Setup

No install step — there's no `package.json` or dependency tree. Preview locally with either:

```bash
python -m http.server 8000
# or
npx live-server
```

Then open the relevant page directly, e.g. `http://localhost:8000/pricing/`.

## Adding a new page

1. Create `newpage/index.html` for a clean `/newpage/` URL.
2. Copy an existing page's `<head>` (meta tags, Tailwind CDN + config, Google Fonts, GTM snippet) and adjust `title`/`description`/`canonical`/Open Graph fields for the new page.
3. Copy the navbar and footer from `index.html`, fixing relative paths (`assets/logo.js`, `favicon.ico`) for the new page's depth.
4. Write the page content using existing CSS variables and component classes (see `CODE_STYLE.md`) rather than new one-off styles.
5. Add the new URL to `sitemap.xml`.
6. Preview it locally before committing — there's no build to catch a broken path or malformed HTML, so this is the only check.

## Editing shared elements

- **Logo**: edit `assets/logo.js` only — never inline a copy of the SVG on a page.
- **Navbar/footer**: since there's no shared partial, a navbar/footer change has to be applied to every page by hand. When doing this, grep for the section you're changing (e.g. a nav link's text) across all `index.html` files to make sure you've caught every occurrence — it's easy to miss one of the ~25 pages.

## Before committing

- Open the changed page(s) in a browser and check the navbar, footer, and any new content render correctly at mobile and desktop widths.
- Verify meta tags/canonical URL are correct for the specific page (a copy-paste from another page is the most common source of a wrong canonical or Open Graph URL).
- If you touched `sitemap.xml` or `robots.txt`, validate they're still well-formed XML/plain text.
- If you touched anything under `security/`, be aware of the gap documented in `SECURITY.md` between what that page claims and what's actually implemented — don't add further unverified claims.
