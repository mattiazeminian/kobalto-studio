import type { Metadata } from "next";
import Link from "next/link";
import { Subpage } from "@/components/Subpage";
import { manifesto } from "@/src/content/site";

export const metadata: Metadata = {
  title: "Manifesto — come lavoriamo",
  description:
    "Come Kobalto Studio affronta i progetti di Web e Product Design: obiettivi, struttura, interfacce e realizzazione.",
  alternates: { canonical: "/manifesto" },
  openGraph: {
    title: "Manifesto — Kobalto Studio",
    description: "Il nostro approccio a Web Design e Product Design.",
    url: "/manifesto",
    locale: "it_IT",
    images: [
      { url: "/assets/brand/kobalto-logo.png", alt: "Logo Kobalto Studio" },
    ],
  },
};
export default function ManifestoPage() {
  return (
    <Subpage
      title="Manifesto"
      intro="Prima di disegnare, capiamo cosa serve. Poi lavoriamo sulle scelte che rendono semplice usare un sito o un’app."
    >
      <div>
        {manifesto.map((line, index) => (
          <article key={line}>
            <div className="item-line">
              <h2>{line}</h2>
              <span>0{index + 1}</span>
            </div>
          </article>
        ))}
      </div>
      <p>
        <Link href="/studio">Conosci lo studio</Link>
      </p>
    </Subpage>
  );
}
