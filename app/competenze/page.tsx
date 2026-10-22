import type { Metadata } from "next";
import Link from "next/link";
import { Subpage } from "@/components/Subpage";
import { priceNote, services } from "@/src/content/site";

export const metadata: Metadata = {
  title: "Competenze — Web Design e Product Design",
  description:
    "Siti web, UX/UI per web app e app mobile. Scopri le competenze e i prezzi indicativi di Kobalto Studio a Verona.",
  alternates: { canonical: "/competenze" },
  openGraph: {
    title: "Competenze — Kobalto Studio",
    description:
      "Web Design e Product Design per siti, web app e app mobile a Verona.",
    url: "/competenze",
    locale: "it_IT",
    images: [
      { url: "/assets/brand/kobalto-logo.png", alt: "Logo Kobalto Studio" },
    ],
  },
};
export default function ServicesPage() {
  return (
    <Subpage
      title="Competenze"
      intro="Web Design e sviluppo per i siti. Product Design e UX/UI per web app e app mobile."
    >
      <div>
        {services.map((service, index) => (
          <article className="service-detail" key={service.title}>
            <div className="item-line">
              <h2>{service.title}</h2>
              <span>
                0{index + 1} / {service.from}
              </span>
            </div>
            <p>{service.description}</p>
            <p className="example">{service.example}</p>
          </article>
        ))}
      </div>
      <p className="price-note">{priceNote}</p>
      <p>
        Se servono fotografia, marketing o altre competenze, possiamo
        coinvolgere professionisti esterni e concordare insieme il loro ruolo.
      </p>
      <p>
        <Link href="/contatti">Parliamo del progetto</Link>
      </p>
    </Subpage>
  );
}
