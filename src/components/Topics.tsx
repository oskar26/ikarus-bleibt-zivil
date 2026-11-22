import Link from "next/link";
import { furtherTopics, mainTopics, type Topic } from "../content";
import { ArrowRightIcon, HalftoneEdge, Pill } from "./ui";

/** Titel ohne Trennzeichen, z. B. für Chips. */
export const plainTitle = (topic: Topic) => topic.title.join(" ").replace(/\u00AD/g, "");

/**
 * Nummerierte Themen-Zeilen: nur Schrift und Farben – kein Megafon.
 * `detailed` zeigt zusätzlich den längeren Text und die Forderungen (Themenseite).
 */
export function TopicRows({ items, detailed = false }: { items: Topic[]; detailed?: boolean }) {
  return (
    <ol>
      {items.map((topic) => (
        <li
          key={topic.slug}
          id={detailed ? topic.slug : undefined}
          className="grid gap-x-10 gap-y-5 border-t-4 border-red py-8 lg:grid-cols-12 lg:py-11"
          data-reveal
        >
          <span aria-hidden="true" className="topic-no display lg:col-span-2">
            {topic.no}
          </span>

          <div className={detailed ? "@container lg:col-span-5" : "@container lg:col-span-6"}>
            <h3 className="display text-[min(11.6cqw,4.25rem)] text-red">
              <span className="block">{topic.title[0]} </span>
              <em className="block text-red-hot">{topic.title[1]}</em>
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Schwerpunkte">
              {topic.badge && <li className="chip chip--dashed">{topic.badge}</li>}
              {topic.tags.map((tag) => (
                <li key={tag} className="chip">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className={detailed ? "lg:col-span-5 lg:pt-1" : "lg:col-span-4 lg:pt-1"}>
            <p className="copy text-[1.2rem]">{topic.text}</p>
            {detailed && topic.more && <p className="copy mt-4 text-[1.2rem]">{topic.more}</p>}
            {detailed && (
              <>
                <p className="label mt-6 text-[0.95rem] text-red">Was wir fordern</p>
                <ul className="ticks copy mt-3 font-bold">
                  {topic.demands.map((demand) => (
                    <li key={demand}>{demand}</li>
                  ))}
                </ul>
              </>
            )}
            {topic.link && (
              <Link
                href={topic.link.href}
                className="label nav-link mt-5 inline-flex items-center gap-2 text-[1.167rem] text-red"
              >
                {topic.link.label}
                <ArrowRightIcon />
              </Link>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Startseite: unsere drei Hauptpunkte, der Rest steht auf der Themenseite. */
export function Topics() {
  return (
    <section id="themen" className="on-cream relative overflow-hidden">
      <HalftoneEdge direction="up" className="-mt-px" />

      <div className="page pb-14 pt-8 lg:pb-20 lg:pt-12">
        <div className="grid items-end gap-x-10 gap-y-6 lg:grid-cols-12">
          <div className="cluster lg:col-span-7" data-reveal>
            <h2 className="topics-head display text-red">
              <span className="th-1">Unsere </span>
              <em className="th-2">Punkte</em>
            </h2>
          </div>
          <p className="copy text-[1.25rem] lg:col-span-5 lg:pb-3 lg:text-[1.4rem]" data-reveal>
            Drei Punkte, an denen wir nicht vorbeikommen –{" "}
            <strong className="font-bold">und das ist nicht unser einziges Thema.</strong>
          </p>
        </div>

        <div className="mt-12 lg:mt-16">
          <TopicRows items={mainTopics} />
        </div>

        <div
          className="grid items-center gap-x-10 gap-y-6 border-t-4 border-red pt-8 lg:grid-cols-12 lg:pt-10"
          data-reveal
        >
          <div className="lg:col-span-8">
            <p className="label text-[1.167rem] text-red">Gehört für uns dazu</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {furtherTopics.map((topic) => (
                <li key={topic.slug}>
                  <Link href={`/themen#${topic.slug}`} className="chip">
                    {plainTitle(topic)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Pill href="/themen" className="text-[1.2rem] sm:text-[1.5rem]">
              Alle <em>Themen</em>
            </Pill>
          </div>
        </div>
      </div>

      <HalftoneEdge direction="down" className="-mb-px" />
    </section>
  );
}
