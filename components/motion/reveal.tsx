"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

/** Shared easing for the page-level entrance: cubic-bezier(.44, 0, .56, 1). */
export const ENTRANCE_EASE = [0.44, 0, 0.56, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before the fade starts. */
  delay?: number;
  /** Fade duration in seconds. */
  duration?: number;
  /** Opacity the element settles on. */
  to?: number;
};

/**
 * Page-load fade used by the hero rail blocks: 0.8s delay, 1.5s tween.
 * Elements start at 0.001 (not 0) so they stay hit-testable like the original.
 */
export function Reveal({ children, className, delay = 0.8, duration = 1.5, to = 1 }: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0.001 }}
      animate={{ opacity: to }}
      transition={{ delay, duration, ease: ENTRANCE_EASE }}
      style={{ willChange: "transform" }}
    >
      {children}
    </m.div>
  );
}
