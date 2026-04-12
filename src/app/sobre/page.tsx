import Header from '@/components/Header';
import SobreHero from '@/components/sobre/SobreHero';
import SobreHeroImage from '@/components/sobre/SobreHeroImage';
import SobreInnovation from '@/components/sobre/SobreInnovation';
import SobreWhyPrize from '@/components/sobre/SobreWhyPrize';
import SobrePillars from '@/components/sobre/SobrePillars';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Sobre - Prize | Incentivos Digitais',
  description:
    'Conheça a Prize: plataforma especializada em incentivos digitais. Inovação, praticidade e gestão simplificada para valorizar talentos.',
};

export default function Sobre() {
  return (
    <main className="min-h-screen bg-white overflow-hidden flex flex-col items-center">
      <Header />
      <SobreHero />
      <SobreHeroImage />
      <SobreInnovation />
      <SobreWhyPrize />
      <SobrePillars />
      <CTA />
      <Footer />
    </main>
  );
}
