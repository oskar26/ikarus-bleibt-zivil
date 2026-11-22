/**
 * Alle Inhalte der Seite an einem Ort.
 * Leere Felder ("") zeigt die Seite automatisch als „folgt“ an.
 */

/* -------------------------------------------------------------------------- */
/* Themen                                                                     */
/* -------------------------------------------------------------------------- */

export type Topic = {
  /** Anker auf der Themenseite: /themen#<slug> */
  slug: string;
  no: string;
  /** Titel in zwei Zeilen (\u00AD = erlaubte Trennstelle) */
  title: [string, string];
  /** "haupt" = unsere drei Hauptpunkte, "weiter" = gehört für uns dazu */
  kind: "haupt" | "weiter";
  badge?: string;
  tags: string[];
  /** Kurztext (Startseite) */
  text: string;
  /** Ausführlicher Text (Themenseite) */
  more: string;
  demands: string[];
  link?: { label: string; href: string };
};

export const topics: Topic[] = [
  {
    slug: "wehrpflicht",
    no: "01",
    title: ["Stoppt die", "Wehrpflicht"],
    kind: "haupt",
    tags: ["Keine Musterung", "Keine Zwangsdienste", "Recht auf Frieden"],
    text: "Die Wehrpflicht ist ein Eingriff in unsere Zukunft. Wir stehen geschlossen gegen Musterung und Zwangsdienste. Ein ziviles Leben ist kein Ausweichen, sondern ein Recht.",
    more: "Für uns ist die Wehrpflicht keine Verwaltungsfrage. Es geht um unseren Lebensweg, um unsere Zeit und darum, wem wir Rechenschaft schulden. Eine Musterung sortiert Menschen nach Tauglichkeit – wer nicht will, muss sich erklären. Diesen Druck lehnen wir ab.",
    demands: [
      "Keine Wiedereinführung oder Ausweitung der Wehrpflicht.",
      "Keine Musterung und keine Zwangsdienste.",
      "Kriegsdienstverweigerung ohne Hürden und ohne Nachteile.",
    ],
    link: { label: "Zum Schulstreik", href: "/schulstreik-gegen-wehrpflicht" },
  },
  {
    slug: "bundeswehrfreie-schulen",
    no: "02",
    title: ["Bundeswehr", "raus aus Schulen"],
    kind: "haupt",
    badge: "Langzeitziel",
    tags: ["Keine Jugendoffiziere", "Keine Werbung", "Keine Kooperationen"],
    text: "Bundeswehr raus aus den Schulen: keine Jugendoffiziere im Unterricht, keine Anwerbung für den Dienst, keine Kooperationen auf dem Schulhof. Unser Langzeitziel ist die bundeswehrfreie Schule.",
    more: "Schulen sind Orte der Bildung, nicht des Militärs. Jugendoffiziere im Unterricht, Anwerbung auf dem Schulhof und Kooperationen verwischen diese Grenze. Das ändert sich nicht von heute auf morgen – deshalb ist die bundeswehrfreie Schule unser Langzeitziel, mit eigener Seite und Petition.",
    demands: [
      "Keine Jugendoffiziere und keine Karriereberatung der Bundeswehr an Schulen.",
      "Keine Werbung für den Dienst – auch nicht bei der Berufsorientierung.",
      "Ein Beschluss der Schulkonferenz: Unsere Schule bleibt zivil.",
    ],
    link: { label: "Zur Seite & Petition", href: "/bundeswehrfreie-schulen" },
  },
  {
    slug: "antimilitarisierung",
    no: "03",
    title: ["Bildung statt", "Militarisierung"],
    kind: "haupt",
    tags: ["Antimilitarisierung", "Zivil statt militärisch", "Selbst urteilen"],
    text: "Wir stellen uns gegen die Militarisierung von Schule, Alltag und Politik. Schule soll uns beibringen, selbst zu urteilen und Konflikte zivil zu lösen – nicht, uns an Uniformen zu gewöhnen.",
    more: "Wer junge Menschen auf den Krieg vorbereitet, verschiebt Prioritäten. Militär wird normal, wenn es überall auftaucht: in der Werbung, in der Schule, in der Sprache. Wir wollen, dass Fragen von Krieg und Frieden offen und kontrovers diskutiert werden – und dass wir lernen, selbst zu urteilen.",
    demands: [
      "Keine Gewöhnung an Militär in Schule und Alltag.",
      "Friedensbildung und politische Bildung statt Werbung.",
      "Zivile Lösungen zuerst.",
    ],
  },
  {
    slug: "soziales",
    no: "04",
    title: ["Soziales statt", "Kürzungen"],
    kind: "weiter",
    tags: ["Gesundheit", "Soziales", "Bildung"],
    text: "Wir sind gegen Sozialkürzungen und für mehr Geld in Gesundheit, Sozialem und Bildung. Das gehört zusammen: Jeder Euro kann nur einmal ausgegeben werden. Am FWG heißt das für uns ganz konkret: Ausstattung, Unterrichtsausfall und Mensa.",
    more: "",
    demands: [
      "Keine Kürzungen bei Sozialem, Gesundheit und Bildung.",
      "Mehr Geld für Schulen statt für Aufrüstung.",
      "Konkrete Verbesserungen am FWG.",
    ],
  },
  {
    slug: "antirassismus",
    no: "05",
    title: ["Gegen", "Rassismus"],
    kind: "weiter",
    tags: ["Antirassismus", "Hinschauen", "Solidarität"],
    text: "Rassismus hat an unserer Schule und überall sonst keinen Platz. Wir stehen an der Seite der Betroffenen, hören zu und widersprechen, wenn Menschen abgewertet oder ausgegrenzt werden.",
    more: "",
    demands: [
      "Rassismus benennen statt wegschauen.",
      "Betroffene ernst nehmen und unterstützen.",
      "Eine Schule, an der alle sicher lernen können.",
    ],
  },
  {
    slug: "feminismus",
    no: "06",
    title: ["Für", "Feminismus"],
    kind: "weiter",
    tags: ["Gleichberechtigung", "Kein Sexismus", "Selbstbestimmung"],
    text: "Wir sind für Gleichberechtigung, unabhängig vom Geschlecht. Sexismus, Rollenzwang und Übergriffe nehmen wir nicht hin – weder im Klassenzimmer noch auf dem Schulhof.",
    more: "",
    demands: [
      "Gleichberechtigung für alle Geschlechter.",
      "Kein Platz für Sexismus und Übergriffe.",
      "Selbstbestimmung statt Rollenzwang.",
    ],
  },
  {
    slug: "gegen-rechtsextremismus",
    no: "07",
    title: ["Gegen", "Rechts\u00ADextremismus"],
    kind: "weiter",
    tags: ["Keine Hetze", "Demokratie", "Menschenwürde"],
    text: "Wir stellen uns gegen Rechtsextremismus, Menschenfeindlichkeit und Hetze – in der Schule, im Netz und auf der Straße. Demokratie und Menschenwürde sind für uns nicht verhandelbar.",
    more: "",
    demands: [
      "Klare Haltung gegen rechte Hetze.",
      "Aufklärung und politische Bildung stärken.",
      "Solidarität mit allen, die angegriffen werden.",
    ],
  },
  {
    slug: "stimme-der-schuelerinnen",
    no: "08",
    title: ["Stimme der", "Schüler*innen"],
    kind: "weiter",
    tags: ["Informieren", "Aufmerksam machen", "Mitreden"],
    text: "Wir informieren und machen auf Probleme an der Schule aufmerksam. Als Initiative wollen wir eine Stimme für Schüler*innen sein. Wir ersetzen nicht die SV und sprechen nicht für alle – aber wir sagen laut, was uns auffällt.",
    more: "",
    demands: [
      "Probleme an der Schule sichtbar machen.",
      "Informieren statt hinnehmen.",
      "Schüler*innen ernst nehmen und mitreden lassen.",
    ],
  },
];

