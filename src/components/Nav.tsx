import { useEffect, useState } from "react";
import { Wordmark } from "./ui";

const LINKS = [
  { href: "#wir", label: "Über uns" },
  { href: "#themen", label: "Themen" },
  { href: "#termine", label: "Termine" },
  { href: "#mitmachen", label: "Mitmachen" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="pointer-events-none sticky top-0 z-50">
      <div className="page">
        <nav
          aria-label="Hauptnavigation"
          className="on-red pointer-events-auto rounded-b-[1.1rem] px-4 shadow-[0_14px_26px_-16px_rgb(60_12_4/0.75)] sm:px-6"
        >
          <div className="flex min-h-[3.75rem] items-center justify-between gap-6">
            <a
              href="#top"
              aria-label="Ikarus bleibt zivil – zum Seitenanfang"
              className="shrink-0 py-2"
              onClick={() => setOpen(false)}
            >
              <Wordmark className="text-[0.98rem]" />
            </a>

            <ul className="hidden items-center gap-x-7 md:flex lg:gap-x-9">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="label nav-link text-[1.167rem]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="label -mr-1 flex items-center gap-2.5 px-1 py-2 text-[1.167rem] md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="nav-link">{open ? "Schließen" : "Menü"}</span>
              <svg
                viewBox="0 0 24 24"
                width="1.15em"
                height="1.15em"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {open ? <path d="M5 5l14 14M19 5 5 19" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
              </svg>
            </button>
          </div>

          <ul id="mobile-menu" hidden={!open} className="border-t-2 border-cream/45 pb-3 pt-1 md:hidden">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="display block py-3 text-[2.1rem]" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
