import Image from "next/image";
import Link from "next/link";
import { PrizeSymbol } from "@/components/site/Brand";
import { FONT_DISPLAY, ROUTES } from "@/lib/site";
import { pillGhost, pillWhite } from "./styles";

/** Abertura azul: título, chamadas e foto com os balões "Você recebeu" e "Pix enviado". */
export default function HomeHero() {
  return (
    <section
      className="on-blue"
      aria-labelledby="hero-t"
      style={{ position: "relative", overflow: "hidden", background: "#2563EB", color: "#FFFFFF", borderRadius: "0 0 48px 48px", padding: "clamp(40px, 6vw, 72px) clamp(16px, 4vw, 40px) clamp(64px, 8vw, 104px)" }}
    >
      <span aria-hidden="true" className="drift" style={{ position: "absolute", left: -120, top: -160, width: 520, height: 520, borderRadius: 999, background: "#3B82F6", opacity: 0.5 }} />
      <PrizeSymbol
        className="hero-mark mark-spin"
        style={{ position: "absolute", right: -120, top: "50%", width: 900, height: 900, marginTop: -430, color: "#FFFFFF", opacity: 0.14, pointerEvents: "none" }}
      />

      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 56 }}>
        <div style={{ flex: "1 1 520px", minWidth: 0, display: "flex", flexDirection: "column", gap: 24 }}>
          <h1
            id="hero-t"
            className="rise"
            style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(44px, 5.2vw, 76px)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.03em", textWrap: "balance" }}
          >
            Premie quem faz acontecer.
          </h1>
          <p className="rise d1" style={{ fontSize: "clamp(17px, 1.5vw, 20px)", lineHeight: 1.6, color: "#E6EEFF", maxWidth: 520, textWrap: "pretty" }}>
            Você adiciona Prizes por Pix, premia quem superou a meta e cada pessoa saca na própria conta. Sem transferir um por um e sem pedir dados bancários.
          </p>
          <div className="rise d2 cta-row" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14 }}>
            <Link className="pill pill-white" href={ROUTES.faleComAGente} style={pillWhite}>
              Fale com a gente
            </Link>
            <Link className="pill pill-ghost" href={ROUTES.recebeuPrizes} style={{ ...pillGhost, padding: "0 26px" }}>
              Recebeu Prizes?
            </Link>
          </div>
        </div>

        <div className="rise d1 hero-visual" aria-hidden="true" style={{ flex: "1 1 480px", minWidth: 0, position: "relative" }}>
          <div className="hero-photo" style={{ position: "relative", height: 540, borderRadius: 36, background: "#DCE8FF", overflow: "hidden" }}>
            <Image
              src="/img/site/hero.jpg"
              alt=""
              fill
              preload
              fetchPriority="high"
              sizes="(max-width: 1135px) 100vw, 560px"
              style={{ objectFit: "cover", objectPosition: "0% 10%", display: "block" }}
            />
          </div>

          <div className="pop p1 bub-notif" style={{ position: "absolute", left: -48, top: 28, zIndex: 2 }}>
            <div
              className="float-a"
              style={{ width: 288, background: "#FFFFFF", color: "#0E1A33", borderRadius: 22, boxShadow: "0 22px 50px rgba(14, 26, 51, 0.20)", padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}
            >
              <span style={{ width: 44, height: 44, borderRadius: 14, background: "#2563EB", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <PrizeSymbol style={{ width: 24, height: 24, display: "block" }} />
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#5B6478" }}>Prize · agora</span>
                <span style={{ fontSize: 15, fontWeight: 800, lineHeight: 1.3 }}>Você recebeu 300 Prizes</span>
                <span style={{ fontSize: 12.5, color: "#475569" }}>Entregas no prazo — setembro</span>
              </span>
            </div>
          </div>

          <div className="pop p2 bub-pix" style={{ position: "absolute", right: -24, bottom: 56, zIndex: 2 }}>
            <div
              className="float-b"
              style={{ background: "#FFFFFF", color: "#0E1A33", borderRadius: 22, boxShadow: "0 22px 50px rgba(14, 26, 51, 0.20)", padding: "14px 18px 14px 14px", display: "flex", alignItems: "center", gap: 12 }}
            >
              <span style={{ width: 44, height: 44, borderRadius: 999, background: "#D1FADF", color: "#067647", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg className="ic" width="22" height="22" viewBox="0 0 24 24" style={{ strokeWidth: 2.6 }}>
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <span style={{ fontSize: 15, fontWeight: 800 }}>Pix enviado</span>
                <span className="tnum" style={{ fontSize: 13, color: "#475569" }}>
                  R$ 300,00 na conta da Ana
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
