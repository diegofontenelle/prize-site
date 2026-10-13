import { PrizeSymbolDef } from "@/components/site/Brand";
import { FONT_BODY } from "@/lib/site";

/** Cadeado que aparece sobre cada avatar; a alça (ia6/ia12) "fecha" no fim. */
function LockBadge({ cx, cy, badgeClass, shackleClass }: { cx: number; cy: number; badgeClass: string; shackleClass: string }) {
  return (
    <g className={badgeClass}>
      <circle cx={cx} cy={cy} r="25" fill="#2563EB" stroke="#FFFFFF" strokeWidth="5" />
      <g transform={`translate(${cx - 11} ${cy - 12}) scale(0.92)`} fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <g className={shackleClass}>
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </g>
        <path d="M12 15v2" />
      </g>
    </g>
  );
}

/** Avatar redondo com sombra e borda branca. */
function Avatar({ className, clipId, cx, cy, src }: { className: string; clipId: string; cx: number; cy: number; src: string }) {
  return (
    <g className={className}>
      <clipPath id={clipId}>
        <circle cx={cx} cy={cy} r="60" />
      </clipPath>
      <circle cx={cx} cy={cy} r="60" fill="#DBEAFE" filter="url(#ia-sh)" />
      <image href={src} x={cx - 60} y={cy - 60} width="120" height="120" preserveAspectRatio="xMidYMid slice" clipPath={`url(#${clipId})`} />
      <circle cx={cx} cy={cy} r="60" fill="none" stroke="#FFFFFF" strokeWidth="6" />
    </g>
  );
}

/**
 * CPF mascarado na chave Pix e código do autenticador protegido.
 * As animações (ia1..ia12, em seguranca.css) tocam uma vez quando a ilustração aparece.
 */
export default function ProtectionIllustration() {
  return (
    <svg
      data-play=""
      className="ill"
      viewBox="44 38 472 334"
      role="img"
      aria-label="CPF mascarado na chave Pix e código do autenticador protegido"
      style={{ width: "100%", height: "auto", overflow: "visible", fontFamily: FONT_BODY }}
    >
      <defs>
        <PrizeSymbolDef id="ia-sym" />
        <filter id="ia-sh" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#0E1A33" floodOpacity="0.13" />
        </filter>
      </defs>

      {/* Chave Pix (CPF) */}
      <g className="ia2">
        <rect x="58" y="76" width="320" height="72" rx="36" fill="#F5F7FB" stroke="#E2E8F0" strokeWidth="1.5" />
      </g>
      <text className="ia3" x="92" y="105" fontSize="14" fontWeight="600" fill="#5B6478">
        Chave Pix (CPF)
      </text>
      <g className="ia4">
        <text x="92" y="131" fontSize="21" fontWeight="800" fill="#0E1A33" letterSpacing="0.5" style={{ fontVariantNumeric: "tabular-nums" }}>
          ***.456.789-**
        </text>
      </g>
      <Avatar className="ia1" clipId="ia-ca" cx={404} cy={112} src="/img/site/avatar-a.jpg" />
      <LockBadge cx={352} cy={160} badgeClass="ia5" shackleClass="ia6" />

      {/* Código do autenticador */}
      <g className="ia8">
        <rect x="182" y="244" width="320" height="72" rx="36" fill="#F5F7FB" stroke="#E2E8F0" strokeWidth="1.5" />
      </g>
      <text className="ia9" x="248" y="273" fontSize="14" fontWeight="600" fill="#5B6478">
        Código do autenticador
      </text>
      <g className="ia10">
        <text x="248" y="299" fontSize="21" fontWeight="800" fill="#0E1A33" letterSpacing="0.5" style={{ fontVariantNumeric: "tabular-nums" }}>
          ••• •••
        </text>
      </g>
      <Avatar className="ia7" clipId="ia-cb" cx={164} cy={280} src="/img/site/avatar-b.jpg" />
      <LockBadge cx={216} cy={328} badgeClass="ia11" shackleClass="ia12" />
    </svg>
  );
}
