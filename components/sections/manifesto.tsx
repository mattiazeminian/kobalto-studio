"use client";

import { useEffect, useRef, useState } from "react";
import { manifesto } from "@/lib/content";
import { cn } from "@/lib/utils";

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

/**
 * Manifesto: six statements stacked without leading gaps. As the block travels
 * through the viewport the highlight steps down one line at a time
 * (the active line is full white, the rest sit at 30%).
 */
export function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const { top, height } = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      // Steps start once the block is ~38% into the viewport, then advance
      // once per eighth of the block height.
      const start = viewport * 0.383;
      const step = height / 8;
      setActive(clamp(Math.floor((start - top) / step) + 1, 0, manifesto.length - 1));
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Il nostro modo di vedere il design"
      className="flex flex-col justify-center px-[33px] py-[95px] desktop:h-[800px] desktop:flex-row desktop:items-center desktop:justify-center desktop:px-0 desktop:py-0"
    >
      <div className="flex w-full flex-col will-change-transform desktop:w-[1024px] desktop:pl-[72px] desktop:pr-[152px]">
        <h2 className="sr-only">Il nostro modo di vedere il design</h2>
        {manifesto.map((line, index) => (
          <p
            key={line}
            className={cn(
              "font-display text-[34px] leading-[1.15] font-normal tracking-[-0.025em] transition-colors duration-300 desktop:text-[48px]",
              active === index ? "text-foreground" : "text-muted",
            )}
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
