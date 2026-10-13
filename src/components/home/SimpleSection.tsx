import type { CSSProperties } from "react";
import { PrizeSymbol, PrizeWordmark } from "@/components/site/Brand";
import { FONT_DISPLAY } from "@/lib/site";
import { titleLg } from "./styles";

/** Movimentações do extrato no celular de exemplo. */
const MOVES = [
  { title: "Prizes recebidos", detail: "Entregas no prazo — setembro", amount: "+300,00", income: true },
  { title: "Saque via Pix", detail: "Chave CPF ***.456.789-**", amount: "−120,00", income: false },
  { title: "Prizes recebidos", detail: "Meta de vendas — agosto", amount: "+120,00", income: true },
];

const highlight: CSSProperties = { fontFamily: FONT_DISPLAY, fontSize: "clamp(30px, 3vw, 42px)", fontWeight: 700, lineHeight: 1.1, color: "#2563EB" };
const highlightText: CSSProperties = { fontSize: 17, lineHeight: 1.5, color: "#475569" };

/** "Simples para quem paga e para quem recebe." — celular com o saldo e o código do autenticador. */
export default function SimpleSection() {
  return (
    <section aria-labelledby="facil-t" style={{ padding: "clamp(64px, 8vw, 112px) clamp(16px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap-reverse", alignItems: "center", gap: 56 }}>
        <div className="viz" aria-hidden="true" style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
          <div className="viz-panel" style={{ position: "relative", height: 500, borderRadius: 36, background: "#EAF1FF", overflow: "hidden" }}>
            <div
              className="viz-phone"
              style={{ position: "absolute", left: 40, top: 48, width: 296, height: 620, borderRadius: 46, background: "#0E1A33", padding: 10, boxShadow: "0 40px 80px rgba(14, 26, 51, 0.24)" }}
            >
              <div style={{ width: "100%", height: "100%", borderRadius: 36, background: "#F5F7FB", color: "#0E1A33", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div
                  style={{ height: 58, flexShrink: 0, padding: "0 18px", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "space-between", color: "#3B82F6" }}
                >
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
                    <span
                      style={{ position: "relative", marginTop: 12, height: 46, borderRadius: 12, background: "#FFFFFF", color: "#1D4ED8", fontSize: 14.5, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
                    >
                      <svg className="ic" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" style={{ strokeWidth: 2.2 }}>
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
                    {MOVES.map((move) => (
                      <div key={move.detail} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderTop: "1px solid #EEF2F7" }}>
                        <span
                          style={{ width: 30, height: 30, borderRadius: 999, background: move.income ? "#ECFDF3" : "#F1F4F9", color: move.income ? "#067647" : "#475569", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                        >
                          <svg className="ic" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" style={{ strokeWidth: 2.2 }}>
                            <path d={move.income ? "M17 7L7 17M16 17H7V8" : "M7 17L17 7M8 7h9v9"} />
                          </svg>
                        </span>
                        <span style={{ minWidth: 0, flex: "1 1 auto", display: "flex", flexDirection: "column", gap: 1 }}>
                          <span style={{ fontSize: 12.5, fontWeight: 700 }}>{move.title}</span>
                          <span style={{ fontSize: 11, color: "#5B6478", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{move.detail}</span>
                        </span>
                        <span className="tnum" style={{ fontSize: 12.5, fontWeight: 700, whiteSpace: "nowrap", color: move.income ? "#067647" : "#0E1A33" }}>
                          {move.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="float-b chip-r" style={{ position: "absolute", right: -18, top: 40, zIndex: 2 }}>
            <div style={{ width: 264, background: "#FFFFFF", borderRadius: 22, boxShadow: "0 22px 50px rgba(14, 26, 51, 0.18)", padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 36, height: 36, borderRadius: 12, background: "#EEF4FF", color: "#1D4ED8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg className="ic" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" style={{ strokeWidth: 2 }}>
                    <rect x="4" y="11" width="16" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                  </svg>
                </span>
                <span style={{ fontSize: 14.5, fontWeight: 800 }}>Código do autenticador</span>
              </span>
              <span
                className="tnum"
                style={{ height: 50, borderRadius: 14, border: "1.5px solid #2563EB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 700, letterSpacing: "0.32em", paddingLeft: "0.32em" }}
              >
                48291<span className="caret" style={{ width: 2, height: 24, marginLeft: "-0.2em", background: "#2563EB" }} />
              </span>
              <span style={{ fontSize: 12, lineHeight: 1.45, color: "#5B6478" }}>Confira o destino e o valor antes de confirmar.</span>
            </div>
          </div>
        </div>

        <div style={{ flex: "1 1 460px", minWidth: 0, display: "flex", flexDirection: "column", gap: 32 }}>
          <h2 id="facil-t" style={titleLg}>
            Simples para quem paga e para quem recebe.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingBottom: 20, borderBottom: "1px solid #E2E8F0" }}>
              <span className="tnum" style={highlight}>
                Saque por Pix
              </span>
              <span style={highlightText}>Quando quiser, na chave do CPF de quem recebeu o prêmio.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span className="tnum" style={highlight}>
                Verificação em duas etapas
              </span>
              <span style={highlightText}>Senha e código do autenticador para entrar e para sacar.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