export const mainTopics = topics.filter((topic) => topic.kind === "haupt");
export const furtherTopics = topics.filter((topic) => topic.kind === "weiter");

/* -------------------------------------------------------------------------- */
/* Über uns                                                                   */
/* -------------------------------------------------------------------------- */

/** Unsere Haltung – die sechs Grundsätze aus dem Grundsatzpapier. */
export const values: { title: string; text: string }[] = [
  {
    title: "Selbstbestimmung",
    text: "Über unseren Weg entscheiden wir selbst. Niemand muss für uns festlegen, was wir schuldig sind.",
  },
  {
    title: "Frieden",
    text: "Aufrüstung löst keine Konflikte. Frieden beginnt mit der Frage, wie wir miteinander leben wollen.",
  },
  {
    title: "Solidarität",
    text: "Wer unter Druck gerät, steht nicht allein. Wir unterstützen Schüler*innen, die sich gegen Militär in der Schule aussprechen.",
  },
  {
    title: "Bildung",
    text: "Schule soll uns lehren, selbst zu denken. Sie ist kein Ort für Rekrutierung und keine Vorbereitung auf den Krieg.",
  },
  {
    title: "Offenheit",
    text: "Wir streiten über Argumente, nicht über Personen. Wir ändern unsere Meinung, wenn uns jemand überzeugt.",
  },
  {
    title: "Verantwortung",
    text: "Wir sind unabhängig. Wir sagen, wer spricht, und wir übernehmen die Folgen unserer Positionen.",
  },
];

