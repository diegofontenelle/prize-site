import type { Metadata } from "next";
import SegurancaCta from "@/components/seguranca/SegurancaCta";
import SegurancaErrado from "@/components/seguranca/SegurancaErrado";
import SegurancaGolpe from "@/components/seguranca/SegurancaGolpe";
import SegurancaHero from "@/components/seguranca/SegurancaHero";
import SegurancaProtege from "@/components/seguranca/SegurancaProtege";
import "@/components/seguranca/seguranca.css";

export const metadata: Metadata = {
  title: "Segurança",
  description:
    "Senha e código do autenticador para entrar e para sacar, Pix só para o CPF de quem recebeu e tudo registrado no extrato.",
};

export default function SegurancaPage() {
  return (
    <main className="pg-seguranca">
      <SegurancaHero />
      <SegurancaProtege />
      <SegurancaGolpe />
      <SegurancaErrado />
      <SegurancaCta />
    </main>
  );
}
