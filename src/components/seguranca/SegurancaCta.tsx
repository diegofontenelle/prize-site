import Link from "next/link";
import { CONTACT, FONT_DISPLAY, ROUTES } from "@/lib/site";

export default function SegurancaCta() {
  return (
    <section className="on-blue" aria-labelledby="cta-t" style={{ padding: "0 clamp(16px, 4vw, 40px) clamp(64px, 8vw, 112px)" }}>
      <div
        style={{ position: "relative", overflow: "hidden", maxWidth: 1200, margin: "0 auto", background: "#2563EB", color: "#FFFFFF", borderRadius: 40, padding: "clamp(40px, 6vw, 80px) clamp(24px, 6vw, 72px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 32 }}
      >
        <span aria-hidden="true" className="drift" style={{ position: "absolute", left: -100, bottom: -200, width: 420, height: 420, borderRadius: 999, background: "#3B82F6", opacity: 0.55 }} />
        <span aria-hidden="true" className="drift-b" style={{ position: "absolute", right: -60, top: -160, width: 340, height: 340, borderRadius: 999, background: "#1D4ED8", opacity: 0.65 }} />
        <div style={{ position: "relative", flex: "1 1 520px", minWidth: 0, display: "flex", flexDirection: "column", gap: 14 }}>
          <h2
            id="cta-t"
            style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(30px, 3.8vw, 52px)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.025em", textWrap: "balance" }}
          >
            Vamos premiar quem faz acontecer na sua empresa?
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#E6EEFF", maxWidth: 560 }}>
            Conte como a sua empresa premia hoje. A gente volta com uma proposta para o seu volume.
          </p>
        </div>
        <div className="cta-row" style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 12 }}>
          <Link
            className="pill pill-white"
            href={ROUTES.faleComAGente}
            style={{ display: "inline-flex", alignItems: "center", height: 56, padding: "0 28px", borderRadius: 999, background: "#FFFFFF", color: "#1D4ED8", fontSize: 16, fontWeight: 800, boxShadow: "0 14px 30px rgba(14, 26, 51, 0.20)" }}
          >
            Fale com a gente
          </Link>
          <a
            className="pill pill-ghost"
            href={`mailto:${CONTACT.email}`}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, height: 56, padding: "0 24px", borderRadius: 999, border: "2px solid rgba(255, 255, 255, 0.75)", color: "#FFFFFF", fontSize: 16, fontWeight: 700 }}
          >
            <svg className="ic" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  );
}
