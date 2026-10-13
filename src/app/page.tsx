import type { Metadata } from "next";
import BaseLegalSection from "@/components/home/BaseLegalSection";
import CtaSection from "@/components/home/CtaSection";
import DuvidasSection from "@/components/home/DuvidasSection";
import HomeHero from "@/components/home/HomeHero";
import NumbersSection from "@/components/home/NumbersSection";
import RecebeuSection from "@/components/home/RecebeuSection";
import SegurancaSection from "@/components/home/SegurancaSection";
import SimpleSection from "@/components/home/SimpleSection";
import StepsSection from "@/components/home/StepsSection";
import "@/components/home/home.css";

// Sem título próprio: vale o padrão do layout ("Prize · Premiação por desempenho, paga por Pix").
export const metadata: Metadata = {
  description:
    "Você adiciona Prizes por Pix, premia quem superou a meta e cada pessoa saca na própria conta. Sem transferir um por um e sem pedir dados bancários.",
};

export default function Home() {
  return (
    <main className="pg-home">
      <HomeHero />
      <NumbersSection />
      <StepsSection />
      <SimpleSection />
      <SegurancaSection />
      <BaseLegalSection />
      <RecebeuSection />
      <DuvidasSection />
      <CtaSection />
    </main>
  );
}
