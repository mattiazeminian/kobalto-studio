"use client";

import { m } from "framer-motion";
import { Button } from "@/components/ui/button";

type PillButtonProps = {
  label: string;
  /** Second label that slides up on hover. */
  hoverLabel: string;
  /** `solid` = white pill, `outline` = hairline white pill, `brand` = cobalt CTA. */
  variant?: "solid" | "outline" | "brand";
  /** `pill` = 40px tall CTA, `pillTall` = 48px tall (footer). */
  size?: "pill" | "pillTall";
  className?: string;
  /** Link destination. */
  href: string;
};

/** One label line (19.2px) + the 10px gap. */
const SWAP_DISTANCE = -29;

const labels = {
  rest: { y: 0 },
  hover: { y: SWAP_DISTANCE },
};

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };

/**
 * A clipping window over two stacked labels. Only the first
 * label is vertically centred — the alternate copy waits underneath the clip.
 * Hover springs the stack up one line so the two labels trade places.
 */
export function PillButton({
  label,
  hoverLabel,
  variant = "solid",
  size = "pill",
  className,
  href,
}: PillButtonProps) {
  const content = (
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
  );

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <m.a
        href={href}
        initial="rest"
        animate="rest"
        whileHover="hover"
        whileFocus="hover"
      >
        {content}
      </m.a>
    </Button>
  );
}
