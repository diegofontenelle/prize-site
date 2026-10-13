import Link from "next/link";
import { CONTACT, FONT_DISPLAY, ROUTES } from "@/lib/site";

const contactLink = { display: "flex", alignItems: "center", gap: 10, minHeight: 44, fontSize: 16, fontWeight: 700, color: "#1D4ED8" } as const;

/** Caixa lateral "Não achou a sua?" (fica fixa no desktop; no celular vira bloco normal). */
export default function HelpAside() {
  return (
    <aside
      className="faq-aside"
      aria-labelledby="ajuda-t"
      style={{ flex: "1 1 300px", minWidth: 0, position: "sticky", top: 100, display: "flex", flexDirection: "column", gap: 16, padding: 28, borderRadius: 32, background: "#EAF1FF" }}
    >
      <h2 id="ajuda-t" style={{ fontFamily: FONT_DISPLAY, fontSize: 26, fontWeight: 700, lineHeight: 1.15 }}>
        Não achou a sua?
      </h2>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "#475569" }}>
        Fale com a gente de segunda a sexta, das 8h às 18h, e aos sábados, das 8h às 12h.
      </p>
      <a href={`mailto:${CONTACT.email}`} style={contactLink}>
        <svg className="ic" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
        {CONTACT.email}
      </a>
      <a href={CONTACT.phoneHref} style={contactLink}>
        <svg className="ic" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="6" y="2" width="12" height="20" rx="2.5" />
          <path d="M11 18h2" />
        </svg>
        {CONTACT.phoneLabel}
      </a>
      <Link
        className="pill pill-blue"
        href={ROUTES.faleComAGente}
        style={{ marginTop: 4, display: "inline-flex", alignItems: "center", justifyContent: "center", height: 52, padding: "0 24px", borderRadius: 999, background: "#2563EB", color: "#FFFFFF", fontSize: 16, fontWeight: 800 }}
      >
        Fale com a gente
      </Link>
    </aside>
  );
}
