import type { CSSProperties } from "react";
import { PrizeSymbol } from "@/components/site/Brand";
import { FONT_DISPLAY } from "@/lib/site";
import { InfoIcon } from "./icons";
import { sectionTitle } from "./styles";

const REQUISITOS = [
  {
    title: "Liberalidade",
    text: "A empresa decide premiar. O prêmio não pode vir de lei, do contrato de trabalho nem de convenção ou acordo coletivo. Prever as regras num regulamento interno não tira a liberalidade.",
  },
  {
    title: "Acima do esperado",
    text: "O prêmio paga o desempenho que supera o que normalmente se espera da função, medido por metas definidas antes.",
  },
  {
    title: "Prova",
    text: "A empresa precisa comprovar, de forma objetiva, qual era o desempenho esperado e quanto foi superado. A análise é caso a caso.",
  },
];

const AVISOS = [
  "Vale só para empregados. Para quem não é empregado, como um autônomo, a regra é outra.",
  "Tem Imposto de Renda: o prêmio é rendimento de quem recebe.",
];

const avisoStyle: CSSProperties = { display: "inline-flex", alignItems: "center", gap: 10, minHeight: 48, padding: "10px 18px", borderRadius: 999, background: "rgba(147, 197, 253, 0.12)", fontSize: 15.5, fontWeight: 600, color: "#E2E8F0" };

export default function RequisitosSection() {
  return (
    <section className="on-navy" aria-labelledby="req-t" style={{ padding: "0 clamp(16px, 4vw, 40px)" }}>
      <div style={{ position: "relative", overflow: "hidden", maxWidth: 1200, margin: "0 auto", background: "#0E1A33", color: "#FFFFFF", borderRadius: 40, padding: "clamp(32px, 6vw, 72px) clamp(20px, 5vw, 64px)", display: "flex", flexDirection: "column", gap: 36 }}>
        <PrizeSymbol className="hide-sm" style={{ position: "absolute", right: -120, top: -120, width: 480, height: 480, color: "#FFFFFF", opacity: 0.05 }} />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 16, maxWidth: 760 }}>
          <h2 id="req-t" style={sectionTitle}>Para valer, o prêmio precisa cumprir três requisitos.</h2>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "#CBD5E1", textWrap: "pretty" }}>É o que a Receita Federal exige para o prêmio ficar fora da contribuição previdenciária.</p>
        </div>

        <ol style={{ position: "relative", listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 20 }}>
          {REQUISITOS.map((item, i) => (
            <li key={item.title} style={{ background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: 28, padding: 26, display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ width: 44, height: 44, borderRadius: 999, background: "#2563EB", color: "#FFFFFF", fontFamily: FONT_DISPLAY, fontSize: 20, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
              <h3 style={{ fontSize: 19, fontWeight: 800 }}>{item.title}</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#CBD5E1", textWrap: "pretty" }}>{item.text}</p>
            </li>
          ))}
        </ol>

        <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 12 }}>
          {AVISOS.map((text) => (
            <span key={text} style={avisoStyle}>
              <InfoIcon size={18} style={{ color: "#93C5FD" }} />
              {text}
            </span>
          ))}
        </div>

        <p style={{ position: "relative", fontSize: 14, lineHeight: 1.6, color: "#94A3B8" }}>Fonte: Receita Federal, Soluções de Consulta Cosit nº 10/2026 e nº 91/2026.</p>
      </div>
    </section>
  );
}
