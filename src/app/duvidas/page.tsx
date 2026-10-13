import type { Metadata } from "next";
import DuvidasHero from "@/components/duvidas/DuvidasHero";
import FaqSection from "@/components/duvidas/FaqSection";
import { FAQ_GROUPS } from "@/components/duvidas/faqs";
import HelpAside from "@/components/duvidas/HelpAside";
import "@/components/duvidas/duvidas.css";

export const metadata: Metadata = {
  title: "Dúvidas",
  description: "Respostas para empresas e para quem recebe Prizes. Não achou a sua? Fale com a gente.",
};

const groupLink = { display: "inline-flex", alignItems: "center", height: 44, padding: "0 18px", borderRadius: 999, background: "#EEF4FF", color: "#1D4ED8", fontSize: 15, fontWeight: 700 } as const;

export default function DuvidasPage() {
  return (
    <main className="pg-duvidas">
      <DuvidasHero />

      <div style={{ padding: "clamp(56px, 7vw, 96px) clamp(16px, 4vw, 40px) clamp(64px, 8vw, 112px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 48 }}>
          <div style={{ flex: "999 1 560px", minWidth: 0, display: "flex", flexDirection: "column", gap: 56 }}>
            <nav aria-label="Grupos de perguntas" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {FAQ_GROUPS.map((group) => (
                <a key={group.id} className="grp" href={`#${group.id}`} style={groupLink}>
                  {group.title}
                </a>
              ))}
            </nav>
            {FAQ_GROUPS.map((group) => (
              <FaqSection key={group.id} group={group} />
            ))}
          </div>
          <HelpAside />
        </div>
      </div>
    </main>
  );
}
