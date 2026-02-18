# SiteWhizz Landing Page - Theme Reference

A modern SaaS landing page for an AI support agent platform. Use this document as the single source of truth for styling your frontend to match this theme exactly.

## Tech Stack

- **HTML5** - Static markup
- **Tailwind CSS** (CDN v3.4.1) - Utility-first styling
- **Vanilla JavaScript** - Client-side interactivity
- **Supabase** - Backend-as-a-service

## Folder Structure

```
sitewhizz-landing/
├── index.html              # Main landing page
├── pricing/
│   └── index.html          # Pricing plans page
├── features/
│   └── index.html          # Features showcase page
├── blog/
│   ├── index.html          # Blog hub
│   └── what-are-ai-agents/
│       └── index.html      # Blog article
├── assets/
│   ├── logo.js             # Logo component (SINGLE SOURCE OF TRUTH)
│   └── logo.svg            # Static logo (for reference/external use)
├── favicon.ico             # Favicon
├── favicon-32x32.png       # Favicon variant
├── robots.txt              # SEO robots directive
└── sitemap.xml             # XML sitemap
```

---

## Theme Reference (EXACT VALUES)

### Color Palette

#### Primary Colors (Blue)

> **IMPORTANT:** Primary 500, 600, and 700 are all the same value `#1d4ed8` for consistency.

| Variable         | Hex       | Usage                          |
|------------------|-----------|--------------------------------|
| `--primary-50`   | `#eff6ff` | Light backgrounds, hover states |
| `--primary-100`  | `#dbeafe` | Subtle backgrounds              |
| `--primary-200`  | `#bfdbfe` | Borders, dividers               |
| `--primary-300`  | `#93c5fd` | Secondary elements              |
| `--primary-400`  | `#60a5fa` | Icons, highlights               |
| `--primary-500`  | `#1d4ed8` | Primary actions                 |
| `--primary-600`  | `#1d4ed8` | Primary buttons, links          |
| `--primary-700`  | `#1d4ed8` | Button hover states             |
| `--primary-800`  | `#1e40af` | Active states, gradients        |
| `--primary-900`  | `#1e3a8a` | Dark accents                    |

#### Gray Colors (Neutral)

| Variable       | Hex       | Usage                     |
|----------------|-----------|---------------------------|
| `--gray-50`    | `#f8fafc` | Page backgrounds          |
| `--gray-100`   | `#f1f5f9` | Card backgrounds          |
| `--gray-200`   | `#e2e8f0` | Borders, dividers         |
| `--gray-300`   | `#cbd5e1` | Disabled states, secondary borders |
| `--gray-400`   | `#94a3b8` | Placeholder text          |
| `--gray-500`   | `#64748b` | Secondary text            |
| `--gray-600`   | `#475569` | Body text                 |
| `--gray-700`   | `#334155` | Headings, dark text       |
| `--gray-800`   | `#1e293b` | Dark backgrounds          |
| `--gray-900`   | `#0f172a` | Footer, darkest elements  |

---

### CSS Variables (Copy Exactly)

```css
:root {
    /* Primary Colors */
    --primary-50: #eff6ff;
    --primary-100: #dbeafe;
    --primary-200: #bfdbfe;
    --primary-300: #93c5fd;
    --primary-400: #60a5fa;
    --primary-500: #1d4ed8;
    --primary-600: #1d4ed8;
    --primary-700: #1d4ed8;
    --primary-800: #1e40af;
    --primary-900: #1e3a8a;

    /* Gray Colors */
    --gray-50: #f8fafc;
    --gray-100: #f1f5f9;
    --gray-200: #e2e8f0;
    --gray-300: #cbd5e1;
    --gray-400: #94a3b8;
    --gray-500: #64748b;
    --gray-600: #475569;
    --gray-700: #334155;
    --gray-800: #1e293b;
    --gray-900: #0f172a;

    /* Spacing */
    --spacing-xs: 0.5rem;    /* 8px */
    --spacing-sm: 1rem;      /* 16px */
    --spacing-md: 1.5rem;    /* 24px */
    --spacing-lg: 2rem;      /* 32px */
    --spacing-xl: 3rem;      /* 48px */
    --spacing-2xl: 4rem;     /* 64px */
    --spacing-3xl: 6rem;     /* 96px */

    /* Typography */
    --text-sm: 0.875rem;     /* 14px */
    --text-base: 1rem;       /* 16px */
    --text-lg: 1.125rem;     /* 18px */
    --text-xl: 1.25rem;      /* 20px */
    --text-2xl: 1.5rem;      /* 24px */
    --text-3xl: 1.875rem;    /* 30px */

    /* Border Radius */
    --radius-lg: 0.75rem;    /* 12px */
    --radius-xl: 1rem;       /* 16px */
    --radius-2xl: 1.5rem;    /* 24px */
    --radius-3xl: 2rem;      /* 32px */
    --radius-full: 9999px;   /* Pill shape */

    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgb(15 23 42 / 0.04);
    --shadow-md: 0 4px 6px -1px rgb(15 23 42 / 0.08), 0 2px 4px -1px rgb(15 23 42 / 0.03);
    --shadow-lg: 0 10px 15px -3px rgb(15 23 42 / 0.10), 0 4px 6px -2px rgb(15 23 42 / 0.05);
    --shadow-xl: 0 20px 25px -5px rgb(15 23 42 / 0.12), 0 10px 10px -5px rgb(15 23 42 / 0.04);
    --shadow-2xl: 0 25px 50px -12px rgb(15 23 42 / 0.18);
    --shadow-blue: 0 8px 24px -4px rgba(14, 165, 233, 0.15);

    /* Transitions */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

### Tailwind Configuration (Copy Exactly)

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#1d4ed8',
                    600: '#1d4ed8',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                }
            }
        }
    }
}
```

