import { useRef, type ReactNode, type RefObject } from "react";
import { channels, legal, strike } from "../content";
import { ExternalIcon, Ikarus, Wordmark, useSafeId } from "./ui";

type DialogProps = {
  dialogRef: RefObject<HTMLDialogElement | null>;
  title: string;
  children: ReactNode;
};

function LegalDialog({ dialogRef, title, children }: DialogProps) {
  const titleId = useSafeId("legal");
  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="legal-dialog"
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      <div className="p-6 sm:p-8">
        <h2 id={titleId} className="display text-[2.3rem] text-red">
          {title}
        </h2>
        <div className="copy mt-5 space-y-3.5">{children}</div>
        <form method="dialog" className="mt-7">
          <button type="submit" className="pill cursor-pointer text-[1.2rem]">
            Schließen
          </button>
        </form>
      </div>
    </dialog>
  );
}

const LINKS = [
  { label: "Impressum", kind: "impressum" as const },
  { label: "Datenschutz", kind: "datenschutz" as const },
  { label: "WhatsApp-Kanal", kind: "whatsapp" as const },
  { label: "Bundesweite Kampagne", kind: "campaign" as const },
];

export function Footer() {
  const impressum = useRef<HTMLDialogElement>(null);
  const datenschutz = useRef<HTMLDialogElement>(null);
  const { whatsapp } = channels;

  return (
    <footer className="on-red relative overflow-hidden">
      <div className="page pb-10 pt-12 lg:pb-12 lg:pt-16">
        <div className="grid gap-x-10 gap-y-10 lg:grid-cols-12 lg:items-end">
          <div className="flex items-end gap-6 lg:col-span-7">
            <Wordmark className="text-[clamp(3.6rem,8.4vw,7.4rem)]" />
            <Ikarus label="Ikarus mit Megafon" className="ikarus--swap hidden h-[clamp(7rem,15vw,12rem)] sm:block" />
          </div>

          <div className="lg:col-span-5">
            <p className="copy-xl max-w-[36rem]">
              Initiativgruppe von Schüler*innen des FWG – nicht die Schule, nicht die SV. Diese Website ist kein
              Angebot der Schule, und die Schulleitung ist für die Inhalte nicht verantwortlich.
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              {LINKS.map((link) => (
                <li key={link.kind}>
                  {link.kind === "impressum" || link.kind === "datenschutz" ? (
                    <button
                      type="button"
                      className="label nav-link cursor-pointer text-[1.167rem]"
                      aria-haspopup="dialog"
                      onClick={() =>
                        (link.kind === "impressum" ? impressum : datenschutz).current?.showModal()
                      }
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.kind === "whatsapp" ? whatsapp.url : strike.campaignUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label nav-link inline-flex items-center gap-1.5 text-[1.167rem]"
                    >
                      {link.label}
                      <ExternalIcon />
                      <span className="sr-only"> (öffnet in neuem Tab)</span>
                    </a>
                  )}
                </li>
              ))}
              <li>
                <a href="#top" className="label nav-link text-[1.167rem]">
                  Nach oben
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <LegalDialog dialogRef={impressum} title="Impressum">
        <p>
          <strong className="font-bold">Ikarus bleibt zivil</strong> – Initiativgruppe von Schüler*innen des FWG. Wir
          sind keine Schulveranstaltung und keine SV-Arbeit.
        </p>
        <p>
          <strong className="font-bold">Verantwortlich für den Inhalt:</strong>{" "}
          {legal.responsible || "Angaben folgen vor der Veröffentlichung."}
        </p>
        <p>
          <strong className="font-bold">Kontakt:</strong>{" "}
          <a href={whatsapp.url} target="_blank" rel="noopener noreferrer" className="nav-link font-bold">
            WhatsApp-Kanal
          </a>{" "}
          (Signal-Gruppe für Mitglieder folgt).
        </p>
        <p>Diese Website ist ein Angebot der Initiative, nicht der Schule.</p>
      </LegalDialog>

      <LegalDialog dialogRef={datenschutz} title="Datenschutz">
        <p>
          Diese Website setzt keine Cookies, nutzt kein Tracking und lädt keine Inhalte von Drittanbietern. Schriften
          und Bilder sind direkt in die Seite eingebunden.
        </p>
        <p>
          Beim Aufruf verarbeitet der Hosting-Anbieter technisch notwendige Daten wie die IP-Adresse.{" "}
          {legal.hosting ? `Hosting: ${legal.hosting}.` : "Angaben zum Hosting folgen vor der Veröffentlichung."}
        </p>
        <p>
          Links zu WhatsApp, Signal und zur bundesweiten Kampagne führen zu fremden Angeboten. Diese Anbieter
          verarbeiten Daten nach ihren eigenen Bedingungen. Für deren Inhalte sind die jeweiligen Betreiber
          verantwortlich.
        </p>
      </LegalDialog>
    </footer>
  );
}
