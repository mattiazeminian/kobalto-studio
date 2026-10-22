import Image from "next/image";
import Link from "next/link";

/**
 * Footer: link columns + recruiting block, then the full-bleed artwork that
 * fades to 10% and bleeds off the bottom of the page.
 */
export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-2.5">
      <div className="px-6 py-6 desktop:px-0 desktop:py-12">
        <div className="mx-auto grid w-full grid-cols-1 gap-10 pb-2.5 sm:grid-cols-2 desktop:flex desktop:w-[1024px] desktop:justify-between desktop:gap-0 desktop:pb-0">
          <nav aria-label="Esplora" className="flex flex-col gap-2.5 desktop:gap-4">
            <p className="mono-label text-white/50">Esplora</p>
            <ul className="flex flex-col gap-2.5 desktop:gap-4">
              <li><Link href="/#progetti" className="text-[16px] leading-[32px] text-white/71 transition-colors duration-300 hover:text-white focus-visible:text-white">Progetti</Link></li>
              <li><Link href="/#studio" className="text-[16px] leading-[32px] text-white/71 transition-colors duration-300 hover:text-white focus-visible:text-white">Lo studio</Link></li>
              <li><Link href="/contatti" className="text-[16px] leading-[32px] text-white/71 transition-colors duration-300 hover:text-white focus-visible:text-white">Contatti</Link></li>
            </ul>
          </nav>

          <div className="flex flex-col gap-2.5 desktop:gap-4">
            <p className="mono-label text-white/50">Dove siamo</p>
            <p className="text-[16px] leading-[28px] text-white/71">Verona, Italia.</p>
          </div>

          <div className="flex flex-col gap-2.5 desktop:gap-8">
            <p className="max-w-[305px] text-[16px] leading-[26px] text-[#6e6e6e] desktop:leading-[30px]">
              Hai bisogno di un sito nuovo o vuoi rimettere mano a quello che hai? Scrivici.
            </p>

            <div className="flex max-w-[266px] flex-col gap-2.5">
              <p className="mono-label text-white/50">Contatti</p>
              <a href="mailto:hello@kobaltostudio.com" className="break-all text-[16px] leading-[28px] text-white transition-colors duration-300 hover:text-white/70 focus-visible:text-white/70">
                hello@kobaltostudio.com
              </a>
            </div>

            <h2 className="mono-label text-white/50">Kobalto Studio</h2>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <Image
          src="/logo.png"
          alt=""
          width={1620}
          height={368}
          sizes="100vw"
          className="h-auto w-full opacity-10"
        />
      </div>
    </footer>
  );
}
