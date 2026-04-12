export default function PlatformSolutions() {
  return (
    <section className="w-full flex flex-col items-center py-16 md:py-24 overflow-hidden">
      <div className="w-full">
        {/* SVG scales perfectly at any resolution — no need for next/image optimization */}
        <img
          src="/img/nossa-plataforma/solucoes.svg"
          alt="Soluções da plataforma Prize: controle e transparência, registro rápido, premiação instantânea e prêmios em larga escala"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
