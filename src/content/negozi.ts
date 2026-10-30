export type Negozio = {
  id: string;
  label: string;
  name: string;
  bg: string;
  indirizzo: string[];
  orari: string[];
  telefono: string | null;
  maps: string | null;
};

export const negozi: Negozio[] = [
  {
    id: "gravellona",
    label: "Megastore",
    name: "Gravellona Toce",
    bg: "bg-lake text-white",
    indirizzo: ["Parco Commerciale Laghi,", "Via Trattati di Roma 62,", "28883 Gravellona Toce (VB)"],
    orari: ["Lunedì – domenica", "9.30 – 19.30"],
    telefono: "0323 865206",
    maps: "Sportway+Via+Trattati+di+Roma+62+Gravellona+Toce",
  },
  {
    id: "novara",
    label: "Megastore",
    name: "Novara Pernate",
    bg: "bg-accent text-white",
    indirizzo: ["Via Novara 119,", "28100 Pernate, Novara (NO)"],
    orari: ["[Orari di apertura]"],
    telefono: "0321 636340",
    maps: "Sportway+Via+Novara+119+Novara",
  },
  {
    id: "doccio",
    label: "Megastore",
    name: "Doccio",
    bg: "bg-pass text-lake",
    indirizzo: ["Corso Valsesia 12E,", "13017 Doccio (VC)"],
    orari: ["[Orari di apertura]"],
    telefono: "0163 028083",
    maps: "Sportway+Corso+Valsesia+12E+Doccio",
  },
  {
    id: "urban",
    label: "Negozio specializzato",
    name: "Urban Gravellona",
    bg: "bg-graphite text-white",
    indirizzo: ["[Indirizzo]"],
    orari: ["[Orari di apertura]"],
    telefono: null,
    maps: null,
  },
  {
    id: "kids",
    label: "Negozio specializzato",
    name: "Kids Gravellona Toce",
    bg: "bg-steel text-white",
    indirizzo: ["Parco Commerciale Laghi,", "Gravellona Toce (VB)"],
    orari: ["[Orari di apertura]"],
    telefono: null,
    maps: null,
  },
  {
    id: "lounge",
    label: "Lounge",
    name: "210 Sportway Lounge",
    bg: "bg-white text-lake shadow-[inset_0_0_0_1.5px_#1E2735]",
    indirizzo: ["Parco Commerciale dei Laghi,", "Gravellona Toce (VB)"],
    orari: ["[Orari di apertura]"],
    telefono: null,
    maps: null,
  },
];
