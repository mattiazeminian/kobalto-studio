/** Project imagery in scroll order. */
export const work: string[] = Array.from(
  { length: 31 },
  (_, index) => `/images/work-${String(index + 1).padStart(2, "0")}.png`,
);

/** Lines that light up one after another while the manifesto scrolls past. */
export const manifesto = [
  "Un sito deve farsi capire.",
  "Chi arriva vuole sapere cosa fai.",
  "Vuole trovare quello che cerca.",
  "Vuole capire come contattarti.",
  "Testi, struttura e immagini servono a questo.",
  "Noi li mettiamo al posto giusto.",
];

export const supportPoints = [
  "Partiamo dai contenuti: cosa serve dire e in quale ordine.",
  "Disegniamo pagine facili da usare su ogni schermo.",
  "Curiamo i dettagli che rendono il sito riconoscibile.",
];
