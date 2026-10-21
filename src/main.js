import { renderFooter, renderInfoPanel, renderPage } from './pages.js';
import { metadataForPath, normalizePath, serializeStructuredData } from './seo.js';

const app = document.querySelector('#app');
const footerContent = document.querySelector('#footer-content');
const infoPanel = document.querySelector('#info-panel');
const infoContent = document.querySelector('#info-content');
const infoToggle = document.querySelector('#info-toggle');
const main = document.querySelector('main');
const footer = document.querySelector('.site-footer');
const headerLinks = [...document.querySelectorAll('.site-header a')];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

let infoOpen = false;
let lastFocused = null;
let scrollBeforeInfo = 0;

function setMeta(selector, value) {
  if (value === undefined || value === null) return;
  const element = document.querySelector(selector);
  if (element) element.setAttribute('content', value);
}

function currentRoute() {
  const path = normalizePath(window.location.pathname);
  if (path === '/servizi' || path === '/servizi-e-costi') {
    history.replaceState({}, '', '/competenze/' + window.location.hash);
    return { path: '/competenze', projectSlug: '', categorySlug: '' };
  }
  if (path === '/studio' || path === '/chi-siamo' || path === '/info') {
    history.replaceState({}, '', '/' + window.location.hash);
    return { path: '/', projectSlug: '', categorySlug: 'tutti' };
  }

  const projectMatch = path.match(/^\/progetti\/([^/]+)$/);
  if (projectMatch) return { path: '/progetti', projectSlug: projectMatch[1], categorySlug: '' };

  const categorySlug =
    path === '/' || path === '/progetti'
      ? new URLSearchParams(window.location.search).get('categoria') || 'tutti'
      : '';
  return { path, projectSlug: '', categorySlug };
}

function applyMetadata(route) {
  const path = route.projectSlug ? `/progetti/${route.projectSlug}` : route.path;
  const meta = metadataForPath(path, window.location.origin);

  document.title = meta.title;
  setMeta('meta[name="description"]', meta.description);
  setMeta('meta[name="robots"]', meta.robots);
  setMeta('meta[property="og:title"]', meta.title);
  setMeta('meta[property="og:description"]', meta.description);
  setMeta('meta[property="og:url"]', meta.ogUrl);
  setMeta('meta[property="og:image"]', meta.ogImage);
  setMeta('meta[property="og:image:alt"]', meta.ogImageAlt);
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.append(canonical);
  }
  canonical.href = meta.canonical;
  const structured = document.querySelector('#structured-data');
  if (structured) structured.textContent = serializeStructuredData(window.location.origin);
}

function activeNavigationKey(path) {
  if (path === '/competenze') return 'competenze';
  if (path === '/manifesto') return 'manifesto';
  if (path === '/contatti') return 'contatti';
  return 'progetti';
}

function updateNavigation(route) {
  const activeKey = activeNavigationKey(route.path);
  document.querySelectorAll('[data-nav]').forEach((link) => {
    if (link.dataset.nav === activeKey) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function scrollToHash() {
  const hash = decodeURIComponent(window.location.hash.slice(1));
  const target = hash ? document.getElementById(hash) : null;
  if (target) target.scrollIntoView({ block: 'start', behavior: 'instant' });
  else window.scrollTo({ top: 0, behavior: 'instant' });
}

function renderRoute({ focus = false } = {}) {
  const route = currentRoute();
  app.innerHTML = renderPage(route.path, route.projectSlug, route.categorySlug);
  applyMetadata(route);
  updateNavigation(route);
  requestAnimationFrame(scrollToHash);
  if (focus) {
    main.setAttribute('tabindex', '-1');
    main.focus({ preventScroll: true });
  }
}

function navigate(url) {
  const target = new URL(url, window.location.origin);
  if (target.origin !== window.location.origin) return;

  const changedPath = target.pathname !== window.location.pathname || target.search !== window.location.search;
  history.pushState({}, '', target.pathname + target.search + target.hash);
  if (changedPath) renderRoute({ focus: true });
  else scrollToHash();
}

function openInfo() {
  if (infoOpen) return;
  infoOpen = true;
  lastFocused = document.activeElement;
  scrollBeforeInfo = window.scrollY;

  main.inert = true;
  footer.inert = true;
  headerLinks.forEach((link) => { link.inert = true; });

  infoPanel.hidden = false;
  requestAnimationFrame(() => infoPanel.classList.add('is-open'));
  document.body.classList.add('info-open');
  infoToggle.textContent = 'Chiudi';
  infoToggle.setAttribute('aria-expanded', 'true');

  requestAnimationFrame(() => {
    infoPanel.setAttribute('tabindex', '-1');
    infoPanel.focus({ preventScroll: true });
  });
}

function closeInfo({ restoreFocus = true } = {}) {
  if (!infoOpen) return;
  infoOpen = false;

  infoPanel.classList.remove('is-open');
  document.body.classList.remove('info-open');
  infoToggle.textContent = 'Info';
  infoToggle.setAttribute('aria-expanded', 'false');
  main.inert = false;
  footer.inert = false;
  headerLinks.forEach((link) => { link.inert = false; });

  const finish = () => {
    if (!infoOpen) {
      infoPanel.hidden = true;
      infoPanel.removeAttribute('tabindex');
      window.scrollTo({ top: scrollBeforeInfo, behavior: 'instant' });
    }
  };

  if (reducedMotion.matches) finish();
  else window.setTimeout(finish, 180);

  if (restoreFocus) {
    (lastFocused instanceof HTMLElement ? lastFocused : infoToggle).focus({ preventScroll: true });
  }
}

function onInfoKeydown(event) {
  if (!infoOpen) return;

  if (event.key === 'Escape') {
    event.preventDefault();
    closeInfo();
    return;
  }

  if (event.key !== 'Tab') return;

  const focusables = [infoToggle, ...infoPanel.querySelectorAll('a[href], button:not([disabled])')];
  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  if (event.shiftKey && (document.activeElement === first || document.activeElement === infoPanel)) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

infoToggle.addEventListener('click', () => {
  if (infoOpen) closeInfo();
  else openInfo();
});

infoPanel.addEventListener('click', (event) => {
  if (event.target === infoPanel) closeInfo();
});

document.addEventListener('keydown', onInfoKeydown);

document.addEventListener('click', (event) => {
  const link = event.target.closest('a[data-link]');
  if (link && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && event.button === 0) {
    event.preventDefault();
    if (infoOpen) closeInfo({ restoreFocus: false });
    navigate(link.getAttribute('href'));
    return;
  }
  const topButton = event.target.closest('[data-scroll-top]');
  if (topButton) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }
});

window.addEventListener('popstate', () => renderRoute());
window.addEventListener('hashchange', scrollToHash);

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

footerContent.innerHTML = renderFooter();
infoContent.innerHTML = renderInfoPanel();
renderRoute();
