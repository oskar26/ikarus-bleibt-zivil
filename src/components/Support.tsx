import type { CSSProperties, ReactNode } from "react";
import { allies } from "../content";
import { ExternalIcon, Pill } from "./ui";

/**
 * Organisationen und Kampagnen, hinter denen wir stehen.
 * `children` hängt weitere Blöcke auf Rot an (auf der Startseite: unser Wochentermin).
 */
export function Support({ children }: { children?: ReactNode }) {
  return (
    <section id="unterstuetzen" className="on-red relative overflow-hidden">
      <div className="page pb-20 pt-12 lg:pb-28 lg:pt-14">
        <div className="cluster" data-reveal>
          <h2 className="page-head display">
            <span style={{ fontSize: "max(6.2cqw, 1.45rem)", marginLeft: "0.4cqw" }}>Wir </span>
            <em className="mt-[0.08em]" style={{ fontSize: "min(11.2cqw, 11.5rem)" }}>
              unterstützen
            </em>
          </h2>
        </div>

        <p className="copy-xl mt-8 max-w-[42rem] lg:mt-10" data-reveal>
          Nicht nur reden. Diese Organisationen und Kampagnen unterstützen wir – mit unserem Namen und, wenn es
          passt, vor Ort.
        </p>

        <ul className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-3">
          {allies.map((ally, index) => (
            <li
              key={ally.name}
              className="flex flex-col rounded-[1.75rem] bg-cream p-6 text-ink sm:p-7"
              data-reveal
              style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
            >
              <span aria-hidden="true" className="ally-logo" style={{ backgroundImage: `url(${ally.logo})` }} />
              <h3 className="display mt-5 text-[clamp(1.7rem,2.4vw,2.15rem)] leading-[0.92] text-red">{ally.name}</h3>
              <p className="copy mt-4 text-[1.15rem]">{ally.text}</p>
              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
                <Pill href={ally.detailHref ?? ally.links[0].href} external={!ally.detailHref} className="text-[1.05rem]">
                  {ally.detailHref ? "Mehr dazu" : ally.links[0].label}
                </Pill>
                {ally.detailHref && (
                  <a href={ally.links[0].href} target="_blank" rel="noopener noreferrer" className="label nav-link inline-flex items-center gap-1.5 text-[1.05rem] text-red">
                    {ally.links[0].label}
                    <ExternalIcon />
                    <span className="sr-only"> (öffnet in neuem Tab)</span>
                  </a>
                )}
                {ally.links.slice(1).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label nav-link inline-flex items-center gap-1.5 text-[1.05rem] text-red"
                  >
                    {link.label}
                    <ExternalIcon />
                    <span className="sr-only"> (öffnet in neuem Tab)</span>
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>

        {children}
      </div>
    </section>
  );
}
