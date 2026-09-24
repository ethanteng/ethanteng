"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Enhance only off-screen content; the server-rendered page stays visible. */
export function ScrollReveals() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const showAll = () => {
      elements.forEach((element) =>
        element.removeAttribute("data-reveal-state"),
      );
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal-state", "visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -32px 0px" },
    );

    elements.forEach((element) => {
      // Never hide the first viewport, including direct visits to an anchor.
      if (element.getBoundingClientRect().top >= window.innerHeight) {
        element.dataset.revealState = "pending";
        observer.observe(element);
      }
    });

    const handlePreference = () => {
      if (preference.matches) {
        observer.disconnect();
        showAll();
      }
    };
    preference.addEventListener("change", handlePreference);

    return () => {
      observer.disconnect();
      preference.removeEventListener("change", handlePreference);
      showAll();
    };
  }, [pathname]);

  return null;
}
