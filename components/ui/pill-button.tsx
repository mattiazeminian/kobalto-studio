"use client";

import { m, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";

type PillButtonProps = {
  label: string;
  hoverLabel: string;
  /** `solid` = white pill, `outline` = hairline white pill. */
  variant?: "solid" | "outline" | "subtle";
  /** `pill` = 40px tall CTA, `pillTall` = 48px tall (footer). */
  size?: "pill" | "pillTall";
  className?: string;
  /** Link destination. */
  href: string;
};

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };

/** Only the two labels slide; the button itself stays in place. */
export function PillButton({
  label,
  hoverLabel,
  variant = "solid",
  size = "pill",
  className,
  href,
}: PillButtonProps) {
  const reducedMotion = useReducedMotion();

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <m.a href={href} initial="rest" animate="rest" whileHover="hover" whileFocus="hover">
        <span className="relative flex h-[19.2px] items-start overflow-hidden">
          <m.span
            className="relative flex flex-col items-center gap-2.5"
            variants={{ rest: { y: 0 }, hover: { y: reducedMotion ? 0 : -29 } }}
            transition={reducedMotion ? { duration: 0 } : spring}
          >
            <span className="block">{label}</span>
            <span className="block" aria-hidden="true">{hoverLabel}</span>
          </m.span>
        </span>
      </m.a>
    </Button>
  );
}
