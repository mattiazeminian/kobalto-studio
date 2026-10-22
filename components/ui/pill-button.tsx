"use client";

import { m } from "framer-motion";
import { useBooking } from "@/components/booking-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PillButtonProps = {
  label: string;
  /** Second label that slides up on hover. */
  hoverLabel: string;
  /** `solid` = white pill, `outline` = hairline white pill. */
  variant?: "solid" | "outline";
  /** `pill` = 40px tall CTA, `pillTall` = 48px tall (footer). */
  size?: "pill" | "pillTall";
  className?: string;
  /** Renders a link instead of the booker trigger. */
  href?: string;
};

/** One label line (19.2px) + the 10px gap. */
const SWAP_DISTANCE = -29;

const labels = {
  rest: { y: 0 },
  hover: { y: SWAP_DISTANCE },
};

const spring = { type: "spring" as const, stiffness: 400, damping: 30 };

/**
 * The Turbo pill: a clipping window over two stacked labels. Only the first
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
  const { open } = useBooking();

  const content = (
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
  );

  if (href) {
    return (
      <Button asChild variant={variant} size={size} className={className}>
        <m.a
          href={href}
          target="_blank"
          rel="noreferrer"
          initial="rest"
          animate="rest"
          whileHover="hover"
        >
          {content}
        </m.a>
      </Button>
    );
  }

  return (
    <Button asChild variant={variant} size={size} className={cn("group", className)}>
      <m.button
        type="button"
        onClick={open}
        initial="rest"
        animate="rest"
        whileHover="hover"
        aria-haspopup="dialog"
      >
        {content}
      </m.button>
    </Button>
  );
}
