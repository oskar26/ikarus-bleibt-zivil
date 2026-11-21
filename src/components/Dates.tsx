import type { CSSProperties } from "react";
import { events, meeting, strike } from "../content";
import { Burst, Ikarus, Pill } from "./ui";

/**
 * Streikplakat im Look der offiziellen Kampagne: Megafon, „Schul Streik“,
 * Kampagnen-Slogan und Datum. Veranstalter ist das bundesweite Bündnis.
 */
function Poster() {
  return (
    <div className="poster">
      <div
        className="poster-sheet"
        role="img"
        aria-label={`Streikplakat der Kampagne: Schulstreik gegen Wehrpflicht am ${strike.date}, Fight for our future, not their wars. Wir sind dabei.`}
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
          <p className="poster-date display">{strike.date}</p>
          <p className="poster-org">
            <small>Wir sind dabei · Kampagne vom</small>
            <strong>Schulstreik gegen Wehrpflicht</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export function Dates() {
  return (
    <section id="termine" className="on-red relative overflow-hidden">
      <div className="page pb-20 pt-12 lg:pb-28 lg:pt-14">
        <div className="cluster" data-reveal>
          <h2 className="dates-head display">
            <span className="dh-1">Nächste </span>
            <em className="dh-2">Termine</em>
          </h2>
        </div>

        {/* Streiktermin: Kampagnen-Vorlage mit Megafon – wir schließen uns an */}
        <div id="streik" className="mt-12 grid items-center gap-y-12 lg:mt-16 lg:grid-cols-12 lg:gap-x-14">
          <div className="lg:col-span-5" data-reveal>
            <Poster />
          </div>

          <div className="@container lg:col-span-7" data-reveal style={{ "--reveal-delay": "120ms" } as CSSProperties}>
            <p className="chip chip--solid">Wir sind dabei · Komm mit</p>
            <h3 className="display mt-5 text-[min(9.3cqw,3.75rem)]">
              <span className="block">Schulstreik </span>
              <em className="block whitespace-nowrap">gegen Wehrpflicht</em>
            </h3>
            <p className="copy-xl mt-6 max-w-[38rem]">
              Am {strike.date} ruft das bundesweite Bündnis zum Schulstreik gegen die Wehrpflicht auf. Wir als
              Initiativgruppe am FWG stehen geschlossen dahinter und treffen uns um gemeinsam zu den Uniwiesen zu gehen, wo das Kölner
              Schulstreik-Komitee zur Demo aufruft.
            </p>

            <dl className="mt-8 grid gap-x-8 gap-y-5 border-t-[3px] border-cream pt-7 sm:grid-cols-[auto_1fr]">
              <dt className="label text-[1.167rem] sm:pt-[0.3em]">Wann</dt>
              <dd className="copy-xl">
                <time dateTime={strike.isoDate}>{strike.dateLong}</time>
                <span className="block">{strike.time || `Uhrzeit in ${strike.city}: folgt`}</span>
              </dd>
              <dt className="label text-[1.167rem] sm:pt-[0.3em]">Wo</dt>
              <dd className="copy-xl">{strike.place || `Treffpunkt in ${strike.city}: folgt`}</dd>
              <dt className="label text-[1.167rem] sm:pt-[0.3em]">Wer</dt>
              <dd className="copy-xl">
                <p>Bundesweiter Aufruf von „Schulstreik gegen Wehrpflicht“.</p>
                <p className="mt-2">Wir vom FWG sind dabei und organisieren die gemeinsame Anreise.</p>
              </dd>
            </dl>

            <div className="mt-8 max-w-[38rem] rounded-[1.5rem] bg-cream p-5 text-ink sm:p-6">
              <p className="label text-[0.95rem] text-ink">Unterstützung &amp; Gut zu wissen</p>
              <p className="copy mt-2.5">
                Der Streik ist keine Veranstaltung des FWG. Wer während der Unterrichtszeit mitfährt, bekommt in der
                Regel Fehlzeiten und sollte das vorher mit den Eltern absprechen. Infos zur Anreise gibt es im
                WhatsApp-Kanal.
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

        {/* Unser fester Wochentermin: nur Schrift und Farben */}
        <div className="mt-16 rounded-[1.75rem] bg-cream p-6 text-ink sm:p-8 lg:mt-24" data-reveal>
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
                Dort planen wir Aktionen, reden über unsere Punkte und bereiten den Schulstreik vor.{" "}
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

        {/* Selbst geplante Formate: nur Schrift und Farben */}
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
      </div>
    </section>
  );
}
