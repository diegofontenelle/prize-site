export default function ComprarCreditos() {
  return (
    <section className="w-full flex justify-center py-16 md:py-24 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/img/como-usar/section-2.svg"
            alt="Comprar créditos — tela de compra de créditos Prize"
            className="w-full max-w-md md:max-w-lg h-auto drop-shadow-xl"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-500 italic">
            Comprar créditos
          </h2>
          <p className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">
            Compre o crédito da plataforma para usá-los como desejar
          </p>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md">
            Ao fazer um pedido de crédito, a plataforma gerará um boleto bancário. Após o pagamento, as moedas digitais da plataforma cairão na sua conta para usá-las como desejar.
          </p>
          <div className="mt-2">
            <p className="text-sm text-gray-500 mb-1">
              Os premiados poderão usar esses créditos para:
            </p>
            <ul className="text-sm text-brand-500 list-disc list-inside space-y-0.5">
              <li>Fazer transferências bancárias;</li>
              <li>Pagar boletos;</li>
              <li>Pagar QR codes.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
