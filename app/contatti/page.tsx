import type { Metadata } from "next";
import { SiteFooter } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Contatti – Kobalto Studio",
  description:
    "Contatta Kobalto Studio per qualsiasi richiesta o chiarimento sui nostri servizi di web design.",
};

export default function ContattiPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-[104px] bg-[#020113] pt-8">
      <section
        aria-labelledby="contatti-title"
        className="flex w-full max-w-[1680px] flex-col items-center px-6"
      >
        <div className="flex h-[80vh] w-full flex-col items-start gap-8 desktop:flex-row">
          <div className="flex w-full flex-col gap-2 desktop:w-auto desktop:flex-1">
            <h1
              id="contatti-title"
              className="text-[34px] leading-[1.1] font-medium tracking-[-0.64px] text-white min-[810px]:text-[38px] min-[1440px]:text-[48px] min-[1440px]:leading-[1.3]"
            >
              Contatti
            </h1>
          </div>

          <div className="flex w-full flex-col p-1 desktop:w-auto desktop:flex-1">
            <div className="flex max-w-[370px] flex-col gap-6">
              <p className="bg-gradient-to-r from-[#f2f2f2] to-white bg-clip-text text-[16px] leading-6 font-medium text-transparent">
                Per qualsiasi richiesta o chiarimento riguardo alle nostre policy, non
                esitare a contattarci scrivendo a{" "}
                <a
                  href="mailto:hello@kobaltostudio.com"
                  className="text-inherit underline-offset-2 hover:underline"
                >
                  hello@kobaltostudio.com
                </a>
              </p>
              <p className="bg-gradient-to-r from-[#f2f2f2] to-white bg-clip-text text-[16px] leading-6 font-medium text-transparent">
                Siamo qui per aiutarti in ogni fase del percorso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full">
        <SiteFooter />
      </div>
    </main>
  );
}
