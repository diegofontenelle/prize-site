import { PrizeSymbol } from "@/components/site/Brand";
import { FONT_DISPLAY } from "@/lib/site";

export default function BaseLegalHero() {
  return (
    <section className="on-blue" aria-labelledby="page-t" style={{ position: "relative", overflow: "hidden", background: "#2563EB", color: "#FFFFFF", borderRadius: "0 0 48px 48px", padding: "clamp(48px, 6vw, 88px) clamp(16px, 4vw, 40px) clamp(56px, 7vw, 104px)" }}>
      <span aria-hidden="true" className="drift" style={{ position: "absolute", left: -140, top: -220, width: 480, height: 480, borderRadius: 999, background: "#3B82F6", opacity: 0.5 }} />
      <PrizeSymbol className="page-mark" style={{ position: "absolute", right: -60, top: "50%", width: 520, height: 520, marginTop: -260, color: "#FFFFFF", opacity: 0.12, pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>
        <h1 id="page-t" className="rise" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(40px, 4.8vw, 68px)", fontWeight: 700, lineHeight: 1.04, letterSpacing: "-0.03em", maxWidth: 860, textWrap: "balance" }}>
          Prêmio não é salário, desde que seja prêmio de verdade.
        </h1>
        <p className="rise d1" style={{ fontSize: "clamp(17px, 1.5vw, 20px)", lineHeight: 1.6, color: "#E6EEFF", maxWidth: 640, textWrap: "pretty" }}>
          A CLT tira o prêmio da base de INSS e FGTS. Para valer, ele precisa cumprir três requisitos. E quem recebe paga Imposto de Renda.
        </p>
      </div>
    </section>
  );
}
