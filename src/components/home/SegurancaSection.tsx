import type { ReactNode } from "react";
import { ROUTES } from "@/lib/site";
import ExtratoIllustration from "./ExtratoIllustration";
import MoreLink from "./MoreLink";
import { titleMd } from "./styles";

type Item = { title: string; text: string; icon: ReactNode };

/** "Menos trabalho para o RH e para o financeiro." */
const BENEFITS: Item[] = [
  {
    title: "Sem pedir dados bancários",
    text: "Você não precisa de agência, conta ou chave Pix de ninguém.",
    icon: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V10M9.5 21V10M14.5 21V10M19 21V10" />
        <path d="M2 10l10-7 10 7z" />
      </>
    ),
  },
  {
    title: "O time todo de uma vez",
    text: "Uma premiação só, para uma pessoa ou para centenas.",
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
        <path d="M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
  },
  {
    title: "Cada premiação no extrato",
    text: "Quem recebeu, quanto e quando. Exporta em CSV para o contador.",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8M16 17H8M10 9H8" />
      </>
    ),
  },
];

/** "Seguro para quem paga e para quem recebe." */
const SAFEGUARDS: Item[] = [
  {
    title: "Duas etapas",
    text: "Senha e código do aplicativo autenticador para entrar e para cada saque.",
    icon: (
      <>
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </>
    ),
  },
  {
    title: "Pix só para o próprio CPF",
    text: "O saque por Pix vai só para a chave do CPF de quem recebeu.",
    icon: (
      <>
        <circle cx="7.5" cy="15.5" r="4.5" />
        <path d="M10.7 12.3L21 2" />
        <path d="M16 7l3 3" />
        <path d="M19 4l2 2" />
      </>
    ),
  },
  {
    title: "Tudo registrado",
    text: "Recargas, premiações e saques com data e hora, para a empresa e para quem recebe.",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8M16 17H8" />
      </>
    ),
  },
  {
    title: "Acesso por convite",
    text: "O acesso começa por um convite no e-mail da pessoa, para a empresa e para quem recebe.",
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 6l-10 7L2 6" />
      </>
    ),
  },
];

/** Benefícios para RH/financeiro com a ilustração do extrato, e os cards de segurança (âncora #seguranca). */
export default function SegurancaSection() {
  return (
    <section id="seguranca" aria-labelledby="dor-t" style={{ padding: "0 clamp(16px, 4vw, 40px) clamp(64px, 8vw, 112px)", scrollMarginTop: 84 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 64 }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px 56px" }}>
          <div style={{ flex: "1 1 420px", minWidth: 0, display: "flex", flexDirection: "column", gap: 28 }}>
            <h2 id="dor-t" style={titleMd}>
              Menos trabalho para o RH e para o financeiro.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {BENEFITS.map((item) => (
                <div key={item.title} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: 24, borderRadius: 28, background: "#F5F7FB" }}>
                  <span style={{ width: 52, height: 52, borderRadius: 18, background: "#2563EB", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg className="ic" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                      {item.icon}
                    </svg>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800 }}>{item.title}</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.55, color: "#475569" }}>{item.text}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: "1 1 560px", minWidth: 0, background: "#F5F8FF", borderRadius: 36, padding: "clamp(16px, 3vw, 36px)" }}>
            <ExtratoIllustration />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <h2 style={titleMd}>Seguro para quem paga e para quem recebe.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", gap: 20 }}>
            {SAFEGUARDS.map((item) => (
              <div key={item.title} style={{ display: "flex", flexDirection: "column", gap: 12, padding: 24, borderRadius: 28, border: "1.5px solid #E2E8F0" }}>
                <span style={{ width: 48, height: 48, borderRadius: 999, background: "#EEF4FF", color: "#1D4ED8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg className="ic" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                    {item.icon}
                  </svg>
                </span>
                <h3 style={{ fontSize: 18, fontWeight: 800 }}>{item.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "#475569" }}>{item.text}</p>
              </div>
            ))}
          </div>
          <MoreLink href={ROUTES.seguranca}>Ver segurança</MoreLink>
        </div>
      </div>
    </section>
  );
}
