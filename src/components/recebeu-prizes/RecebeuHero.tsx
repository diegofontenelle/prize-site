import type { CSSProperties } from "react";
import { PrizeSymbol, PrizeWordmark } from "@/components/site/Brand";
import { FONT_DISPLAY, LOGIN_URL } from "@/lib/site";

const rowLabel: CSSProperties = { fontSize: 10.5, color: "#5B6478" };
const rowDivided: CSSProperties = { display: "flex", justifyContent: "space-between", gap: 8, paddingBottom: 8, borderBottom: "1px solid #EEF2F7" };
const codeDigit: CSSProperties = { flex: "1 1 0", height: 34, borderRadius: 8, border: "1.5px solid #1D4ED8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 };
const progressStep: CSSProperties = { flex: "1 1 0", height: 4, borderRadius: 999, background: "#1D4ED8" };

/** Celular com a tela de confirmação do saque por Pix e o aviso "Pix enviado". */
function PhoneMockup() {
  return (
    <div className="hero-vis rise d2" aria-hidden="true" style={{ flex: "1 1 520px", minWidth: 0, position: "relative", minHeight: 600 }}>
      <div className="hide-sm" style={{ position: "absolute", left: "50%", top: 20, width: 540, height: 540, marginLeft: -270, borderRadius: 999, background: "#EEF4FF" }}></div>
      <PrizeSymbol className="hide-sm spin-slow" style={{ position: "absolute", left: "50%", top: 80, width: 420, height: 420, marginLeft: -210, color: "#3B82F6", opacity: 0.1 }} />

      <div className="phone-abs" style={{ position: "absolute", zIndex: 2, left: "50%", top: 24, marginLeft: -126, width: 252, height: 540, borderRadius: 40, background: "#0E1A33", padding: 8, boxShadow: "0 40px 80px rgba(14, 26, 51, 0.28)" }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 32, background: "#F5F7FB", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div style={{ height: 52, flexShrink: 0, padding: "0 16px", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "space-between", color: "#3B82F6" }}>
            <PrizeWordmark style={{ height: 18, width: 71, display: "block" }} />
            <span style={{ width: 28, height: 28, borderRadius: 999, background: "#EEF4FF", color: "#1D4ED8", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>AS</span>
          </div>
          <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
            <span style={{ fontFamily: FONT_DISPLAY, fontSize: 17, fontWeight: 700 }}>Sacar via Pix</span>
            <div style={{ display: "flex", gap: 4 }}>
              <span style={progressStep}></span>
              <span style={progressStep}></span>
              <span style={progressStep}></span>
            </div>
            <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, padding: 12, display: "flex", flexDirection: "column", gap: 9 }}>
              <span style={{ fontSize: 12, fontWeight: 700 }}>Confirmação final</span>
              <div style={rowDivided}>
                <span style={rowLabel}>Para</span>
                <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <span style={{ fontSize: 11, fontWeight: 700 }}>Ana Souza</span>
                  <span style={{ fontSize: 10, color: "#5B6478" }}>Pix CPF · ***.456.789-**</span>
                </span>
              </div>
              <div style={rowDivided}>
                <span style={rowLabel}>Valor</span>
                <span className="tnum" style={{ fontSize: 13, fontWeight: 700 }}>R$ 120,00</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                <span style={rowLabel}>Saldo após o saque</span>
                <span className="tnum" style={{ fontSize: 11, fontWeight: 700 }}>180,00 Prizes</span>
              </div>
              <span style={{ display: "flex", gap: 6, alignItems: "flex-start", padding: 8, borderRadius: 10, background: "#F5F7FB", fontSize: 10, lineHeight: 1.4, color: "#475569" }}>
                <svg className="ic" width="12" height="12" viewBox="0 0 24 24" style={{ marginTop: 1 }}><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                O Pix é processado na hora, mas pode levar alguns minutos.
              </span>
              <span style={{ fontSize: 10.5, fontWeight: 700, color: "#0E1A33" }}>Código do autenticador</span>
              <div style={{ display: "flex", gap: 5 }}>
                {["4", "8", "2", "9", "1"].map((digit, i) => (
                  <span key={i} className="tnum" style={codeDigit}>{digit}</span>
                ))}
                <span style={{ flex: "1 1 0", height: 34, borderRadius: 8, border: "1.5px solid #93C5FD", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="caret" style={{ width: 1.5, height: 16, background: "#1D4ED8" }}></span>
                </span>
              </div>
              <span style={{ height: 38, borderRadius: 10, background: "#2563EB", color: "#FFFFFF", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>Confirmar e sacar</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#1D4ED8", textAlign: "center" }}>Alterar valor</span>
            </div>
          </div>
        </div>
      </div>

      <div className="toast-in toast-m" style={{ position: "absolute", zIndex: 3, left: "50%", top: 534, marginLeft: -136, width: 272, background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, boxShadow: "0 20px 50px rgba(14, 26, 51, 0.16)", padding: "12px 14px", display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ width: 40, height: 40, borderRadius: 999, background: "#ECFDF3", color: "#067647", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg className="ic" width="20" height="20" viewBox="0 0 24 24" style={{ strokeWidth: 2.4 }}><path d="M20 6L9 17l-5-5"></path></svg>
        </span>
        <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span style={{ fontSize: 14, fontWeight: 700 }}>Pix enviado</span>
          <span style={{ fontSize: 12, color: "#5B6478" }}>R$ 120,00 na conta da Ana</span>
        </span>
      </div>
    </div>
  );
}

export default function RecebeuHero() {
  return (
    <section aria-labelledby="hero-t" style={{ position: "relative", padding: "clamp(40px, 6vw, 80px) clamp(16px, 4vw, 40px) clamp(56px, 7vw, 104px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 56 }}>
        <div style={{ flex: "1 1 480px", minWidth: 0, display: "flex", flexDirection: "column", gap: 24 }}>
          <span className="rise" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 8, minHeight: 36, padding: "6px 14px", borderRadius: 999, background: "#EEF4FF", color: "#1D4ED8", fontSize: 14, fontWeight: 700 }}>
            <svg className="ic" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" style={{ strokeWidth: 2 }}><rect x="6" y="2" width="12" height="20" rx="2.5"></rect><path d="M11 18h2"></path></svg>
            Para quem recebe Prizes
          </span>
          <h1 id="hero-t" className="rise d1" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(42px, 5.4vw, 74px)", fontWeight: 700, lineHeight: 1.04, letterSpacing: "-0.025em", textWrap: "balance" }}>Você recebeu Prizes. Eles são seus.</h1>
          <p className="rise d2" style={{ fontSize: "clamp(17px, 1.5vw, 20px)", lineHeight: 1.6, color: "#475569", maxWidth: 540, textWrap: "pretty" }}>Cada Prize vale R$ 1,00. Você saca por Pix para a chave do seu CPF, sem tarifa, na hora que quiser.</p>
          <div className="rise d3 cta-row" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a className="btn-primary" href={LOGIN_URL} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 10, height: 54, padding: "0 26px", borderRadius: 14, background: "#2563EB", color: "#FFFFFF", fontSize: 16, fontWeight: 700, boxShadow: "0 12px 28px rgba(37, 99, 235, 0.28)" }}>
              Entrar
              <svg className="ic" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" style={{ strokeWidth: 2 }}><path d="M5 12h14"></path><path d="M13 6l6 6-6 6"></path></svg>
            </a>
            <a className="btn-ghost" href="#passo-a-passo" style={{ display: "inline-flex", alignItems: "center", height: 54, padding: "0 24px", borderRadius: 14, border: "1.5px solid #BFD4FE", color: "#1D4ED8", fontSize: 16, fontWeight: 700 }}>Ver o passo a passo</a>
          </div>
          <p className="rise d4" style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, lineHeight: 1.55, color: "#475569", maxWidth: 520 }}>
            <svg className="ic" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" style={{ color: "#1D4ED8", marginTop: 2 }}><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M22 6l-10 7L2 6"></path></svg>
            Ainda não tem acesso? Procure o convite da Prize no e-mail que a sua empresa cadastrou.
          </p>
        </div>

        <PhoneMockup />
      </div>
    </section>
  );
}
