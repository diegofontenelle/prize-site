import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Resources from '@/components/Resources';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden flex flex-col items-center">
      <Header />
      <Hero />
      <div className="w-full self-start">
        <Solutions />
      </div>
      <Resources />
      <CTA />
      <Footer />
    </main>
  );
}
