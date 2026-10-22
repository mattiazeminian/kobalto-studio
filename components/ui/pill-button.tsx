import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

/** Only the two labels slide; the button itself stays in place. */
export function PillButton({
  label,
  hoverLabel,
  variant = "solid",
  size = "pill",
  className,
  href,
}: PillButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={cn("pill-link px-0", className)}>
      <a href={href} aria-label={label}>
        <span className="pill-label-window">
          <span className="pill-label-stack" aria-hidden="true">
            <span>{label}</span>
            <span>{hoverLabel}</span>
          </span>
        </span>
      </a>
    </Button>
  );
}
