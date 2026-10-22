"use client";

import { m } from "framer-motion";
import { Button } from "@/components/ui/button";

type PillButtonProps = {
  label: string;
  hoverLabel: string;
  /** `solid` = white pill, `outline` = hairline white pill, `subtle` = transparent secondary, `brand` = cobalt CTA. */
  variant?: "solid" | "outline" | "subtle" | "brand";
  /** `pill` = 40px tall CTA, `pillTall` = 48px tall (footer). */
  size?: "pill" | "pillTall";
  className?: string;
  /** Link destination. */
  href: string;
};

const labels = {
  rest: { y: 0 },
  hover: { y: -29 },
};

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };

/** Only the label moves on hover; the button stays in place. */
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
        <span className="flex items-center justify-center">
          <span className="relative flex h-[19.2px] items-start overflow-hidden">
            <m.span
              className="relative flex flex-col items-center gap-2.5"
              variants={labels}
              transition={spring}
            >
              <span className="block">{label}</span>
              <span className="block">{hoverLabel}</span>
            </m.span>
          </span>
        </span>
      </m.a>
    </Button>
  );
}
