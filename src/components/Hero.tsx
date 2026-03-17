import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden flex justify-center min-h-[800px]">
      {/* Decorative background image */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <Image 
          src="/img/dashboard/bg-section-1.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column (Text & CTA) */}
        <div className="flex flex-col items-start gap-6 max-w-xl z-10">
          <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-brand-600 leading-tight tracking-tight">
            Bonifique sua equipe de forma inteligente
          </h1>
          <p className="text-lg md:text-xl text-gray-800 font-medium max-w-[420px]">
            Transforme campanhas de incentivo em créditos digitais que seus funcionários podem usar como quiserem.
          </p>
          <Link 
            href="#contratar" 
            className="mt-4 bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-colors shadow-lg shadow-brand-500/30"
          >
            Contrate nossos serviços <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Right Column (Image Composition) */}
        <div className="relative w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
          
          <div className="relative w-full max-w-[550px]">
            {/* Main Image */}
            <div className="relative z-10 w-full rounded-xl shadow-2xl overflow-hidden">
              <Image 
                src="/img/dashboard/image-dashboard-right.png" 
                alt="Dashboard Prize" 
                width={800} 
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Overlay 1: Top Right */}
            <div className="absolute -top-12 -right-8 md:-top-16 md:-right-12 w-32 md:w-40 z-20">
              <Image 
                src="/img/dashboard/person-top-right.png" 
                alt="Person top right" 
                width={160}
                height={160}
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>

            {/* Overlay 2: Bottom Left */}
            <div className="absolute -bottom-10 -left-6 md:-bottom-16 md:-left-12 w-36 md:w-44 z-20">
              <Image 
                src="/img/dashboard/person-bottom-left.png" 
                alt="Person bottom left" 
                width={176}
                height={176}
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