---

### Global Styles

```css
html, body {
    scroll-behavior: smooth;
    overflow-x: hidden;
    max-width: 100vw;
}

@media (max-width: 768px) {
    html {
        scroll-padding-top: 80px;
    }
}
```

---

### Component Styles

#### Base Button

```css
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 700;
    border-radius: var(--radius-xl);
    transition: all var(--transition-base);
    cursor: pointer;
    text-decoration: none;
}
```

#### Primary Button

```css
.btn-primary {
    background: var(--primary-600);
    color: white;
    padding: 0.875rem 1.5rem;
    font-size: 0.9375rem;
    box-shadow: var(--shadow-lg);
}

@media (min-width: 640px) {
    .btn-primary {
        padding: 1.25rem 2.5rem;
        font-size: var(--text-lg);
    }
}

.btn-primary:hover {
    background: var(--primary-700);
    box-shadow: var(--shadow-xl);
    transform: scale(1.05);
}
```

#### Secondary Button (Outlined)

```css
.btn-secondary {
    border: 2px solid var(--gray-300);
    color: var(--gray-700);
    padding: 0.875rem 1.5rem;
    font-size: 0.9375rem;
}

@media (min-width: 640px) {
    .btn-secondary {
        padding: 1.25rem 2.5rem;
        font-size: var(--text-lg);
    }
}

.btn-secondary:hover {
    background: var(--gray-50);
}
```

#### Badge

```css
.badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: var(--radius-full);
    font-size: var(--text-sm);
    font-weight: 600;
}
```

---

### Navigation Bar

```css
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--gray-200);
    box-shadow: var(--shadow-sm);
}

.navbar-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar-link {
    color: var(--gray-600);
    font-weight: 500;
    text-decoration: none;
    transition: color var(--transition-fast);
}

.navbar-link:hover {
    color: var(--primary-600);
}

.navbar-cta {
    background: #1d4ed8;
    color: white;
    padding: 0.625rem 1.5rem;
    border-radius: var(--radius-lg);
    font-weight: 600;
    text-decoration: none;
    transition: all var(--transition-base);
    box-shadow: var(--shadow-sm);
}

.navbar-cta:hover {
    background: var(--primary-700);
    box-shadow: var(--shadow-blue);
    transform: translateY(-1px);
}
```

---

### Typography

```css
.heading-xl {
    font-size: clamp(2rem, 4vw, 3.75rem);
    font-weight: 700;
    line-height: 1.2;
}

.text-body-lg {
    font-size: clamp(1.125rem, 1.5vw, 1.5rem);
    line-height: 1.6;
}

/* Gradient Text */
.gradient-text {
    background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

#### Typography Scale (Tailwind Classes)

| Element     | Classes                                                    |
|-------------|-------------------------------------------------------------|
| H1          | `text-[1.75rem] sm:text-[2.25rem] lg:text-4xl font-extrabold text-gray-900` |
| H2          | `text-3xl sm:text-4xl font-bold text-gray-900`              |
| H3          | `text-xl font-bold text-gray-900`                           |
| Body        | `text-lg text-gray-600 leading-relaxed`                     |
| Caption     | `text-sm text-gray-500`                                     |
| Link        | `text-primary-600 hover:text-primary-700 font-medium`       |

---

### Animations

```css
/* Float Animation */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

/* Fade In Up Animation */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
}

/* Stagger delays */
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }

/* Pulse Slow Animation */
@keyframes pulse-slow {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}
```

---

### Section Layouts

```css
.section {
    position: relative;
    overflow: hidden;
}

.section-container {
    max-width: 1280px;
    margin: 0 auto;
    padding-left: var(--spacing-md);
    padding-right: var(--spacing-md);
}

.section-py {
    padding-top: var(--spacing-2xl);
    padding-bottom: var(--spacing-2xl);
}

@media (min-width: 768px) {
    .section-py {
        padding-top: var(--spacing-3xl);
        padding-bottom: var(--spacing-3xl);
    }
}
```

---

### Grid System

```css
.grid-3 {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
}

@media (min-width: 640px) {
    .grid-3 {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: var(--spacing-xl);
    }
}
```

---

### Background Decorations

```css
.bg-decoration {
    position: absolute;
    border-radius: var(--radius-full);
    filter: blur(80px);
    opacity: 0.6;
    pointer-events: none;
}

