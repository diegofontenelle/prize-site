export default function MelhoreDesempenho() {
  return (
    <section className="w-full flex flex-col items-center py-16 md:py-24 px-4">
      {/* Text */}
      <div className="max-w-3xl w-full text-center mb-10 md:mb-14">
        <h2 className="text-2xl md:text-4xl font-bold text-brand-500 italic mb-4">
          Melhore o desempenho da sua empresa
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Ajudamos a fortalecer a relação entre a empresa e seus funcionários por meio de incentivos para motivar e criar um ambiente de trabalho positivo.
        </p>
      </div>

      {/* Image */}
      <div className="w-full max-w-5xl">
        <img
          src="/img/como-usar/section-5.svg"
          alt="Equipe feliz — colaboradores motivados em ambiente de trabalho positivo"
          className="w-full h-auto rounded-2xl"
        />
      </div>
    </section>
  );
}
