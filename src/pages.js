import {
  contact,
  contactPage,
  estimates,
  faqs,
  homePage,
  infoPage,
  manifesto,
  pricing,
  studio,
} from './content.js';
import { categories, projects } from './projects.js';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function categoryNav(activeSlug) {
  return categories
    .map((category) => {
      const active = category.slug === activeSlug;
      return `<a class="category-item${active ? ' is-current' : ''}" href="/progetti/?categoria=${category.slug}" data-link ${active ? 'aria-current="page"' : ''}>
        ${active ? '<span class="category-dot" aria-hidden="true"></span>' : ''}${escapeHtml(category.label)}
      </a>`;
    })
    .join('');
}

function projectEntry(project, index = 0) {
  return `<article class="project-entry">
    <h2 class="project-title"><a href="/progetti/${project.slug}/" data-link>${escapeHtml(project.title)}</a></h2>
    <p class="project-description">${escapeHtml(project.description)}</p>
    <p class="project-category"><span class="accent-dot" aria-hidden="true"></span>${escapeHtml(project.category)}</p>
    <div class="project-media">
      <a class="project-media-link" href="/progetti/${project.slug}/" data-link aria-label="Apri il progetto ${escapeHtml(project.title)}">
        <img src="${project.image}" width="1881" height="1272" alt="${escapeHtml(project.imageAlt)}" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" />
      </a>
    </div>
  </article>`;
}

function renderHome(categorySlug = 'tutti') {
  const visibleProjects =
    categorySlug === 'tutti' ? projects : projects.filter((project) => project.categorySlug === categorySlug);

  return `<article class="home-page">
    <h1 class="visually-hidden">Progetti selezionati — Kobalto Studio</h1>
    <header class="home-intro" aria-label="Filtra i progetti">
      <nav class="category-list">${categoryNav(categorySlug)}</nav>
    </header>
    <section class="project-list" id="lavori" aria-label="Progetti selezionati">
      ${visibleProjects.map((project, index) => projectEntry(project, index)).join('')}
    </section>
  </article>`;
}

function sectionHead(title, description = '') {
  return `<div class="section-head">
    <h2>${title}</h2>
    ${description ? `<p class="section-intro">${description}</p>` : ''}
  </div>`;
}

function serviceRow(service) {
  return `<article class="service-row" id="${escapeHtml(service.id)}">
    <div class="service-main">
      <h3>${escapeHtml(service.title)}</h3>
      <p>${escapeHtml(service.summary)}</p>
      <ul class="service-includes">${service.includes.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
    </div>
    <div class="service-aside">
      <dl class="service-facts">
        <div><dt>A partire da</dt><dd>${escapeHtml(service.from)}</dd></div>
        <div><dt>Tempi</dt><dd>${escapeHtml(service.time)}</dd></div>
      </dl>
      <p class="service-example">${escapeHtml(service.example)}</p>
      <p class="service-work">${escapeHtml(service.work)}</p>
    </div>
  </article>`;
}

function priceCard(model) {
  return `<article class="price-card" aria-labelledby="price-${model.id}">
    <header>
      <p class="price-label">${escapeHtml(model.label)}</p>
      <h3 id="price-${model.id}">${escapeHtml(model.title)}</h3>
      <p class="price-from">${escapeHtml(model.from)}</p>
      <p class="price-summary">${escapeHtml(model.summary)}</p>
    </header>
    ${model.options ? `<div class="price-options"><h4>Opzioni indicative</h4><ul>${model.options.map((option) => `<li><span>${escapeHtml(option.name)}</span><span>${escapeHtml(option.price)}</span></li>`).join('')}</ul></div>` : ''}
    <div class="price-block"><h4>Possibili attività</h4><ul class="price-list">${model.includes.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div>
    <div class="price-block"><h4>Come iniziamo</h4><ol class="price-process">${model.process.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ol></div>
    <a class="text-link" href="/contatti/" data-link>${escapeHtml(model.cta)} <span aria-hidden="true">↗</span></a>
  </article>`;
}

