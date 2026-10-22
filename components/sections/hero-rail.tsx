"use client";

import Image from "next/image";
import { LiveClock } from "@/components/live-clock";
import { Reveal } from "@/components/motion/reveal";
import { SplitWords } from "@/components/motion/split-words";
import { PillButton } from "@/components/ui/pill-button";

/**
 * Sticky hero rail. Below 1200px it collapses into a 320px header above the
 * work grid; at 1200px+ it pins to the viewport for the whole scroll.
 */
export function HeroRail() {
  return (
    <aside className="flex flex-col gap-8 p-4 desktop:sticky desktop:top-0 desktop:h-screen desktop:w-[375px] desktop:shrink-0 desktop:justify-between desktop:px-6 desktop:pt-6 desktop:pb-8">
      <div className="flex flex-col gap-8">
        <Reveal className="flex w-full items-center overflow-hidden">
          <div className="w-[115px] shrink-0">
            <Image
              src="/logo.png"
              alt="Kobalto Studio"
              width={1620}
              height={368}
              priority
              className="block h-auto w-full"
            />
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <SplitWords
              as="h1"
              text="Le idee prendono forma, insieme."
              className="text-[43px] leading-[1.1] font-medium tracking-[-0.03em] desktop:text-[46px]"
            />

            <Reveal to={0.7} className="w-full">
              <p className="text-[20px] leading-[24px] font-medium text-white/90">
                Siamo Kobalto Studio. A Verona, progettiamo esperienze e prodotti digitali.
              </p>
            </Reveal>
          </div>

          <Reveal className="w-min" delay={0.8}>
            <div className="flex items-center gap-5">
              <PillButton
                label="Contattaci"
                hoverLabel="Scrivici"
                variant="brand"
                href="mailto:hello@kobaltostudio.com"
                className="w-auto px-5"
                icon={
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                }
              />
              <a
                href="#studio"
                className="flex h-10 items-center gap-2 rounded-full px-1 text-[15px] leading-[21px] whitespace-nowrap text-white/60 transition-colors duration-300 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
                Chi siamo
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal className="hidden w-full desktop:block">
        <div className="flex flex-col gap-6">
          <p className="mono-label text-white/40">Mattia · Alberto</p>
          <LiveClock />
        </div>
      </Reveal>
    </aside>
  );
}
