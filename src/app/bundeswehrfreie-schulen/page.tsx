import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import { JoinTeaser } from "@/components/Join";
import { PageHero } from "@/components/PageHero";
import { PetitionSection } from "@/components/PetitionSection";
import { SiteShell } from "@/components/SiteShell";
import { Arrow, ArrowRightIcon, ExternalIcon, HalftoneEdge, Pill } from "@/components/ui";
import { bwExamples, bwPoints, bwReasons, bwSources, bwSteps, petitions } from "@/content";

export const metadata: Metadata = {
  title: "Bundeswehrfreie Schulen",
  description:
    "Unser Langzeitziel: eine bundeswehrfreie Schule. Keine Jugendoffiziere, keine Werbung, keine Kooperationen – mit Gründen und Petition.",
};

export const viewport: Viewport = {
  themeColor: "#2f4b2c",
};

/** Der Unterschriftenstand kommt live aus der Datenbank. */
export const dynamic = "force-dynamic";

const PETITION_SLUG = petitions[0].slug;

export default function BundeswehrfreieSchulenPage() {
  return (
    <SiteShell theme="green">
      <PageHero
        kicker="Unser Langzeitziel"
        lines={[
          { text: "Bundeswehr", size: "13.2cqw" },
          { text: "freie Schulen", size: "10.3cqw", italic: true },
        ]}
        aside={
          <a href="#petition" className="signpost" aria-label="Unser Ziel: null Uniformen im Unterricht. Zur Petition.">
            <span className="teaser-card teaser-card--camo" aria-hidden="true">
              <span className="teaser-chip">Langzeitziel</span>
              <span className="signpost-zero display">0</span>
              <span className="signpost-text">
                <b>Uniformen</b>
                <span>im Unterricht</span>
              </span>
              <span className="teaser-bar">
                <span>Zur Petition</span>
                <ArrowRightIcon />
              </span>
            </span>
          </a>
        }
      >
        <p className="copy text-[1.25rem] lg:text-[1.4rem]">
          Schule ist ein Ort zum Lernen – nicht zum Werben für das Militär.{" "}
          <strong className="font-bold">Wir wollen, dass unsere Schule bundeswehrfrei wird:</strong> keine
          Jugendoffiziere im Unterricht, keine Anwerbung, keine Kooperationen. Das braucht einen langen Atem. Hier
          steht, warum wir das wollen und wie wir es schaffen.
        </p>
        <div className="cta mt-8">
          <Arrow className="h-[2.9rem] w-auto -translate-y-2 max-[379px]:hidden sm:h-[3.4rem]" />
          <Pill href="#petition" className="text-[1.05rem] sm:text-[1.7rem]">
            Petition <em>unterschreiben</em>
          </Pill>
        </div>
      </PageHero>

      {/* Worum es geht + Zahlen */}
      <section className="on-red camo relative overflow-hidden">
        <div className="page pb-20 pt-12 lg:pb-24 lg:pt-14">
          <div className="cluster" data-reveal>
            <h2 className="page-head display">
              <span style={{ fontSize: "max(7cqw, 1.5rem)", marginLeft: "0.6cqw" }}>Schule bleibt </span>
              <em style={{ fontSize: "min(24cqw, 17rem)", marginTop: "0.04em" }}>zivil</em>
            </h2>
          </div>

          <p className="copy-xl mt-10 max-w-[48rem] lg:mt-14" data-reveal>
            Bundeswehrfrei heißt: Unsere Schule lädt die Bundeswehr nicht ein – nicht in den Unterricht, nicht zur
            Berufsorientierung, nicht auf den Schulhof. Das richtet sich nicht gegen einzelne Soldat*innen. Es ist
            eine Entscheidung darüber, was Schule sein soll: ein ziviler Ort, an dem wir lernen, selbst zu urteilen.
          </p>

          <ul className="mt-12 grid gap-x-10 gap-y-10 lg:mt-16 lg:grid-cols-3">
            {bwPoints.map((point, index) => (
              <li
                key={point.title.join(" ")}
                className="@container border-t-[3px] border-cream pt-5"
                data-reveal
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <h3 className="display text-[min(9cqw,2.6rem)]">
                  <span className="block">{point.title[0]} </span>
                  <em className="block">{point.title[1]}</em>
                </h3>
                <p className="copy-xl mt-4 max-w-[34rem]">{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gründe, Weg, Vorlage, Quellen */}
      <section className="on-cream relative overflow-hidden">
        <HalftoneEdge direction="up" className="-mt-px" />

        <div className="page pb-14 pt-8 lg:pb-20 lg:pt-12">
          <div className="cluster max-w-[52rem]" data-reveal>
            <h2 className="topics-head display text-red">
              <span className="th-1">Sechs </span>
              <em style={{ fontSize: "19.5cqw", marginTop: "0.13em" }}>Gründe</em>
            </h2>
          </div>

          <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {bwReasons.map((reason, index) => (
              <li
                key={reason.title}
                className="border-t-4 border-red pt-5"
                data-reveal
                style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as CSSProperties}
              >
                <h3 className="display flex items-baseline gap-[0.35em] text-[clamp(1.55rem,2.3vw,2rem)] leading-[0.98] text-red">
                  <span aria-hidden="true" className="topic-no !text-[1em]" style={{ WebkitTextStrokeWidth: "1.5px" }}>
                    {index + 1}
                  </span>
                  <span>{reason.title}</span>
                </h3>
                <p className="copy mt-4 text-[1.2rem]">{reason.text}</p>
              </li>
            ))}
          </ol>

          {/* Der Weg */}
          <div className="mt-20 lg:mt-28">
            <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3" data-reveal>
              <h2 className="display text-[clamp(1.75rem,7.6vw,4.5rem)] text-red">
                So wird eine Schule <em className="text-red-hot">bundeswehrfrei</em>
              </h2>
            </div>
            <p className="copy mt-5 max-w-[46rem] text-[1.25rem] lg:text-[1.4rem]" data-reveal>
              Andere Schulen haben es vorgemacht: Der Weg führt über einen Beschluss der Schulkonferenz. Dort sitzen
              Schüler*innen, Eltern und Lehrkräfte an einem Tisch.
            </p>

            <ol className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {bwSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="@container border-t-4 border-red pt-5"
                  data-reveal
                  style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
                >
                  <h3 className="display flex items-baseline gap-[0.3em] text-[min(10cqw,2.1rem)] text-red">
                    <span aria-hidden="true" className="topic-no !text-[1em]" style={{ WebkitTextStrokeWidth: "1.5px" }}>
                      {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  <p className="copy mt-4 text-[1.2rem]">{step.text}</p>
                </li>
              ))}
            </ol>

            <ul className="mt-12 grid gap-5 lg:grid-cols-3">
              {bwExamples.map((example) => (
                <li
                  key={example.school}
                  className="rounded-[1.75rem] border-[3px] border-dashed border-red p-6"
                  data-reveal
                >
                  <p className="label text-[0.875rem] text-red">Vorgemacht</p>
                  <h3 className="display mt-3 text-[1.55rem] leading-[1] text-red">{example.school}</h3>
                  <p className="copy mt-3">{example.text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Quellen */}
          <div id="quellen" className="mt-20 border-t-4 border-red pt-8 lg:mt-24">
            <h2 className="label text-[1.167rem] text-red">Quellen &amp; zum Weiterlesen</h2>
            <ol className="copy mt-5 grid gap-x-10 gap-y-3 lg:grid-cols-2">
              {bwSources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noopener noreferrer" className="nav-link">
                    {source.label} <ExternalIcon className="inline-block align-baseline" />
                    <span className="sr-only"> (öffnet in neuem Tab)</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <HalftoneEdge direction="down" className="-mb-px" />
      </section>

      <PetitionSection slug={PETITION_SLUG} />

      <JoinTeaser />
    </SiteShell>
  );
}