function renderServices() {
  return `<article class="services-page">
    <header class="page-hero">
      <div class="page-hero-grid">
        <div class="page-hero-heading">
          <p class="eyebrow"><span class="accent-dot" aria-hidden="true"></span>Kobalto Studio · Verona</p>
          <h1 class="page-title">Competenze</h1>
        </div>
        <div class="page-hero-copy">
          <p class="lead">Web Design e sviluppo per siti web. Product Design e UX/UI per web app e app mobile.</p>
          <p>Qui trovi gli ambiti di lavoro e i prezzi di partenza. Il preventivo cambia con il perimetro del progetto.</p>
        </div>
      </div>
    </header>

    <section class="content-section" aria-labelledby="competenze-title">
      ${sectionHead('<span id="competenze-title">Cosa facciamo</span>', 'Partiamo da obiettivi, contenuti e persone che useranno il sito o l’app.')}
      <div class="service-list">${estimates.services.map(serviceRow).join('')}</div>
      <p class="estimate-note">${escapeHtml(estimates.disclaimer)}</p>
    </section>

    <section class="content-section pricing-section" id="costi" aria-labelledby="pricing-title">
      ${sectionHead('<span id="pricing-title">Prezzi</span>', escapeHtml(pricing.intro))}
      <h3 class="pricing-title">${escapeHtml(pricing.title)}</h3>
      <div class="pricing-grid">${pricing.models.map(priceCard).join('')}</div>
      <p class="pricing-note">${escapeHtml(pricing.note)}</p>
    </section>

    <section class="content-section collaboration-section" aria-labelledby="collaborazioni-title">
      ${sectionHead('<span id="collaborazioni-title">Specialisti esterni</span>', '')}
      <p>${escapeHtml(studio.collaboration)}</p>
      <a class="text-link" href="/contatti/" data-link>Parliamo del progetto <span aria-hidden="true">↗</span></a>
    </section>

    <section class="content-section faq-section" aria-labelledby="faq-title">
      ${sectionHead('<span id="faq-title">Domande frequenti</span>', '')}
      <div class="faq-grid">${faqs.map((faq) => `<details class="faq-item"><summary>${escapeHtml(faq.question)}<span class="faq-icon" aria-hidden="true"></span></summary><p>${escapeHtml(faq.answer)}</p></details>`).join('')}</div>
    </section>
  </article>`;
}

function renderManifesto() {
  return `<article class="manifesto-page">
    <header class="page-hero">
      <div class="page-hero-grid">
        <div class="page-hero-heading">
          <p class="eyebrow"><span class="accent-dot" aria-hidden="true"></span>${escapeHtml(manifesto.eyebrow)}</p>
          <h1 class="page-title">${escapeHtml(manifesto.title)}</h1>
        </div>
        <div class="page-hero-copy"><p class="lead">${escapeHtml(manifesto.intro)}</p></div>
      </div>
    </header>
    <section class="content-section manifesto-section" aria-label="Principi di Kobalto Studio">
      <div class="manifesto-list">
        ${manifesto.principles.map((principle) => `<article class="manifesto-item">
          <h2>${escapeHtml(principle.title)}</h2>
          <p>${escapeHtml(principle.text)}</p>
        </article>`).join('')}
      </div>
      ${manifesto.closing ? `<p class="manifesto-closing">${escapeHtml(manifesto.closing)}</p>` : ''}
    </section>
  </article>`;
}

function renderContact() {
  const email = contact.email
    ? `<a class="contact-email" href="mailto:${escapeHtml(contact.email)}?subject=${encodeURIComponent(contact.mailSubject)}">${escapeHtml(contact.email)}</a>`
    : '<p class="contact-pending">Il recapito diretto sarà aggiunto prima della pubblicazione del sito.</p>';

  return `<article class="contact-page">
    <header class="page-hero contact-hero">
      <div class="page-hero-grid">
        <div class="page-hero-heading">
          <p class="eyebrow"><span class="accent-dot" aria-hidden="true"></span>${escapeHtml(contactPage.eyebrow)}</p>
          <h1 class="page-title">${escapeHtml(contactPage.title)}</h1>
        </div>
        <div class="page-hero-copy">
          <p class="lead">${escapeHtml(contactPage.intro)}</p>
        </div>
      </div>
    </header>
    <section class="contact-grid" aria-labelledby="contatto-title">
      <div class="contact-main">
        <h2 id="contatto-title">${escapeHtml(contactPage.detailsTitle)}</h2>
        <ul class="contact-reasons">${contactPage.details.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
        <p class="contact-location"><strong>Web Agency — Verona, Italia</strong><br>Kobalto Studio è una web agency a Verona.</p>
      </div>
      <div class="contact-start">
        <h2>${escapeHtml(contactPage.contactLabel)}</h2>
        ${email}
        <p>Se preferisci, possiamo partire da una conversazione su obiettivi, materiali e tempi.</p>
        <div class="contact-links">
          <a class="text-link" href="/competenze/" data-link>Competenze <span aria-hidden="true">↗</span></a>
          <a class="text-link" href="/manifesto/" data-link>Manifesto <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  </article>`;
}

