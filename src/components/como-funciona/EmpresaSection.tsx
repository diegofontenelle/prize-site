import { FONT_DISPLAY } from "@/lib/site";
import { GiftPaths, SuccessChip, sectionLeadStyle, sectionTitleStyle, StepList } from "./parts";

const STEPS = [
  { title: "Adicione Prizes", text: "Recarregue o saldo por Pix, direto no painel da empresa." },
  { title: "Premie", text: "Escolha quem recebe e quanto, dê um nome à premiação e envie. Uma pessoa ou o time todo, numa premiação só." },
  { title: "Acompanhe", text: "Recargas, premiações e saques ficam no extrato da empresa, com data e hora." },
] as const;

const RECIPIENTS = [
  { initials: "AS", name: "Ana Souza", email: "ana.souza@aurora.com.br", amount: "300" },
  { initials: "BL", name: "Bruno Lima", email: "bruno.lima@aurora.com.br", amount: "300" },
  { initials: "CM", name: "Carla Mendes", email: "carla.mendes@aurora.com.br", amount: "250" },
] as const;

/** Mockup da tela "Premiar" do painel da empresa (decorativo). */
function PremiarCard() {
  return (
    <div
      className="viz-card"
      style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 372, background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 22, boxShadow: "0 30px 70px rgba(14, 26, 51, 0.12)", padding: 24, display: "flex", flexDirection: "column", gap: 16 }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ width: 40, height: 40, borderRadius: 12, background: "#EEF4FF", color: "#1D4ED8", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg className="ic" width={20} height={20} viewBox="0 0 24 24" aria-hidden="true">
            <GiftPaths />
          </svg>
        </span>
        <span style={{ fontFamily: FONT_DISPLAY, fontSize: 20, fontWeight: 700 }}>Premiar</span>
        <span style={{ marginLeft: "auto", height: 28, padding: "0 12px", borderRadius: 999, background: "#EEF4FF", color: "#1D4ED8", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center" }}>Revisão</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#5B6478" }}>Nome desta premiação</span>
        <span style={{ height: 44, border: "1px solid #E2E8F0", borderRadius: 12, padding: "0 14px", display: "flex", alignItems: "center", fontSize: 15, fontWeight: 600 }}>Entregas no prazo — setembro</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#5B6478", paddingBottom: 4 }}>Quem recebe · 3 pessoas</span>
        {RECIPIENTS.map((person) => (
          <div key={person.initials} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid #EEF2F7" }}>
            <span style={{ width: 36, height: 36, borderRadius: 999, background: "#EEF4FF", color: "#1D4ED8", fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{person.initials}</span>
            <span style={{ minWidth: 0, flex: "1 1 auto", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 14, fontWeight: 700 }}>{person.name}</span>
              <span style={{ fontSize: 12, color: "#5B6478", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{person.email}</span>
            </span>
            <span className="tnum" style={{ fontSize: 14, fontWeight: 700, whiteSpace: "nowrap" }}>
              {person.amount} <span style={{ fontSize: 12, fontWeight: 600, color: "#5B6478" }}>Prizes</span>
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: "#475569" }}>Total</span>
        <span className="tnum" style={{ fontSize: 18, fontWeight: 700 }}>
          850 <span style={{ fontSize: 13, fontWeight: 600, color: "#5B6478" }}>Prizes</span>
        </span>
      </div>

      <span style={{ height: 48, borderRadius: 12, background: "#2563EB", color: "#FFFFFF", fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <svg className="ic" width={18} height={18} viewBox="0 0 24 24" aria-hidden="true" style={{ strokeWidth: 2 }}>
          <GiftPaths />
        </svg>
        Enviar premiação
      </span>
    </div>
  );
}

export default function EmpresaSection() {
  return (
    <section aria-labelledby="empresa-t" style={{ padding: "clamp(64px, 8vw, 112px) clamp(16px, 4vw, 40px) 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 56 }}>
        <div style={{ flex: "1 1 460px", minWidth: 0, display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <h2 id="empresa-t" style={sectionTitleStyle}>
              Na sua empresa
            </h2>
            <p style={sectionLeadStyle}>Tudo pelo painel da empresa: recarga, premiação e extrato.</p>
          </div>
          <StepList steps={STEPS} />
        </div>

        <div className="viz" aria-hidden="true" style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
          <div className="viz-panel" style={{ position: "relative", height: 560, borderRadius: 36, background: "#EAF1FF", overflow: "hidden" }}>
            <PremiarCard />
          </div>
          <SuccessChip className="chip-l" style={{ left: -18, bottom: -28 }} title="Premiação enviada" detail="3 pessoas · 850 Prizes" />
        </div>
      </div>
    </section>
  );
}
