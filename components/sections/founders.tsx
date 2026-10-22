export function FoundersSection() {
  return (
    <section
      id="studio"
      aria-labelledby="studio-title"
      className="px-4 py-[104px] desktop:flex desktop:min-h-[600px] desktop:items-center desktop:justify-center desktop:px-0"
    >
      <div className="w-full desktop:w-[1024px]">
        <p className="mono-label text-white/50">Lo studio</p>
        <h2
          id="studio-title"
          className="mt-2.5 max-w-[800px] text-[39px] leading-[1.1] font-medium tracking-[-0.03em] text-white desktop:text-[48px]"
        >
          Due persone, un modo condiviso di vedere le cose.
        </h2>
        <p className="mt-6 max-w-[680px] text-[20px] leading-[28px] text-white/50">
          Kobalto Studio nasce a Verona da Mattia Zeminian e Alberto Toso.
          Lavoriamo insieme per trasformare idee in esperienze digitali chiare,
          utili e riconoscibili.
        </p>
        <div className="mt-12 grid gap-4 desktop:grid-cols-2">
          {['Mattia Zeminian', 'Alberto Toso'].map((name) => (
            <div key={name} className="rounded-[24px] border border-hairline p-8">
              <p className="mono-label text-white/50">Cofondatore</p>
              <h3 className="mt-3 text-[32px] leading-[1.1] font-medium tracking-[-0.03em] text-white">
                {name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
