import type { ReactNode } from "react";
import { cn } from "../utils/cn";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { Reveal } from "./Reveal";

type Props = {
  /** "green" färbt alle roten Flächen dunkelgrün (Seite „Bundeswehrfreie Schulen“). */
  theme?: "red" | "green";
  children: ReactNode;
};

/** Gemeinsamer Rahmen aller Seiten: Sprunglink, Navigation, Inhalt, Footer. */
export function SiteShell({ theme = "red", children }: Props) {
  return (
    <div id="top" className={cn(theme === "green" && "theme-green")}>
      <a
        href="#inhalt"
        className="label sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-cream"
      >
        Zum Inhalt springen
      </a>
      <Nav />
      <main id="inhalt">{children}</main>
      <Footer />
      <Reveal />
    </div>
  );
}
