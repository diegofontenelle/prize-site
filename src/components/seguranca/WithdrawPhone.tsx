import type { CSSProperties } from "react";
import { PrizeWordmark } from "@/components/site/Brand";
import { FONT_DISPLAY } from "@/lib/site";

const rowStyle: CSSProperties = { display: "flex", justifyContent: "space-between", gap: 8, paddingBottom: 9, borderBottom: "1px solid #EEF2F7" };
const labelStyle: CSSProperties = { fontSize: 12, color: "#5B6478" };
const stepStyle: CSSProperties = { flex: "1 1 0", height: 4, borderRadius: 999, background: "#1D4ED8" };

/** Celular decorativo com a confirmação final do saque via Pix. */
export default function WithdrawPhone() {
  return (
    <div className="viz" aria-hidden="true" style={{ position: "relative", flex: "1 1 360px", minWidth: 0 }}>
      <div
        className="viz-panel viz-tall"
        style={{ position: "relative", height: 640, borderRadius: 32, background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.12)", overflow: "hidden" }}
      >
        <div
          className="viz-phone"
          style={{ position: "absolute", left: "50%", marginLeft: -148, top: 48, width: 296, height: 620, borderRadius: 46, background: "#0E1A33", padding: 10, boxShadow: "0 40px 80px rgba(14, 26, 51, 0.24)" }}
        >
          <div style={{ width: "100%", height: "100%", borderRadius: 36, background: "#F5F7FB", color: "#0E1A33", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div
              style={{ height: 58, flexShrink: 0, padding: "0 18px", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "space-between", color: "#3B82F6" }}
            >
              <PrizeWordmark style={{ height: 20, width: 78, display: "block" }} />
              <span style={{ width: 34, height: 34, borderRadius: 999, background: "#EEF4FF", color: "#1D4ED8", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>
                AS
              </span>
            </div>
            <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ fontFamily: FONT_DISPLAY, fontSize: 20, fontWeight: 700 }}>Sacar via Pix</span>
              <div style={{ display: "flex", gap: 4 }} aria-hidden="true">
                <span style={stepStyle} />
                <span style={stepStyle} />
                <span style={stepStyle} />
                <span style={{ ...stepStyle, background: "#DBEAFE" }} />
              </div>
              <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 18, padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                <span style={{ fontSize: 13.5, fontWeight: 700 }}>Confirmação final</span>
                <div style={rowStyle}>
                  <span style={labelStyle}>Para</span>
                  <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                    <span style={{ fontSize: 12.5, fontWeight: 700 }}>Ana Souza</span>
                    <span style={{ fontSize: 11, color: "#5B6478" }}>Pix CPF · ***.456.789-**</span>
                  </span>
                </div>
                <div style={rowStyle}>
                  <span style={labelStyle}>Valor</span>
                  <span className="tnum" style={{ fontSize: 15, fontWeight: 700 }}>
                    R$ 120,00
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                  <span style={labelStyle}>Saldo após o saque</span>
                  <span className="tnum" style={{ fontSize: 12.5, fontWeight: 700 }}>
                    180,00 Prizes
                  </span>
                </div>
                <span style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "9px 10px", borderRadius: 12, background: "#EEF4FF", fontSize: 11, lineHeight: 1.45, color: "#1E3A8A" }}>
                  <svg className="ic" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" style={{ strokeWidth: 2, color: "#1D4ED8", marginTop: 1 }}>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  O processamento é imediato, mas pode levar alguns minutos.
                </span>
                <span style={{ fontSize: 12.5, fontWeight: 700 }}>Código do autenticador</span>
                <span
                  className="tnum"
                  style={{ height: 48, borderRadius: 12, border: "1.5px solid #2563EB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 700, letterSpacing: "0.32em", paddingLeft: "0.32em" }}
                >
                  48291
                  <span className="caret" style={{ width: 2, height: 22, marginLeft: "-0.2em", background: "#2563EB" }} />
                </span>
                <span style={{ fontSize: 11, color: "#5B6478" }}>Confira o destino e o valor antes de confirmar.</span>
                <span style={{ display: "flex", gap: 8 }}>
                  <span style={{ height: 42, padding: "0 12px", borderRadius: 12, border: "1px solid #A0AABF", fontSize: 12.5, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    Alterar valor
                  </span>
                  <span style={{ flex: "1 1 auto", height: 42, borderRadius: 12, background: "#2563EB", color: "#FFFFFF", fontSize: 12.5, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    Confirmar e sacar
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
