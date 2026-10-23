import { work } from "@/lib/content";
import { WorkLink } from "@/components/sections/work-link";

/** The case-study wall uses a single column with responsive gutters. */
export function WorkGrid() {
  return (
    <section
      id="progetti"
      aria-label="Progetti selezionati"
      className="flex w-full min-w-0 max-w-[1800px] flex-col gap-2 px-2 pb-2 desktop:gap-4 desktop:p-8 desktop:pt-8 "
    >
      {work.map((item, index) => (
        <article
          key={item.image}
          className={`relative aspect-[1.61261] w-full overflow-hidden rounded-[8px] bg-ink shadow-[0_1px_2px_rgba(0,0,0,0.25)]${index < 2 ? " work-entrance" : ""}`}
        >
          <WorkLink {...item} priority={index < 2} />
        </article>
      ))}
    </section>
  );
}
