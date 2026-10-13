import { PrizeSymbol } from "@/components/site/Brand";
import { FONT_DISPLAY, ROUTES } from "@/lib/site";
import MoreLink from "./MoreLink";
import { titleLg } from "./styles";

const REQUIREMENTS = [
  {
    title: "Liberalidade",
    text: "A empresa decide premiar. Não pode ser obrigação da lei, do contrato de trabalho ou de acordo coletivo. Regulamento da própria empresa pode.",
  },
  { title: "Acima do esperado", text: "Premia o desempenho que supera o que se espera da função, com metas definidas antes." },
  { title: "Prova", text: "A empresa mostra, de forma objetiva, quanto se esperava e quanto foi superado." },
];

const NOTES = ["Vale para empregados. Para outras pessoas, a regra é outra.", "Tem Imposto de Renda: o prêmio é rendimento de quem recebe."];

/** Bloco azul-marinho "Prêmio não é salário…" com os três requisitos (âncora #base-legal). */
export default function BaseLegalSection() {
  return (
    <section id="base-legal" className="on-navy" aria-labelledby="legal-t" style={{ padding: "0 clamp(16px, 4vw, 40px)", scrollMarginTop: 84 }}>
      <div
        style={{ position: "relative", overflow: "hidden", maxWidth: 1200, margin: "0 auto", background: "#0E1A33", color: "#FFFFFF", borderRadius: 40, padding: "clamp(32px, 6vw, 72px) clamp(20px, 5vw, 64px)", display: "flex", flexDirection: "column", gap: 36 }}
      >
        <PrizeSymbol className="hide-sm" style={{ position: "absolute", right: -120, top: -120, width: 480, height: 480, color: "#FFFFFF", opacity: 0.05 }} />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 16, maxWidth: 760 }}>
          <h2 id="legal-t" style={titleLg}>
            Prêmio não é salário, desde que siga as regras.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "#CBD5E1", textWrap: "pretty" }}>
            A CLT diz que o prêmio não tem INSS nem FGTS (art. 457, §§ 2º e 4º). Para valer, ele precisa cumprir três requisitos.
          </p>
        </div>

        <ol style={{ position: "relative", listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 20 }}>
          {REQUIREMENTS.map((item, i) => (
            <li
              key={item.title}
              style={{ background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: 28, padding: 26, display: "flex", flexDirection: "column", gap: 10 }}
            >
              <span
                style={{ width: 44, height: 44, borderRadius: 999, background: "#2563EB", color: "#FFFFFF", fontFamily: FONT_DISPLAY, fontSize: 20, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                {i + 1}
              </span>
              <h3 style={{ fontSize: 19, fontWeight: 800 }}>{item.title}</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#CBD5E1" }}>{item.text}</p>
            </li>
          ))}
        </ol>

        <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 12 }}>
          {NOTES.map((note) => (
            <span
              key={note}
              style={{ display: "inline-flex", alignItems: "center", gap: 10, minHeight: 48, padding: "10px 18px", borderRadius: 999, background: "rgba(147, 197, 253, 0.12)", fontSize: 15.5, fontWeight: 600, color: "#E2E8F0" }}
            >
              <svg className="ic" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" style={{ color: "#93C5FD" }}>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              {note}
            </span>
          ))}
        </div>

        <p style={{ position: "relative", fontSize: 14, lineHeight: 1.6, color: "#94A3B8", maxWidth: 900 }}>
          Fontes: CLT, art. 457; Receita Federal, Soluções de Consulta Cosit nº 10/2026 e nº 91/2026. A Prize não presta consultoria tributária: monte o programa de premiação com o contador da sua empresa.
        </p>
        <div style={{ position: "relative", display: "flex" }}>
          <MoreLink href={ROUTES.baseLegal} style={{ color: "#FFFFFF" }}>
            Ver a base legal
          </MoreLink>
        </div>
      </div>
    </section>
  );
}
