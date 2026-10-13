import Link from "next/link";
import { FONT_DISPLAY, ROUTES } from "@/lib/site";
import { sectionTitleStyle } from "./parts";

const STEPS = [
  { title: "Fale com a gente", text: "Conte quantas pessoas a sua empresa quer premiar e quanto pretende premiar por ano." },
  { title: "Receba a proposta", text: "Depois da conversa, a gente manda uma proposta para o seu volume." },
  { title: "Comece a premiar", text: "Com o contrato assinado, a Prize cria o acesso da empresa e o responsável recebe o convite por e-mail." },
] as const;

export default function ComecaSection() {
  return (
    <section aria-labelledby="comeca-t" style={{ padding: "0 clamp(16px, 4vw, 40px) clamp(64px, 8vw, 112px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", background: "#EAF1FF", borderRadius: 40, padding: "clamp(32px, 6vw, 72px) clamp(20px, 5vw, 64px)", display: "flex", flexDirection: "column", gap: 40 }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px 40px" }}>
          <h2 id="comeca-t" style={{ ...sectionTitleStyle, maxWidth: 640 }}>
            Como a sua empresa começa
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#475569", maxWidth: 400 }}>Da primeira conversa ao primeiro prêmio enviado.</p>
        </div>

        <ol style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 24 }}>
          {STEPS.map((step, i) => (
            <li key={step.title} style={{ background: "#FFFFFF", borderRadius: 28, padding: 28, display: "flex", flexDirection: "column", gap: 14 }}>
              <span style={{ width: 48, height: 48, borderRadius: 999, background: "#2563EB", color: "#FFFFFF", fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {i + 1}
              </span>
              <h3 style={{ fontSize: 21, fontWeight: 800, lineHeight: 1.25 }}>{step.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#475569", textWrap: "pretty" }}>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="cta-row" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <Link
            className="pill pill-blue"
            href={ROUTES.faleComAGente}
            style={{ display: "inline-flex", alignItems: "center", height: 56, padding: "0 28px", borderRadius: 999, background: "#2563EB", color: "#FFFFFF", fontSize: 16, fontWeight: 800 }}
          >
            Fale com a gente
          </Link>
        </div>
      </div>
    </section>
  );
}