/** Positions- und Grundsatzpapier als Download (liegt in public/downloads). */
export const paper = {
  title: "Positions- und Grundsatzpapier",
  href: "/downloads/ikarus-bleibt-zivil-grundsatzpapier.pdf",
  fileName: "ikarus-bleibt-zivil-grundsatzpapier.pdf",
  meta: "PDF · 12 Seiten · 0,7 MB",
  stand: "Stand: November 2026",
};

/* -------------------------------------------------------------------------- */
/* Schulstreik & Termine                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Schulstreik-Kampagne.
 * `showStrikeCall` schaltet die große Sektion (Plakat, Gut zu wissen) frei –
 * erst, wenn wieder ein Termin feststeht. Solange bleibt sie versteckt.
 */
export const showStrikeCall = false;

export const strike = {
  organizer: "bundesweiten Bündnis „Schulstreik gegen Wehrpflicht“",
  city: "Köln",
  campaignUrl: "https://schulstreikgegenwehrpflicht.com/",
  cologneUrl: "https://www.instagram.com/schulstreik_koeln/",
};

/** Organisationen und Kampagnen, die wir unterstützen. Logos liegen in public/img/logos. */
export const allies: {
  name: string;
  text: string;
  logo: string;
  detailHref?: string;
  links: { label: string; href: string }[];
}[] = [
  {
    name: "Schulstreik gegen Wehrpflicht",
    text: "Schüler*innen streiken gegen Wehrpflicht und Zwangsdienste. Den Aufruf unterstützen wir. Steht ein Termin, mobilisieren wir am FWG und gehen gemeinsam hin.",
    logo: "/img/logos/schulstreik.png",
    detailHref: "/schulstreik-gegen-wehrpflicht",
    links: [
      { label: "Kampagne", href: "https://schulstreikgegenwehrpflicht.com/" },
      { label: "Köln", href: "https://www.instagram.com/schulstreik_koeln/" },
    ],
  },
  {
    name: "Gen Z regelt",
    text: "Junge Leute, die für Bildung, bezahlbares Leben und gegen die Wehrpflicht auf die Straße gehen. In Köln organisieren sie selbst. Da stehen wir dahinter.",
    logo: "/img/logos/genz-regelt.svg",
    links: [
      { label: "Website", href: "https://genz-regelt.de/" },
      { label: "Instagram", href: "https://www.instagram.com/genzregelt_germany" },
    ],
  },
  {
    name: "DFG-VK",
    text: "Die Deutsche Friedensgesellschaft – Vereinigte Kriegsdienstgegner*innen. Sie beraten zur Kriegsdienstverweigerung und arbeiten gegen Militarisierung. Ihre Arbeit unterstützen wir.",
    logo: "/img/logos/dfg-vk.png",
    links: [
      { label: "Website", href: "https://www.dfg-vk.de/" },
      { label: "Instagram", href: "https://www.instagram.com/die_friedensgesellschaft/" },
    ],
  },
];

/** Unser fester Termin in der Woche. */
export const meeting = {
  weekday: "Donnerstag",
  rhythm: "Jeden Donnerstag",
  lesson: "7. Stunde",
  time: "13:45 – 14:30 Uhr",
  place: "SV-Raum, FWG",
};

/**
 * Selbst geplante Formate („Außerdem geplant“).
 * Vorerst versteckt – auf true stellen, sobald die Termine wieder sichtbar sein sollen.
 */
export const showPlannedEvents = false;

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

