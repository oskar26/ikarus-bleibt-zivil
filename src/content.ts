/**
 * Alle Inhalte der Seite an einem Ort.
 * Leere Felder ("") zeigt die Seite automatisch als „folgt“ an.
 */

export type Topic = {
  no: string;
  /** Titel in zwei Zeilen */
  title: [string, string];
  tags: string[];
  text: string;
  link?: { label: string; href: string; external?: boolean };
};

/** Unsere drei Hauptpunkte. */
export const topics: Topic[] = [
  {
    no: "01",
    title: ["Stoppt die", "Wehrpflicht"],
    tags: ["Keine Musterung", "Keine Zwangsdienste", "Recht auf Frieden"],
    text: "Die Wehrpflicht ist ein Eingriff in unsere Zukunft. Wir stehen geschlossen gegen Musterung und Zwangsdienste – und unterstützen gemeinsam den Schulstreik.",
    link: { label: "Zum Schulstreik", href: "#streik" },
  },
  {
    no: "02",
    title: ["Bundeswehr", "raus aus Schulen"],
    tags: ["Keine Jugendoffiziere", "Keine Werbung", "Keine Kooperationen"],
    text: "Bundeswehr raus aus den Schulen: keine Jugendoffiziere im Unterricht, keine Anwerbung für den Dienst, keine Kooperationen auf dem Schulhof.",
  },
  {
    no: "03",
    title: ["Bildung statt", "Militarisierung"],
    tags: ["Mehr Geld für Bildung", "Soziales statt Aufrüstung", "Bildung vor Ort"],
    text: "Mehr Geld in Bildung und Soziales, nicht in Militarisierung. Konkret am FWG heißt das für uns: Ausstattung, Unterrichtsausfall und Mensa.",
  },
];

/** Wir stehen geschlossen hinter dem Schulstreik und sind dabei. */
export const strike = {
  date: "20.11.",
  dateLong: "Freitag, 20. November 2026",
  isoDate: "2026-11-20",
  organizer: "bundesweiten Bündnis „Schulstreik gegen Wehrpflicht“",
  city: "Köln",
  time: "", // noch nicht angekündigt
  place: "", // noch nicht angekündigt
  campaignUrl: "https://schulstreikgegenwehrpflicht.com/",
  cologneUrl: "https://www.instagram.com/schulstreik_koeln/",
};

/** Unser fester Termin in der Woche. */
export const meeting = {
  weekday: "Donnerstag",
  rhythm: "Jeden Donnerstag",
  lesson: "7. Stunde",
  time: "13:45 – 14:30 Uhr",
  place: "SV-Raum, FWG",
};

/** Diese Termine planen wir selbst – politische Bildung ist, was wir tun. */
export type EventItem = {
  title: string;
  note: string;
  date?: string;
  time?: string;
  place?: string;
};

export const events: EventItem[] = [
  {
    title: "Diskussionsrunde",
    note: "Ein Thema, viele Meinungen. Wir streiten fair – und hören einander zu.",
  },
  {
    title: "Infoabend",
    note: "Wir erklären Hintergründe und beantworten Fragen. Vorwissen brauchst du nicht.",
  },
  {
    title: "Lesekreis",
    note: "Wir lesen gemeinsam Texte und reden darüber, was sie mit uns zu tun haben.",
  },
];

/** Kontaktwege: WhatsApp nur für Infos, Signal für Mitglieder. */
export const channels = {
  whatsapp: {
    label: "WhatsApp-Kanal",
    role: "Nur Infos",
    description: "Termine, Erinnerungen und kurze Updates. Du kannst nur mitlesen.",
    url: "https://whatsapp.com/channel/0029VbEAnWb4CrfrG07HY105",
  },
  signal: {
    label: "Signal-Gruppe",
    role: "Für Mitglieder",
    description: "Hier organisiert sich die Gruppe. Der Link ist noch nicht fertig.",
    url: "", // folgt
  },
};

/** Pflichtangaben – vor der Veröffentlichung ausfüllen. */
export const legal = {
  responsible: "", // Name und Anschrift der verantwortlichen Person
  hosting: "", // Name des Hosting-Anbieters
};
