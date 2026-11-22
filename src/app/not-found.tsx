import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { Pill } from "@/components/ui";

export default function NotFound() {
  return (
    <SiteShell>
      <PageHero
        kicker="Fehler 404"
        lines={[
          { text: "Hier ist", size: "max(8cqw, 1.6rem)" },
          { text: "nichts", size: "min(21cqw, 15rem)", italic: true },
        ]}
      >
        <p className="copy text-[1.25rem] lg:text-[1.4rem]">
          Diese Seite gibt es nicht – oder nicht mehr. Zurück zum Start geht es hier:
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <Pill href="/" className="text-[1.2rem] sm:text-[1.5rem]">
            Zur <em>Startseite</em>
          </Pill>
          <Pill href="/themen" className="text-[1.2rem] sm:text-[1.5rem]">
            Unsere <em>Themen</em>
          </Pill>
        </div>
      </PageHero>
    </SiteShell>
  );
}