/* -------------------------------------------------------------------------- */
/* Bundeswehrfreie Schulen                                                    */
/* -------------------------------------------------------------------------- */

export const bwPoints: { title: [string, string]; text: string }[] = [
  {
    title: ["Keine", "Jugendoffiziere"],
    text: "Kein Unterricht in Uniform: Sicherheits- und Friedenspolitik gehört in die Hände unserer Lehrkräfte.",
  },
  {
    title: ["Keine", "Werbung"],
    text: "Keine Karriereberatung, keine Stände und kein Werbematerial der Bundeswehr – auch nicht bei der Berufsorientierung.",
  },
  {
    title: ["Keine", "Kooperationen"],
    text: "Keine Ausflüge zur Truppe, keine Praktika und keine Partnerschaften als Schulveranstaltung.",
  },
];

export const bwReasons: { title: string; text: string }[] = [
  {
    title: "Schule ist Pflicht",
    text: "Wir müssen hin. Einem Vortrag in Uniform können wir nicht einfach ausweichen. Werbung hat im Unterricht nichts verloren.",
  },
  {
    title: "Mehr als eine Meinung",
    text: "Über Krieg und Frieden wird gestritten. Dann muss das im Unterricht auch so sein: mehrere Seiten, offene Fragen. Kein Vortrag, der nur die eigene Armee gut aussehen lässt.",
  },
  {
    title: "Das machen Lehrkräfte",
    text: "Politische Bildung machen unsere Lehrer*innen, nicht Offizier*innen. Die Bildungsgewerkschaft GEW sagt das schon lange: Der Einfluss der Bundeswehr an Schulen muss zurück.",
  },
  {
    title: "Frieden steht im Gesetz",
    text: "Das Schulgesetz in NRW will Friedensgesinnung, nicht Gewöhnung an Uniformen. Daran messen wir unsere Schule.",
  },
  {
    title: "Sie werben für Krieg",
    text: "Jugendoffiziere und Karriereberater werben für den Krieg – auch wenn sie es Information nennen. Wir stehen dagegen, weil wir gegen Krieg stehen.",
  },
  {
    title: "Mit 17 an die Waffe",
    text: "Die Bundeswehr stellt Minderjährige ein. Die Ansprache dafür darf nicht in unserem Klassenzimmer anfangen.",
  },
];

export const bwSteps: { title: string; text: string }[] = [
  {
    title: "Informieren",
    text: "Wir sammeln Fakten, reden mit Mitschüler*innen, Lehrkräften und Eltern – und fragen nach, ob und wie die Bundeswehr an unserer Schule bisher vorkommt.",
  },
  {
    title: "Unterschreiben",
    text: "Mit der Petition zeigen wir, wie viele dahinterstehen: Schüler*innen, Eltern, Lehrkräfte und Ehemalige.",
  },
  {
    title: "Antrag stellen",
    text: "Über Mitglieder der Schulkonferenz kommt ein Antrag auf die Tagesordnung. Dort entscheiden Schüler*innen, Eltern und Lehrkräfte gemeinsam.",
  },
  {
    title: "Dranbleiben",
    text: "Ein Beschluss ist erst der Anfang. Wir achten darauf, dass er im Alltag gilt – und erzählen weiter, wie es bei uns gelaufen ist.",
  },
];

/** Schulen, die es vorgemacht haben. */
export const bwExamples: { school: string; text: string }[] = [
  {
    school: "Hulda-Pankok-Gesamtschule, Düsseldorf",
    text: "Im Oktober 2010 beschloss die Schulkonferenz einstimmig, die Kooperationsvereinbarung mit der Bundeswehr nicht umzusetzen.",
  },
  {
    school: "Robert-Blum-Gymnasium, Berlin",
    text: "Die Schulkonferenz hat beschlossen, die Bundeswehr nicht an die Schule einzuladen.",
  },
  {
    school: "Aachener Friedenspreis 2013",
    text: "Der Preis ging an Schulen mit einem solchen Beschluss. Laut Landesschüler*innenvertretung NRW hatten ihn damals bundesweit neun Schulen gefasst.",
  },
];

