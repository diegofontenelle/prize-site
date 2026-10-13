import type { CSSProperties } from "react";
import { FONT_DISPLAY, ROUTES } from "@/lib/site";
import MoreLink from "./MoreLink";
import { titleLg } from "./styles";

const card: CSSProperties = { background: "#FFFFFF", borderRadius: 28, padding: 28, display: "flex", flexDirection: "column", gap: 16 };
const stepNumber: CSSProperties = { width: 48, height: 48, borderRadius: 999, background: "#2563EB", color: "#FFFFFF", fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" };
const stepTitle: CSSProperties = { fontSize: 21, fontWeight: 800, lineHeight: 1.25 };
const stepText: CSSProperties = { fontSize: 16, lineHeight: 1.6, color: "#475569" };
const chip: CSSProperties = { alignSelf: "flex-start", display: "flex", alignItems: "center", gap: 8, height: 40, padding: "0 14px", borderRadius: 999, fontSize: 14, fontWeight: 800 };
const avatar: CSSProperties = { width: 40, height: 40, borderRadius: 999, border: "3px solid #FFFFFF", fontSize: 13, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" };

/** "Do Pix da empresa ao Pix de quem recebe." — os três passos (âncora #como-funciona). */
export default function StepsSection() {
  return (
    <section id="como-funciona" aria-labelledby="como-t" style={{ padding: "clamp(24px, 4vw, 40px) clamp(16px, 4vw, 40px)", scrollMarginTop: 84 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", background: "#EAF1FF", borderRadius: 40, padding: "clamp(32px, 6vw, 72px) clamp(20px, 5vw, 64px)", display: "flex", flexDirection: "column", gap: 44 }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px 40px" }}>
          <h2 id="como-t" style={{ ...titleLg, maxWidth: 640 }}>
            Do Pix da empresa ao Pix de quem recebe.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#475569", maxWidth: 380 }}>Tudo pelo painel da empresa, com cada passo registrado no extrato.</p>
        </div>

        <ol style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 24 }}>
          <li style={card}>
            <span style={stepNumber}>1</span>
            <h3 style={stepTitle}>Adicione Prizes</h3>
            <p style={stepText}>Recarregue o saldo por Pix, direto no painel da empresa. Cada Prize vale R$ 1,00.</p>
            <span aria-hidden="true" style={{ ...chip, background: "#EEF4FF", color: "#1D4ED8" }}>
              <svg className="ic" width="16" height="16" viewBox="0 0 24 24" style={{ strokeWidth: 2.4 }}>
                <path d="M12 5v14M5 12h14" />
              </svg>
              5.000 Prizes
            </span>
          </li>
          <li style={card}>
            <span style={stepNumber}>2</span>
            <h3 style={stepTitle}>Premie</h3>
            <p style={stepText}>Uma pessoa ou o time todo, à mão ou por planilha. Dê um nome à premiação e envie.</p>
            <span aria-hidden="true" style={{ alignSelf: "flex-start", display: "flex", alignItems: "center" }}>
              <span style={{ ...avatar, background: "#2563EB", color: "#FFFFFF" }}>AS</span>
              <span style={{ ...avatar, marginLeft: -10, background: "#93C5FD", color: "#0E1A33" }}>BL</span>
              <span style={{ ...avatar, marginLeft: -10, background: "#0E1A33", color: "#FFFFFF" }}>CM</span>
              <span
                style={{ height: 40, marginLeft: -10, padding: "0 12px", borderRadius: 999, background: "#EEF4FF", color: "#1D4ED8", border: "3px solid #FFFFFF", fontSize: 13, fontWeight: 800, display: "flex", alignItems: "center" }}
              >
                +12
              </span>
            </span>
          </li>
          <li style={card}>
            <span style={stepNumber}>3</span>
            <h3 style={stepTitle}>A pessoa saca no Pix</h3>
            <p style={stepText}>Ela recebe o convite por e-mail, cria o acesso e saca na chave do próprio CPF.</p>
            <span aria-hidden="true" style={{ ...chip, background: "#D1FADF", color: "#067647" }}>
              <svg className="ic" width="16" height="16" viewBox="0 0 24 24" style={{ strokeWidth: 2.6 }}>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Pix enviado
            </span>
          </li>
        </ol>

        <MoreLink href={ROUTES.comoFunciona}>Ver como funciona</MoreLink>
      </div>
    </section>
  );
}
