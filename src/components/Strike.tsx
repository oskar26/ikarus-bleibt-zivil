import type { CSSProperties, ReactNode } from "react";
import { events, meeting, showPlannedEvents, strike } from "../content";
import { Burst, Ikarus, Pill } from "./ui";

/**
 * Streikplakat im Look der offiziellen Kampagne: Megafon, „Schul Streik“ und Kampagnen-Slogan.
 * Veranstalter ist das bundesweite Bündnis – wir unterstützen. Bewusst ohne Datum.
 */
export function Poster() {
  return (
    <div className="poster">
      <div
        className="poster-sheet"
        role="img"
        aria-label="Plakat der Kampagne: Schulstreik gegen Wehrpflicht. Fight for our future, not their wars. Wir sind dabei."
      >
        <div aria-hidden="true">
          <div className="blob poster-blob" />
          <Burst className="poster-burst" />
          <p className="poster-title display">
            Schul
            <br />
            Streik
          </p>
          <p className="poster-sub label">gegen Wehrpflicht</p>
          <Ikarus className="poster-fig" />
          <p className="poster-slogan" lang="en">
            <span className="ps-1">
              <em className="fat">Fight</em>
            </span>
            <span className="ps-2">
              <span className="sm">for</span> <em>our</em>
            </span>
            <span className="ps-3">
              <em className="fat">future</em>
            </span>
            <span className="ps-4">
              <span className="fat">not</span> <em className="sm">their</em>
            </span>
            <span className="ps-5">
              <em className="fat">wars</em>
            </span>
          </p>
          <p className="poster-claim">
            <small>Wir sind</small>
            <b>dabei!</b>
          </p>
          <p className="poster-org">
            <small>Kampagne vom Bündnis</small>
            <strong>Schulstreik gegen Wehrpflicht</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

const SUPPORT: { title: string; text: string }[] = [
  { title: "Mobilisieren", text: "Wir informieren am FWG, warum es den Streik gibt und worum es geht." },
  { title: "Zusammen hin", text: "Niemand muss allein los: Wir gehen gemeinsam zu den Demos in Köln." },
  { title: "Rücken stärken", text: "Gibt es Ärger oder Druck, stehen wir an deiner Seite." },
];

/**
 * Schulstreik-Sektion: Wir unterstützen den Streik des Bündnisses.
 * `children` hängt weitere Blöcke auf Rot an (auf der Startseite: unsere Termine).
 */
export function Strike({ children }: { children?: ReactNode }) {
  return (
    <section id="streik" className="on-red relative overflow-hidden">
      <div className="page pb-20 pt-12 lg:pb-28 lg:pt-14">
        <div className="cluster" data-reveal>
          <h2 className="page-head display">
            <span className="sh-1">Wir unterstützen den </span>
            <em className="sh-2">Schulstreik</em>
          </h2>
        </div>

        <div className="mt-12 grid items-center gap-y-12 lg:mt-16 lg:grid-cols-12 lg:gap-x-14">
          <div className="lg:col-span-5" data-reveal>
            <Poster />
          </div>

          <div className="@container lg:col-span-7" data-reveal style={{ "--reveal-delay": "120ms" } as CSSProperties}>
            <p className="chip chip--solid">Wir sind dabei · Komm mit</p>
            <h3 className="display mt-5 text-[min(9.3cqw,3.75rem)]">
              <span className="block">Gegen Wehrpflicht. </span>
              <em className="mt-[0.14em] block">Für unsere Zukunft.</em>
            </h3>
            <p className="copy-xl mt-6 max-w-[38rem]">
              Das bundesweite Bündnis „Schulstreik gegen Wehrpflicht“ ruft Schüler*innen zum Streik auf. Wir als
              Initiativgruppe am FWG stehen geschlossen dahinter – und gehen gemeinsam zu den Demos, zu denen das
              Kölner Schulstreik-Komitee aufruft.
            </p>

            <dl className="mt-8 grid gap-x-8 gap-y-5 border-t-[3px] border-cream pt-7 sm:grid-cols-[auto_1fr]">
              {SUPPORT.map((item) => (
                <div key={item.title} className="contents">
                  <dt className="label text-[1.167rem] sm:pt-[0.3em]">{item.title}</dt>
                  <dd className="copy-xl">{item.text}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 max-w-[38rem] rounded-[1.5rem] bg-cream p-5 text-ink sm:p-6">
              <p className="label text-[0.95rem] text-ink">Unterstützung &amp; Gut zu wissen</p>
              <p className="copy mt-2.5">
                Der Streik ist keine Veranstaltung des FWG. Wer während der Unterrichtszeit mitgeht, bekommt in der
                Regel Fehlzeiten und sollte das vorher mit den Eltern absprechen. Aktuelle Streiktermine nennt das
                Bündnis – Infos zur gemeinsamen Anreise gibt es in unserem WhatsApp-Kanal.
              </p>
              <p className="copy mt-3 font-bold">
                Wenn es rund um den Streik Ärger oder Druck gibt – etwa wegen Fehlzeiten, Attestpflicht oder
                Gesprächen –, stehst du nicht allein da: Melde dich bei uns oder komm donnerstags in den SV-Raum, wir
                unterstützen dich und schauen gemeinsam weiter.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Pill href={strike.campaignUrl} variant="cream" external className="text-[1.05rem] sm:text-[1.25rem]">
                Bundesweite <em>Kampagne</em>
              </Pill>
              <Pill href={strike.cologneUrl} variant="cream" external className="text-[1.05rem] sm:text-[1.25rem]">
                Schulstreik <em>{strike.city}</em>
              </Pill>
            </div>
          </div>
        </div>

        {children}
      </div>
    </section>
  );
}

/**
 * Termine auf roter Fläche: unser fester Wochentermin.
 * Die selbst geplanten Formate erscheinen nur, wenn `showPlannedEvents` in content.ts auf true steht.
 */
export function DatesBlock({ flush = false }: { flush?: boolean }) {
  return (
    <div id="termine" className={flush ? undefined : "mt-20 lg:mt-28"}>
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3" data-reveal>
        <h2 className="display text-[clamp(2.6rem,6vw,5rem)]">
          Unser <em>Termin</em>
        </h2>
        <p className="copy-xl">Jede Woche. Offen für alle am FWG.</p>
      </div>

      {/* Unser fester Wochentermin: nur Schrift und Farben */}
      <div className="mt-8 rounded-[1.75rem] bg-cream p-6 text-ink sm:p-8" data-reveal>
        <div className="grid items-center gap-x-10 gap-y-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="chip">Unser fester Termin</p>
            <p className="display mt-4 text-[clamp(2rem,4.4vw,3.5rem)] text-red">{meeting.rhythm}</p>
            <p className="copy-xl mt-3 text-ink">
              {meeting.lesson} · {meeting.time}
              <span className="block">{meeting.place}</span>
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="copy text-[1.2rem]">
              Dort planen wir Aktionen und reden über unsere Themen.{" "}
              <strong className="font-bold">Wir sind nicht die SV</strong> – wir nutzen den Raum nur für unsere
              Treffen.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              <li className="chip">{meeting.lesson}</li>
              <li className="chip">{meeting.place}</li>
              <li className="chip chip--dashed">Nicht die SV</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Selbst geplante Formate – vorerst versteckt (siehe showPlannedEvents) */}
      {showPlannedEvents && (
        <div className="mt-20 lg:mt-24">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3" data-reveal>
            <h3 className="display text-[clamp(2.1rem,4.4vw,3.6rem)]">
              Außerdem <em>geplant</em>
            </h3>
            <p className="copy-xl">Das machen wir – nicht nur reden.</p>
          </div>

          <ul className="mt-8 grid gap-5 lg:grid-cols-3">
            {events.map((event, index) => (
              <li
                key={event.title}
                className="flex flex-col rounded-[1.75rem] bg-cream p-6 text-ink lg:p-7"
                data-reveal
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <p className="label text-[0.875rem]">Was wir machen</p>
                <div className="@container mt-4">
                  <h4 className="display text-[min(9.3cqw,3rem)] text-red">{event.title}</h4>
                </div>
                <p className="copy mt-4">{event.note}</p>
                <p className="mt-auto flex flex-wrap gap-2 pt-6">
                  <span className={event.date ? "chip" : "chip chip--dashed"}>
                    {event.date ? [event.date, event.time].filter(Boolean).join(" · ") : "Termin folgt"}
                  </span>
                  {event.place && <span className="chip">{event.place}</span>}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
