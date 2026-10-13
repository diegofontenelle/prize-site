import type { Metadata } from "next";
import ContactForm from "@/components/fale-com-a-gente/ContactForm";
import ContactIntro from "@/components/fale-com-a-gente/ContactIntro";
import "@/components/fale-com-a-gente/fale-com-a-gente.css";

export const metadata: Metadata = {
  title: "Fale com a gente",
  description: "Conte como a sua empresa premia hoje. A gente volta com uma proposta para o seu volume.",
};

export default function FaleComAGentePage() {
  return (
    <main className="pg-fale-com-a-gente" style={{ background: "#F5F7FB" }}>
      <section aria-labelledby="contato-t" style={{ padding: "clamp(40px, 6vw, 80px) clamp(16px, 4vw, 40px) clamp(64px, 8vw, 112px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 48 }}>
          <ContactIntro />
          <div
            className="rise d2"
            style={{ flex: "1 1 560px", minWidth: 0, background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 28, padding: "clamp(22px, 3.4vw, 40px)", boxShadow: "0 30px 70px rgba(14, 26, 51, 0.08)" }}
          >
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
