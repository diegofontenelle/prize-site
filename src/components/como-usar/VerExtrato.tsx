export default function VerExtrato() {
  return (
    <section className="w-full flex justify-center py-16 md:py-24 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/img/como-usar/section-4.svg"
            alt="Ver extrato — telas de extrato e histórico de transações"
            className="w-full max-w-md md:max-w-lg h-auto drop-shadow-xl"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-500 italic">
            Ver extrato
          </h2>
          <p className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">
            Acesse todas as transações e aquisições da sua conta
          </p>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md">
            Acesse todo o histórico de créditos adquiridos e veja com detalhes todas as transações feitas na sua conta.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md">
            Caso necessário, você pode estornar o valor de uma premiação que não tenha sido gasto pelo premiado.
          </p>
        </div>
      </div>
    </section>
  );
}
