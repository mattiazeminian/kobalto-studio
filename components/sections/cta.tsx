import { PillButton } from "@/components/ui/pill-button";

/** Closing call to action: centred two-line invite with 48px to the pill. */
export function CtaSection() {
  return (
    <section
      aria-label="Iniziamo un progetto"
      className="flex h-[50vh] flex-col items-center justify-center gap-12"
    >
      <h2 className="text-center text-[48px] leading-[1.1] font-medium tracking-[-0.03em] text-white">
        Partiamo da una conversazione.
        <br />
        Il resto lo costruiamo insieme.
      </h2>
      <PillButton label="Parliamone" hoverLabel="Scrivici" href="mailto:hello@kobaltostudio.com" />
    </section>
  );
}
