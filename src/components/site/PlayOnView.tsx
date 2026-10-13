"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Faz as animações de quem tem [data-play] começarem só quando o elemento
 * aparece na tela (35% visível). Até lá, o CSS em globals.css deixa as
 * animações pausadas no primeiro quadro. Toca uma vez e fica no estado final.
 */
export default function PlayOnView() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-play]:not([data-inview])"));
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.setAttribute("data-inview", ""));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.intersectionRatio >= 0.35) {
            entry.target.setAttribute("data-inview", "");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: [0, 0.35] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
