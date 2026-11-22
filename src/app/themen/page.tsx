import type { Metadata } from "next";
import Link from "next/link";
import { JoinTeaser } from "@/components/Join";
import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { TopicRows, plainTitle } from "@/components/Topics";
import { HalftoneEdge, Pill } from "@/components/ui";
import { furtherTopics, mainTopics, topics } from "@/content";

export const metadata: Metadata = {
  title: "Themen",
  description:
    "Unsere Themen: gegen Wehrpflicht und Militarisierung, für bundeswehrfreie Schulen – und gegen Sozialkürzungen, Rassismus, Sexismus und Rechtsextremismus.",
};

export default function ThemenPage() {
  return (
    <SiteShell>
      <PageHero
        kicker={`${mainTopics.length} Hauptpunkte · ${topics.length} Themen`}
        lines={[
          { text: "Unsere", size: "max(8cqw, 1.6rem)" },
          { text: "Themen", size: "min(19cqw, 15rem)", italic: true },
        ]}
        edge={false}
      >
        <p className="copy text-[1.25rem] lg:text-[1.4rem]">
          Unsere Hauptthemen sind Antimilitarisierung, der Einsatz gegen die Wehrpflicht und bundeswehrfreie Schulen.{" "}
          <strong className="font-bold">Aber Militarisierung steht nicht für sich</strong> – deshalb gehört für uns
          mehr dazu.
        </p>
        <nav aria-label="Themen auf dieser Seite" className="mt-6">
          <ul className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <li key={topic.slug}>
                <a href={`#${topic.slug}`} className="chip">
                  {plainTitle(topic)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {/* Hauptpunkte: ausführlich, mit Forderungen */}
      <section className="on-cream relative overflow-hidden">
        <div className="page pb-14 lg:pb-20">
          <h2 className="label text-[1.167rem] text-red" data-reveal>
            Unsere drei Hauptpunkte
          </h2>
          <div className="mt-5">
            <TopicRows items={mainTopics} detailed />
          </div>
        </div>
        <HalftoneEdge direction="down" className="-mb-px" />
      </section>

      {/* Weitere Themen */}
      <section className="on-red relative overflow-hidden">
        <div className="page pb-20 pt-12 lg:pb-24 lg:pt-14">
          <div className="cluster" data-reveal>
            <h2 className="page-head display">
              <span style={{ fontSize: "max(6cqw, 1.4rem)", marginLeft: "0.6cqw" }}>Das gehört </span>
              <em style={{ fontSize: "min(14cqw, 14rem)", marginTop: "0.05em" }}>zusammen</em>
            </h2>
          </div>

          <p className="copy-xl mt-10 max-w-[48rem] lg:mt-14" data-reveal>
            Wo aufgerüstet wird, fehlt Geld für Schulen, Gesundheit und Soziales. Und eine Gesellschaft, die auf
            Härte und Gehorsam setzt, wird nicht gerechter. Deshalb stehen wir auch für diese Themen – und wollen als
            Initiative eine Stimme für Schüler*innen sein.
          </p>

          <ul className="mt-12 grid gap-x-12 gap-y-12 lg:mt-16 lg:grid-cols-2">
            {furtherTopics.map((topic) => (
              <li
                key={topic.slug}
                id={topic.slug}
                className="@container border-t-[3px] border-cream pt-5"
                data-reveal
              >
                <p aria-hidden="true" className="label text-[1.167rem]">
                  {topic.no}
                </p>
                <h3 className="display mt-3 text-[min(9.6cqw,3.4rem)]">
                  <span className="block">{topic.title[0]} </span>
                  <em className="mt-[0.14em] block">{topic.title[1]}</em>
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Schwerpunkte">
                  {topic.tags.map((tag) => (
                    <li key={tag} className="chip chip--solid">
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className="copy-xl mt-5 max-w-[38rem]">{topic.text}</p>
                <ul className="ticks copy-xl mt-5 max-w-[38rem] font-bold" aria-label="Was wir fordern">
                  {topic.demands.map((demand) => (
                    <li key={demand}>{demand}</li>
                  ))}
                </ul>
              </li>
            ))}

            <li className="rounded-[1.75rem] bg-cream p-6 text-ink sm:p-8" data-reveal>
              <p className="chip chip--dashed">Langzeitziel</p>
              <div className="@container mt-4">
                <h3 className="display text-[min(9cqw,3.2rem)] text-red">
                  Bundeswehrfreie <em className="text-red-hot">Schule</em>
                </h3>
              </div>
              <p className="copy mt-4 text-[1.2rem]">
                Unser größtes Vorhaben hat eine eigene Seite: mit Hintergründen, Zahlen, einer Vorlage für den Antrag
                an die Schulkonferenz – und einer Petition zum Unterschreiben.
              </p>
              <div className="mt-6">
                <Pill href="/bundeswehrfreie-schulen" className="text-[1.15rem] sm:text-[1.35rem]">
                  Zur <em>Kampagne</em>
                </Pill>
              </div>
            </li>
          </ul>

          <p className="copy-xl mt-14 max-w-[48rem] border-t-[3px] border-cream pt-7" data-reveal>
            Alles zum Nachlesen steht in unserem{" "}
            <Link href="/ueber-uns#grundsatzpapier" className="nav-link font-bold">
              Grundsatzpapier
            </Link>
            . Was hier steht, ist veränderbar: Wir streiten darüber in unseren Treffen und schreiben es weiter, wenn
            wir bessere Argumente hören.
          </p>
        </div>
      </section>

      <JoinTeaser />
    </SiteShell>
  );
}
