import Image from 'next/image';

export default function SobreInnovation() {
  return (
    <section className="w-full flex justify-center px-6 py-16 md:py-24">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Image */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <Image
            src="/img/about/group-people.svg"
            alt="Equipe Prize colaborando"
            width={552}
            height={368}
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Text content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Inovação e praticidade para as empresas
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            As multissoluções da Prize evoluem as operações de empregadores, 
            gestores e profissionais de RH garantindo também a melhor experiência 
            para o colaborador.
          </p>
        </div>
      </div>
    </section>
  );
}
