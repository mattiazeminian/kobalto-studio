export const studio = {
  name: 'Kobalto Studio',
  city: 'Verona',
  experienceYears: 8,
  founders: ['Mattia Zeminian', 'Alberto Toso'],
  description: 'A Verona, Kobalto Studio progetta e sviluppa siti web. Per web app e app mobile cura Product e UX/UI.',
  approach: 'Parli direttamente con Mattia e Alberto. Mettiamo a fuoco obiettivi e contenuti, poi disegniamo struttura e interfacce. Per i siti seguiamo anche lo sviluppo.',
  collaboration: 'Se servono fotografia o marketing, coinvolgiamo professionisti esterni e concordiamo insieme il loro ruolo.',
};

export const homePage = {
  eyebrow: 'Kobalto Studio · Web agency a Verona',
  title: 'Web Design e Product Design a Verona.',
  intro: 'Disegniamo e sviluppiamo siti web. Progettiamo flussi e interfacce per web app e app mobile. Lavori direttamente con noi.',
};

export const navigation = [
  { label: 'Progetti', href: '/progetti/' },
  { label: 'Competenze', href: '/competenze/' },
  { label: 'Manifesto', href: '/manifesto/' },
  { label: 'Contatti', href: '/contatti/' },
];

export const audiences = [
  { title: 'Startup e aziende digitali', description: 'Siti per presentare un’offerta, interfacce per usarla.' },
  { title: 'Ospitalità', description: 'Camere, servizi e contatti organizzati con chiarezza.' },
  { title: 'Industria e manifattura', description: 'Prodotti e lavorazioni spiegati senza perdere i dettagli.' },
  { title: 'Bar e ristoranti', description: 'Menu, orari e contatti leggibili anche da smartphone.' },
];

export const reasonsToContact = [
  'Il sito attuale non racconta più bene la tua attività.',
  'Stai avviando un’attività e ti serve un sito.',
  'Hai una web app o un’app mobile da progettare prima dello sviluppo.',
];

// Prezzi di partenza in bozza: confermare con lo studio prima della pubblicazione.
const draftPrices = {
  website: '€1.500',
  multiPageWebsite: '€2.500',
  webApp: '€1.800',
  mobileApp: '€1.800',
};

export const estimates = {
  disclaimer: 'Prezzi di partenza indicativi. Il preventivo dipende da obiettivi, contenuti e complessità. Definiamo attività e tempi nella proposta.',
  services: [
    {
      id: 'siti-web', title: 'Web Design e sviluppo',
      summary: 'Siti aziendali, pagine di lancio e siti per attività locali. Organizziamo i contenuti, disegniamo le pagine e sviluppiamo il sito.',
      includes: ['Struttura dei contenuti', 'Design delle pagine', 'Sviluppo del sito', 'Verifica su dispositivi mobili'],
      from: draftPrices.website, time: 'da definire nel preventivo',
      example: 'Per un’azienda manifatturiera, un hotel o un ristorante.',
      work: 'Pagine, materiali e funzioni definiscono il perimetro del lavoro.',
    },
    {
      id: 'web-app', title: 'Product Design e UX/UI per web app',
      summary: 'Flussi e interfacce per portali, aree riservate e strumenti di lavoro nel browser.',
      includes: ['Flussi e struttura delle informazioni', 'Schemi e prototipi', 'Schermate e componenti', 'Confronto con il team tecnico'],
      from: draftPrices.webApp, time: 'da definire nel preventivo',
      example: 'Per un portale di richieste o un pannello di controllo.',
      work: 'Curiamo Product e UX/UI; lo sviluppo si valuta a parte.',
    },
    {
      id: 'app-mobile', title: 'Product Design e UX/UI per app mobile',
      summary: 'Flussi, prototipi e schermate per app su smartphone, da condividere con chi le sviluppa.',
      includes: ['Flussi d’uso', 'Schemi e prototipi', 'Schermate e componenti', 'Consegna al team di sviluppo'],
      from: draftPrices.mobileApp, time: 'da definire nel preventivo',
      example: 'Per prenotazioni, acquisti o strumenti di lavoro interni.',
      work: 'Definiamo funzioni e schermate con il cliente.',
    },
  ],
};

