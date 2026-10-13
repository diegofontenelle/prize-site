import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { CONTACT, LOGIN_URL, ROUTES } from "@/lib/site";
import { PrizeWordmark } from "./Brand";

const linkStyle: CSSProperties = { display: "flex", alignItems: "center", minHeight: 40, fontSize: 15, color: "#94A3B8" };
const headingStyle: CSSProperties = { fontSize: 15, fontWeight: 800, color: "#FFFFFF", paddingBottom: 8 };

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <h2 style={headingStyle}>{title}</h2>
      {children}
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer style={{ background: "#0E1A33", color: "#CBD5E1", padding: "64px clamp(16px, 4vw, 40px) 32px", borderRadius: "40px 40px 0 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 48 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px 56px" }}>
          <div style={{ flex: "1 1 240px", minWidth: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            <Link href={ROUTES.home} aria-label="Prize — página inicial" style={{ display: "flex", alignItems: "center", height: 44, color: "#FFFFFF", alignSelf: "flex-start" }}>
              <PrizeWordmark style={{ height: 30, width: 118, display: "block" }} />
            </Link>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "#94A3B8", maxWidth: 300 }}>Premiação por desempenho, paga por Pix.</p>
          </div>

          <nav aria-label="Rodapé" style={{ flex: "3 1 600px", minWidth: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(150px, 100%), 1fr))", gap: 32 }}>
            <Column title="Prize">
              <Link className="flink" href={ROUTES.comoFunciona} style={linkStyle}>Como funciona</Link>
              <Link className="flink" href={ROUTES.baseLegal} style={linkStyle}>Base legal</Link>
              <Link className="flink" href={ROUTES.seguranca} style={linkStyle}>Segurança</Link>
              <Link className="flink" href={ROUTES.duvidas} style={linkStyle}>Dúvidas</Link>
            </Column>
            <Column title="Para quem recebe">
              <Link className="flink" href={ROUTES.recebeuPrizes} style={linkStyle}>Recebeu Prizes?</Link>
              <a className="flink" href={LOGIN_URL} target="_blank" rel="noopener" style={linkStyle}>Entrar</a>
            </Column>
            <Column title="Contato">
              <a className="flink" href={`mailto:${CONTACT.email}`} style={linkStyle}>{CONTACT.email}</a>
              <a className="flink" href={CONTACT.phoneHref} style={linkStyle}>{CONTACT.phoneLabel}</a>
              <span style={{ fontSize: 14, lineHeight: 1.6, color: "#94A3B8", paddingTop: 8 }}>
                Seg. a sex., das 8h às 18h
                <br />
                Sáb., das 8h às 12h
              </span>
            </Column>
            <Column title="Legal">
              {/* TODO: apontar para as páginas reais quando existirem */}
              <a className="flink" href="#" style={linkStyle}>Política de privacidade</a>
              <a className="flink" href="#" style={linkStyle}>Termos de uso</a>
            </Column>
          </nav>
        </div>

        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.12)", paddingTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px 24px", fontSize: 13, lineHeight: 1.6, color: "#94A3B8" }}>
          <span>© 2026 Prize Intermediações e Agenciamento de Serviços S/A, CNPJ 30.115.054/0001-63</span>
          <span>Av. Dr. Chucri Zaidan, 1550, conj. 1411, Vila São Francisco, São Paulo/SP, CEP 04711-130</span>
        </div>
      </div>
    </footer>
  );
}
