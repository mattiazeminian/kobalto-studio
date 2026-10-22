"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { motionConfig } from "@/src/motion";
import { navigation, studio } from "@/src/content/site";

type Panel = "studio" | "contatti" | null;
const headline = "Web e Product Design a Verona.";

export function InteractiveIntro() {
  const [panel, setPanel] = useState<Panel>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!panel) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const siblings = [
      ...document.querySelectorAll<HTMLElement>("main > :not(.panel-backdrop)"),
    ];
    siblings.forEach((element) => {
      element.inert = true;
    });
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPanel(null);
      if (event.key === "Tab") {
        const root = document.querySelector<HTMLElement>("[data-panel]");
        const nodes = root?.querySelectorAll<HTMLElement>(
          "a[href],button:not([disabled])",
        );
        if (!nodes?.length) return;
        const first = nodes[0],
          last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      siblings.forEach((element) => {
        element.inert = false;
      });
      document.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [panel]);

  function open(next: Exclude<Panel, null>, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setPanel(next);
  }

  return (
    <>
      <aside className="intro-rail">
        <Link
          href="/"
          className="brand-logo"
          aria-label="Kobalto Studio, pagina iniziale"
        >
          <Image
            src="/assets/brand/kobalto-logo.png"
            alt="Kobalto Studio"
            width={1619}
            height={367}
            priority
          />
        </Link>
        <div className="intro-main">
          <h1>
            {headline.split(" ").map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="hero-word"
                initial={
                  reduced ? false : { opacity: 0, y: motionConfig.hero.offset }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduced ? 0 : motionConfig.hero.duration,
                  delay: reduced ? 0 : index * motionConfig.hero.stagger,
                  ease: motionConfig.hero.ease,
                }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </h1>
          <p>Siti web, web app e app mobile. Progettiamo e sviluppiamo.</p>
          <div className="intro-actions">
            <button
              className="pill pill-light"
              type="button"
              onClick={(event) => open("contatti", event.currentTarget)}
            >
              Inizia un progetto
            </button>
            <button
              className="pill pill-dark"
              type="button"
              onClick={(event) => open("studio", event.currentTarget)}
            >
              Studio
            </button>
          </div>
        </div>
        <div className="intro-bottom">
          <span className="eyebrow">Kobalto Studio / Verona</span>
          <nav aria-label="Navigazione principale">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <p>
            Verona, Italia
            <br />
            Web Design Agency
          </p>
        </div>
      </aside>
      <AnimatePresence>
        {panel && (
          <motion.div
            className={`panel-backdrop ${panel === "studio" ? "about-backdrop" : "contact-backdrop"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.25 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setPanel(null);
            }}
          >
            {panel === "studio" ? (
              <motion.section
                data-panel
                role="dialog"
                aria-modal="true"
                aria-labelledby="studio-modal-title"
                className="studio-modal"
                initial={reduced ? false : { opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{
                  duration: reduced ? 0 : motionConfig.panel.duration,
                  ease: motionConfig.panel.ease,
                }}
              >
                <div className="modal-body">
                  <span className="modal-mark">K.</span>
                  <h2 id="studio-modal-title">
                    Uno studio indipendente a Verona.
                  </h2>
                  <p>
                    Mattia Zeminian e Alberto Toso sono i fondatori di Kobalto
                    Studio. Lavoriamo direttamente con chi ci affida un
                    progetto.
                  </p>
                  <p>
                    Da 8 anni ci occupiamo di Web Design e Product Design.
                    Progettiamo siti, web app e app mobile; per i siti seguiamo
                    anche lo sviluppo.
                  </p>
                  <p>
                    Quando servono fotografia, marketing o competenze collegate,
                    possiamo collaborare con professionisti esterni.
                  </p>
                  <Link href="/studio" onClick={() => setPanel(null)}>
                    Conosci lo studio
                  </Link>
                </div>
                <button
                  ref={closeRef}
                  className="panel-close"
                  type="button"
                  onClick={() => setPanel(null)}
                >
                  Chiudi
                </button>
              </motion.section>
            ) : (
              <motion.section
                data-panel
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-modal-title"
                className="contact-drawer"
                initial={reduced ? false : { x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  duration: reduced ? 0 : 0.4,
                  ease: motionConfig.panel.ease,
                }}
              >
                <div className="drawer-head">
                  <span>Kobalto Studio</span>
                  <button
                    ref={closeRef}
                    type="button"
                    onClick={() => setPanel(null)}
                    aria-label="Chiudi il pannello contatti"
                  >
                    Chiudi
                  </button>
                </div>
                <div className="drawer-content">
                  <span className="eyebrow">Contatti / Verona</span>
                  <h2 id="contact-modal-title">Parliamo del tuo progetto.</h2>
                  <p>
                    Raccontaci cosa stai costruendo, quali contenuti hai già e
                    di cosa hai bisogno. Rispondono direttamente Mattia e
                    Alberto.
                  </p>
                  <div className="drawer-founders">
                    {studio.founders.map((founder) => (
                      <a
                        href={founder.url}
                        key={founder.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>{founder.name}</span>
                        <small>Portfolio personale</small>
                      </a>
                    ))}
                  </div>
                  <Link
                    className="pill pill-light"
                    href="/contatti"
                    onClick={() => setPanel(null)}
                  >
                    Vai ai contatti
                  </Link>
                </div>
                <span className="drawer-foot">
                  Kobalto Studio — Verona, Italia
                </span>
              </motion.section>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
