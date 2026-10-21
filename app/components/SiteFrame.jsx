'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { renderFooter, renderInfoPanel } from '../../src/pages.js';

const navItems = [
  ['Progetti', '/progetti/', 'progetti'],
  ['Competenze', '/competenze/', 'competenze'],
  ['Manifesto', '/manifesto/', 'manifesto'],
  ['Contatti', '/contatti/', 'contatti'],
];

export default function SiteFrame({ children }) {
  const pathname = usePathname() || '/';
  const [infoOpen, setInfoOpen] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);
  const mainRef = useRef(null);
  const footerRef = useRef(null);
  const lastFocusRef = useRef(null);

  useEffect(() => {
    if (!infoOpen) return undefined;
    const previousScroll = window.scrollY;
    lastFocusRef.current = document.activeElement;
    if (mainRef.current) mainRef.current.inert = true;
    if (footerRef.current) footerRef.current.inert = true;
    document.body.classList.add('info-open');
    panelRef.current?.focus({ preventScroll: true });

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setInfoOpen(false);
      if (event.key !== 'Tab' || !panelRef.current) return;
      const focusable = [...panelRef.current.querySelectorAll('a[href], button:not([disabled])')];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      if (mainRef.current) mainRef.current.inert = false;
      if (footerRef.current) footerRef.current.inert = false;
      document.body.classList.remove('info-open');
      window.scrollTo({ top: previousScroll, behavior: 'instant' });
      requestAnimationFrame(() => (lastFocusRef.current || toggleRef.current)?.focus({ preventScroll: true }));
    };
  }, [infoOpen]);

  const activeKey = pathname.startsWith('/competenze')
    ? 'competenze'
    : pathname.startsWith('/manifesto')
      ? 'manifesto'
      : pathname.startsWith('/contatti')
        ? 'contatti'
        : 'progetti';

  return (
    <>
      <a className="skip-link" href="#contenuto">Vai ai contenuti</a>
      <header className="site-header">
        <nav className="nav-grid" aria-label="Navigazione principale">
          <a className="brand-link" href="/">
            <span className="brand-name">Kobalto Studio</span>
            <span className="brand-description">(Web Agency — Verona, Italia)</span>
          </a>
          <div className="nav-links">
            {navItems.map(([label, href, key]) => (
              <a className="nav-link" href={href} data-nav={key} aria-current={activeKey === key ? 'page' : undefined} key={key}>{label}</a>
            ))}
          </div>
          <button className="info-toggle" id="info-toggle" type="button" aria-expanded={infoOpen} aria-controls="info-panel" ref={toggleRef} onClick={() => setInfoOpen((open) => !open)}>
            {infoOpen ? 'Chiudi' : 'Info'}
          </button>
        </nav>
      </header>
      <main id="contenuto" ref={mainRef}>{children}</main>
      <footer className="site-footer" ref={footerRef}>
        <div dangerouslySetInnerHTML={{ __html: renderFooter() }} />
      </footer>
      <div className={`info-overlay${infoOpen ? ' is-open' : ''}`} id="info-panel" role="dialog" aria-modal="true" aria-labelledby="info-title" aria-hidden={!infoOpen} hidden={!infoOpen} tabIndex={-1} ref={panelRef} onClick={(event) => { if (event.target === event.currentTarget) setInfoOpen(false); }}>
        <div dangerouslySetInnerHTML={{ __html: renderInfoPanel() }} />
      </div>
    </>
  );
}
