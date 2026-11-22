import type { Metadata } from "next";
import Link from "next/link";
import { JoinTeaser } from "@/components/Join";
import { SiteShell } from "@/components/SiteShell";
import { Poster } from "@/components/Strike";
import { ArrowRightIcon, Burst, HalftoneEdge, Pill } from "@/components/ui";
import { channels, meeting, strike } from "@/content";

export const metadata: Metadata = {
  title: "Schulstreik gegen Wehrpflicht",
  description:
    "Warum wir den Schulstreik gegen Wehrpflicht unterstützen, wie wir gemeinsam hingehen und was bei Fehlzeiten und Druck hilft. Die aktuellen Termine stehen beim Bündnis.",
};

const SUPPORT = [
  {
    no: "01",
    title: "Informieren",
    text: "Wir sprechen am FWG über Wehrpflicht, Musterung und den Streik. Wir sagen, warum wir den Aufruf unterstützen – und hören auch deine Fragen.",
  },
  {
    no: "02",
    title: "Zusammen hingehen",
    text: "Wenn wieder ein Streik angekündigt ist, organisieren wir uns in Köln und gehen gemeinsam hin. Niemand muss allein los.",
  },
  {
    no: "03",
    title: "Rücken stärken",
    text: "Wenn es wegen der Teilnahme Ärger oder Druck gibt, reden wir mit dir darüber und schauen gemeinsam, wie es weitergeht.",
  },
];

