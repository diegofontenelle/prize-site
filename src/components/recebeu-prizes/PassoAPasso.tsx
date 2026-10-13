import type { ReactNode } from "react";
import { FONT_DISPLAY } from "@/lib/site";

type Step = { title: string; text: string; icon: ReactNode };

const STEPS: Step[] = [
  {
    title: "Abra o convite",
    text: "Ele chega no e-mail que a sua empresa cadastrou. Se não achar, procure também no spam.",
    icon: (
      <svg className="ic" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M22 6l-10 7L2 6"></path></svg>
    ),
  },
  {
    title: "Crie o seu acesso",
    text: "Defina uma senha e ative a verificação em duas etapas num aplicativo autenticador, como o Google Authenticator ou o Microsoft Authenticator.",
    icon: (
      <svg className="ic" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>
    ),
  },
  {
    title: "Saque por Pix",
    text: "Informe a chave Pix do seu CPF e o valor. Confirme com o código do autenticador.",
    icon: (
      <svg className="ic" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
    ),
  },
  {
    title: "Acompanhe no extrato",
    text: "Tudo o que você recebe e saca fica registrado, com data e hora.",
    icon: (
      <svg className="ic" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M16 13H8M16 17H8M10 9H8"></path></svg>
    ),
  },
];

export default function PassoAPasso() {
  return (
    <section id="passo-a-passo" aria-labelledby="passos-t" style={{ background: "#F5F7FB", padding: "clamp(64px, 8vw, 112px) clamp(16px, 4vw, 40px)", scrollMarginTop: 80 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 48 }}>
        <div style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1D4ED8" }}>Passo a passo</span>
          <h2 id="passos-t" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(32px, 3.8vw, 52px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.02em", textWrap: "balance" }}>Do convite ao Pix na sua conta.</h2>
        </div>
        <ol style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", gap: 24 }}>
          {STEPS.map((step, i) => (
            <li key={step.title} className="lift" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 24, padding: "clamp(22px, 2.6vw, 28px)", display: "flex", flexDirection: "column", gap: 14 }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: FONT_DISPLAY, fontSize: 40, fontWeight: 700, lineHeight: 1, color: "#93C5FD" }}>{i + 1}</span>
                <span style={{ width: 48, height: 48, borderRadius: 999, background: "#EEF4FF", color: "#1D4ED8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {step.icon}
                </span>
              </span>
              <h3 style={{ fontSize: 19, fontWeight: 700, lineHeight: 1.3 }}>{step.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#475569" }}>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
