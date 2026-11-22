import type { ReactNode } from "react";
import { HalftoneEdge } from "./ui";

export type HeroLine = {
  text: string;
  /** Schriftgröße relativ zur Spaltenbreite, z. B. "13cqw" – skaliert wie ein Plakat */
  size: string;
  italic?: boolean;
  /** Einzug, z. B. "12cqw" */
  indent?: string;
};

type Props = {
  kicker?: string;
  /** Plakat-Überschrift aus fest gesetzten Zeilen */
  lines?: HeroLine[];
  /** Alternative: frei umbrechende Überschrift (für Vorlagen mit beliebigem Titel) */
  heading?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
  /** Rasterkante nach unten – wenn danach eine farbige Fläche folgt */
  edge?: boolean;
};

/** Kopf der Unterseiten: gleiche Elemente wie der Start-Hero, nur kompakter. */
export function PageHero({ kicker, lines, heading, children, aside, edge = true }: Props) {
  return (
    <section className="on-cream relative overflow-hidden">
      <div
        aria-hidden="true"
        className="blob left-[-16%] top-[-13rem] h-[32rem] w-[44rem] max-w-[95vw] rotate-[-18deg]"
      />
      {edge && (
        <div
          aria-hidden="true"
          className="blob bottom-[-10rem] right-[-12%] h-[23rem] w-[36rem] max-w-[85vw] rotate-[24deg]"
        />
      )}

      <div className="page relative pb-12 pt-9 lg:pb-16 lg:pt-12">
        <div className="grid items-end gap-x-10 gap-y-12 lg:grid-cols-12">
          <div className={aside ? "lg:col-span-8" : "lg:col-span-9"}>
            {kicker && <p className="chip">{kicker}</p>}

            {lines ? (
              <div className="cluster mt-6">
                <h1 className="page-head display text-red">
                  {lines.map((line) =>
                    line.italic ? (
                      <em
                        key={line.text}
                        className="text-red-hot"
                        style={{ fontSize: line.size, marginLeft: line.indent, marginTop: "0.05em" }}
                      >
                        {line.text}{" "}
                      </em>
                    ) : (
                      <span key={line.text} style={{ fontSize: line.size, marginLeft: line.indent, marginTop: "0.05em" }}>
                        {line.text}{" "}
                      </span>
                    ),
                  )}
                </h1>
              </div>
            ) : (
              <h1 className="display mt-6 text-[clamp(2.6rem,8vw,6rem)] text-red">{heading}</h1>
            )}

            {children && <div className="mt-8 max-w-[44rem] lg:mt-10">{children}</div>}
          </div>

          {aside && <div className="flex justify-center lg:col-span-4 lg:justify-end lg:pb-3">{aside}</div>}
        </div>
      </div>

      {edge && <HalftoneEdge direction="down" className="-mb-px" />}
    </section>
  );
}
