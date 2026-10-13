import Link from "next/link";
import { PrizeSymbol } from "@/components/site/Brand";
import { FONT_DISPLAY, LOGIN_URL, ROUTES } from "@/lib/site";

/** "Recebeu Prizes? Eles são seus." — para quem recebe, com o convite de exemplo. */
export default function RecebeuSection() {
  return (
    <section aria-labelledby="recebeu-t" style={{ padding: "clamp(64px, 8vw, 112px) clamp(16px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 56 }}>
        <div style={{ flex: "1 1 460px", minWidth: 0, display: "flex", flexDirection: "column", gap: 20 }}>
          <h2 id="recebeu-t" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 700, lineHeight: 1.04, letterSpacing: "-0.025em", textWrap: "balance" }}>
            Recebeu Prizes? Eles são seus.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "#475569", maxWidth: 520, textWrap: "pretty" }}>
            Cada Prize vale R$ 1,00. Crie o seu acesso pelo convite que chegou no seu e-mail e saque por Pix.
          </p>
          <p style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 16, lineHeight: 1.55, color: "#0E1A33", maxWidth: 520 }}>
            <svg className="ic" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" style={{ color: "#2563EB", marginTop: 1 }}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            A Prize nunca pede a sua senha nem o código do autenticador.
          </p>
          <div className="cta-row" style={{ display: "flex", flexWrap: "wrap", gap: 12, paddingTop: 4 }}>
            <Link
              className="pill pill-blue"
              href={ROUTES.recebeuPrizes}
              style={{ display: "inline-flex", alignItems: "center", height: 56, padding: "0 28px", borderRadius: 999, background: "#2563EB", color: "#FFFFFF", fontSize: 16, fontWeight: 800 }}
            >
              Ver como sacar
            </Link>
            <a
              className="pill pill-line"
              href={LOGIN_URL}
              target="_blank"
              rel="noopener"
              style={{ display: "inline-flex", alignItems: "center", height: 56, padding: "0 26px", borderRadius: 999, border: "2px solid #2563EB", color: "#1D4ED8", fontSize: 16, fontWeight: 700 }}
            >
              Entrar
            </a>
          </div>
        </div>

        <div aria-hidden="true" style={{ flex: "1 1 420px", minWidth: 0, display: "flex", justifyContent: "center", position: "relative", minHeight: 440 }}>
          <span style={{ position: "absolute", left: "50%", top: "50%", width: 380, height: 380, margin: "-190px 0 0 -190px", borderRadius: 999, background: "#EAF1FF" }} />
          <div
            className="float-a"
            style={{ position: "relative", alignSelf: "center", width: 300, background: "#FFFFFF", borderRadius: 28, boxShadow: "0 30px 70px rgba(29, 78, 216, 0.18)", overflow: "hidden" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 18px", borderBottom: "1px solid #EEF2F7" }}>
              <span style={{ width: 34, height: 34, borderRadius: 12, background: "#2563EB", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <PrizeSymbol style={{ width: 18, height: 18, display: "block" }} />
              </span>
              <span style={{ fontSize: 14, fontWeight: 800 }}>Convite da Prize</span>
            </div>
            <div style={{ padding: "20px 18px 22px", display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 700, lineHeight: 1.2 }}>Você recebeu 300 Prizes</span>
              <span style={{ fontSize: 14, lineHeight: 1.5, color: "#475569" }}>A Distribuidora Aurora premiou você em Entregas no prazo — setembro.</span>
              <span style={{ height: 46, borderRadius: 999, background: "#2563EB", color: "#FFFFFF", fontSize: 15, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>
                Criar meu acesso
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
