import Image from "next/image";
import Link from "next/link";
import { priceNote, services } from "@/src/content/site";

export function ServicesSection() {
  return (
    <section
      className="services-section"
      id="competenze"
      aria-labelledby="services-heading"
    >
      <div className="services-visual">
        <Image
          src="/assets/projects/collecto/hero.webp"
          alt="Dettaglio del sito Collecto, progetto Web di Kobalto Studio"
          fill
          sizes="(max-width: 600px) 100vw, 500px"
        />
      </div>
      <div className="services-copy">
        <span className="eyebrow">01 / Competenze</span>
        <h2 id="services-heading">Progettiamo per il web e per chi lo usa.</h2>
        <p>
          Siti, web app e app mobile. Partiamo da contenuti, percorsi e
          funzioni; poi disegniamo interfacce che possiamo seguire fino alla
          realizzazione.
        </p>
        <ul>
          {services.map((service) => (
            <li key={service.title}>{service.title}</li>
          ))}
        </ul>
        <p className="small-note">{priceNote}</p>
        <Link className="pill pill-light" href="/competenze">
          Scopri le competenze
        </Link>
      </div>
    </section>
  );
}
