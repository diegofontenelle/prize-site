import { PrizeSymbolDef } from "@/components/site/Brand";
import { FONT_BODY } from "@/lib/site";
import { GiftPaths } from "./parts";

/*
 * Ilustração "Do saldo ao prêmio de cada pessoa". Existem duas montagens do
 * mesmo desenho: horizontal (desktop, classes ib*) e vertical (celular, ibm*).
 * A numeração das classes segue a ordem da animação em como-funciona.css:
 * 1 saldo · 2 trilha até a premiação · 3 moeda · 4 premiação · 5 trilhas até as pessoas ·
 * 6/10/14 moedas · 7/11/15 cartões · 8/12/16 valores · 9/13/17 confirmações · 18/19 saldo antes/depois.
 */

const LABEL = "O saldo da empresa vira a premiação Entregas no prazo e chega a Ana, Bruno e Carla";

const RECIPIENTS = [
  { name: "Ana", amount: "+300 Prizes", avatar: { src: "/img/site/avatar-a.jpg", clip: "ca" } },
  { name: "Bruno", amount: "+300 Prizes", avatar: { src: "/img/site/avatar-b.jpg", clip: "cb" } },
  { name: "Carla", amount: "+250 Prizes", initials: "CM" },
] as const;

type Layout = {
  prefix: "ib" | "ibm";
  className: string;
  viewBox: string;
  /** Canto superior esquerdo do cartão "Saldo da empresa". */
  balance: { x: number; y: number };
  /** Canto superior esquerdo da pílula "Premiação". */
  award: { x: number; y: number };
  /** Trilha pontilhada do saldo até a premiação. */
  trailToAward: string;
  /** Trilhas pontilhadas da premiação até cada pessoa. */
  trailToPeople: string;
  /** Cartões das pessoas: posição x, largura e o y de cada um. */
  people: { x: number; width: number; ys: readonly number[] };
};

const DESKTOP: Layout = {
  prefix: "ib",
  className: "ill ill-d",
  viewBox: "0 40 680 340",
  balance: { x: 16, y: 170 },
  award: { x: 252, y: 178 },
  trailToAward: "M196 210H252",
  trailToPeople: "M440 210H476V88H516M440 210H516M476 210V332H516",
  people: { x: 516, width: 150, ys: [54, 176, 298] },
};

const MOBILE: Layout = {
  prefix: "ibm",
  className: "ill ill-m",
  viewBox: "40 6 284 514",
  balance: { x: 90, y: 16 },
  award: { x: 86, y: 140 },
  trailToAward: "M180 96V140",
  trailToPeople: "M180 204V230H58V470H96M58 290H96M58 380H96",
  people: { x: 96, width: 210, ys: [256, 346, 436] },
};

const trailProps = { fill: "none", stroke: "#93C5FD", strokeWidth: 2.5, strokeDasharray: "1 7", strokeLinecap: "round" } as const;
const roundStroke = { fill: "none", strokeLinecap: "round", strokeLinejoin: "round" } as const;

function BalanceValue({ className, x, y, value }: { className: string; x: number; y: number; value: string }) {
  return (
    <g className={className}>
      <text x={x} y={y} fill="#FFFFFF" style={{ fontVariantNumeric: "tabular-nums" }}>
        <tspan fontSize="25" fontWeight="800">
          {value}
        </tspan>
        <tspan dx="6" fontSize="13" fontWeight="700" fill="#DBEAFE">
          Prizes
        </tspan>
      </text>
    </g>
  );
}

/** Moeda Prize que percorre as trilhas (a posição vem da animação). */
function Coin({ className, symbolId }: { className: string; symbolId: string }) {
  return (
    <g className={className}>
      <circle cx="0" cy="0" r="11" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2.5" />
      <use href={`#${symbolId}`} x="-6.5" y="-6.5" width="13" height="13" color="#FFFFFF" />
    </g>
  );
}

