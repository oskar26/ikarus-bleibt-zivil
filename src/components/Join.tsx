import type { CSSProperties } from "react";
import { channels, meeting } from "../content";
import { Arrow, ExternalIcon, HalftoneEdge, Pill } from "./ui";

function ChannelCards() {
  const { whatsapp, signal } = channels;

  return (
    <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-2">
      <div className="on-red rounded-[1.75rem] p-6 sm:p-8" data-reveal>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="display text-[clamp(2.2rem,4vw,3.2rem)]">{whatsapp.label}</h3>
          <span className="chip chip--solid">{whatsapp.role}</span>
        </div>
        <p className="copy-xl mt-4 max-w-[30rem]">{whatsapp.description}</p>
        <a
          href={whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="pill mt-6 text-[1.15rem] sm:text-[1.35rem]"
        >
          Kanal abonnieren
          <ExternalIcon />
          <span className="sr-only"> (öffnet in neuem Tab)</span>
        </a>
      </div>

      <div className="rounded-[1.75rem] border-[3px] border-dashed border-red p-6 sm:p-8" data-reveal>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="display text-[clamp(2.2rem,4vw,3.2rem)] text-red">{signal.label}</h3>
          <span className="chip">{signal.role}</span>
        </div>
        <p className="copy text-[1.2rem] mt-4 max-w-[30rem]">{signal.description}</p>
        <p className="mt-6">
          <span className="chip chip--dashed">Signal-Link folgt</span>
        </p>
      </div>
    </div>
  );
}

const STEPS: { title: string; text: string }[] = [
  {
    title: "Vorbeikommen",
    text: `${meeting.rhythm}, ${meeting.lesson}, ${meeting.time} im ${meeting.place}. Du musst nichts vorbereiten.`,
  },
  {
    title: "Mitlesen",
    text: "Abonniere unseren WhatsApp-Kanal. Dort stehen alle Termine und kurze Updates – ohne Gruppenchat.",
  },
  {
    title: "Mitmachen",
    text: "Wenn du dabei sein willst, komm in die Signal-Gruppe für Mitglieder. Der Link kommt in Kürze.",
  },
];

export function Join() {
  return (
    <section id="mitmachen" className="on-cream relative overflow-hidden">
      <HalftoneEdge direction="up" className="-mt-px" />

      <div className="page pb-14 pt-10 lg:pb-20 lg:pt-14">
        <div className="grid items-end gap-x-10 gap-y-8 lg:grid-cols-12">
          <div className="cluster lg:col-span-7" data-reveal>
            <h2 className="join-head display text-red">
              <span className="jh-1">Mach </span>
              <em className="jh-2">mit!</em>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-5" data-reveal style={{ "--reveal-delay": "120ms" } as CSSProperties}>
            <p className="copy text-[1.25rem] lg:text-[1.4rem]">
              Du musst nichts können und nichts wissen. Wenn dir unsere Themen wichtig sind oder du beim Streik
              Unterstützung brauchst, komm donnerstags in den SV-Raum.
            </p>
            <div className="cta mt-8">
              <Arrow className="h-[2.9rem] w-auto -translate-y-2 max-[379px]:hidden sm:h-[3.4rem]" />
              <Pill href="#termine" className="text-[1.2rem] sm:text-[1.6rem]">
                Zum nächsten <em>Termin</em>
              </Pill>
              <Arrow mirrored className="h-[2.9rem] w-auto -translate-y-2 max-sm:hidden sm:h-[3.4rem]" />
            </div>
          </div>
        </div>

        <ChannelCards />

        <ol className="mt-14 grid gap-x-10 gap-y-10 lg:mt-16 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="@container border-t-4 border-red pt-5"
              data-reveal
              style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
            >
              <h3 className="display flex items-baseline gap-[0.3em] text-[min(10.2cqw,2.6rem)] text-red">
                <span aria-hidden="true" className="topic-no !text-[1em]" style={{ WebkitTextStrokeWidth: "1.5px" }}>
                  {index + 1}
                </span>
                {step.title}
              </h3>
              <p className="copy mt-4 text-[1.2rem]">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <HalftoneEdge direction="down" className="-mb-px" />
    </section>
  );
}
