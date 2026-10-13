import Link from "next/link";
import { PrizeSymbol, PrizeWordmark } from "@/components/site/Brand";
import { FONT_DISPLAY, ROUTES } from "@/lib/site";
import { SuccessChip, sectionLeadStyle, sectionTitleStyle, StepList } from "./parts";

const STEPS = [
  { title: "Recebe o convite", text: "Chega por e-mail assim que a empresa envia a premiação." },
  { title: "Cria o acesso", text: "Com senha e verificação em duas etapas, num aplicativo autenticador." },
  { title: "Saca por Pix", text: "Na chave do próprio CPF, quando quiser." },
  { title: "Acompanha no extrato", text: "Tudo o que recebe e saca fica registrado, com data e hora." },
] as const;

const ARROW_IN = "M17 7L7 17M16 17H7V8";
const ARROW_OUT = "M7 17L17 7M8 7h9v9";

const MOVEMENTS = [
  { title: "Prizes recebidos", detail: "Entregas no prazo — setembro", value: "+300,00", incoming: true },
  { title: "Saque via Pix", detail: "Chave CPF ***.456.789-**", value: "−120,00", incoming: false },
  { title: "Prizes recebidos", detail: "Meta de vendas — agosto", value: "+120,00", incoming: true },
] as const;

/** Mockup do app de quem recebe, dentro de um celular (decorativo). */
function ReceiverPhone() {
  return (
    <div
      className="viz-phone"
      style={{ position: "absolute", left: 40, top: 48, width: 296, height: 620, borderRadius: 46, background: "#0E1A33", padding: 10, boxShadow: "0 40px 80px rgba(14, 26, 51, 0.24)" }}
    >
      <div style={{ width: "100%", height: "100%", borderRadius: 36, background: "#F5F7FB", color: "#0E1A33", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ height: 58, flexShrink: 0, padding: "0 18px", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "space-between", color: "#3B82F6" }}>
          <PrizeWordmark style={{ height: 20, width: 78, display: "block" }} />
          <span style={{ width: 34, height: 34, borderRadius: 999, background: "#EEF4FF", color: "#1D4ED8", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>AS</span>
        </div>

        <div style={{ padding: "18px 16px", display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 700, lineHeight: 1.2 }}>Olá, Ana</span>
            <span style={{ fontSize: 12.5, lineHeight: 1.45, color: "#475569" }}>Os Prizes que você recebe ficam aqui. Saque quando quiser, por Pix.</span>
          </div>

          <div style={{ position: "relative", overflow: "hidden", background: "#1D4ED8", color: "#FFFFFF", borderRadius: 20, padding: 18, display: "flex", flexDirection: "column", gap: 6 }}>
            <PrizeSymbol style={{ position: "absolute", right: -44, bottom: -56, width: 190, height: 190, color: "#FFFFFF", opacity: 0.08 }} />
            <span style={{ position: "relative", fontSize: 13, fontWeight: 600, color: "#DBEAFE" }}>Saldo disponível</span>
            <span className="tnum" style={{ position: "relative", fontSize: 38, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              300,00 <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: 0, color: "#DBEAFE" }}>Prizes</span>
            </span>
            <span style={{ position: "relative", marginTop: 12, height: 46, borderRadius: 12, background: "#FFFFFF", color: "#1D4ED8", fontSize: 14.5, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <svg className="ic" width={17} height={17} viewBox="0 0 24 24" aria-hidden="true" style={{ strokeWidth: 2.2 }}>
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              Sacar via Pix
            </span>
          </div>

          <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 18, padding: "14px 14px 4px", display: "flex", flexDirection: "column" }}>
            <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 8 }}>
              <span style={{ fontSize: 13.5, fontWeight: 700 }}>Últimas movimentações</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#1D4ED8" }}>Ver extrato</span>
            </span>
            {MOVEMENTS.map((item) => (
              <div key={item.detail} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderTop: "1px solid #EEF2F7" }}>
                <span
                  style={{ width: 30, height: 30, borderRadius: 999, background: item.incoming ? "#ECFDF3" : "#F1F4F9", color: item.incoming ? "#067647" : "#475569", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                >
                  <svg className="ic" width={14} height={14} viewBox="0 0 24 24" aria-hidden="true" style={{ strokeWidth: 2.2 }}>
                    <path d={item.incoming ? ARROW_IN : ARROW_OUT} />
                  </svg>
                </span>
                <span style={{ minWidth: 0, flex: "1 1 auto", display: "flex", flexDirection: "column", gap: 1 }}>
                  <span style={{ fontSize: 12.5, fontWeight: 700 }}>{item.title}</span>
                  <span style={{ fontSize: 11, color: "#5B6478", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.detail}</span>
                </span>
                <span className="tnum" style={{ fontSize: 12.5, fontWeight: 700, whiteSpace: "nowrap", color: item.incoming ? "#067647" : "#0E1A33" }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RecebeSection() {
  return (
    <section aria-labelledby="recebe-t" style={{ padding: "clamp(64px, 8vw, 112px) clamp(16px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", alignItems: "center", gap: 56 }}>
        <div style={{ flex: "1 1 460px", minWidth: 0, display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <h2 id="recebe-t" style={sectionTitleStyle}>
              Para quem recebe
            </h2>
            <p style={sectionLeadStyle}>A pessoa premiada cria o próprio acesso e saca quando quiser.</p>
          </div>
          <StepList steps={STEPS} />
          <Link
            className="more"
            href={ROUTES.recebeuPrizes}
            style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 10, minHeight: 44, fontSize: 16, fontWeight: 800, color: "#1D4ED8" }}
          >
            Recebeu Prizes? Veja o passo a passo
            <svg className="ic" width={18} height={18} viewBox="0 0 24 24" aria-hidden="true" style={{ strokeWidth: 2.2 }}>
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <div className="viz" aria-hidden="true" style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
          <div className="viz-panel" style={{ position: "relative", height: 560, borderRadius: 36, background: "#EAF1FF", overflow: "hidden" }}>
            <ReceiverPhone />
          </div>
          <SuccessChip className="chip-r" style={{ right: -18, bottom: 48 }} title="Pix enviado" detail="R$ 120,00 na conta da Ana" />
        </div>
      </div>
    </section>
  );
}
