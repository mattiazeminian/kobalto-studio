"use client";

import { m } from "framer-motion";
import { Button } from "@/components/ui/button";

type PillButtonProps = {
  label: string;
  hoverLabel: string;
  /** `solid` = white pill, `outline` = hairline white pill. */
  variant?: "solid" | "outline";
  /** `pill` = 40px tall CTA, `pillTall` = 48px tall (footer). */
  size?: "pill" | "pillTall";
  className?: string;
  /** Link destination. */
  href: string;
};

const labels = { rest: { y: 0 }, hover: { y: -29 } };

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };

/** Two stacked labels trade places on hover inside a clipped pill. */
export function PillButton({
  label,
  hoverLabel,
  variant = "solid",
  size = "pill",
  className,
  href,
}: PillButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <m.a href={href} initial="rest" animate="rest" whileHover="hover" whileFocus="hover">
        <span className="relative flex h-[19.2px] w-full items-center justify-center">
          <m.span
            className="absolute inset-x-0 top-0 flex flex-col items-center gap-2.5"
            variants={labels}
            transition={spring}
          >
            <span className="block">{label}</span>
            <span className="block">{hoverLabel}</span>
          </m.span>
        </span>
      </m.a>
    </Button>
  );
}
