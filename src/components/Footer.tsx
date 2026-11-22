"use client";

import Link from "next/link";
import { useRef, type ReactNode, type RefObject } from "react";
import { channels, legal, paper, strike } from "../content";
import { DownloadIcon, ExternalIcon, Ikarus, Wordmark, useSafeId } from "./ui";

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
          <button type="submit" className="pill text-[1.2rem]">
            Schließen
          </button>
        </form>
      </div>
    </dialog>
  );
}

const PAGES = [
  { href: "/", label: "Start" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/themen", label: "Themen" },
  { href: "/schulstreik-gegen-wehrpflicht", label: "Schulstreik gegen Wehrpflicht" },
  { href: "/bundeswehrfreie-schulen", label: "Bundeswehrfreie Schulen" },
];

export function Footer() {
  const impressum = useRef<HTMLDialogElement>(null);
  const datenschutz = useRef<HTMLDialogElement>(null);
  const { whatsapp, signal, email } = channels;
  const linkClass = "label nav-link inline-flex items-center gap-1.5 text-[1.167rem]";

  return (
    <footer className="on-red relative overflow-hidden">
      <div className="page pb-10 pt-12 lg:pb-12 lg:pt-16">
        <div className="grid gap-x-10 gap-y-10 lg:grid-cols-12 lg:items-end">
          <div className="flex items-end gap-6 lg:col-span-6">
            <Wordmark className="text-[clamp(3.6rem,8.4vw,7.4rem)]" />
            <Ikarus label="Ikarus mit Megafon" className="ikarus--swap hidden h-[clamp(7rem,15vw,12rem)] sm:block" />
          </div>

          <div className="lg:col-span-6">
            <p className="copy-xl max-w-[36rem]">
              Initiativgruppe von Schüler*innen des FWG – nicht die Schule, nicht die SV. Diese Website ist kein
              Angebot der Schule, und die Schulleitung ist für die Inhalte nicht verantwortlich.
            </p>

            <nav aria-label="Seiten" className="mt-8">
              <ul className="flex flex-wrap gap-x-8 gap-y-4">
                {PAGES.map((page) => (
                  <li key={page.href}>
                    <Link href={page.href} className={linkClass}>
                      {page.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href={paper.href} download={paper.fileName} className={linkClass}>
                    Grundsatzpapier
                    <DownloadIcon />
                    <span className="sr-only"> (PDF-Download)</span>
                  </a>
                </li>
              </ul>
            </nav>

            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-4 border-t-[3px] border-cream pt-6">
              <li>
                <button
                  type="button"
                  className={`${linkClass} cursor-pointer`}
                  aria-haspopup="dialog"
                  onClick={() => impressum.current?.showModal()}
                >
                  Impressum
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`${linkClass} cursor-pointer`}
                  aria-haspopup="dialog"
                  onClick={() => datenschutz.current?.showModal()}
                >
                  Datenschutz
                </button>
              </li>
              {[
                { label: "WhatsApp-Kanal", href: whatsapp.url },
                { label: "Bundesweite Kampagne", href: strike.campaignUrl },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {link.label}
                    <ExternalIcon />
                    <span className="sr-only"> (öffnet in neuem Tab)</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#top" className={linkClass}>
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
          –{" "}
          {signal.url ? (
            <a href={signal.url} target="_blank" rel="noopener noreferrer" className="nav-link font-bold">
              {signal.label}
            </a>
          ) : (
            <span className="font-bold">{signal.label} (Link folgt)</span>
          )}{" "}
          –{" "}
          <a href={email.url} className="nav-link font-bold">
            {email.label}
          </a>
        </p>
        <p>Diese Website ist ein Angebot der Initiative, nicht der Schule.</p>
      </LegalDialog>

      <LegalDialog dialogRef={datenschutz} title="Datenschutz">
        <p>
          Diese Website setzt keine Cookies, nutzt kein Tracking und lädt keine Inhalte von Drittanbietern. Schriften
          und Bilder liegen direkt auf unserer Seite.
        </p>
        <p>
          Beim Aufruf verarbeitet der Hosting-Anbieter technisch notwendige Daten wie die IP-Adresse.{" "}
          {legal.hosting ? `Hosting: ${legal.hosting}.` : "Angaben zum Hosting folgen vor der Veröffentlichung."}
        </p>
        <p>
          <strong className="font-bold">Petition:</strong> Wenn du unterschreibst, speichern wir deinen Namen, deine
          Rolle (zum Beispiel Schüler*in) und – falls angegeben – deine Klasse. Wir fragen keine E-Mail-Adresse ab.
          Die Liste nutzen wir nur für die Petition und übergeben sie mit dem Antrag an die Schulkonferenz. Öffentlich
          erscheint dein Name nur abgekürzt und nur, wenn du das ankreuzt. Du kannst deine Unterschrift jederzeit
          löschen lassen:{" "}
          <a href={email.url} className="nav-link font-bold">
            {email.address}
          </a>
          .
        </p>
        <p>
          Links zu WhatsApp, Signal, zur bundesweiten Kampagne und zu unseren Quellen führen zu fremden Angeboten.
          Diese Anbieter verarbeiten Daten nach ihren eigenen Bedingungen. Für deren Inhalte sind die jeweiligen
          Betreiber verantwortlich.
        </p>
      </LegalDialog>
    </footer>
  );
}