function renderProject(project) {
  return `<article class="project-page">
    <header class="project-intro">
      <div class="project-meta">
        <h1>${escapeHtml(project.title)}</h1>
        <p class="project-meta-description">${escapeHtml(project.description)}</p>
        <section class="project-meta-services" aria-labelledby="project-services-title">
          <h2 id="project-services-title">Ambiti di lavoro</h2>
          <ul>${project.services.map((service) => `<li>${escapeHtml(service)}</li>`).join('')}</ul>
        </section>
        <section class="project-meta-concept" aria-labelledby="project-category-title">
          <h2 id="project-category-title">Progetto</h2>
          <dl><div><dt>Categoria</dt><dd>${escapeHtml(project.category)}</dd></div></dl>
          <a class="text-link" href="/progetti/" data-link>Torna ai progetti <span aria-hidden="true">↗</span></a>
        </section>
      </div>
    </header>
    <div class="project-content" aria-label="Immagini del progetto ${escapeHtml(project.title)}">
      ${project.details.map((detail, index) => `<figure class="project-figure">
        <img src="${detail.src}" width="1881" height="1272" alt="${escapeHtml(detail.alt)}" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" />
      </figure>`).join('')}
    </div>
  </article>`;
}

function renderNotFound() {
  return `<section class="not-found"><p class="eyebrow">Errore 404</p><h1>Questa pagina non esiste.</h1><p>Puoi tornare alla pagina dei progetti o vedere le competenze.</p><div class="hero-links"><a class="text-link" href="/progetti/" data-link>Progetti</a><a class="text-link" href="/competenze/" data-link>Competenze</a></div></section>`;
}

export function renderPage(path, projectSlug = '', categorySlug = '') {
  if (path === '/' || path === '/index.html' || path === '/progetti') {
    if (path === '/progetti' && projectSlug) {
      const project = projects.find((item) => item.slug === projectSlug);
      if (project) return renderProject(project);
    }
    return renderHome(categorySlug || 'tutti');
  }
  if (path === '/competenze') return renderServices();
  if (path === '/manifesto') return renderManifesto();
  if (path === '/contatti') return renderContact();
  return renderNotFound();
}

export function renderFooter() {
  return `<div class="footer-grid">
    <span class="footer-copy">© 2026 Kobalto Studio</span>
    <a class="footer-link" href="/progetti/" data-link>Progetti</a>
    <a class="footer-link" href="/competenze/" data-link>Competenze</a>
    <a class="footer-link" href="/manifesto/" data-link>Manifesto</a>
    <a class="footer-link" href="/contatti/" data-link>Contatti</a>
  </div>`;
}

export function renderInfoPanel() {
  return `<div class="info-panel-layout">
    <div class="info-panel-intro">
      <p class="info-kicker">Info · Kobalto Studio</p>
      <h2 id="info-title">${escapeHtml(infoPage.title)}</h2>
      <p>${escapeHtml(infoPage.intro)}</p>
      <p class="info-experience">8 anni di esperienza nel settore digitale.</p>
      <a class="text-link" href="/contatti/" data-link>Parliamo del progetto <span aria-hidden="true">↗</span></a>
    </div>

    <div class="info-founder-list" aria-label="Fondatori di Kobalto Studio">
      ${infoPage.founders
        .map(
          (founder) => `<article class="info-founder">
        <figure class="info-founder-portrait">
          <img src="${escapeHtml(founder.portrait)}" width="800" height="960" alt="${escapeHtml(founder.portraitAlt)}" loading="lazy" decoding="async" />
          ${founder.portraitIsPlaceholder ? '<figcaption>Ritratto segnaposto.</figcaption>' : ''}
        </figure>
        <div class="info-founder-copy">
          <p class="info-founder-role">${escapeHtml(founder.role)}</p>
          <h3>${escapeHtml(founder.name)}</h3>
          <p>${escapeHtml(founder.caption)}</p>
          <a class="text-link" href="${escapeHtml(founder.website)}" target="_blank" rel="noopener noreferrer">${escapeHtml(founder.websiteLabel)} <span aria-hidden="true">↗</span></a>
        </div>
      </article>`,
        )
        .join('')}
    </div>

    <div class="info-panel-details">
      <section>
        <h3>${escapeHtml(infoPage.methodLabel)}</h3>
        <p>${escapeHtml(studio.approach)}</p>
      </section>
      <section>
        <h3>${escapeHtml(infoPage.collaborationLabel)}</h3>
        <p>${escapeHtml(studio.collaboration)}</p>
      </section>
      <section>
        <h3>Contatti</h3>
        <p>Verona, Italia.</p>
        <a class="text-link" href="/contatti/" data-link>Vai ai contatti <span aria-hidden="true">↗</span></a>
      </section>
    </div>
  </div>`;
}
