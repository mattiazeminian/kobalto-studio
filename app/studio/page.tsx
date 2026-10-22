import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Subpage } from "@/components/Subpage";
import { studio } from "@/src/content/site";

export const metadata: Metadata = {
  title: "Studio — Mattia Zeminian e Alberto Toso",
  description:
    "Kobalto Studio è uno studio indipendente a Verona fondato da Mattia Zeminian e Alberto Toso. Lavoriamo direttamente con i clienti.",
  alternates: { canonical: "/studio" },
  openGraph: {
    title: "Studio — Kobalto Studio",
    description:
      "Mattia Zeminian e Alberto Toso, fondatori di Kobalto Studio a Verona.",
    url: "/studio",
    locale: "it_IT",
    images: [
      { url: "/assets/brand/kobalto-logo.png", alt: "Logo Kobalto Studio" },
    ],
  },
};
export default function StudioPage() {
  return (
    <Subpage
      title="Studio"
      intro="Siamo Mattia Zeminian e Alberto Toso, fondatori di Kobalto Studio. Lavori direttamente con noi."
    >
      <p>
        Da 8 anni lo studio lavora nel Web Design e nel Product Design.
        Progettiamo e realizziamo siti; disegniamo flussi e interfacce per web
        app e app mobile.
      </p>
      <div className="founders">
        {studio.founders.map((founder) => (
          <article key={founder.name}>
            <Image
              src={founder.portrait}
              alt={`Ritratto di ${founder.name}`}
              width={600}
              height={750}
            />
            <h2>{founder.name}</h2>
            <a href={founder.url} target="_blank" rel="noopener noreferrer">
              Portfolio personale
            </a>
          </article>
        ))}
      </div>
      <p>
        Partiamo da obiettivi e contenuti, progettiamo le interfacce e
        condividiamo le scelte con il cliente. Per fotografia e marketing
        possiamo coinvolgere professionisti esterni.
      </p>
      <p>
        <Link href="/contatti">Raccontaci il progetto</Link>
      </p>
    </Subpage>
  );
}
