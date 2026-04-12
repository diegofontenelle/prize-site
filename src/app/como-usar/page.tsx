import Header from '@/components/Header';
import ComoUsarHero from '@/components/como-usar/ComoUsarHero';
import CriarConta from '@/components/como-usar/CriarConta';
import ComprarCreditos from '@/components/como-usar/ComprarCreditos';
import PremiarColaboradores from '@/components/como-usar/PremiarColaboradores';
import VerExtrato from '@/components/como-usar/VerExtrato';
import MelhoreDesempenho from '@/components/como-usar/MelhoreDesempenho';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Como Usar - Prize | Experiência Prize',
  description:
    'Conheça a experiência Prize: crie sua conta, compre créditos, premie colaboradores e acompanhe tudo pelo extrato.',
};

export default function ComoUsar() {
  return (
    <main className="min-h-screen bg-white overflow-hidden flex flex-col items-center">
      <Header />
      <ComoUsarHero />
      <CriarConta />
      <ComprarCreditos />
      <PremiarColaboradores />
      <VerExtrato />
      <MelhoreDesempenho />
      <CTA />
      <Footer />
    </main>
  );
}
