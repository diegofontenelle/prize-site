import type { CSSProperties } from "react";
import { FONT_DISPLAY } from "@/lib/site";

/** Título (h2) grande das seções. */
export const titleLg: CSSProperties = {
  fontFamily: FONT_DISPLAY,
  fontSize: "clamp(30px, 3.6vw, 50px)",
  fontWeight: 700,
  lineHeight: 1.06,
  letterSpacing: "-0.025em",
  textWrap: "balance",
};

/** Título (h2) médio das seções. */
export const titleMd: CSSProperties = {
  fontFamily: FONT_DISPLAY,
  fontSize: "clamp(28px, 3.2vw, 44px)",
  fontWeight: 700,
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  textWrap: "balance",
};

/** Botão branco "Fale com a gente" sobre o azul (hero e chamada final). */
export const pillWhite: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  height: 56,
  padding: "0 28px",
  borderRadius: 999,
  background: "#FFFFFF",
  color: "#1D4ED8",
  fontSize: 16,
  fontWeight: 800,
  boxShadow: "0 14px 30px rgba(14, 26, 51, 0.20)",
};

/** Botão contornado em branco sobre o azul. */
export const pillGhost: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  height: 56,
  borderRadius: 999,
  border: "2px solid rgba(255, 255, 255, 0.75)",
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: 700,
};
