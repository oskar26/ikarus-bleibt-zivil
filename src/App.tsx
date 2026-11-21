import { useEffect } from "react";
import { About } from "./components/About";
import { Dates } from "./components/Dates";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Join } from "./components/Join";
import { Nav } from "./components/Nav";
import { Topics } from "./components/Topics";

/** Blendet Elemente mit [data-reveal] ein, sobald sie ins Bild scrollen. */
function useReveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    root.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);
}

export default function App() {
  useReveal();

  return (
    <>
      <a
        href="#inhalt"
        className="label sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-cream"
      >
        Zum Inhalt springen
      </a>
      <Nav />
      <main id="inhalt">
        <Hero />
        <About />
        <Topics />
        <Dates />
        <Join />
      </main>
      <Footer />
    </>
  );
}
