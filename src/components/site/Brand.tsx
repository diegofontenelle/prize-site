import type { CSSProperties, SVGProps } from "react";
import {
  BRAND_TRANSFORM,
  SYMBOL_PATH,
  SYMBOL_VIEWBOX,
  WORDMARK_PATH,
  WORDMARK_VIEWBOX,
} from "./brand-paths";

type BrandProps = Omit<SVGProps<SVGSVGElement>, "viewBox" | "children"> & {
  style?: CSSProperties;
};

/** Logotipo completo "prize" (símbolo + palavra). Usa currentColor. */
export function PrizeWordmark({ "aria-hidden": ariaHidden = true, ...props }: BrandProps) {
  return (
    <svg viewBox={WORDMARK_VIEWBOX} aria-hidden={ariaHidden} {...props}>
      <g transform={BRAND_TRANSFORM} fill="currentColor">
        <path d={WORDMARK_PATH} />
      </g>
    </svg>
  );
}

/** Só o símbolo da Prize. Usa currentColor. */
export function PrizeSymbol({ "aria-hidden": ariaHidden = true, ...props }: BrandProps) {
  return (
    <svg viewBox={SYMBOL_VIEWBOX} aria-hidden={ariaHidden} {...props}>
      <g transform={BRAND_TRANSFORM} fill="currentColor">
        <path d={SYMBOL_PATH} />
      </g>
    </svg>
  );
}

/**
 * Símbolo para usar dentro de outro <svg> (ilustrações): declare uma vez com
 * <PrizeSymbolDef id="..."/> dentro de <defs> e reutilize com <use href="#id"/>.
 */
export function PrizeSymbolDef({ id }: { id: string }) {
  return (
    <symbol id={id} viewBox={SYMBOL_VIEWBOX}>
      <g transform={BRAND_TRANSFORM} fill="currentColor">
        <path d={SYMBOL_PATH} />
      </g>
    </symbol>
  );
}
