import Header from '@/components/Header';
import FaleContatoHero from '@/components/fale-conosco/FaleContatoHero';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Fale Conosco - Prize | Incentivos Digitais',
  description:
    'Entre em contato com a Prize. Nossa equipe está à disposição para responder todas as suas dúvidas sobre premiações e incentivos digitais.',
};

export default function FaleConosco() {
  return (
    <main className="min-h-screen bg-white overflow-hidden flex flex-col items-center">
      <Header />
      <FaleContatoHero />
      <CTA />
      <Footer />
    </main>
  );
}