.bg-decoration-primary {
    background: var(--primary-50);
}
```

---

### Breakpoints

| Prefix | Min Width | Usage                |
|--------|-----------|----------------------|
| `sm`   | 640px     | Mobile landscape     |
| `md`   | 768px     | Tablets              |
| `lg`   | 1024px    | Desktop              |
| `xl`   | 1280px    | Large desktop        |
| `2xl`  | 1536px    | Extra large screens  |

---

### Max Container Width

```
max-width: 1280px
```

---

## Brand Assets (Single Source of Truth)

### Logo Architecture

The logo is maintained in **ONE centralized location** and all pages reference it:

| File | Purpose |
|------|---------|
| `assets/logo.js` | **PRIMARY** - JavaScript module that injects the logo SVG with winking animation |
| `assets/logo.svg` | Static SVG file for external use (design tools, documentation) |

#### How It Works

1. All HTML pages include: `<script src="/assets/logo.js"></script>`
2. Place `<div class="logo-icon" data-logo></div>` where you want the logo
3. The script auto-injects the SVG into all `[data-logo]` elements

#### Using the Logo in Your Frontend

**Option A: Include the shared logo.js (Recommended)**
```html
<!-- At the end of your body -->
<script src="/path-to-landing/assets/logo.js"></script>

<!-- Where you want the logo -->
<div class="logo-icon" data-logo></div>
```

**Option B: Copy the logo.js content to your project**
```javascript
// Copy contents of assets/logo.js to your own shared JS file
```

**Option C: Use static SVG (no animation)**
```html
<img src="/path-to-landing/assets/logo.svg" alt="SiteWhizz" width="44" height="44">
```

#### Logo SVG (with winking animation classes)

```svg
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10 C4 6, 8 2, 14 2 L34 2 C40 2, 44 6, 44 10 L44 28 C44 32, 40 36, 34 36 L18 36 L10 44 L10 36 L14 36 C8 36, 4 32, 4 28 Z" fill="url(#logoGrad)"/>
    <circle cx="40" cy="6" r="3" fill="#bfdbfe"/>
    <circle cx="42" cy="10" r="1.5" fill="#dbeafe"/>
    <ellipse cx="16" cy="18" rx="4" ry="4.5" fill="white"/>
    <circle cx="17" cy="18" r="2" fill="#1e40af"/>
    <circle cx="18" cy="17" r="1" fill="white"/>
    <ellipse class="wink-eye" cx="32" cy="18" rx="4" ry="4.5" fill="white"/>
    <circle class="wink-eye" cx="33" cy="18" r="2" fill="#1e40af"/>
    <circle class="wink-eye" cx="34" cy="17" r="1" fill="white"/>
    <path class="wink-line" d="M28 18 Q32 20, 36 18" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <path d="M13 25 Q24 34, 35 25" stroke="white" stroke-width="3" stroke-linecap="round" fill="none"/>
    <ellipse cx="10" cy="23" rx="3" ry="2" fill="#bfdbfe" opacity="0.6"/>
    <ellipse cx="38" cy="23" rx="3" ry="2" fill="#bfdbfe" opacity="0.6"/>
    <defs>
      <linearGradient id="logoGrad" x1="4" y1="2" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1d4ed8"/>
        <stop offset="1" stop-color="#1e40af"/>
      </linearGradient>
    </defs>
</svg>
```

#### Logo Colors Used

| Element        | Color     | Variable         |
|----------------|-----------|------------------|
| Bubble Fill    | `#1d4ed8` → `#1e40af` | Gradient (primary-600 to primary-800) |
| Eyes (pupil)   | `#1e40af` | `--primary-800`  |
| Sparkle/Cheeks | `#bfdbfe` | `--primary-200`  |
| Sparkle small  | `#dbeafe` | `--primary-100`  |

#### Logo Component (with winking animation)

```css
.logo {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
}

.logo-icon {
    position: relative;
    width: 44px;
    height: 44px;
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.logo:hover .logo-icon {
    transform: scale(1.1);
}

.logo-icon svg {
    width: 100%;
    height: 100%;
}
```

#### Logo Text Component

```html
<span class="logo-text" style="font-size: 1.375rem; font-weight: 700; color: #0f172a;">
    Site<span style="color: #1d4ed8;">Whizz</span>
</span>
```

### Favicon

- **ICO:** `favicon.ico`
- **PNG 32x32:** `favicon-32x32.png`

### Brand Colors

- **Primary Brand Color:** `#1d4ed8`
- **Secondary Brand Color:** `#1e40af`
- **Brand Name Font:** System font stack (default Tailwind)

---

## Quick Integration

### Option 1: Include Tailwind CDN + Config

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#1d4ed8',
                    600: '#1d4ed8',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                }
            }
        }
    }
}
</script>
```

### Option 2: CSS Variables Only

Copy the `:root` CSS variables block into your stylesheet and use `var(--primary-600)` etc. throughout your CSS.

### Option 3: Tailwind Config File (for build tools)

Add to your `tailwind.config.js`:

```javascript
module.exports = {
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#1d4ed8',
                    600: '#1d4ed8',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                }
            }
        }
    }
}
```

---

## License

Proprietary - SiteWhizz
