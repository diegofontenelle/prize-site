"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { PrizeSymbol } from "@/components/site/Brand";
import { FONT_DISPLAY } from "@/lib/site";
import { titleLg } from "./styles";

/** Duração da contagem, em ms (a linha azul .st-line usa o mesmo tempo no CSS). */
const DURATION = 2600;

type Stat = {
  from: number;
  to: number;
  /** Atraso da animação do ícone. */
  delay: string;
  icon: ReactNode;
  /** Sinal antes do número, no mesmo tamanho dele (ex.: "+"). */
  prefix?: string;
  /** Unidade pequena antes do número (ex.: "R$"). */
  unit?: string;
  /** Unidade pequena depois do número (ex.: "mil"). */
  suffix?: string;
  label: string;
  /** Texto lido pelo leitor de tela (o número animado fica aria-hidden). */
  srText: string;
};

const STATS: Stat[] = [
  {
    from: 1,
    to: 15,
    delay: "0.15s",
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
        <path d="M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    prefix: "+",
    suffix: "mil",
    label: "colaboradores",
    srText: "Mais de 15 mil colaboradores",
  },
  {
    from: 1,
    to: 40,
    delay: "0.30s",
    icon: (
      <>
        <circle cx="8" cy="8" r="6" />
        <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
        <path d="M7 6h1v4" />
        <path d="M16.71 13.88l.7.71-2.82 2.82" />
      </>
    ),
    unit: "R$",
    suffix: "milhões",
    label: "em prêmios",
    srText: "R$ 40 milhões em prêmios",
  },
];

/** "mil", "milhões", "R$": menores que o número. */
const unitStyle = { fontSize: "0.42em", letterSpacing: 0, margin: "0 0.12em" } as const;

/** Valor exibido em cada passo da contagem (p vai de 0 a 1), igual ao protótipo. */
function valueAt(from: number, to: number, p: number) {
  const n = Math.abs(to - from) + 1;
  const i = Math.min(n - 1, Math.floor(n * p));
  return to >= from ? from + i : from - i;
}

/**
 * "Com a Prize, empresas já premiaram". Quando a seção fica 35% visível, os números
 * contam de `from` até `to` e a classe st-run dispara as animações do CSS.
 * Sem JS (ou com movimento reduzido) os valores finais já vêm no HTML.
 */
export default function NumbersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(1);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const motion = !reduce && !section.closest(".no-motion");
    if (!motion || !("IntersectionObserver" in window) || !window.requestAnimationFrame) return;

    let raf = 0;
    let done = false;

    const run = () => {
      const t0 = performance.now();
      setRunning(true);
      setProgress(0);
      const tick = (now: number) => {
        const p = Math.min(1, Math.max(0, (now - t0) / DURATION));
        setProgress(p);
        if (p < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          raf = 0;
          done = true;
        }
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        const ratio = entries[entries.length - 1].intersectionRatio;
        if (ratio >= 0.35) {
          if (!raf && !done) run();
          return;
        }
        if (raf) return;
        // Saiu totalmente da tela: pode contar de novo na próxima vez.
        if (ratio === 0) done = false;
        if (!done) {
          setProgress(0);
          setRunning(false);
        }
      },
      { threshold: [0, 0.35] },
    );
    io.observe(section);

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="numeros"
      className={running ? "st-run" : undefined}
      aria-labelledby="numeros-t"
      style={{ padding: "clamp(56px, 7vw, 96px) clamp(16px, 4vw, 40px) clamp(24px, 4vw, 48px)" }}
    >
      <div className="num-box" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="st-panel st-hist-panel"
          style={{ position: "relative", overflow: "hidden", borderRadius: 40, background: "#FFFFFF", border: "1.5px solid #DBEAFE", boxShadow: "0 24px 60px rgba(14, 26, 51, 0.06)", padding: "clamp(28px, 5vw, 64px) clamp(24px, 5vw, 64px)", display: "flex", flexDirection: "column", gap: "clamp(28px, 4vw, 44px)" }}
        >
          <PrizeSymbol className="hide-sm" style={{ position: "absolute", right: -120, bottom: -150, width: 340, height: 340, color: "#2563EB", opacity: 0.045 }} />
          <div className="st-hist" style={{ position: "relative" }}>
            <h2 id="numeros-t" style={{ position: "relative", ...titleLg }}>
              Com a Prize, empresas já premiaram
            </h2>
            {STATS.map((stat) => (
              <div key={stat.label} className="st-item" style={{ position: "relative", minWidth: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                <span
                  className="st-ico st-pop"
                  aria-hidden="true"
                  style={{ animationDelay: stat.delay, width: 52, height: 52, borderRadius: 16, background: "#2563EB", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" style={{ fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round", strokeLinejoin: "round" }}>
                    {stat.icon}
                  </svg>
                </span>
                <span
                  className="st-num"
                  aria-hidden="true"
                  style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(52px, 5.6vw, 80px)", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em", color: "#1D4ED8", whiteSpace: "nowrap" }}
                >
                  {stat.prefix}
                  {stat.unit && <span style={unitStyle}>{stat.unit}</span>}
                  <span className="ct">{valueAt(stat.from, stat.to, progress)}</span>
                  {stat.suffix && <span style={unitStyle}>{stat.suffix}</span>}
                </span>
                <span className="st-line" aria-hidden="true" style={{ display: "block", width: 64, height: 4, borderRadius: 999, background: "#93C5FD" }} />
                <span className="st-lab" aria-hidden="true" style={{ fontSize: 18, lineHeight: 1.45, color: "#475569", maxWidth: 300, textWrap: "pretty" }}>
                  {stat.label}
                </span>
                <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap" }}>{stat.srText}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
