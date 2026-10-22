import Image from "next/image";
import { supportPoints } from "@/lib/content";

/**
 * "How we help": a 500x638 artwork cropped into a 500x540 (32px radius) frame,
 * paired with the offer copy. The artwork is over-tall by 49px on each side and
 * bleeds past the section, exactly like the source layout.
 */
export function HowWeHelpSection() {
  return (
    <section aria-label="Come lavoriamo" className="px-4 py-4 desktop:flex desktop:justify-center desktop:p-0">
      <div className="flex w-full flex-col gap-6 desktop:w-[1024px] desktop:flex-row desktop:items-center">
        <div className="relative h-[363px] w-full overflow-hidden rounded-[16px] desktop:h-[540px] desktop:w-[500px] desktop:shrink-0 desktop:rounded-[32px]">
          <Image
            src="/images/how-we-help.png"
            alt="Schermate di prodotti digitali progettati da Turbo"
            width={500}
            height={638}
            sizes="(min-width: 1200px) 500px, 100vw"
            className="absolute top-1/2 left-0 h-auto w-full -translate-y-1/2 object-cover"
          />
        </div>

        <div className="flex flex-col desktop:w-[500px]">
          <p className="mono-label text-white/50">Come lavoriamo</p>
          <h2 className="mt-2.5 text-[39px] leading-[1.1] font-medium tracking-[-0.03em] text-white">
            La tua idea merita di diventare un prodotto vero.
          </h2>
          <div className="mt-4 flex max-w-[358px] flex-col font-normal text-white/50 desktop:max-w-none">
            {supportPoints.map((point) => (
              <p key={point} className="text-[20px] leading-[28px] tracking-[0.2px]">
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
