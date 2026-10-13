import type { Metadata } from "next";
import AjudaSaque from "@/components/recebeu-prizes/AjudaSaque";
import PassoAPasso from "@/components/recebeu-prizes/PassoAPasso";
import PerguntasRecebe from "@/components/recebeu-prizes/PerguntasRecebe";
import RecebeuHero from "@/components/recebeu-prizes/RecebeuHero";
import SuaSeguranca from "@/components/recebeu-prizes/SuaSeguranca";
import "@/components/recebeu-prizes/recebeu-prizes.css";

export const metadata: Metadata = {
  title: "Recebeu Prizes?",
  description: "Cada Prize vale R$ 1,00. Você saca por Pix para a chave do seu CPF, sem tarifa, na hora que quiser.",
};

export default function RecebeuPrizesPage() {
  return (
    <main className="pg-recebeu-prizes">
      <RecebeuHero />
      <PassoAPasso />
      <SuaSeguranca />
      <PerguntasRecebe />
      <AjudaSaque />
    </main>
  );
}
