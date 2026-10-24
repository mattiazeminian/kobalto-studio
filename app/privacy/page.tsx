import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Studio Kobalto | Privacy",
  description: "Come Studio Kobalto tratta i dati di chi visita il sito, ci scrive o prenota una call.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#020113] text-white">
      <div className="w-full px-4 pt-4 desktop:px-6 desktop:pt-6">
        <Link
          href="/"
          aria-label="Torna alla home"
          className="inline-flex size-8 items-center justify-center text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-[18px]" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5m6 6-6-6 6-6" />
          </svg>
        </Link>
      </div>

      <section
        aria-labelledby="privacy-title"
        className="mx-auto grid w-full max-w-[1024px] gap-12 px-4 py-20 desktop:grid-cols-2 desktop:items-start desktop:gap-16 desktop:px-0"
      >
        <div className="desktop:sticky desktop:top-12">
          <h1
            id="privacy-title"
            className="text-[43px] leading-[1.1] font-medium tracking-[-0.03em] desktop:text-[52px]"
          >
            Privacy.
          </h1>
          <p className="mt-6 max-w-[410px] text-[19px] leading-[27px] font-normal text-white/70">
            Qui trovi come trattiamo i dati quando visiti il sito, ci scrivi o prenoti una call.
          </p>
          <p className="mt-6 text-[14px] leading-5 text-white/50">Aggiornata il 24 ottobre 2026</p>
        </div>

        <div className="flex min-w-0 flex-col gap-10 text-[16px] leading-[26px] text-white/70">
          <section aria-labelledby="privacy-titolare">
            <h2 id="privacy-titolare" className="mb-3 text-[22px] leading-[28px] font-medium text-white">Chi tratta i dati</h2>
            <p>
              Il titolare del trattamento è Studio Kobalto, a Verona, Italia.
              Per domande o richieste sulla privacy puoi scrivere a{" "}
              <a href="mailto:hello@studiokobalto.com" className="inline-block whitespace-nowrap text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
                hello@studiokobalto.com
              </a>.
            </p>
          </section>

          <section aria-labelledby="privacy-dati">
            <h2 id="privacy-dati" className="mb-3 text-[22px] leading-[28px] font-medium text-white">Quali dati trattiamo</h2>
            <div className="space-y-3">
              <p>Quando navighi sul sito, il servizio di hosting può trattare dati tecnici come indirizzo IP, informazioni sul browser e richieste inviate al server.</p>
              <p>Se ci scrivi, riceviamo il tuo indirizzo email e quello che scegli di raccontarci nel messaggio.</p>
              <p>Se prenoti una call, la prenotazione avviene su Google Calendar. Riceviamo i dati necessari a organizzare l’appuntamento che inserisci nel modulo di prenotazione.</p>
            </div>
          </section>

          <section aria-labelledby="privacy-finalita">
            <h2 id="privacy-finalita" className="mb-3 text-[22px] leading-[28px] font-medium text-white">Perché li usiamo</h2>
            <p>
              Usiamo i dati tecnici per far funzionare e proteggere il sito, nel nostro legittimo interesse.
              Usiamo i dati che ci invii per rispondere, valutare un eventuale progetto e organizzare la call:
              a seconda della richiesta, per misure precontrattuali chieste da te o per il nostro legittimo interesse a risponderti.
            </p>
          </section>

          <section aria-labelledby="privacy-statistiche">
            <h2 id="privacy-statistiche" className="mb-3 text-[22px] leading-[28px] font-medium text-white">Statistiche di visita</h2>
            <p>
              Usiamo Vercel Web Analytics per capire quante persone visitano il sito e quali pagine consultano.
              Secondo Vercel, il servizio non usa cookie e conserva dati anonimizzati.
              Usiamo queste statistiche nel nostro legittimo interesse a migliorare il sito.
            </p>
          </section>

          <section aria-labelledby="privacy-fornitori">
            <h2 id="privacy-fornitori" className="mb-3 text-[22px] leading-[28px] font-medium text-white">Servizi esterni</h2>
            <p>
              Il sito è ospitato da Vercel. Per le email usiamo un servizio di posta elettronica;
              per prenotare una call usiamo Google Calendar. Questi fornitori possono trattare dati anche fuori
              dallo Spazio economico europeo, secondo le garanzie previste dalla normativa applicabile.
              I link a LinkedIn e ai siti dei progetti aprono pagine esterne con informative proprie.
            </p>
          </section>

          <section aria-labelledby="privacy-conservazione">
            <h2 id="privacy-conservazione" className="mb-3 text-[22px] leading-[28px] font-medium text-white">Per quanto tempo</h2>
            <p>
              Conserviamo email e dati relativi alle call per il tempo necessario a gestire la richiesta e
              l’eventuale rapporto professionale. Alcuni dati possono essere conservati più a lungo se richiesto
              dalla legge o necessario a tutelare i nostri diritti. I dati tecnici e le statistiche seguono i
              tempi di conservazione dei servizi utilizzati.
            </p>
          </section>

          <section aria-labelledby="privacy-diritti">
            <h2 id="privacy-diritti" className="mb-3 text-[22px] leading-[28px] font-medium text-white">I tuoi diritti</h2>
            <p>
              Puoi chiedere accesso, rettifica o cancellazione dei tuoi dati e, nei casi previsti,
              limitarne il trattamento, opporti o chiederne la portabilità. Scrivici a{" "}
              <a href="mailto:hello@studiokobalto.com" className="inline-block whitespace-nowrap text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
                hello@studiokobalto.com
              </a>.
              Puoi anche presentare un reclamo al Garante per la protezione dei dati personali.
            </p>
          </section>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
