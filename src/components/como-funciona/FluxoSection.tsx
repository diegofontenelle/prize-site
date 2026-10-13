import FluxoIllustration from "./FluxoIllustration";
import { sectionLeadStyle, sectionTitleStyle } from "./parts";

export default function FluxoSection() {
  return (
    <section aria-labelledby="fluxo-t" style={{ padding: "clamp(64px, 8vw, 112px) clamp(16px, 4vw, 40px) 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px 56px" }}>
        <div style={{ flex: "1 1 340px", minWidth: 0, display: "flex", flexDirection: "column", gap: 12 }}>
          <h2 id="fluxo-t" style={sectionTitleStyle}>
            Do saldo ao prêmio de cada pessoa
          </h2>
          <p style={sectionLeadStyle}>Uma premiação só, para uma pessoa ou para centenas. Cada uma recebe a sua parte, e o total sai do saldo da empresa.</p>
        </div>
        {/* data-play: a animação só começa quando a ilustração aparece na tela */}
        <div data-play="" style={{ flex: "2 1 560px", minWidth: 0, background: "#F5F8FF", borderRadius: 36, padding: "clamp(16px, 3vw, 36px)" }}>
          <FluxoIllustration />
        </div>
      </div>
    </section>
  );
}
