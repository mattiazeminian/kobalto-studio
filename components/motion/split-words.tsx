"use client";

import { m } from "framer-motion";
import { Fragment } from "react";
import { ENTRANCE_EASE } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SplitWordsProps = {
  text: string;
  className?: string;
  /** Rendered element, defaults to a paragraph. */
  as?: "p" | "h1" | "h2";
  /** Insert a line break after this word on mobile. */
  mobileBreakAfter?: string;
  /** Delay before the first word starts. */
  delay?: number;
  /** Delay added per word. */
  stagger?: number;
  duration?: number;
};

const tags = { p: m.p, h1: m.h1, h2: m.h2 };

/**
 * Hero headline entrance: each word lifts 10px, unblurs and fades in,
 * 60ms behind the previous one.
 */
export function SplitWords({
  text,
  className,
  as = "p",
  mobileBreakAfter,
  delay = 0.5,
  stagger = 0.06,
  duration = 2.1,
}: SplitWordsProps) {
  const Tag = tags[as];
  const words = text.split(" ");

  return (
    <Tag className={cn("text-white", className)} initial="hidden" animate="visible">
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <m.span
            className="inline-block"
            style={{ willChange: "transform" }}
            variants={{
              hidden: { opacity: 0.001, y: 10, filter: "blur(10px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { delay: delay + index * stagger, duration, ease: ENTRANCE_EASE },
              },
            }}
          >
            {word}
          </m.span>
          {word === mobileBreakAfter ? <br className="desktop:hidden" /> : null}
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
