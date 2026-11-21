import { topics } from "../content";
import { ArrowRightIcon, HalftoneEdge } from "./ui";

/** Themen: nur Schrift und Farben – kein Megafon. */
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
            Wir stehen alle gegen die Wehrpflicht und hinter dem Schulstreik –{" "}
            <strong className="font-bold">aber das ist nicht unser einziges Thema.</strong>
          </p>
        </div>

        <ol className="mt-12 lg:mt-16">
          {topics.map((topic) => (
            <li
              key={topic.no}
              className="grid gap-x-10 gap-y-5 border-t-4 border-red py-8 lg:grid-cols-12 lg:py-11"
              data-reveal
            >
              <span aria-hidden="true" className="topic-no display lg:col-span-2">
                {topic.no}
              </span>

              <div className="@container lg:col-span-6">
                <h3 className="display text-[min(11.6cqw,4.25rem)] text-red">
                  <span className="block">{topic.title[0]} </span>
                  <em className="block text-red-hot">{topic.title[1]}</em>
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Schwerpunkte">
                  {topic.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-4 lg:pt-1">
                <p className="copy text-[1.2rem]">{topic.text}</p>
                {topic.link && (
                  <a
                    href={topic.link.href}
                    className="label nav-link mt-5 inline-flex items-center gap-2 text-[1.167rem] text-red"
                  >
                    {topic.link.label}
                    <ArrowRightIcon />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <HalftoneEdge direction="down" className="-mb-px" />
    </section>
  );
}
