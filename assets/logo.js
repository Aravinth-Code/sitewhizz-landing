/**
 * SiteWhizz Logo - Single Source of Truth
 * Include this file in all pages to render the logo consistently.
 *
 * Usage: Add <div class="logo-icon" data-logo></div> where you want the logo.
 */

const sitewhizzLogo = `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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