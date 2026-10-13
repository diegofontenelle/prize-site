import type { CSSProperties, ReactNode } from "react";
import { PrizeSymbol } from "@/components/site/Brand";
import { APP_DOMAIN, CONTACT, FONT_DISPLAY } from "@/lib/site";

type Tip = { title: string; text: ReactNode; icon: ReactNode };

const TIPS: Tip[] = [
  {
    title: "Senha e código são só seus",
    text: "A Prize nunca pede a sua senha, o código do autenticador nem os códigos de recuperação. Nem por telefone, WhatsApp, SMS ou e-mail.",
    icon: (
      <svg className="ic" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>
    ),
  },
  {
    title: "Confira o endereço",
    text: (
      <>
        Antes de digitar a senha, veja se você está em <strong>{APP_DOMAIN}</strong>. Na dúvida, entre pelo botão Entrar deste site.
      </>
    ),
    icon: (
      <svg className="ic" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20z"></path></svg>
    ),
  },
  {
    title: "Pix só para o seu CPF",
    text: "O saque por Pix só vai para a chave do seu CPF. Se alguém pedir para você sacar para outra chave, desconfie.",
    icon: (
      <svg className="ic" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><circle cx="7.5" cy="15.5" r="4.5"></circle><path d="M10.7 12.3L21 2"></path><path d="M16 7l3 3"></path><path d="M19 4l2 2"></path></svg>
    ),
  },
  {
    title: "Desconfiou? Pergunte antes",
    text: `Recebeu uma mensagem estranha em nome da Prize? Antes de clicar ou responder, escreva para ${CONTACT.email}.`,
    icon: (
      <svg className="ic" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    ),
  },
];

const cardStyle: CSSProperties = { background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: 24, padding: "clamp(22px, 2.6vw, 28px)", display: "flex", flexDirection: "column", gap: 12 };

export default function SuaSeguranca() {
  return (
    <section aria-labelledby="golpe-t" style={{ position: "relative", overflow: "hidden", background: "#0E1A33", color: "#FFFFFF", padding: "clamp(72px, 9vw, 128px) clamp(16px, 4vw, 40px)" }}>
      <PrizeSymbol className="hide-sm spin-slow" style={{ position: "absolute", right: -160, top: -140, width: 620, height: 620, color: "#FFFFFF", opacity: 0.05 }} />
      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 48 }}>
        <div style={{ maxWidth: 820, display: "flex", flexDirection: "column", gap: 18 }}>
          <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#93C5FD" }}>Sua segurança</span>
          <h2 id="golpe-t" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(32px, 3.8vw, 52px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.02em", textWrap: "balance" }}>Ninguém da Prize pede a sua senha. Ninguém.</h2>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "#CBD5E1", maxWidth: 700, textWrap: "pretty" }}>Golpistas usam o nome de empresas conhecidas para pedir senhas e códigos. Quatro cuidados resolvem quase tudo.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", gap: 24 }}>
          {TIPS.map((tip) => (
            <article key={tip.title} style={cardStyle}>
              <span style={{ width: 44, height: 44, borderRadius: 999, background: "rgba(147, 197, 253, 0.14)", color: "#93C5FD", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {tip.icon}
              </span>
              <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.3 }}>{tip.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#CBD5E1" }}>{tip.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