export const bwSources: { label: string; href: string }[] = [
  {
    label: "Bündnis „Schule ohne Bundeswehr NRW“: zur Kooperationsvereinbarung und zum Schulgesetz",
    href: "https://www.schule-ohne-bundeswehr-nrw.de/presse/",
  },
  {
    label: "Reader „Es lernt sich besser ohne Helm“ – Argumente und Tipps für die Schulkonferenz (PDF)",
    href: "https://www.schule-ohne-bundeswehr-nrw.de/wp-content/uploads/reader-sobw.pdf",
  },
  {
    label: "Graswurzelrevolution 02/2011: „Widerstand gegen Militärpropaganda“ – GEW-Beschluss, Hulda-Pankok-Gesamtschule",
    href: "https://www.graswurzel.net/gwr/2011/02/widerstand-gegen-militarpropaganda/",
  },
  {
    label: "DFG-VK Bonn-Rhein-Sieg: Rede der LSV NRW zum Antikriegstag 2013 – Schulkonferenzbeschlüsse, Aachener Friedenspreis",
    href: "https://dfg-vk-bonn-rhein-sieg.de/index.php/aktuelles-und-meinungen/aktuelles/2242-rede-zum-antikriegstag-den-1-09-2013-von-tom-josten-lsv-nrw-in-aachen",
  },
];

/* -------------------------------------------------------------------------- */
/* Petitionen (Vorlage)                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Vorlage für Petitionen: Jeder Eintrag hier ist eine eigene, funktionierende Petition.
 * - Sie bekommt automatisch die Seite /petition/<slug>.
 * - Mit <PetitionSection slug="…" /> lässt sie sich in jede Seite einbauen.
 * - Unterschriften landen in der Datenbank (Tabelle petition_signatures).
 * Für eine neue Petition einfach einen Eintrag kopieren und Texte anpassen.
 */
export type Petition = {
  slug: string;
  /** "open" = Unterschreiben möglich, "closed" = nur noch Stand anzeigen */
  status: "open" | "closed";
  /** Farbwelt der eigenen Petitionsseite */
  theme: "red" | "green";
  kicker: string;
  /** Titel in zwei Zeilen */
  title: [string, string];
  addressee: string;
  intro: string;
  demands: string[];
  /** Ziel für den Fortschrittsbalken */
  goal: number;
  roles: string[];
  /** Was mit den Unterschriften passiert */
  handover: string;
};

export const petitions: Petition[] = [
  {
    slug: "bundeswehrfreies-fwg",
    status: "open",
    theme: "green",
    kicker: "Petition",
    title: ["Unsere Schule", "bleibt zivil"],
    addressee: "An die Schulkonferenz des FWG",
    intro:
      "Wir wollen, dass unsere Schule ein ziviler Lernort ist und bleibt. Deshalb bitten wir die Schulkonferenz, zu beschließen:",
    demands: [
      "Das FWG lädt keine Jugendoffizier*innen und keine Karriereberater*innen der Bundeswehr ein.",
      "Keine Werbung für den Dienst in der Bundeswehr an unserer Schule – auch nicht bei der Berufsorientierung.",
      "Keine Kooperationen und keine Besuche bei der Truppe als Schulveranstaltung.",
      "Friedens- und Sicherheitspolitik bleibt Sache unserer Lehrkräfte: kontrovers, ausgewogen, ohne Uniform.",
    ],
    goal: 200,
    roles: ["Schüler*in", "Elternteil", "Lehrkraft", "Ehemalige*r", "Unterstützer*in"],
    handover:
      "Die Unterschriften übergeben wir zusammen mit dem Antrag an die Schulkonferenz – und nur dafür nutzen wir sie.",
  },
];

export function getPetition(slug: string) {
  return petitions.find((petition) => petition.slug === slug);
}

/* -------------------------------------------------------------------------- */
/* Kontakt & Pflichtangaben                                                   */
/* -------------------------------------------------------------------------- */

/** Kontaktwege: WhatsApp nur für Infos, Signal für Mitglieder, E-Mail. */
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
    description: "Hier koordinieren wir uns als Mitglieder. Der Einladungslink folgt.",
    url: "", // folgt – sobald der Link bekannt ist
  },
  email: {
    label: "E-Mail",
    address: "ikarus.bleibt@ethik.de",
    url: "mailto:ikarus.bleibt@ethik.de",
  },
};

/** Pflichtangaben – vor der Veröffentlichung ausfüllen. */
export const legal = {
  responsible: "", // Name und Anschrift der verantwortlichen Person
  hosting: "", // Name des Hosting-Anbieters
};
