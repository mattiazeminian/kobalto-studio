import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { renderFooter, renderPage } from '../src/pages.js';
import { projects } from '../src/projects.js';
import { metadataForPath, serializeStructuredData } from '../src/seo.js';

const outputDir = new URL('../dist/', import.meta.url);
const template = await readFile(new URL('index.html', outputDir), 'utf8');
const siteOrigin = process.env.KOBALTO_SITE_URL || '';
const routes = ['/', '/progetti', '/competenze', '/manifesto', '/contatti', ...projects.map((project) => `/progetti/${project.slug}`)];

function escapeAttribute(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
}

function updateMeta(html, selector, content) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(<meta ${escapedSelector} content=")[^"]*("\\s*\\/?>)`);
  return html.replace(pattern, `$1${escapeAttribute(content)}$2`);
}

for (const route of routes) {
  const slug = route.startsWith('/progetti/') ? route.slice('/progetti/'.length) : '';
  const pagePath = slug ? '/progetti' : route;
  const metadata = metadataForPath(route, siteOrigin);
  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttribute(metadata.title)}</title>`);
  html = updateMeta(html, 'name="description"', metadata.description);
  html = updateMeta(html, 'name="robots"', metadata.robots);
  html = updateMeta(html, 'property="og:title"', metadata.title);
  html = updateMeta(html, 'property="og:description"', metadata.description);
  html = updateMeta(html, 'property="og:url"', metadata.ogUrl);
  html = updateMeta(html, 'property="og:image"', metadata.ogImage);
  html = updateMeta(html, 'property="og:image:alt"', metadata.ogImageAlt || 'Kobalto Studio');
  html = html.replace('</head>', `  <link rel="canonical" href="${escapeAttribute(metadata.canonical)}" />\n  </head>`);
  html = html.replace(/(<script id="structured-data" type="application\/ld\+json">)[\s\S]*?(<\/script>)/, `$1${serializeStructuredData(siteOrigin)}$2`);
  html = html.replace('<div id="app"></div>', `<div id="app">${renderPage(pagePath, slug)}</div>`);
  html = html.replace('<div id="footer-content"></div>', `<div id="footer-content">${renderFooter()}</div>`);
  const routeDir = route === '/' ? outputDir : new URL(`.${route}/`, outputDir);
  await mkdir(routeDir, { recursive: true });
  await writeFile(new URL('index.html', routeDir), html);
}

console.log(`Pagine generate: ${routes.length}`);
