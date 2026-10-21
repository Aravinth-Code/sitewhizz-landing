/**
 * SiteWhizz Logo - Single Source of Truth
 * Include this file in all pages to render the logo consistently.
 *
 * Usage: Add <div class="logo-icon" data-logo></div> where you want the logo.
 */

const sitewhizzLogo = `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SiteWhizz">
    <rect x="2" y="2" width="44" height="44" rx="11" fill="#1d4ed8"/>
    <rect x="10" y="11" width="28" height="21" rx="6" fill="#ffffff"/>
    <path d="M15 29.5 L15 38 L24 31 Z" fill="#ffffff"/>
    <path d="M17.5 21.5 L22 26 L30.5 17" stroke="#1d4ed8" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

// Inject logo into all elements with data-logo attribute
function initSitewhizzLogo() {
  document.querySelectorAll('[data-logo]').forEach(el => {
    el.innerHTML = sitewhizzLogo;
  });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSitewhizzLogo);
} else {
  initSitewhizzLogo();
}

// Mobile menu: keep the toggle's aria-expanded in sync with the menu (WCAG 4.1.2)
function syncSitewhizzMenuToggle() {
  document.querySelectorAll('.navbar-toggle').forEach(btn => {
    const menu = document.getElementById(btn.getAttribute('aria-controls') || 'mobileMenu');
    if (!menu) return;
    const sync = () => btn.setAttribute('aria-expanded', menu.classList.contains('active') ? 'true' : 'false');
    btn.addEventListener('click', () => setTimeout(sync, 0));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setTimeout(sync, 0)));
    sync();
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', syncSitewhizzMenuToggle);
} else {
  syncSitewhizzMenuToggle();
}

// SiteWhizz Chat Widget
(function() {
  window.SITEWHIZZ_API_URL = 'https://app.sitewhizz.io';
  var s = document.createElement('script');
  s.src = 'https://app.sitewhizz.io/widget/widget.js';
  s.onload = function() {
    sw('init', { agentId: '01ff249e-1509-4f30-a0b6-45c71fcb0cdf' });
  };
  document.body.appendChild(s);
})();