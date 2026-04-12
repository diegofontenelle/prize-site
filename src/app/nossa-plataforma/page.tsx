import Header from '@/components/Header';
import NossaPlataformaHero from '@/components/nossa-plataforma/NossaPlataformaHero';
import QuemSomos from '@/components/nossa-plataforma/QuemSomos';
import InfoCard from '@/components/nossa-plataforma/InfoCard';
import PlatformSolutions from '@/components/nossa-plataforma/PlatformSolutions';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Nossa Plataforma - Prize | Incentivos Digitais',
  description:
    'Conheça a plataforma Prize, especializada em incentivos digitais. Controle, transparência, registro rápido e premiações em larga escala.',
};

export default function NossaPlataforma() {
  return (
    <main className="min-h-screen bg-white overflow-hidden flex flex-col items-center">
      <Header />
      <NossaPlataformaHero />
      <QuemSomos />
      <InfoCard />
      <PlatformSolutions />
      <CTA />
      <Footer />
    </main>
  );
}
