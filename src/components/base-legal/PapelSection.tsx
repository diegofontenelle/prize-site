import type { CSSProperties } from "react";
import { FONT_DISPLAY } from "@/lib/site";
import { CheckIcon, InfoIcon } from "./icons";
import { sectionTitle } from "./styles";

const PRIZE_FAZ = [
  "Credita os Prizes no saldo da empresa quando o Pix da recarga é pago.",
  "Entrega os Prizes a cada pessoa premiada, que saca por Pix na chave do próprio CPF.",
  "Registra cada recarga, premiação e saque no extrato, com data e hora.",
];

const EMPRESA_FAZ = [
  "Define as regras do programa de premiação, que podem estar num regulamento interno.",
  "Define as metas antes e guarda a prova de que foram superadas.",
  "Informa os pagamentos e cuida do Imposto de Renda com o contador.",
];

const cardStyle: CSSProperties = { display: "flex", flexDirection: "column", gap: 22, padding: "clamp(28px, 4vw, 40px)", borderRadius: 32 };
const checkStyle: CSSProperties = { marginTop: 2, width: 26, height: 26, borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 };

/** Cartão com a lista de responsabilidades; "blue" é o cartão da Prize, "light" o da empresa. */
function PapelCard({ title, items, tone }: { title: string; items: string[]; tone: "blue" | "light" }) {
  const blue = tone === "blue";
  return (
    <div style={{ ...cardStyle, ...(blue ? { background: "#2563EB", color: "#FFFFFF" } : { background: "#F5F7FB" }) }}>
      <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: 28, fontWeight: 700 }}>{title}</h3>
      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
        {items.map((text) => (
          <li key={text} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span style={{ ...checkStyle, background: blue ? "#FFFFFF" : "#2563EB", color: blue ? "#1D4ED8" : "#FFFFFF" }}>
              <CheckIcon />
            </span>
            <span style={{ fontSize: 16.5, lineHeight: 1.6, color: blue ? "#E6EEFF" : "#0E1A33", textWrap: "pretty" }}>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PapelSection() {
  return (
    <section aria-labelledby="papel-t" style={{ padding: "clamp(64px, 8vw, 112px) clamp(16px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 36 }}>
        <h2 id="papel-t" style={{ ...sectionTitle, maxWidth: 760 }}>O que a Prize faz e o que fica com a sua empresa</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", gap: 24 }}>
          <PapelCard title="A Prize" items={PRIZE_FAZ} tone="blue" />
          <PapelCard title="A sua empresa" items={EMPRESA_FAZ} tone="light" />
        </div>
        <p style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "18px 22px", borderRadius: 22, background: "#EEF4FF", fontSize: 16, lineHeight: 1.6, color: "#1E3A8A", textWrap: "pretty" }}>
          <InfoIcon size={20} style={{ color: "#1D4ED8", marginTop: 2 }} />
          A Prize não presta consultoria tributária: monte o programa de premiação com o contador da sua empresa.
        </p>
      </div>
    </section>
  );
}
