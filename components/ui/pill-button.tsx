import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PillButtonProps = {
  label: string;
  hoverLabel: string;
  variant?: "solid" | "subtle";
  className?: string;
  /** Link destination. */
  href: string;
};

/** Only the two labels slide; the button itself stays in place. */
export function PillButton({
  label,
  hoverLabel,
  variant = "solid",
  className,
  href,
}: PillButtonProps) {
  return (
    <Button asChild variant={variant} className={cn("pill-link px-0", className)}>
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
