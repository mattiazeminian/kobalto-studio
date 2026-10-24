import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Contatti – Studio Kobalto",
  description:
    "Parliamo del tuo sito web. Scrivi a Studio Kobalto o scopri come prenotare una call.",
  alternates: { canonical: "/contatti" },
};

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-[#020113] text-white">
      <div className="w-full px-4 pt-4 desktop:px-6 desktop:pt-6">
        <Link
          href="/"
          aria-label="Torna alla home"
          className="inline-flex size-8 items-center justify-center text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-[18px]" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5m6 6-6-6 6-6" />
          </svg>
        </Link>
      </div>

      <section
        aria-labelledby="contatti-title"
        className="mx-auto grid min-h-[70vh] w-full max-w-[1024px] gap-12 px-4 py-20 desktop:grid-cols-2 desktop:content-center desktop:items-start desktop:gap-16 desktop:px-0"
      >
        <div>
          <h1
            id="contatti-title"
            className="max-w-[450px] text-[43px] leading-[1.1] font-medium tracking-[-0.03em] desktop:text-[52px]"
          >
            Parliamo del tuo sito.
          </h1>
          <p className="mt-6 max-w-[410px] text-[19px] leading-[27px] font-normal text-white/70">
            Hai un progetto nuovo o vuoi migliorare quello che hai? Raccontaci da dove vuoi partire.
          </p>
        </div>

        <div className="flex min-w-0 flex-col gap-12">
          <div>
            <a
              href="mailto:hello@studiokobalto.com"
              className="block break-all text-[clamp(26px,4vw,42px)] leading-[1.1] font-medium tracking-[-0.03em] text-white underline decoration-white/30 underline-offset-[7px] transition-colors duration-300 hover:text-white/70 focus-visible:text-white/70"
            >
              hello@studiokobalto.com
            </a>
          </div>

          <div id="prenota-una-call" className="border-t border-white/20 pt-7">
            <p className="mono-label text-white/50">Preferisci parlarne a voce?</p>
            <a
              href="https://calendar.app.google/8jJtWgVo7RwMDr6h8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-10 items-center rounded-full bg-white/[0.078] px-5 text-[16px] font-medium text-white transition-colors duration-300 hover:bg-white/[0.148] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
            >
              Prenota una call con noi
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
