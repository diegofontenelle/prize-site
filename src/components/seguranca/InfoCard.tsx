import type { CSSProperties, ReactNode } from "react";

type Tone = "light" | "navy";

const cardStyle: Record<Tone, CSSProperties> = {
  light: { display: "flex", flexDirection: "column", gap: 12, padding: 24, borderRadius: 28, border: "1.5px solid #E2E8F0", background: "#FFFFFF" },
  navy: { display: "flex", flexDirection: "column", gap: 12, padding: 24, borderRadius: 28, background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.12)" },
};

const iconStyle: Record<Tone, CSSProperties> = {
  light: { width: 48, height: 48, borderRadius: 999, background: "#EEF4FF", color: "#1D4ED8", display: "flex", alignItems: "center", justifyContent: "center" },
  navy: { width: 48, height: 48, borderRadius: 16, background: "#2563EB", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" },
};

const textColor: Record<Tone, string> = { light: "#475569", navy: "#CBD5E1" };

type InfoCardProps = {
  /** Conteúdo do ícone (paths do <svg> 24x24 com a classe .ic). */
  icon: ReactNode;
  title: string;
  children: ReactNode;
  tone?: Tone;
};

/** Cartão com ícone, título e texto usado nas grades da página. */
export default function InfoCard({ icon, title, children, tone = "light" }: InfoCardProps) {
  return (
    <div style={cardStyle[tone]}>
      <span style={iconStyle[tone]}>
        <svg className="ic" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          {icon}
        </svg>
      </span>
      <h3 style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.3 }}>{title}</h3>
      <p style={{ fontSize: 15, lineHeight: 1.6, color: textColor[tone], textWrap: "pretty" }}>{children}</p>
    </div>
  );
}
