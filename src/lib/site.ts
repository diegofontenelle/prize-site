/** Endereço oficial da plataforma, citado nas dicas de segurança. */
export const APP_DOMAIN = "app.prizebr.com";

// TODO: trocar para https://app.prizebr.com/login quando o domínio estiver no ar (hoje não tem DNS).
export const LOGIN_URL = "https://prize-production.vercel.app/login";

export const CONTACT = {
  email: "adm@prizebr.com",
  phoneHref: "tel:+5511975821007",
  phoneLabel: "+55 (11) 97582-1007",
} as const;

export const ROUTES = {
  home: "/",
  comoFunciona: "/como-funciona",
  baseLegal: "/base-legal",
  seguranca: "/seguranca",
  duvidas: "/duvidas",
  recebeuPrizes: "/recebeu-prizes",
  faleComAGente: "/fale-com-a-gente",
} as const;

/** Links do menu principal, na ordem do protótipo. */
export const MAIN_NAV = [
  { href: ROUTES.comoFunciona, label: "Como funciona" },
  { href: ROUTES.baseLegal, label: "Base legal" },
  { href: ROUTES.seguranca, label: "Segurança" },
  { href: ROUTES.duvidas, label: "Dúvidas" },
  { href: ROUTES.recebeuPrizes, label: "Recebeu Prizes?", accent: true },
] as const;

/** Pilhas de fonte. As variáveis vêm de next/font em app/layout.tsx. */
export const FONT_BODY = "var(--font-figtree), ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif";
export const FONT_DISPLAY = "var(--font-quicksand), var(--font-figtree), sans-serif";
