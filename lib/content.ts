/** Project imagery in scroll order. */
export const work: string[] = Array.from(
  { length: 31 },
  (_, index) => `/images/work-${String(index + 1).padStart(2, "0")}.png`,
);

/** Lines that light up one after another while the manifesto scrolls past. */
export const manifesto = [
  "Le persone si aspettano di più.",
  "Ogni dettaglio conta.",
  "Le idee da sole non bastano.",
  "Serve un prodotto che le persone vogliano usare.",
  "Li progettiamo con cura, un dettaglio alla volta.",
  "Ora possiamo farlo insieme a te.",
];

export const supportPoints = [
  "Diamo forma alle idee, dai primi schizzi al prodotto finito.",
  "Rendiamo semplici anche le esperienze più complesse.",
  "Ti aiutiamo a scegliere bene e a muoverti più velocemente.",
];
