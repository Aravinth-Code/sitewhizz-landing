# Architecture — sitewhizz-landing

Static marketing site. No build step, no framework, no bundler — hand-written HTML/CSS/JS, Tailwind loaded from a CDN. This "architecture" doc is really about the site's conventions, since there's no code architecture in the usual sense.

## Structure

Each route is a real directory with its own `index.html`, giving clean URLs without any routing logic:

```
index.html                 Homepage
about/index.html
agencies/index.html
blog/index.html            Blog hub
blog/<slug>/index.html     One directory per article (12 currently)
careers/index.html
contact/index.html
docs/index.html            End-user product documentation (chatbot setup guide) — not developer docs for this repo
features/index.html
free-tools/index.html
pricing/index.html
privacy/index.html
security/index.html        Trust/marketing page — see SECURITY.md for what this actually is vs. what it claims
terms/index.html
use-cases/index.html
assets/logo.js             Single source of truth for the logo SVG
assets/logo.svg            Static fallback
```

There is no templating engine, include mechanism, or JS component loader for shared markup — the navbar and footer are **hand-duplicated** across all ~25 pages. This is a deliberate, documented tradeoff for a no-build-step site (see `CLAUDE.md`), not an oversight, but it means:

- A navbar/footer change must be applied to every page individually. There is no single file to edit.
- `assets/logo.js` is the one real exception — it's a shared component: an inline SVG string injected into any element carrying `data-logo`, loaded via `<script src=".../assets/logo.js">` on every page. Always edit the logo here, never inline an SVG copy on a page.

## Styling

Tailwind CSS is loaded via CDN (`<script src="https://cdn.tailwindcss.com">`) with an inline `tailwind.config` block in each page's `<head>` — there is no `tailwind.config.js` file, no PostCSS, no compiled CSS output anywhere in the repo. Design tokens (colors, spacing, radii, shadows, transitions) are CSS custom properties on `:root`, documented in `CLAUDE.md`. Component classes (`.btn`, `.btn-primary`, `.badge`, `.navbar`, `.heading-xl`, `.gradient-text`) are the reusable building blocks — see `CLAUDE.md`'s design-system section for the full token/class reference.

## Third-party integrations

- **Google Tag Manager** (`GTM-TG345ZX7`) — inlined before `<head>` on every page.
- **Google Fonts** (Inter) — `<link>` with `preconnect`, on every page.
- **SiteWhizz's own chat widget** — loaded by `assets/logo.js` itself: it appends `https://app.sitewhizz.io/widget/widget.js`, sets `window.SITEWHIZZ_API_URL`, and initializes with a specific `agentId`. This is the product dogfooding itself on its own marketing site — if the widget's embed contract changes in `sitewhizz-app`, this is where the landing site's copy of it needs updating too.
- **Contact form** (`contact/index.html`) — client-side only. `preventDefault()` + a static "thank you" message; there is no `fetch`/`XHR` call anywhere in the repo. The real contact channel is `mailto:admin@sitewhizz.io`. Don't assume submitting this form sends an email or reaches a backend — it currently doesn't.

## SEO

`robots.txt` allows all crawling and points to `sitemap.xml`. `sitemap.xml` is a flat, hand-maintained list of 20 URLs with `lastmod`/`priority` — **a new page must be added here manually**, it is not generated. Every page follows the same meta-tag pattern: charset/viewport, `description`/`keywords`, `robots: index, follow`, `canonical`, full Open Graph + Twitter Card set, favicon links (root pages use `/favicon.ico`, nested pages use relative `../favicon.ico` — get the relative depth right when adding a page). The homepage additionally embeds three JSON-LD schemas (`Organization`, `SoftwareApplication`, `FAQPage`).

## JavaScript

No JS files beyond `assets/logo.js`. All other interactivity — mobile menu toggle, smooth-scroll, FAQ tabs/accordion, scroll-reveal (`IntersectionObserver`), navbar shadow-on-scroll — is inline `<script>` per page, duplicated rather than shared, matching the no-shared-markup pattern above.

## Deployment

No `netlify.toml`, `vercel.json`, or other host config file exists in the repo, and `CLAUDE.md` doesn't name a specific target — only local dev commands are documented (`python -m http.server` / `npx live-server`). The canonical domain (from `sitemap.xml`/meta tags) is `sitewhizz.io`; confirm the actual hosting/CI mechanism with whoever manages deployment before assuming there's an automated pipeline, since none is visible in-repo.
