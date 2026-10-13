import Link from "next/link";
import type { CSSProperties } from "react";
import { CONTACT, FONT_DISPLAY, ROUTES } from "@/lib/site";

const STEPS = [
  "A gente responde em até 24 horas.",
  "Numa conversa, entendemos quantas pessoas, quanto e com que frequência a sua empresa premia.",
  "Você recebe a proposta com a taxa da sua faixa.",
  "Com o contrato assinado, a Prize cria o acesso da sua empresa.",
];

const stepNumberStyle: CSSProperties = {
  width: 32,
  height: 32,
  borderRadius: 999,
  background: "#1D4ED8",
  color: "#FFFFFF",
  fontSize: 14,
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const stepTextStyle: CSSProperties = { fontSize: 16, lineHeight: 1.55, color: "#0E1A33", paddingTop: 4 };

const contactLinkStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  minHeight: 44,
  fontSize: 16,
  fontWeight: 700,
  color: "#1D4ED8",
};

/** Coluna da esquerda: título, próximos passos, contatos e atalho para quem recebe. */
export default function ContactIntro() {
  return (
    <div style={{ flex: "1 1 400px", minWidth: 0, display: "flex", flexDirection: "column", gap: 28 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <span
          className="rise"
          style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 8, minHeight: 36, padding: "6px 14px", borderRadius: 999, background: "#FFFFFF", color: "#1D4ED8", fontSize: 14, fontWeight: 700 }}
        >
          <svg className="ic" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" style={{ strokeWidth: 2 }}>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Para empresas
        </span>
        <h1
          id="contato-t"
          className="rise d1"
          style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(40px, 4.8vw, 64px)", fontWeight: 700, lineHeight: 1.04, letterSpacing: "-0.025em", textWrap: "balance" }}
        >
          Fale com a gente.
        </h1>
        <p className="rise d2" style={{ fontSize: "clamp(17px, 1.5vw, 19px)", lineHeight: 1.6, color: "#475569", maxWidth: 480, textWrap: "pretty" }}>
          Conte como a sua empresa premia hoje. A gente volta com uma proposta para o seu volume.
        </p>
      </div>

      <div className="rise d3" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1D4ED8" }}>O que acontece depois</h2>
        <ol style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
          {STEPS.map((text, i) => (
            <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={stepNumberStyle}>{i + 1}</span>
              <span style={stepTextStyle}>{text}</span>
            </li>
          ))}
        </ol>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 4, padding: "20px 22px", borderRadius: 20, background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
        <a href={`mailto:${CONTACT.email}`} style={contactLinkStyle}>
          <svg className="ic" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 6l-10 7L2 6" />
          </svg>
          {CONTACT.email}
        </a>
        <a href={CONTACT.phoneHref} style={contactLinkStyle}>
          <svg className="ic" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
          </svg>
          {CONTACT.phoneLabel}
        </a>
        <span style={{ display: "flex", alignItems: "flex-start", gap: 12, paddingTop: 8, fontSize: 15, lineHeight: 1.55, color: "#475569" }}>
          <svg className="ic" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" style={{ color: "#5B6478", marginTop: 1 }}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          Seg. a sex., das 8h às 18h. Sáb., das 8h às 12h.
        </span>
      </div>

      <Link href={ROUTES.recebeuPrizes} style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 20px", borderRadius: 20, background: "#EEF4FF", color: "#0E1A33" }}>
        <span style={{ width: 44, height: 44, borderRadius: 999, background: "#FFFFFF", color: "#1D4ED8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg className="ic" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="6" y="2" width="12" height="20" rx="2.5" />
            <path d="M11 18h2" />
          </svg>
        </span>
        <span style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
          <span style={{ fontSize: 16, fontWeight: 700 }}>Recebeu Prizes e precisa de ajuda?</span>
          <span style={{ fontSize: 14, color: "#475569" }}>Veja o passo a passo de quem recebe.</span>
        </span>
        <svg className="ic" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" style={{ marginLeft: "auto", color: "#1D4ED8", strokeWidth: 2 }}>
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      </Link>
    </div>
  );
}
