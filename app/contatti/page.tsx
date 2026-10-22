import type { Metadata } from "next";
import { Subpage } from "@/components/Subpage";
import { studio } from "@/src/content/site";

export const metadata: Metadata = {
  title: "Contatti — iniziamo un progetto",
  description:
    "Parla direttamente con Mattia Zeminian e Alberto Toso di un sito web, una web app o un’app mobile.",
  alternates: { canonical: "/contatti" },
  openGraph: {
    title: "Contatti — Kobalto Studio",
    description:
      "Parla direttamente con Mattia e Alberto di un sito o un’interfaccia da progettare.",
    url: "/contatti",
    locale: "it_IT",
    images: [
      { url: "/assets/brand/kobalto-logo.png", alt: "Logo Kobalto Studio" },
    ],
  },
};
export default function ContactPage() {
  return (
    <Subpage
      title="Contatti"
      intro="Hai un sito da progettare o un’interfaccia da ripensare? Raccontaci obiettivi, contenuti e tempi."
    >
      <p>
        Parli direttamente con Mattia e Alberto. Puoi contattarli attraverso i
        loro portfolio personali.
      </p>
      <div className="contact-links">
        {studio.founders.map((founder) => (
          <a
            href={founder.url}
            key={founder.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {founder.name} — portfolio personale
          </a>
        ))}
      </div>
    </Subpage>
  );
}
