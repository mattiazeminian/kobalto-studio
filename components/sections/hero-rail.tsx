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
    <aside className="flex flex-col gap-12 p-4 desktop:sticky desktop:top-0 desktop:grid desktop:h-screen desktop:w-[375px] desktop:shrink-0 desktop:grid-rows-[auto_1fr_auto] desktop:gap-0 desktop:px-6 desktop:pt-6 desktop:pb-8">
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

      <div className="flex flex-col gap-7 desktop:self-center">
        <div className="flex flex-col gap-4">
          <Reveal to={0.7} className="w-full">
            <p className="text-[14px] leading-[20px] font-medium tracking-[0.01em] text-white/50">
              Kobalto Studio
            </p>
          </Reveal>
          <SplitWords
            as="h1"
            text="Le idee prendono forma."
            className="text-[36px] leading-[1.08] font-medium tracking-[-0.03em] desktop:text-[38px]"
          />

          <Reveal to={0.7} className="w-full">
            <p className="max-w-[310px] text-[17px] leading-[24px] font-normal text-white/70">
              Da Verona, progettiamo esperienze e prodotti digitali con chi ha qualcosa di nuovo da dire.
            </p>
          </Reveal>
        </div>

        <Reveal className="w-min" delay={0.8}>
          <div className="flex items-center gap-5">
            <PillButton
              label="Contattaci"
              variant="brand"
              href="mailto:hello@kobaltostudio.com"
              className="w-auto px-5"
            />
            <a
              href="#studio"
              className="flex h-10 items-center rounded-full px-1 text-[15px] leading-[21px] whitespace-nowrap text-white/60 transition-colors duration-200 hover:text-cobalt-light focus-visible:text-cobalt-light focus-visible:outline-none"
            >
              Chi siamo
            </a>
          </div>
        </Reveal>
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
