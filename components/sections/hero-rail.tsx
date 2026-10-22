"use client";

import Image from "next/image";
import { LiveClock } from "@/components/live-clock";
import { Reveal } from "@/components/motion/reveal";
import { SplitWords } from "@/components/motion/split-words";
import { TrustedBrands } from "@/components/sections/trusted-brands";
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
              alt="Kobalto"
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
              text="Diamo forma alle idee di domani"
              className="text-[43px] leading-[1.1] font-medium tracking-[-0.03em] desktop:text-[46px]"
            />

            <Reveal to={0.7} className="w-full">
              <p className="text-[20px] leading-[24px] font-medium text-white/90">
                Progettiamo prodotti digitali con chi ha qualcosa di nuovo da dire.
              </p>
            </Reveal>
          </div>

          <Reveal className="w-min" delay={0.8}>
            <div className="flex items-center gap-1 overflow-hidden rounded-[29px]">
              <PillButton label="Parliamone" hoverLabel="Scrivici" />
              {/* Inert in the reference build: hover state only. */}
              <div className="flex h-10 items-center rounded-[32px] bg-white/[0.078] px-4 text-[15px] leading-[21px] text-white transition-colors duration-300 hover:bg-white/[0.148]">
                Chi siamo
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal className="hidden w-full desktop:block">
        <div className="flex flex-col gap-6">
          <TrustedBrands />
          <LiveClock />
        </div>
      </Reveal>
    </aside>
  );
}
