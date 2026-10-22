"use client";

import { Button } from "@/components/ui/button";

type PillButtonProps = {
  label: string;
  /** `solid` = white pill, `outline` = hairline white pill, `brand` = cobalt CTA. */
  variant?: "solid" | "outline" | "brand";
  /** `pill` = 40px tall CTA, `pillTall` = 48px tall (footer). */
  size?: "pill" | "pillTall";
  className?: string;
  /** Link destination. */
  href: string;
};

/** Link styled as a button, with color-only hover and focus states. */
export function PillButton({
  label,
  variant = "solid",
  size = "pill",
  className,
  href,
}: PillButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={href}>{label}</a>
    </Button>
  );
}
