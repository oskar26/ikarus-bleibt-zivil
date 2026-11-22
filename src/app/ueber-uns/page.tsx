import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { About } from "@/components/About";
import { Join } from "@/components/Join";
import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { DatesBlock } from "@/components/Strike";
import { HalftoneEdge, Pill, Stamp } from "@/components/ui";
import { paper, values } from "@/content";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Wer wir sind: eine unabhängige Initiativgruppe von Schüler*innen des FWG – nicht die Schule, nicht die SV. Mit Grundsatzpapier zum Download.",
};

const NOT: string[] = ["Keine Schulveranstaltung", "Keine SV-Arbeit", "Keine Partei", "Keine Parteijugend"];

export default function UeberUnsPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="Initiative von Schüler*innen am FWG"
        lines={[
          { text: "Über", size: "min(17cqw, 12rem)" },
          { text: "uns", size: "min(26cqw, 18rem)", italic: true, indent: "10cqw" },
        ]}
        aside={<Stamp className="w-[min(15rem,58vw)] rotate-[10deg]" />}
      >
        <p className="copy text-[1.25rem] lg:text-[1.4rem]">
          Wir sind Schüler*innen am FWG und organisieren uns unabhängig von Schule und SV.{" "}
          <strong className="font-bold">Niemand von uns spricht für die Schule – und die Schule spricht nicht für uns.</strong>
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3">
          <Pill href={paper.href} download={paper.fileName} className="text-[1.05rem] sm:text-[1.5rem]">
            Grundsatzpapier <em>laden</em>
          </Pill>
          <span className="label text-[0.95rem]">{paper.meta}</span>
        </div>
      </PageHero>

      <About variant="full" />

      {/* Haltung + Grundsatzpapier */}
      <section className="on-cream relative overflow-hidden">
        <HalftoneEdge direction="up" className="-mt-px" />

        <div className="page pb-14 pt-8 lg:pb-20 lg:pt-12">
          <div className="grid items-end gap-x-10 gap-y-6 lg:grid-cols-12">
            <div className="cluster lg:col-span-7" data-reveal>
              <h2 className="topics-head display text-red">
                <span className="th-1">Unsere </span>
                <em style={{ fontSize: "19cqw", marginTop: "0.03em" }}>Haltung</em>
              </h2>
            </div>
            <p className="copy text-[1.25rem] lg:col-span-5 lg:pb-3 lg:text-[1.4rem]" data-reveal>
              Sechs Sätze, die uns binden.{" "}
              <strong className="font-bold">
                Unsere Grundsätze sind keine Paragrafen – sie beschreiben, wie wir streiten, entscheiden und
                füreinander einstehen.
              </strong>
            </p>
          </div>

          <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {values.map((value, index) => (
              <li
                key={value.title}
                className="@container border-t-4 border-red pt-5"
                data-reveal
                style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as CSSProperties}
              >
                <h3 className="display flex items-baseline gap-[0.3em] text-[min(8.4cqw,2.3rem)] text-red">
                  <span aria-hidden="true" className="topic-no !text-[1em]" style={{ WebkitTextStrokeWidth: "1.5px" }}>
                    {index + 1}
                  </span>
                  {value.title}
                </h3>
                <p className="copy mt-4 text-[1.2rem]">{value.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-12">
            <div
              id="grundsatzpapier"
              className="on-red @container min-w-0 rounded-[1.75rem] p-6 sm:p-8 lg:col-span-7"
              data-reveal
            >
              <p className="chip chip--solid">{paper.stand}</p>
              <h2 className="display mt-4 text-[min(9.4cqw,3.2rem)]">
                Grundsatz<em>papier</em>
              </h2>
              <p className="copy-xl mt-4 max-w-[34rem]">
                Unsere Positionen und Grundsätze zum Nachlesen. Kein Parteiprogramm und keine Satzung – sondern der
                Stand unserer Diskussion.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
                <Pill
                  href={paper.href}
                  download={paper.fileName}
                  variant="cream"
                  className="text-[1.15rem] sm:text-[1.35rem]"
                >
                  PDF <em>herunterladen</em>
                </Pill>
                <span className="label text-[0.95rem]">{paper.meta}</span>
              </div>
            </div>

            <div className="min-w-0 rounded-[1.75rem] border-[3px] border-dashed border-red p-6 sm:p-8 lg:col-span-5" data-reveal>
              <h2 className="display text-[clamp(2rem,3.4vw,2.6rem)] text-red">
                Was wir <em className="text-red-hot">nicht</em> sind
              </h2>
              <p className="copy mt-4 text-[1.2rem]">
                Wir sind unabhängig. Wir sagen, wer spricht, und wir sprechen nicht für alle Schüler*innen.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {NOT.map((item) => (
                  <li key={item} className="chip chip--dashed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <HalftoneEdge direction="down" className="-mb-px" />
      </section>

      <section className="on-red relative overflow-hidden">
        <div className="page pb-20 pt-12 lg:pb-24 lg:pt-14">
          <DatesBlock flush />
        </div>
      </section>

      <Join steps />
    </SiteShell>
  );
}
