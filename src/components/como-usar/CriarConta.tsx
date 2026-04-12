export default function CriarConta() {
  return (
    <section className="w-full flex justify-center py-16 md:py-24 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text */}
        <div className="flex flex-col gap-4 order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-500 italic">
            Criar uma conta
          </h2>
          <p className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">
            Nossa equipe criará uma conta personalizada para sua empresa
          </p>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md">
            Verificação simplificada de operações com visibilidade completa sobre os dados de cada transação, do início ao fim.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <img
            src="/img/como-usar/section-1.svg"
            alt="Criar uma conta — tela de criação de conta Prize"
            className="w-full max-w-md md:max-w-lg h-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
