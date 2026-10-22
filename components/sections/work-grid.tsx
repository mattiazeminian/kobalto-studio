import Image from "next/image";
import { work } from "@/lib/content";

/**
 * The case-study wall. 31 tiles in a single column: 16px gutter and 32px
 * padding at 1200px+, 8px both below that. Tiles keep a 991:615 frame.
 */
export function WorkGrid() {
  return (
    <section
      id="progetti"
      aria-label="Progetti selezionati"
      className="flex w-full min-w-0 flex-col gap-2 px-2 pb-2 desktop:gap-4 desktop:p-8"
    >
      {work.map((image, index) => (
        <article
          key={image}
          className="relative aspect-[1.61261] w-full overflow-hidden rounded-[8px] bg-ink shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1200px) 991px, 100vw"
            className="object-cover"
            priority={index < 2}
          />
        </article>
      ))}
    </section>
  );
}
