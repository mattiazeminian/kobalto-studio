import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Contatti – Kobalto Studio",
  description:
    "Parliamo del tuo sito web. Scrivi a Kobalto Studio o scopri come prenotare una call.",
};

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <div className="mx-auto w-full max-w-[1024px] px-4 pt-6 desktop:px-0">
        <Link href="/" aria-label="Torna alla home di Kobalto Studio" className="block w-[115px]">
          <Image
            src="/logo.png"
            alt="Kobalto Studio"
            width={1620}
            height={368}
            priority
            className="block h-auto w-full"
          />
        </Link>
      </div>

      <section
        aria-labelledby="contatti-title"
        className="mx-auto grid min-h-[70vh] w-full max-w-[1024px] gap-12 px-4 py-20 desktop:grid-cols-2 desktop:items-center desktop:gap-16 desktop:px-0"
      >
        <div>
          <p className="mono-label text-white/50">Contatti</p>
          <h1
            id="contatti-title"
            className="mt-3 max-w-[450px] text-[43px] leading-[1.1] font-medium tracking-[-0.03em] desktop:text-[52px]"
          >
            Parliamo del tuo sito.
          </h1>
          <p className="mt-6 max-w-[410px] text-[19px] leading-[27px] font-normal text-white/70">
            Hai un progetto nuovo o vuoi migliorare quello che hai? Raccontaci da dove vuoi partire.
          </p>
        </div>

        <div className="flex min-w-0 flex-col gap-12">
          <div>
            <p className="mono-label text-white/50">Scrivici</p>
            <a
              href="mailto:hello@kobaltostudio.com"
              className="mt-3 block break-all text-[clamp(26px,4vw,42px)] leading-[1.1] font-medium tracking-[-0.03em] text-white underline decoration-white/30 underline-offset-[7px] transition-colors duration-300 hover:text-white/70 focus-visible:text-white/70"
            >
              hello@kobaltostudio.com
            </a>
          </div>

          <div id="prenota-una-call" className="border-t border-white/20 pt-7">
            <p className="mono-label text-white/50">Preferisci parlarne a voce?</p>
            <a
              href="#prenota-una-call"
              aria-label="Prenota una call con noi, link disponibile a breve"
              className="mt-4 inline-flex h-10 items-center rounded-full bg-white/[0.078] px-5 text-[16px] font-medium text-white transition-colors duration-300 hover:bg-white/[0.148] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
            >
              Prenota una call con noi
            </a>
            <p className="mt-3 text-[14px] leading-5 text-white/50">Link disponibile a breve.</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
