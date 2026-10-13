import type { Metadata } from "next";
import BaseLegalCta from "@/components/base-legal/BaseLegalCta";
import BaseLegalHero from "@/components/base-legal/BaseLegalHero";
import CltSection from "@/components/base-legal/CltSection";
import PapelSection from "@/components/base-legal/PapelSection";
import RequisitosSection from "@/components/base-legal/RequisitosSection";

export const metadata: Metadata = {
  title: "Base legal",
  description: "A CLT tira o prêmio da base de INSS e FGTS. Para valer, ele precisa cumprir três requisitos. E quem recebe paga Imposto de Renda.",
};

export default function BaseLegalPage() {
  return (
    <main className="pg-base-legal">
      <BaseLegalHero />
      <CltSection />
      <RequisitosSection />
      <PapelSection />
      <BaseLegalCta />
    </main>
  );
}
