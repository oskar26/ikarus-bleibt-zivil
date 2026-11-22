"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Blendet Elemente mit [data-reveal] ein, sobald sie ins Bild scrollen. */
export function Reveal() {
  const pathname = usePathname();

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
    document.querySelectorAll("[data-reveal]:not(.is-in)").forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("js-reveal");
    };
  }, [pathname]);

  return null;
}