export const pricing = {
  title: 'Prezzi di partenza.',
  intro: 'Le cifre servono a orientarti. Il preventivo dipende da obiettivi, contenuti e complessità.',
  note: 'Importi indicativi in euro, da confermare con lo studio. Il preventivo finale viene definito sul progetto.',
  models: [
    {
      id: 'siti-web', label: 'Web Design e sviluppo', title: 'Siti web.',
      from: `da ${draftPrices.website}`, summary: 'Design e sviluppo per un sito dal perimetro definito.',
      options: [{ name: 'Pagina di lancio o sito essenziale', price: `da ${draftPrices.website}` }, { name: 'Sito aziendale con più sezioni', price: `da ${draftPrices.multiPageWebsite}` }],
      includes: ['Struttura e contenuti', 'Design delle pagine', 'Sviluppo e verifiche'],
      process: ['Raccogliamo obiettivi e materiali.', 'Definiamo pagine e funzioni.', 'Prepariamo il preventivo.'],
      cta: 'Parliamo del sito', theme: 'light',
    },
    {
      id: 'prodotti', label: 'Product Design e UX/UI', title: 'Web app e app mobile.',
      from: `da ${draftPrices.webApp}`, summary: 'Flussi e interfacce definiti prima dello sviluppo.',
      options: [{ name: 'Product per web app', price: `da ${draftPrices.webApp}` }, { name: 'Product per app mobile', price: `da ${draftPrices.mobileApp}` }],
      includes: ['Flussi d’uso', 'Schemi e prototipi', 'Schermate e componenti'],
      process: ['Mettiamo a fuoco le funzioni.', 'Definiamo i percorsi.', 'Prepariamo il preventivo.'],
      cta: 'Parliamo dell’app', theme: 'dark',
    },
  ],
};

export const faqs = [
  { question: 'Quanto tempo serve per un sito?', answer: 'Dipende da pagine, contenuti e funzioni. Indichiamo fasi e tempi nel preventivo.' },
  { question: 'Chi prepara testi e immagini?', answer: 'Partiamo dai materiali che hai. Se servono fotografia o testi specialistici, possiamo coinvolgere professionisti esterni.' },
  { question: 'Come funzionano le revisioni?', answer: 'Definiamo le fasi del lavoro e i momenti in cui raccogliere i tuoi riscontri.' },
  { question: 'La manutenzione è inclusa?', answer: 'La valutiamo e la preventiviamo a parte, se serve.' },
  { question: 'Vi occupate anche di marketing?', answer: 'Non è un servizio diretto dello studio. Quando serve, possiamo lavorare con specialisti esterni.' },
];

export const manifesto = {
  eyebrow: 'Kobalto Studio · Manifesto',
  title: 'Prima di disegnare, capiamo cosa serve.',
  intro: 'Lavoriamo su Web e Product partendo da ciò che il progetto deve rendere semplice.',
  principles: [
    { title: 'Partiamo dal problema', text: 'Obiettivi, persone e contenuti vengono prima delle schermate.' },
    { title: 'La chiarezza è il lavoro', text: 'Ogni pagina e ogni passaggio deve far capire cosa si può fare e dove andare.' },
    { title: 'Curiamo anche i dettagli', text: 'Tipografia, spazi e stati d’uso fanno parte della sostanza, non sono decorazione.' },
    { title: 'Lavoriamo con chi decide', text: 'Parli direttamente con Mattia e Alberto, dalla prima conversazione alla consegna.' },
  ],
  closing: '',
};


export const infoPage = {
  eyebrow: 'Kobalto Studio / Studio — Verona, Italia',
  title: 'Lo studio',
  intro:
    'Mattia Zeminian e Alberto Toso hanno fondato Kobalto Studio. Seguono direttamente i progetti di Web Design e Product Design.',
  founders: [
    {
      name: 'Mattia Zeminian',
      role: 'Fondatore',
      caption: 'Cofondatore di Kobalto Studio.',
      website: 'https://www.mattiazeminian.com/',
      websiteLabel: 'www.mattiazeminian.com',
      portrait: '/assets/founders/mattia-zeminian.jpg',
      portraitAlt: 'Ritratto di Mattia Zeminian.',
    },
    {
      name: 'Alberto Toso',
      role: 'Fondatore',
      caption: 'Cofondatore di Kobalto Studio.',
      website: 'https://www.albertotoso.com/',
      websiteLabel: 'www.albertotoso.com',
      portrait: '/assets/founders/alberto-toso.jpg',
      portraitAlt: 'Ritratto di Alberto Toso.',
    },
  ],
  methodLabel: 'Come lavoriamo',
  collaborationLabel: 'Collaborazioni',
};


export const contactPage = {
  eyebrow: 'Contatti · Web agency a Verona',
  title: 'Parliamo del progetto.',
  intro:
    'Raccontaci cosa fa la tua attività, a chi si rivolge e cosa deve ottenere il sito o l’app. Da qui capiamo se e come lavorare insieme.',
  detailsTitle: 'Cosa ci aiuta a capire',
  details: [
    'Obiettivi e persone a cui ti rivolgi.',
    'Contenuti e materiali già disponibili.',
    'Funzioni, tempi e budget di riferimento.',
  ],
  locationLabel: 'Dove',
  contactLabel: 'Contatto diretto',
};

export const contact = {
  email: null,
  mailSubject: 'Progetto per Kobalto Studio',
  location: 'Verona, Italia',
  availability: '',
};
