import { PrizeSymbol } from "@/components/site/Brand";
import { APP_DOMAIN, CONTACT, FONT_DISPLAY } from "@/lib/site";
import InfoCard from "./InfoCard";
import WithdrawPhone from "./WithdrawPhone";

export default function SegurancaGolpe() {
  return (
    <section className="on-navy" aria-labelledby="golpe-t" style={{ padding: "0 clamp(16px, 4vw, 40px)" }}>
      <div
        style={{ position: "relative", overflow: "hidden", maxWidth: 1200, margin: "0 auto", background: "#0E1A33", color: "#FFFFFF", borderRadius: 40, padding: "clamp(32px, 6vw, 72px) clamp(20px, 5vw, 64px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 48 }}
      >
        <PrizeSymbol className="hide-sm" style={{ position: "absolute", left: -140, bottom: -160, width: 480, height: 480, color: "#FFFFFF", opacity: 0.05 }} />
        <div style={{ position: "relative", flex: "1 1 520px", minWidth: 0, display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <h2
              id="golpe-t"
              style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(30px, 3.6vw, 48px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.025em", textWrap: "balance" }}
            >
              Ninguém da Prize pede a sua senha. Ninguém.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "#CBD5E1", textWrap: "pretty" }}>
              Golpistas usam o nome de empresas conhecidas para pedir senhas e códigos. Quatro cuidados resolvem quase tudo.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: 16 }}>
            <InfoCard
              tone="navy"
              title="Senha e código são só seus"
              icon={
                <>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </>
              }
            >
              A Prize nunca pede a sua senha, o código do autenticador nem os códigos de recuperação. Nem por telefone, WhatsApp, SMS ou e-mail.
            </InfoCard>
            <InfoCard
              tone="navy"
              title="Confira o endereço"
              icon={
                <>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </>
              }
            >
              Antes de digitar a senha, veja se você está em{" "}
              <strong>{APP_DOMAIN}</strong>. Na dúvida, entre pelo
              botão Entrar deste site.
            </InfoCard>
            <InfoCard
              tone="navy"
              title="Pix só para o seu CPF"
              icon={
                <>
                  <circle cx="7.5" cy="15.5" r="4.5" />
                  <path d="M10.7 12.3L21 2" />
                  <path d="M16 7l3 3" />
                  <path d="M19 4l2 2" />
                </>
              }
            >
              O saque por Pix só vai para a chave do seu CPF. Se alguém pedir para você sacar para outra chave, desconfie.
            </InfoCard>
            <InfoCard
              tone="navy"
              title="Desconfiou? Pergunte antes"
              icon={
                <>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M12 8v3" />
                  <path d="M12 14h.01" />
                </>
              }
            >
              Recebeu uma mensagem estranha em nome da Prize? Antes de clicar ou responder, escreva para {CONTACT.email}.
            </InfoCard>
          </div>
        </div>
        <WithdrawPhone />
      </div>
    </section>
  );
}
