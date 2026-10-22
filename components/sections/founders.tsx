import Image from "next/image";

const founders = [
  { name: "Mattia", photo: "/images/mattia.png" },
  { name: "Alberto", photo: "/images/alberto.png" },
] as const;

export function FoundersSection() {
  return (
    <section
      id="studio"
      aria-labelledby="studio-title"
      className="px-4 py-[104px] desktop:flex desktop:min-h-[600px] desktop:items-center desktop:justify-center desktop:px-0"
    >
      <div className="grid w-full gap-10 desktop:w-[1024px] desktop:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] desktop:items-center desktop:gap-14">
        <div>
          <p className="section-label text-muted">Lo studio</p>
          <h2
            id="studio-title"
            className="mt-2.5 font-display text-[43px] leading-[1.08] font-normal tracking-[-0.03em] text-foreground desktop:text-[51px]"
          >
            Due persone, un modo condiviso di vedere le cose.
          </h2>
          <p className="mt-6 text-[19px] leading-[28px] font-normal text-muted">
            Kobalto Studio nasce a Verona dall&apos;incontro di due prospettive.
            Lavoriamo insieme per trasformare idee in esperienze digitali chiare,
            utili e riconoscibili.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 desktop:gap-4">
          {founders.map(({ name, photo }) => (
            <figure key={name} className="min-w-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-[#171717]">
                <Image
                  src={photo}
                  alt={`Ritratto di ${name}`}
                  fill
                  sizes="(min-width: 1200px) 240px, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-[16px] leading-[22px] text-foreground">
                {name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
