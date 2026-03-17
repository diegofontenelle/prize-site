import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="w-full pb-24 flex justify-center md:mt-12">
      <div className="w-full md:mr-[157px] bg-linear-to-r from-[#1E3A8A] to-[#3a83f8] rounded-none md:rounded-r-3xl overflow-hidden flex flex-col md:flex-row items-center relative shadow-2xl px-6 md:px-0 md:pl-20">

        <div className="w-full md:w-1/2 py-16 md:py-24 flex flex-col items-start gap-8 z-10 text-white bg-[url('/img/logo-prize-icon.png')] bg-no-repeat bg-center bg-contain">
          <h2 className="text-4xl md:text-5xl font-medium leading-tight max-w-[400px]">
            Premie de forma inteligente com a <span className="font-bold">Prize</span>
          </h2>
          <Link
            href="#contratar"
            className="bg-white text-brand-600 hover:bg-gray-50 px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-colors shadow-lg mt-2"
          >
            Contrate nossos serviços <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="w-full md:w-1/2 relative h-[400px] md:h-auto md:min-h-[500px]">
          <div className="absolute right-0 bottom-0 top-auto md:inset-y-0 md:right-0 w-full h-[120%] md:h-full flex justify-end items-end pointer-events-none">
            <Image
              src="/img/portrait-happy-man-looking-smartphone.png"
              alt="Homem sorrindo com smartphone"
              width={800}
              height={800}
              className="object-contain object-bottom md:object-bottom-right w-full h-full md:w-[130%] md:h-[130%] md:translate-y-[5%]"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
