import Link from "next/link";
import { Arrow, ArrowRightIcon, HalftoneEdge, Ikarus, Pill } from "./ui";

export function Hero() {
  return (
    <section className="on-cream relative overflow-hidden">
      <div
        aria-hidden="true"
        className="blob left-[-16%] top-[-11rem] h-[34rem] w-[46rem] max-w-[95vw] rotate-[-18deg]"
      />
      <div
        aria-hidden="true"
        className="blob bottom-[-8rem] right-[-12%] h-[25rem] w-[38rem] max-w-[85vw] rotate-[24deg]"
      />

      <div className="page relative pb-10 pt-6 lg:pb-11 lg:pt-7">
        <div className="hero-board">
          <div className="hero-art">
            <h1 className="hero-wordmark wordmark">
              <span>Ikarus </span>
              <span>bleibt </span>
              <span>zivil</span>
            </h1>

            <p className="hero-slogan">
              <span className="hs-1">
                <span className="sm">Wir</span> <em className="fat">lernen</em>
              </span>{" "}
              <span className="hs-2">
                <em>fliegen.</em>
              </span>{" "}
              <span className="hs-3">
                <span className="sm fat">Nicht</span> <em>marschieren.</em>
              </span>
            </p>
          </div>

          {/* Nur die Figur – orange, ohne Karte und ohne Stempel */}
          <Ikarus label="Ikarus mit Megafon" className="hero-ikarus" />

          <div className="hero-foot">
            <div className="cta">
              <Arrow className="h-[3.1rem] w-auto -translate-y-2 sm:h-[3.6rem]" />
              <Pill href="#mitmachen" className="text-[1.6rem] sm:text-[1.95rem]">
                Mach <em>mit</em>!
              </Pill>
              <Arrow mirrored className="h-[3.1rem] w-auto -translate-y-2 max-[339px]:hidden sm:h-[3.6rem]" />
            </div>

            <div className="max-w-[37rem]">
              <p className="copy lg:text-[1.2rem]">
                Wir sind eine Initiativ&shy;gruppe von Schüler*innen des FWG. Wir stehen gegen Wehrpflicht und
                Militarisierung, für bundeswehrfreie Schulen und für mehr Geld in Bildung, Gesundheit und Soziales.
              </p>
              <Link href="/themen" className="label nav-link mt-4 inline-flex items-center gap-2 text-[1.167rem] text-red">
                Zu unseren Themen
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <HalftoneEdge direction="down" className="-mb-px" />
    </section>
  );
}
