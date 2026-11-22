import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const DESCRIPTION =
  "Ikarus bleibt zivil ist eine Initiativgruppe von Schüler*innen des FWG – nicht die Schule, nicht die SV. Gegen Wehrpflicht und Militarisierung, für bundeswehrfreie Schulen und mehr Geld in Bildung, Gesundheit und Soziales.";

const ICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23db4a2b'/%3E%3Cg fill='%23ede5d6'%3E%3Crect x='12' y='13' width='40' height='10' rx='2'/%3E%3Crect x='12' y='27' width='36' height='10' rx='2'/%3E%3Crect x='12' y='41' width='26' height='10' rx='2'/%3E%3C/g%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: {
    default: "Ikarus bleibt zivil – Initiative von Schüler*innen am FWG",
    template: "%s – Ikarus bleibt zivil",
  },
  description: DESCRIPTION,
  icons: { icon: ICON },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Ikarus bleibt zivil",
    title: "Ikarus bleibt zivil",
    description: "Initiativgruppe von Schüler*innen des FWG – nicht die Schule, nicht die SV.",
  },
};

export const viewport: Viewport = {
  themeColor: "#db4a2b",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" data-scroll-behavior="smooth">
      <head>
        {/* Die beiden Schnitte der großen Überschriften früh laden */}
        <link
          rel="preload"
          href="/fonts/open-sauce-sans-latin-900-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/open-sauce-sans-latin-700-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
