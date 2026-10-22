import { Button } from "@/components/ui/button";

type PillButtonProps = {
  label: string;
  /** `solid` = white pill, `outline` = hairline white pill. */
  variant?: "solid" | "outline";
  /** `pill` = 40px tall CTA, `pillTall` = 48px tall (footer). */
  size?: "pill" | "pillTall";
  className?: string;
  /** Link destination. */
  href: string;
};

/** A static label inside the original pill style. */
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
