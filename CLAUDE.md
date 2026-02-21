# SiteWhizz Landing

## Overview

Static marketing website for SiteWhizz. Pure HTML/CSS/JavaScript with Tailwind CSS via CDN. No build process required.

## Tech Stack

- **HTML**: Semantic HTML5
- **CSS**: Tailwind CSS 3.4.1 (CDN) + custom CSS variables
- **JavaScript**: Vanilla JS (no framework)
- **Logo**: SVG with JS auto-injection (`assets/logo.js`)

## Project Structure

```
sitewhizz-landing/
├── index.html              # Main landing page (hero, features, CTA)
├── favicon.ico / favicon-32x32.png
├── robots.txt              # SEO
├── sitemap.xml             # SEO sitemap
│
├── assets/
│   ├── logo.js             # Logo SVG component (SINGLE SOURCE OF TRUTH)
│   └── logo.svg            # Static logo fallback
│
├── about/index.html        # About page
├── agencies/index.html     # Agencies program
├── blog/
│   ├── index.html          # Blog hub
│   └── what-are-ai-agents/index.html
├── careers/index.html      # Careers page
├── contact/index.html      # Contact form
├── docs/index.html         # Documentation
├── features/index.html     # Features showcase
├── free-tools/index.html   # Free tools
├── pricing/index.html      # Pricing plans
├── privacy/index.html      # Privacy policy
├── security/index.html     # Security info
├── terms/index.html        # Terms of service
└── use-cases/index.html    # Use cases
```

## Development

No build step. Open any HTML file directly or use a local server:

```bash
# Python
python -m http.server 8000

# Node
npx live-server
```

## Design System

### CSS Variables (defined in `:root`)

```
Colors:    --primary-50 to --primary-900 (blue), --gray-50 to --gray-900
Spacing:   --spacing-xs (0.5rem) to --spacing-3xl (6rem)
Text:      --text-sm (14px) to --text-3xl (48px)
Radius:    --radius-lg (12px) to --radius-full (pill)
Shadows:   --shadow-sm to --shadow-2xl, --shadow-blue
Transitions: --transition-fast (150ms), --transition-base (300ms)
```

### Primary Colors

- Primary: `#1d4ed8` (blue-700)
- Primary Dark: `#1e40af` (blue-800)
- Gradient: `#1d4ed8 → #1e40af`

### Component Classes

| Class | Purpose |
|-------|---------|
| `.btn` | Base button styles |
| `.btn-primary` | Blue filled button |
| `.btn-secondary` | Outlined button |
| `.badge` | Badge/tag component |
| `.navbar` | Fixed nav with backdrop blur |
| `.heading-xl` | Large responsive heading (28-60px) |
| `.gradient-text` | Blue gradient text effect |

### Animations

- `float` - Vertical bobbing motion
- `fadeInUp` - Entrance from below with fade
- `pulseSlow` - Gentle opacity pulse
- Stagger delays: `0.1s` to `0.4s`

### Breakpoints

- sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px

## Conventions

- **Logo**: Always use `assets/logo.js` as the single source of truth for the logo SVG; it auto-injects into elements
- **Page Structure**: Each page is a standalone `index.html` in its own directory for clean URLs
- **No Build Process**: Tailwind loaded via CDN; no npm/webpack/vite
- **SEO**: Every page should have proper meta tags, `robots.txt` and `sitemap.xml` are maintained at root
- **Responsive**: Mobile-first design using Tailwind breakpoint utilities
- **Consistent Design**: Follow the CSS variable theme; do not use hardcoded color values
- **Navigation**: Shared navbar pattern across all pages (copy from `index.html`)
- **Footer**: Shared footer pattern across all pages
