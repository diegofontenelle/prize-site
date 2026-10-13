import { CONTACT, FONT_DISPLAY } from "@/lib/site";

export default function AjudaSaque() {
  return (
    <section aria-labelledby="ajuda-t" style={{ padding: "0 clamp(16px, 4vw, 40px) clamp(64px, 8vw, 112px)" }}>
      <div style={{ position: "relative", overflow: "hidden", maxWidth: 1200, margin: "0 auto", background: "#EEF4FF", borderRadius: 32, padding: "clamp(32px, 5vw, 56px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 32 }}>
        <div style={{ flex: "1 1 480px", minWidth: 0, display: "flex", flexDirection: "column", gap: 12 }}>
          <h2 id="ajuda-t" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.02em", textWrap: "balance" }}>Precisa de ajuda para sacar?</h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "#475569", maxWidth: 560 }}>Fale com a gente de segunda a sexta, das 8h às 18h, e aos sábados, das 8h às 12h.</p>
        </div>
        <div className="cta-row" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <a className="btn-primary" href={`mailto:${CONTACT.email}`} style={{ display: "inline-flex", alignItems: "center", gap: 10, height: 54, padding: "0 24px", borderRadius: 14, background: "#2563EB", color: "#FFFFFF", fontSize: 16, fontWeight: 700 }}>
            <svg className="ic" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M22 6l-10 7L2 6"></path></svg>
            {CONTACT.email}
          </a>
          <a className="btn-white" href={CONTACT.phoneHref} style={{ display: "inline-flex", alignItems: "center", gap: 10, height: 54, padding: "0 22px", borderRadius: 14, background: "#FFFFFF", color: "#1D4ED8", fontSize: 16, fontWeight: 700 }}>
            <svg className="ic" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"></path></svg>
            {CONTACT.phoneLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
