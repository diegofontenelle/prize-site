import type { CSSProperties } from "react";
import { FONT_DISPLAY } from "@/lib/site";

/** Título (h2) das seções da página. */
export const sectionTitle: CSSProperties = {
  fontFamily: FONT_DISPLAY,
  fontSize: "clamp(30px, 3.6vw, 48px)",
  fontWeight: 700,
  lineHeight: 1.08,
  letterSpacing: "-0.025em",
  textWrap: "balance",
};
