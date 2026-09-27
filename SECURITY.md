# Security — sitewhizz-landing

## Reporting a vulnerability

Email **admin@sitewhizz.io** with details. There is no `.well-known/security.txt`, no dedicated `security@` alias, and no formal disclosure program today — see the gap below.

## The `/security` page overstates what actually exists

`security/index.html` is a marketing/trust page, not a technical disclosure policy. Its copy currently claims (verified via the page's own content, not inferred): AES-256 encryption at rest, TLS 1.3 in transit, "continuous vulnerability scanning, penetration testing, and a responsible disclosure program for security researchers," plus "SOC 2 Type II" and "GDPR Compliant" badges.

**None of these claims have corresponding evidence in this repo or in the other three apps' repos** (no `security.txt`, no documented pen-test cadence, no SOC 2 audit artifacts encountered during review, no disclosure-program mechanics — no PGP key, no scope, no response-time commitment). This isn't necessarily false — those things might exist outside these repos (a real SOC 2 audit, a real disclosure inbox) — but if they don't, this page is making compliance and security claims that could create legal/liability exposure if a customer relies on them contractually or a security researcher tries to use the "responsible disclosure program" and finds nothing behind it.

**Recommended action**: reconcile this page's copy with reality before it's relied upon.
- If SOC 2 / pen-testing / a disclosure program genuinely exist, link to real evidence (a trust portal, a `security.txt`, actual audit dates) rather than unlinked prose claims.
- If they don't exist yet, soften the copy to reflect what's actually true today, and treat this file as the tracking point for adding a real `.well-known/security.txt` (RFC 9116) with a genuine contact and disclosure policy once one exists.

## Contact form has no backend — not a data-handling risk, but don't assume otherwise

The `contact/index.html` form only calls `preventDefault()` and shows a static message — it does not transmit form data anywhere (confirmed: no `fetch`/`XHR` calls exist in this repo). This means there's currently no server-side attack surface via this form (no injection, no spam-relay risk) simply because nothing is submitted. If this form is ever wired to a real backend or third-party form service, standard input handling (server-side validation, rate limiting on submission, spam/bot mitigation) will need to be added at that point — it doesn't exist today because there's nothing to protect yet.

## Third-party script surface

Every page loads the Tailwind CDN script, Google Fonts, Google Tag Manager, and (via `assets/logo.js`) the SiteWhizz chat widget from `app.sitewhizz.io`. This is a static site's normal trust model — you're trusting each of these origins to serve non-malicious JS — but it's worth being deliberate about: don't add a new third-party `<script src>` without confirming the source is one you actually intend to trust with full page access (these scripts run with no sandboxing — no CSP is configured anywhere in this repo).

## No Content Security Policy

There is no CSP meta tag or header configured on any page. Given the number of third-party scripts already loaded (GTM, Tailwind CDN, Google Fonts, the chat widget), a CSP would meaningfully reduce blast radius if any one of those origins were ever compromised or if a future contributor accidentally introduces an XSS-prone pattern (e.g. rendering unsanitized query-string content into the DOM). Worth considering once the site has actual dynamic content to protect against.
