# Code Style — sitewhizz-landing

No linter, formatter, or build step is configured — these conventions are enforced by review, not tooling.

## Adding or editing a page

- Copy the navbar and footer markup from `index.html` (or another current page) rather than writing new markup — they must stay visually and structurally consistent across the site, and there is no shared partial to inherit from automatically.
- Every page needs the full meta-tag set: charset, viewport, `description`, `keywords`, `robots`, `canonical`, Open Graph, Twitter Card, and correctly-relative favicon links (root: `/favicon.ico`; one level deep: `../favicon.ico`; deeper: adjust accordingly). Copy an existing page's `<head>` as the starting point rather than writing one from scratch.
- Include `assets/logo.js` (with the correct relative path for the page's depth) rather than inlining the logo SVG.
- Add the new page's URL to `sitemap.xml` with a sensible `priority` relative to existing entries.
- Include the Google Tag Manager snippet in the same position (before `<head>`) as every other page.

## Colors, spacing, and other tokens

Never hardcode a color, spacing, or radius value that already has a CSS variable — use the `:root` custom properties (`--primary-*`, `--gray-*`, `--spacing-*`, `--text-*`, `--radius-*`, `--shadow-*`) documented in `CLAUDE.md`. Reach for an existing component class (`.btn`, `.btn-primary`, `.btn-secondary`, `.badge`, `.navbar`, `.heading-xl`, `.gradient-text`) before writing new Tailwind utility soup for something that already has a pattern.

## JavaScript

Vanilla JS only, inline `<script>` per page for page-specific behavior (menu toggles, accordions, scroll effects) — this repo does not use a framework, bundler, or shared JS module system beyond `assets/logo.js`. Don't introduce a build step (webpack/vite/npm scripts) for a one-off interactive feature; match the existing inline-script pattern, or if something genuinely needs to be shared across many pages, consider promoting it to its own file under `assets/` the way `logo.js` already works (script tag include, no bundler).

## Accessibility

The site uses inline SVG exclusively (no `<img>` tags), so there's no `alt`/`loading="lazy"` convention to follow for images — but `aria-*` attributes are only partially applied today (26 occurrences site-wide). When adding new interactive elements (toggles, accordions, tabs), add appropriate `aria-expanded`/`aria-controls`/`role` attributes rather than skipping them because the existing coverage is incomplete — don't propagate the gap further.

## Mobile-first

Use Tailwind's breakpoint utilities (`sm:`/`md:`/`lg:`/`xl:`/`2xl:`) mobile-first — write the base (no-prefix) styles for mobile and layer breakpoint overrides on top, matching the existing pages, rather than designing desktop-first and retrofitting mobile overrides.