/** Dauerhaft erreichbare Informationsseite – kein abgelaufener Streiktermin. */
export default function SchulstreikPage() {
  return (
    <SiteShell>
      <section className="on-cream relative overflow-hidden">
        <div aria-hidden="true" className="blob left-[-18%] top-[-13rem] h-[33rem] w-[45rem] max-w-[95vw] rotate-[-18deg]" />
        <div className="page relative pb-14 pt-9 lg:pb-20 lg:pt-14">
          <div className="grid items-center gap-x-14 gap-y-14 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7">
              <p className="chip">Unsere Haltung · Kein eigener Streikaufruf</p>
              <div className="cluster mt-8">
                <h1 className="strike-page-title display text-red">
                  <span>Schul</span>
                  <em>streik</em>
                  <span className="strike-page-title-small">gegen Wehrpflicht</span>
                </h1>
              </div>
              <p className="copy mt-8 max-w-[39rem] text-[1.25rem] lg:text-[1.4rem]">
                Über unsere Zukunft wird entschieden – <strong className="font-bold">ohne uns?</strong> Nicht mit uns.
                Wir unterstützen den Schulstreik gegen Wehrpflicht. Er wird vom bundesweiten Bündnis organisiert,
                nicht von unserer Schule und nicht von der SV.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Pill href="#gut-zu-wissen" className="text-[1.1rem] sm:text-[1.35rem]">
                  Gut zu <em>wissen</em>
                </Pill>
                <Pill href={strike.campaignUrl} external className="text-[1.1rem] sm:text-[1.35rem]">
                  Aktuelle <em>Termine</em>
                </Pill>
              </div>
            </div>
            <div className="min-w-0 lg:col-span-5">
              <Poster />
            </div>
          </div>
        </div>
        <HalftoneEdge direction="down" className="-mb-px" />
      </section>

      <section className="on-red relative overflow-hidden">
        <div className="page pb-20 pt-12 lg:pb-24 lg:pt-16">
          <div className="cluster" data-reveal>
            <h2 className="page-head display">
              <span style={{ fontSize: "max(6cqw,1.4rem)" }}>Wir unterstützen den</span>
              <em style={{ fontSize: "min(13cqw,11rem)", marginTop: "0.12em" }}>Schulstreik</em>
            </h2>
          </div>
          <p className="copy-xl mt-9 max-w-[50rem]" data-reveal>
            Die Wehrpflicht ist ein Eingriff in unsere Zukunft. Wir wollen keine Musterung und keine Zwangsdienste.
            Junge Menschen sollen selbst entscheiden, wie sie leben. Darum stehen wir hinter den Schüler*innen, die
            dagegen auf die Straße gehen.
          </p>
          <ul className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-3">
            {SUPPORT.map((item) => (
              <li key={item.no} className="border-t-[3px] border-cream pt-5" data-reveal>
                <p aria-hidden="true" className="label text-[1.05rem]">{item.no}</p>
                <h3 className="display mt-3 text-[clamp(2rem,3vw,2.75rem)]">{item.title}</h3>
                <p className="copy-xl mt-4">{item.text}</p>
              </li>
            ))}
          </ul>

          <div id="gut-zu-wissen" className="mt-20 grid gap-x-14 gap-y-9 lg:mt-28 lg:grid-cols-12">
            <div className="lg:col-span-5" data-reveal>
              <p className="chip chip--solid">Vor der Teilnahme</p>
              <h2 className="display mt-5 text-[clamp(2.8rem,5.5vw,5rem)]">
                Gut zu <em>wissen</em>
              </h2>
              <p className="copy-xl mt-6">
                Der Streik ist keine Veranstaltung des FWG. Aktuelle Aufrufe, Orte und Zeiten kommen vom Bündnis.
                Wir veröffentlichen hier bewusst keinen vergangenen Streiktermin als kommenden.
              </p>
              <Burst className="mt-10 hidden w-32 rotate-12 opacity-70 lg:block" />
            </div>
            <div className="lg:col-span-7" data-reveal>
              <div className="rounded-[1.75rem] bg-cream p-6 text-ink sm:p-8">
                <h3 className="display text-[clamp(1.85rem,3.4vw,2.6rem)] text-red">Fehlzeiten &amp; Eltern</h3>
                <p className="copy mt-4 text-[1.2rem]">
                  Wer während der Unterrichtszeit mitgeht, muss in der Regel mit Fehlzeiten rechnen. Sprich vorher
                  mit deinen Eltern oder Erziehungsberechtigten und informiere dich, wie deine Schule mit Fehlzeiten
                  umgeht. Ein Schulstreik ist keine Schulveranstaltung und keine automatische Beurlaubung.
                </p>
                <div className="mt-7 border-t-[3px] border-red pt-6">
                  <h3 className="display text-[clamp(1.85rem,3.4vw,2.6rem)] text-red">Du bist nicht allein.</h3>
                  <p className="copy mt-4 text-[1.2rem]">
                    Gibt es wegen des Streiks Druck – zum Beispiel Gespräche, Attestpflicht oder Streit um
                    Fehlzeiten? Schreib uns oder komm {meeting.rhythm.toLowerCase()} in der {meeting.lesson} in
                    den {meeting.place}. Wir hören zu und schauen gemeinsam, was du tun kannst.
                  </p>
                  <a href={channels.email.url} className="label nav-link mt-5 inline-flex items-center gap-2 text-[1.1rem] text-red">
                    Schreib uns <ArrowRightIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="on-cream relative overflow-hidden">
        <HalftoneEdge direction="up" className="-mt-px" />
        <div className="page pb-14 pt-10 lg:pb-20 lg:pt-14">
          <h2 className="display text-[clamp(2.6rem,6vw,5rem)] text-red" data-reveal>
            Immer auf dem <em className="text-red-hot">Laufenden.</em>
          </h2>
          <p className="copy mt-6 max-w-[43rem] text-[1.25rem]" data-reveal>
            Wir geben Bescheid, wenn wir gemeinsam losgehen. Den offiziellen Aufruf und aktuelle Streiktermine
            findest du direkt beim Bündnis und beim Kölner Schulstreik-Komitee.
          </p>
          <div className="mt-9 flex flex-wrap gap-3" data-reveal>
            <Pill href={strike.campaignUrl} external className="text-[1.05rem] sm:text-[1.3rem]">
              Bundesweite <em>Kampagne</em>
            </Pill>
            <Pill href={strike.cologneUrl} external className="text-[1.05rem] sm:text-[1.3rem]">
              Schulstreik <em>Köln</em>
            </Pill>
            <Pill href={channels.whatsapp.url} external className="text-[1.05rem] sm:text-[1.3rem]">
              Unser <em>WhatsApp-Kanal</em>
            </Pill>
          </div>
          <p className="copy mt-9 border-t-[3px] border-red pt-6 text-[1.15rem]" data-reveal>
            Mehr zu unseren Forderungen?{" "}
            <Link href="/themen#wehrpflicht" className="nav-link font-bold text-red">
              Gegen Wehrpflicht
            </Link>
            . Und für eine Schule ohne Bundeswehr?{" "}
            <Link href="/bundeswehrfreie-schulen" className="nav-link font-bold text-red">
              Bundeswehrfreie Schulen
            </Link>
            .
          </p>
        </div>
        <HalftoneEdge direction="down" className="-mb-px" />
      </section>

      <JoinTeaser />
    </SiteShell>
  );
}
