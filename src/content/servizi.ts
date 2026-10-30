export type Servizio = {
  label: string;
  tag: string;
  title: string;
  desc: string;
  dove: string;
  infoLabel: string;
  info: string;
};

export type GruppoServizi = {
  titolo: string;
  servizi: Servizio[];
};

export const gruppi: GruppoServizi[] = [
  {
    titolo: "Inverno",
    servizi: [
      {
        label: "Noleggio",
        tag: "Inverno — Sci, snowboard, ciaspole e ARTVA",
        title: "Noleggio",
        desc: "Pacchetto sci (sci, attacco, bastoni, scarponi) o snowboard (tavola, attacco, boot), per adulto e bambino. Per tutta la stagione, una settimana o solo il weekend.",
        dove: "Gravellona Toce, Novara Pernate, Doccio e Kids. Snowboard solo a Gravellona e Novara.",
        infoLabel: "Anche a noleggio",
        info: "Sci alpinismo, racchette da neve, ARTVA con pala e sonda.",
      },
      {
        label: "Laboratorio sci",
        tag: "Inverno — Sci e snowboard",
        title: "Laboratorio sci",
        desc: "Rettifica delle lamine di sci e snowboard, con macchinari Wintersteiger.",
        dove: "Gravellona Toce, Novara Pernate e Kids Gravellona Toce.",
        infoLabel: "Costo",
        info: "€ 29 per la revisione di lamine, sciolina e soletta.",
      },
      {
        label: "Bootfitting",
        tag: "Inverno — Scarponi da sci",
        title: "Bootfitting",
        desc: "L’analisi 3D del piede permette di realizzare scarponi da sci personalizzati, con la possibilità di usare plantari su misura.",
        dove: "[Punti vendita]",
        infoLabel: "Costo",
        info: "[Prezzo]",
      },
      {
        label: "Plantari personalizzati",
        tag: "Inverno — Su misura",
        title: "Plantari personalizzati",
        desc: "[Descrizione del servizio]",
        dove: "[Punti vendita]",
        infoLabel: "Costo",
        info: "[Prezzo]",
      },
    ],
  },
  {
    titolo: "Bici e tennis",
    servizi: [
      {
        label: "Officina bike",
        tag: "Bici e tennis — Mountain bike e bici da strada",
        title: "Officina bike",
        desc: "Meccanici esperti per consulenze e manutenzione, su biciclette per adulto e bambino.",
        dove: "Gravellona Toce.",
        infoLabel: "Costo",
        info: "[Prezzi]",
      },
      {
        label: "Tennis",
        tag: "Bici e tennis — Incordatura e racchette test",
        title: "Tennis",
        desc: "Personale specializzato per l’incordatura. Prima di acquistare puoi noleggiare le racchette test dei migliori marchi.",
        dove: "Incordatura a Gravellona Toce e Novara. Racchette test a Novara.",
        infoLabel: "Costo del test",
        info: "€ 2 al giorno o € 5 per 5 giorni, fino a 3 noleggi. Se acquisti, il costo viene scalato dal telaio.",
      },
    ],
  },
  {
    titolo: "Squadre e stampe",
    servizi: [
      {
        label: "Team Line",
        tag: "Squadre e stampe — Divise per società sportive",
        title: "Team Line",
        desc: "Mute calcistiche e divise personalizzate: progetto grafico, stampa, sublimazione e ricamo. Forniture per società, enti, scuole, gruppi e privati.",
        dove: "Gravellona Toce e Novara.",
        infoLabel: "Anche",
        info: "Kit atleti con prova taglia e spedizione in tutta Italia.",
      },
      {
        label: "T-shirt personalizzate",
        tag: "Squadre e stampe — Team Line",
        title: "T-shirt personalizzate",
        desc: "Scritte e stampe esclusive su t-shirt, felpe e capi, anche per un solo pezzo: feste, lauree, addii al celibato.",
        dove: "Gravellona Toce e Novara.",
        infoLabel: "Costo",
        info: "[Prezzo]",
      },
    ],
  },
  {
    titolo: "Per tutti",
    servizi: [
      {
        label: "Tax Free",
        tag: "Per tutti — Clienti svizzeri o extra UE",
        title: "Tax Free",
        desc: "I clienti svizzeri o extra UE possono richiedere l’agevolazione Tax Free.",
        dove: "Tutti i punti vendita.",
        infoLabel: "Come",
        info: "[Procedura]",
      },
      {
        label: "Gift Card",
        tag: "Per tutti — Regalo",
        title: "Gift Card",
        desc: "[Descrizione del servizio]",
        dove: "[Punti vendita]",
        infoLabel: "Importi",
        info: "[Importi]",
      },
      {
        label: "Sportway Card",
        tag: "Per tutti — Carta fedeltà",
        title: "Sportway Card",
        desc: "[Descrizione del servizio]",
        dove: "[Punti vendita]",
        infoLabel: "Vantaggi",
        info: "[Vantaggi]",
      },
      {
        label: "Consegna a domicilio",
        tag: "Per tutti — A casa tua",
        title: "Consegna a domicilio",
        desc: "[Descrizione del servizio]",
        dove: "[Punti vendita]",
        infoLabel: "Costo",
        info: "[Costi e tempi]",
      },
    ],
  },
];

//_Ad array piatto con indice globale per la selezione
export const servizi = gruppi.flatMap((g) => g.servizi);

