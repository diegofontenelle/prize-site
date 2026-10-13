import type { CSSProperties } from "react";
import { FONT_DISPLAY } from "@/lib/site";

/** Título de seção (h2) usado em toda a página. */
export const sectionTitleStyle: CSSProperties = {
  fontFamily: FONT_DISPLAY,
  fontSize: "clamp(30px, 3.6vw, 48px)",
  fontWeight: 700,
  lineHeight: 1.08,
  letterSpacing: "-0.025em",
  textWrap: "balance",
};

/** Parágrafo de apoio logo abaixo do título da seção. */
export const sectionLeadStyle: CSSProperties = { fontSize: 18, lineHeight: 1.6, color: "#475569", maxWidth: 540, textWrap: "pretty" };

/** Traços do ícone de presente (viewBox 24×24), reaproveitados em vários tamanhos. */
export function GiftPaths() {
  return (
    <>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5C9.5 3 12 8 12 8s2.5-5 4.5-5a2.5 2.5 0 0 1 0 5" />
    </>
  );
}

export type Step = { title: string; text: string };

/** Lista de passos numerados, ligados por uma linha vertical (.step em app/globals.css). */
export function StepList({ steps }: { steps: readonly Step[] }) {
  return (
    <ol style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 26 }}>
      {steps.map((step, i) => (
        <li key={step.title} className="step" style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
          <span
            style={{ position: "relative", zIndex: 1, width: 44, height: 44, borderRadius: 999, background: "#2563EB", color: "#FFFFFF", fontFamily: FONT_DISPLAY, fontSize: 20, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
          >
            {i + 1}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 8, minWidth: 0 }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.3 }}>{step.title}</h3>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#475569", textWrap: "pretty" }}>{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Selo flutuante de confirmação que acompanha os mockups. */
export function SuccessChip({ className, style, title, detail }: { className: string; style: CSSProperties; title: string; detail: string }) {
  return (
    <div className={`float-a ${className}`} style={{ position: "absolute", ...style, zIndex: 2 }}>
      <div style={{ background: "#FFFFFF", borderRadius: 22, boxShadow: "0 22px 50px rgba(14, 26, 51, 0.18)", padding: "14px 18px 14px 14px", display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ width: 44, height: 44, borderRadius: 999, background: "#D1FADF", color: "#067647", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg className="ic" width={22} height={22} viewBox="0 0 24 24" aria-hidden="true" style={{ strokeWidth: 2.6 }}>
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>
        <span style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <span style={{ fontSize: 15, fontWeight: 800 }}>{title}</span>
          <span className="tnum" style={{ fontSize: 13, color: "#475569" }}>
            {detail}
          </span>
        </span>
      </div>
    </div>
  );
}
