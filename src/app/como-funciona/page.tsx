import type { Metadata } from "next";
import ComecaSection from "@/components/como-funciona/ComecaSection";
import ComoFuncionaHero from "@/components/como-funciona/ComoFuncionaHero";
import EmpresaSection from "@/components/como-funciona/EmpresaSection";
import FluxoSection from "@/components/como-funciona/FluxoSection";
import RecebeSection from "@/components/como-funciona/RecebeSection";
import "@/components/como-funciona/como-funciona.css";

export const metadata: Metadata = {
  title: "Como funciona",
  description: "A empresa adiciona Prizes e premia. Quem recebe cria o acesso e saca por Pix. Cada passo fica registrado no extrato.",
};

export default function ComoFuncionaPage() {
  return (
    <main className="pg-como-funciona">
      <ComoFuncionaHero />
      <EmpresaSection />
      <FluxoSection />
      <RecebeSection />
      <ComecaSection />
    </main>
  );
}
