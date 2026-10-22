import { PillButton } from "@/components/ui/pill-button";

/** Closing call to action: centred two-line invite with 48px to the pill. */
export function CtaSection() {
  return (
    <section
      aria-label="Iniziamo un progetto"
      className="flex min-h-[50vh] flex-col items-center justify-center gap-10 px-4 py-16 desktop:gap-12"
    >
      <h2 className="max-w-[900px] text-center font-display text-[40px] leading-[1.12] font-normal tracking-[-0.03em] text-foreground desktop:text-[58px]">
        Partiamo da una conversazione.
        <br />
        Il resto lo costruiamo insieme.
      </h2>
      <PillButton label="Parliamone" hoverLabel="Scrivici" variant="brand" href="mailto:hello@kobaltostudio.com" />
    </section>
  );
}
