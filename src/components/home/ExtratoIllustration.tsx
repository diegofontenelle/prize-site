import { PrizeSymbolDef } from "@/components/site/Brand";
import { FONT_BODY } from "@/lib/site";

const LABEL = "Recarga por Pix e premiações registradas no extrato da empresa, com data e hora";
const TNUM = { fontVariantNumeric: "tabular-nums" } as const;
const SVG_STYLE = { width: "100%", height: "auto", overflow: "visible", fontFamily: FONT_BODY } as const;

/** Linhas do extrato. `n` é o número da classe de animação (ic9, ic10, ic11). */
const ROWS = [
  { n: 9, y: 182, bg: "#ECFDF3", stroke: "#067647", icon: "M17 7L7 17M16 17H7V8", title: "Recarga por Pix", time: "08/10 · 09:12", amount: "+5.000,00", amountColor: "#067647" },
  { n: 10, y: 236, bg: "#F1F4F9", stroke: "#475569", icon: "M7 17L17 7M8 7h9v9", title: "Entregas no prazo", time: "08/10 · 10:40", amount: "−850,00", amountColor: "#0E1A33" },
  { n: 11, y: 290, bg: "#F1F4F9", stroke: "#475569", icon: "M7 17L17 7M8 7h9v9", title: "Meta de vendas", time: "08/10 · 16:05", amount: "−360,00", amountColor: "#0E1A33" },
];

/** Cartão "Extrato da empresa" com as três linhas. `p` é o prefixo das classes: "ic" (desktop) ou "icm" (celular). */
function ExtratoCard({ p }: { p: "ic" | "icm" }) {
  return (
    <>
      <g className={`${p}1`}>
        <rect x="170" y="92" width="310" height="244" rx="24" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" filter={`url(#${p}-sh)`} />
        <text x="196" y="132" fontSize="15.5" fontWeight="800" fill="#0E1A33">
          Extrato da empresa
        </text>
        <path d="M192 155H458M192 209H458M192 263H458" stroke="#EEF2F7" strokeWidth="1.5" />
      </g>
      {ROWS.map((row) => (
        <g key={row.n} className={`${p}${row.n}`}>
          <circle cx="210" cy={row.y} r="15" fill={row.bg} />
          <g transform={`translate(202 ${row.y - 8}) scale(0.6667)`} fill="none" stroke={row.stroke} strokeWidth="3.30" strokeLinecap="round" strokeLinejoin="round">
            <path d={row.icon} />
          </g>
          <text x="236" y={row.y - 2} fontSize="13.5" fontWeight="700" fill="#0E1A33">
            {row.title}
          </text>
          <text x="236" y={row.y + 15} fontSize="11.5" fill="#5B6478" style={TNUM}>
            {row.time}
          </text>
          <text x="456" y={row.y + 5} textAnchor="end" fontSize="13.5" fontWeight="800" fill={row.amountColor} style={TNUM}>
            {row.amount}
          </text>
        </g>
      ))}
    </>
  );
}

/** Selo verde de confirmado no canto do cartão. */
function CheckBadge({ p }: { p: "ic" | "icm" }) {
  return (
    <g className={`${p}12`}>
      <circle cx="474" cy="98" r="20" fill="#D1FADF" stroke="#FFFFFF" strokeWidth="4" />
      <g transform="translate(464 88) scale(0.8333)" fill="none" stroke="#067647" strokeWidth="3.12" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </g>
    </g>
  );
}

function Defs({ p }: { p: "ic" | "icm" }) {
  return (
    <defs>
      <PrizeSymbolDef id={`${p}-sym`} />
      <filter id={`${p}-sh`} x="-30%" y="-30%" width="160%" height="170%">
        <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#0E1A33" floodOpacity="0.13" />
      </filter>
    </defs>
  );
}

/**
 * Recarga por Pix entrando no extrato da empresa. Duas versões: desktop (com os
 * ícones e conectores) e celular (só o cartão). data-play: anima uma vez ao aparecer.
 */
export default function ExtratoIllustration() {
  return (
    <>
      <svg className="ill ill-d" data-play="" viewBox="20 16 600 340" role="img" aria-label={LABEL} style={SVG_STYLE}>
        <Defs p="ic" />
        <g className="ic3">
          <path d="M148 64H240V92" fill="none" stroke="#93C5FD" strokeWidth="2.5" strokeDasharray="1 7" strokeLinecap="round" />
        </g>
        <g className="ic5">
          <path d="M98 182H170" fill="none" stroke="#93C5FD" strokeWidth="2.5" strokeDasharray="1 7" strokeLinecap="round" />
        </g>
        <g className="ic8">
          <path d="M566 178V290H480M566 236H480" fill="none" stroke="#93C5FD" strokeWidth="2.5" strokeDasharray="1 7" strokeLinecap="round" />
        </g>
        <ExtratoCard p="ic" />
        <g className="ic2">
          <circle cx="120" cy="64" r="28" fill="#2563EB" stroke="#FFFFFF" strokeWidth="5" filter="url(#ic-sh)" />
          <g transform="translate(108 52) scale(1.0000)" fill="none" stroke="#FFFFFF" strokeWidth="2.00" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </g>
        </g>
        <g className="ic4">
          <circle cx="70" cy="182" r="28" fill="#2563EB" stroke="#FFFFFF" strokeWidth="5" filter="url(#ic-sh)" />
          <g transform="translate(58 170) scale(1.0000)" fill="none" stroke="#FFFFFF" strokeWidth="2.00" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </g>
        </g>
        <g className="ic7">
          <circle cx="566" cy="150" r="28" fill="#2563EB" stroke="#FFFFFF" strokeWidth="5" filter="url(#ic-sh)" />
          <g transform="translate(554 138) scale(1.0000)" fill="none" stroke="#FFFFFF" strokeWidth="2.00" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="8" width="18" height="4" rx="1" />
            <path d="M12 8v13" />
            <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
            <path d="M7.5 8a2.5 2.5 0 0 1 0-5C9.5 3 12 8 12 8s2.5-5 4.5-5a2.5 2.5 0 0 1 0 5" />
          </g>
        </g>
        <CheckBadge p="ic" />
        {/* Prize viajando da recarga para o extrato */}
        <g className="ic6">
          <circle cx="0" cy="0" r="11" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2.5" />
          <use href="#ic-sym" x="-6.5" y="-6.5" width="13" height="13" color="#FFFFFF" />
        </g>
      </svg>

      <svg className="ill ill-m" data-play="" viewBox="158 70 348 284" role="img" aria-label={LABEL} style={SVG_STYLE}>
        <Defs p="icm" />
        <ExtratoCard p="icm" />
        <CheckBadge p="icm" />
      </svg>
    </>
  );
}
