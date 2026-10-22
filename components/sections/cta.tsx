import { PillButton } from "@/components/ui/pill-button";

/** Closing call to action: centred two-line invite with 48px to the pill. */
export function CtaSection() {
  return (
    <section
      aria-label="Iniziamo un progetto"
      className="flex min-h-[50vh] flex-col items-center justify-center gap-12 px-4 py-16 desktop:h-[50vh] desktop:py-0"
    >
      <h2 className="text-center text-[40px] leading-[1.1] font-medium tracking-[-0.03em] text-white desktop:text-[48px]">
        Hai un sito in mente?
        <br />
        Raccontaci cosa vuoi fare.
      </h2>
      <PillButton label="Parliamone" hoverLabel="Scrivici" href="mailto:hello@kobaltostudio.com" />
    </section>
  );
}
