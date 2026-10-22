"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/content";
import { cn } from "@/lib/utils";

/** One slide every 5s; the underline doubles as the progress indicator. */
const SLIDE_DURATION = 5;

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, SLIDE_DURATION * 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      aria-label="Le parole dei clienti"
      className="px-4 py-[104px] desktop:flex desktop:h-screen desktop:items-center desktop:justify-center desktop:px-0 desktop:py-0"
    >
      <div className="w-full desktop:w-[1024px]">
        <div className="flex flex-col items-center gap-2.5">
          <p className="mono-label text-center text-white/50">Le loro parole</p>
          <h2 className="text-center text-[39px] leading-[1.1] font-medium tracking-[-0.03em] text-white">
            Cosa dicono di noi
          </h2>
        </div>

        <div className="relative mt-10 h-[400px] w-full overflow-hidden rounded-[30px] bg-ink">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[30px] border border-hairline"
          />

          <div className="flex h-full flex-col">
            <div className="flex flex-1 items-center justify-center px-4 desktop:px-0">
              <div className="w-full text-center desktop:w-[636px] desktop:px-4">
                <div>
                  <p className="text-[20px] leading-[28px] font-normal tracking-[0.2px] whitespace-pre-line text-white">
                    {active.quote}
                  </p>
                  <div className="mt-2.5 flex items-center justify-center gap-2.5">
                    <span className="relative block size-8 shrink-0 overflow-hidden rounded-full">
                      <Image src={active.avatar} alt="" fill sizes="32px" className="object-cover" />
                    </span>
                    <p className="mono-label text-white/50">{active.author}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-0.5" role="tablist" aria-label="Seleziona una testimonianza">
              {testimonials.map((item, itemIndex) => {
                const isActive = itemIndex === index;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={item.author}
                    onClick={() => setIndex(itemIndex)}
                    className={cn(
                      "relative flex h-[51px] items-start justify-center overflow-hidden rounded-t-[8px] pt-[11px] outline-none transition-colors duration-300 focus-visible:ring-1 focus-visible:ring-white/40",
                      isActive ? "bg-ink-raised" : "bg-transparent",
                    )}
                  >
                    <Image
                      src={item.logo}
                      alt=""
                      width={108}
                      height={26}
                      className={cn(
                        "h-[26px] w-[108px] object-contain transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-60",
                      )}
                    />
                    {isActive ? (
                      <m.span
                        key={`${item.id}-progress`}
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-white"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: SLIDE_DURATION, ease: "linear" }}
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
