import { FONT_DISPLAY } from "@/lib/site";
import InfoCard from "./InfoCard";
import ProtectionIllustration from "./ProtectionIllustration";

export default function SegurancaProtege() {
  return (
    <section aria-labelledby="protege-t" style={{ padding: "clamp(64px, 8vw, 112px) clamp(16px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 56 }}>
        <div style={{ flex: "1 1 520px", minWidth: 0, display: "flex", flexDirection: "column", gap: 28 }}>
          <h2
            id="protege-t"
            style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(30px, 3.6vw, 48px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.025em", textWrap: "balance" }}
          >
            Como a Prize protege o dinheiro
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 20 }}>
            <InfoCard
              title="Duas etapas"
              icon={
                <>
                  <rect x="4" y="11" width="16" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </>
              }
            >
              Além da senha, entrar pede o código de um aplicativo autenticador, para a empresa e para quem recebe. Cada saque também.
            </InfoCard>
            <InfoCard
              title="Pix só para o próprio CPF"
              icon={
                <>
                  <circle cx="7.5" cy="15.5" r="4.5" />
                  <path d="M10.7 12.3L21 2" />
                  <path d="M16 7l3 3" />
                  <path d="M19 4l2 2" />
                </>
              }
            >
              O saque por Pix vai só para a chave do CPF de quem recebeu. O dinheiro cai numa conta no nome da pessoa.
            </InfoCard>
            <InfoCard
              title="Tudo registrado"
              icon={
                <>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M16 13H8M16 17H8" />
                </>
              }
            >
              Recargas, premiações e saques ficam no extrato, com data e hora, para a empresa e para quem recebe.
            </InfoCard>
            <InfoCard
              title="Acesso por convite"
              icon={
                <>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6l-10 7L2 6" />
                </>
              }
            >
              O acesso começa por um convite enviado ao e-mail da pessoa, para a empresa e para quem recebe Prizes. No primeiro acesso, ela cria a senha e o autenticador.
            </InfoCard>
          </div>
        </div>
        <div style={{ flex: "1 1 520px", minWidth: 0, background: "#F5F8FF", borderRadius: 36, padding: "clamp(16px, 3vw, 36px)" }}>
          <ProtectionIllustration />
        </div>
      </div>
    </section>
  );
}
