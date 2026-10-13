import Link from "next/link";
import { FONT_DISPLAY, ROUTES } from "@/lib/site";
import InfoCard from "./InfoCard";

export default function SegurancaErrado() {
  return (
    <section aria-labelledby="errado-t" style={{ padding: "clamp(64px, 8vw, 112px) clamp(16px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 }}>
        <h2
          id="errado-t"
          style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(30px, 3.6vw, 48px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.025em", textWrap: "balance" }}
        >
          Se algo der errado
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(380px, 100%), 1fr))", gap: 20 }}>
          <InfoCard
            title="Esqueci a senha"
            icon={
              <>
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </>
            }
          >
            Na tela de entrada, use Esqueci minha senha. O link que chega no seu e-mail vale por 30 minutos.
          </InfoCard>
          <InfoCard
            title="Perdi o celular com o autenticador"
            icon={
              <>
                <rect x="6" y="2" width="12" height="20" rx="2.5" />
                <path d="M11 18h2" />
              </>
            }
          >
            Use a sua senha e um dos códigos de recuperação que você guardou ao criar o acesso, na opção Recuperar autenticador. Sem os códigos, procure a
            administração da empresa que premiou você.
          </InfoCard>
        </div>
        <Link
          className="more"
          href={ROUTES.duvidas}
          style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 10, minHeight: 44, fontSize: 16, fontWeight: 800, color: "#1D4ED8" }}
        >
          Ver todas as dúvidas
          <svg className="ic" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" style={{ strokeWidth: 2.2 }}>
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
