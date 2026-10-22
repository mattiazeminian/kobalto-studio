import Image from "next/image";

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
            <p className="section-label text-muted">Esplora</p>
            <ul className="flex flex-col gap-2.5 desktop:gap-4">
              <li><a href="#progetti" className="text-[16px] leading-[32px] text-muted transition-colors duration-200 hover:text-cobalt-light focus-visible:text-cobalt-light">Progetti</a></li>
              <li><a href="#studio" className="text-[16px] leading-[32px] text-muted transition-colors duration-200 hover:text-cobalt-light focus-visible:text-cobalt-light">Lo studio</a></li>
            </ul>
          </nav>

          <div className="flex flex-col gap-2.5 desktop:gap-4">
            <p className="section-label text-muted">Da Verona</p>
            <p className="text-[16px] leading-[28px] text-muted">Uno studio indipendente a Verona, Italia.</p>
          </div>

          <div className="flex flex-col gap-2.5 desktop:gap-8">
            <p className="max-w-[305px] text-[16px] leading-[26px] text-muted desktop:leading-[30px]">
              Ci piace dare forma a idee in cui crediamo. Forse la prossima è la tua.
            </p>

            <div className="flex max-w-[266px] flex-col gap-2.5">
              <p className="section-label text-muted">Verona, Italia</p>
              <a href="mailto:hello@kobaltostudio.com" className="break-all text-[16px] leading-[28px] text-foreground transition-colors duration-200 hover:text-cobalt-light focus-visible:text-cobalt-light">
                hello@kobaltostudio.com
              </a>
            </div>

            <h2 className="section-label text-muted">Kobalto Studio</h2>
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
