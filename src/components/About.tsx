import type { CSSProperties } from "react";
import { meeting, paper } from "../content";
import { Burst, Pill } from "./ui";

/** Klartext: Wer wir sind – eigenständig, aber ohne unnötige Angriffsfläche. */
const POINTS: { title: [string, string]; text: string }[] = [
  {
    title: ["Von", "uns"],
    text: "Eine Initiativgruppe von Schüler*innen des FWG – selbst organisiert, freiwillig und offen für alle an unserer Schule.",
  },
  {
    title: ["Selbst", "bestimmt"],
    text: "Wir sind keine Schulveranstaltung. Schule und Schulleitung verantworten unsere Inhalte und Aktionen nicht.",
  },
  {
    title: ["Nicht die", "SV"],
    text: "Wir sind keine SV-Arbeit und keine offizielle Schülervertretung. Den SV-Raum nutzen wir nur als Treffpunkt.",
  },
];

type Props = {
  /** "short": kompakt für die Startseite · "full": alles, für die Seite „Über uns“ */
  variant?: "short" | "full";
};

export function About({ variant = "short" }: Props) {
  const full = variant === "full";

  return (
    <section id="wir" className="on-red relative overflow-hidden">
      <div className="page pb-20 pt-12 lg:pb-24 lg:pt-14">
        <div className="cluster" data-reveal>
          <h2 className="about-head display">
            <span className="ah-1">Wir sind </span>
            <em className="ah-2">Schüler*innen. </em>
            <span className="ah-3">Nicht die </span>
            <span className="ah-4">Schule.</span>
          </h2>
        </div>

        <p className="copy-xl mt-10 max-w-[48rem] lg:mt-14" data-reveal>
          Ikarus bleibt zivil ist eine Initiativ&shy;gruppe von Schüler*innen des FWG. Wir gehören nicht zur Schule und
          nicht zur SV – unsere Themen bestimmen wir selbst. Wenn es wegen einer Aktion Ärger gibt, lassen wir
          niemanden allein.
        </p>

        <ul className="mt-12 grid gap-x-10 gap-y-10 lg:mt-16 lg:grid-cols-3">
          {POINTS.map((point, index) => (
            <li
              key={point.title.join(" ")}
              className="@container border-t-[3px] border-cream pt-5"
              data-reveal
              style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
            >
              <h3 className="display text-[min(13cqw,2.6rem)]">
                <span className="block">{point.title[0]} </span>
                <em className="block">{point.title[1]}</em>
              </h3>
              <p className="copy-xl mt-4 max-w-[34rem]">{point.text}</p>
            </li>
          ))}
        </ul>

        {!full && (
          <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-4 lg:mt-14" data-reveal>
            <Pill href="/ueber-uns" variant="cream" className="text-[1.15rem] sm:text-[1.35rem]">
              Mehr <em>über uns</em>
            </Pill>
            <Pill href={paper.href} download={paper.fileName} variant="cream" className="text-[1.05rem] sm:text-[1.35rem]">
              Grundsatzpapier <em>laden</em>
            </Pill>
            <span className="label text-[0.95rem]">{paper.meta}</span>
          </div>
        )}

        {full && (
          <>
            <div
              className="mt-16 grid gap-x-10 gap-y-8 border-t-[3px] border-cream pt-8 lg:mt-20 lg:grid-cols-2"
              data-reveal
            >
              <div>
                <h3 className="display text-[clamp(1.85rem,3vw,2.5rem)]">Wir organisieren</h3>
                <p className="copy-xl mt-3 max-w-[34rem]">
                  Jeden {meeting.weekday} im SV-Raum, dazu Aktionen und die Mobilisierung zum Schulstreik. Planung,
                  Absprachen und Aufgaben liegen bei uns.
                </p>
              </div>
              <div>
                <h3 className="display text-[clamp(1.85rem,3vw,2.5rem)]">
                  Und wir <em>bilden uns</em>
                </h3>
                <p className="copy-xl mt-3 max-w-[34rem]">
                  Politische Bildung ist bei uns kein eigener Programmpunkt – sie ist das, was wir tun:
                  Diskussionsrunden, Infoabende und Lesekreise.
                </p>
              </div>
            </div>

            <div className="relative mt-16 lg:mt-24" data-reveal>
              <Burst className="absolute left-0 top-1/2 w-[clamp(5rem,13vw,11rem)] -translate-y-1/2 -rotate-12 max-sm:hidden" />
              <Burst className="absolute right-0 top-1/2 w-[clamp(5rem,13vw,11rem)] -translate-y-1/2 rotate-[28deg] max-sm:hidden" />
              <p className="display relative text-center text-[clamp(2.4rem,6.6vw,5.75rem)] leading-[0.86]">
                <span className="block">3 Punkte. </span>
                <span className="block">1 Initiative. </span>
                <em className="block">0 Uniformen.</em>
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
