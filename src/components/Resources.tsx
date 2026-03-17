import Image from 'next/image';
import { BadgeDollarSign, FileText, ArrowRightLeft, ShieldCheck } from 'lucide-react';

export default function Resources() {
  return (
    <section className="w-full py-24 flex flex-col items-center overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col items-start gap-12">
        <div>
          <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Recursos</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-600">Incentivo digitais feitos em alguns cliques</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-8">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-brand-500 flex items-center justify-center text-brand-500">
              <BadgeDollarSign className="w-6 h-6" />
            </div>
            <p className="text-gray-700 font-medium max-w-[200px]">Prêmios com pagamentos instantâneos</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-brand-500 flex items-center justify-center text-brand-500">
              <FileText className="w-6 h-6" />
            </div>
            <p className="text-gray-700 font-medium max-w-[200px]">Histórico de todas as transações feitas</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-brand-500 flex items-center justify-center text-brand-500">
              <ArrowRightLeft className="w-6 h-6" />
            </div>
            <p className="text-gray-700 font-medium max-w-[200px]">Diversas opções de resgate de créditos</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-brand-500 flex items-center justify-center text-brand-500">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <p className="text-gray-700 font-medium max-w-[200px]">Sem uso de informações sensíveis</p>
          </div>
        </div>
      </div>

      {/* Mockups composition */}
      <div className="relative w-full h-[500px] md:h-[700px] flex items-end justify-center">
        <Image
          src="/img/dashboard/bg-section-1.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Monitor Mockup in Front */}
        <div className="relative z-10 w-[95%] md:w-[70%] max-w-4xl">
          <div className="relative w-full overflow-hidden">
            {/* Using Mockup_Site_Prize2.png which is a desktop monitor. We will crop the top to make it fit nicely if needed, or just display it. */}
            <Image
              src="/img/Capturas de telas da plataforma/Mockup_Site_Prize2.png"
              alt="Monitor"
              width={1200}
              height={800}
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
