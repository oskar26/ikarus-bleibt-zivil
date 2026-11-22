"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "./ui";

const LINKS = [
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/themen", label: "Themen" },
  { href: "/bundeswehrfreie-schulen", label: "Bundeswehrfreie Schulen" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const current = (href: string) => (href === pathname ? ("page" as const) : undefined);

  return (
    <header className="pointer-events-none sticky top-0 z-50">
      <div className="page">
        <nav aria-label="Hauptnavigation" className="on-red nav-bar pointer-events-auto rounded-b-[1.1rem] px-4 sm:px-6">
          <div className="flex min-h-[3.75rem] items-center justify-between gap-6">
            <Link
              href="/"
              aria-label="Ikarus bleibt zivil – zur Startseite"
              aria-current={current("/")}
              className="shrink-0 py-2"
              onClick={() => setOpen(false)}
            >
              <Wordmark className="text-[0.98rem]" />
            </Link>

            <ul className="hidden items-center gap-x-7 lg:flex xl:gap-x-9">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} aria-current={current(link.href)} className="label nav-link text-[1.167rem]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="label -mr-1 flex cursor-pointer items-center gap-2.5 px-1 py-2 text-[1.167rem] lg:hidden"
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

          <ul id="mobile-menu" hidden={!open} className="border-t-2 border-cream/45 pb-3 pt-1 lg:hidden">
            {[{ href: "/", label: "Start" }, ...LINKS].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={current(link.href)}
                  className="display block py-3 text-[min(1.9rem,7.4vw)] leading-[0.9]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
