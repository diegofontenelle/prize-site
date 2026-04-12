import Image from 'next/image';

export default function InfoCard() {
  return (
    <section className="relative w-full flex px-4 pb-16 md:pb-24">
      {/* Decorative wave background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/img/resources/bg-back.png"
          alt=""
          fill
          className="object-cover object-center"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-4xl w-full relative z-10 mx-auto mt-[6.25%]">
        <div className="bg-brand-500 rounded-3xl px-8 py-10 md:px-12 md:py-14 text-white shadow-xl shadow-brand-500/20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
            Mas por que eu usaria essa plataforma?
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-white/95">
            Segundo o artigo 457 da CLT, prêmios concedidos pelo bom desempenho
            de colaboradores não são considerados salário, e por isso não geram
            encargos trabalhistas ou previdenciários.
          </p>
        </div>
      </div>
    </section>
  );
}