function Illustration({ layout }: { layout: Layout }) {
  const { prefix: p, balance: b, award: a, people } = layout;
  const shadow = `url(#${p}-sh)`;
  const symbolId = `${p}-sym`;
  const awardCx = a.x + 33;
  const awardCy = a.y + 32;

  return (
    <svg
      className={layout.className}
      viewBox={layout.viewBox}
      role="img"
      aria-label={LABEL}
      style={{ width: "100%", height: "auto", overflow: "visible", fontFamily: FONT_BODY }}
    >
      <defs>
        <PrizeSymbolDef id={symbolId} />
        <filter id={`${p}-sh`} x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#0E1A33" floodOpacity="0.13" />
        </filter>
      </defs>

      <g className={`${p}2`}>
        <path d={layout.trailToAward} {...trailProps} />
      </g>
      <g className={`${p}5`}>
        <path d={layout.trailToPeople} {...trailProps} />
      </g>

      <g className={`${p}1`}>
        <rect x={b.x} y={b.y} width="180" height="80" rx="20" fill="#1D4ED8" filter={shadow} />
        <text x={b.x + 22} y={b.y + 31} fontSize="12.5" fontWeight="600" fill="#DBEAFE">
          Saldo da empresa
        </text>
        <BalanceValue className={`${p}18`} x={b.x + 22} y={b.y + 62} value="5.000" />
        <BalanceValue className={`${p}19`} x={b.x + 22} y={b.y + 62} value="4.150" />
      </g>

      <g className={`${p}4`}>
        <rect x={a.x} y={a.y} width="188" height="64" rx="32" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="1.5" filter={shadow} />
        <circle cx={awardCx} cy={awardCy} r="20" fill="#EEF4FF" />
        <g transform={`translate(${awardCx - 9} ${awardCy - 9}) scale(0.7500)`} stroke="#1D4ED8" strokeWidth="2.67" {...roundStroke}>
          <GiftPaths />
        </g>
        <text x={a.x + 63} y={a.y + 25} fontSize="11.5" fontWeight="600" fill="#5B6478">
          Premiação
        </text>
        <text x={a.x + 63} y={a.y + 44} fontSize="14" fontWeight="800" fill="#0E1A33">
          Entregas no prazo
        </text>
      </g>

      {RECIPIENTS.map((person, i) => {
        const y = people.ys[i];
        const cx = people.x + 34;
        const cy = y + 34;
        const checkX = people.x + people.width - 14;
        const checkY = y + 7;
        return [
          <g key={`card-${person.name}`} className={`${p}${7 + 4 * i}`}>
            <rect x={people.x} y={y} width={people.width} height="68" rx="34" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" filter={shadow} />
            {"avatar" in person ? (
              <>
                <clipPath id={`${p}-${person.avatar.clip}`}>
                  <circle cx={cx} cy={cy} r="26" />
                </clipPath>
                <circle cx={cx} cy={cy} r="26" fill="#DBEAFE" filter={shadow} />
                <image href={person.avatar.src} x={cx - 26} y={cy - 26} width="52" height="52" preserveAspectRatio="xMidYMid slice" clipPath={`url(#${p}-${person.avatar.clip})`} />
              </>
            ) : (
              <>
                <circle cx={cx} cy={cy} r="26" fill="#EEF4FF" filter={shadow} />
                <text x={cx} y={cy + 4.9} textAnchor="middle" fontSize="14.6" fontWeight="800" fill="#1D4ED8">
                  {person.initials}
                </text>
              </>
            )}
            <circle cx={cx} cy={cy} r="26" fill="none" stroke="#FFFFFF" strokeWidth="3" />
            <text x={people.x + 70} y={cy - 4} fontSize="14.5" fontWeight="800" fill="#0E1A33">
              {person.name}
            </text>
          </g>,
          <text key={`amount-${person.name}`} className={`${p}${8 + 4 * i}`} x={people.x + 70} y={cy + 16} fontSize="12.5" fontWeight="700" fill="#067647">
            {person.amount}
          </text>,
          <g key={`check-${person.name}`} className={`${p}${9 + 4 * i}`}>
            <circle cx={checkX} cy={checkY} r="12" fill="#D1FADF" stroke="#FFFFFF" strokeWidth="3" />
            <g transform={`translate(${checkX - 7} ${checkY - 7}) scale(0.5833)`} stroke="#067647" strokeWidth="4.46" {...roundStroke}>
              <path d="M20 6L9 17l-5-5" />
            </g>
          </g>,
        ];
      })}

      <Coin className={`${p}3`} symbolId={symbolId} />
      {[6, 10, 14].map((n) => (
        <Coin key={n} className={`${p}${n}`} symbolId={symbolId} />
      ))}
    </svg>
  );
}

export default function FluxoIllustration() {
  return (
    <>
      <Illustration layout={DESKTOP} />
      <Illustration layout={MOBILE} />
    </>
  );
}
