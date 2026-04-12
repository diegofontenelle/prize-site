export default function NossaPlataformaHero() {
  return (
    <section className="relative w-full pt-24 md:pt-28 overflow-hidden flex justify-center">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-brand-500 via-brand-500 to-brand-600 z-0" />

      {/* Subtle decorative circles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-xl z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-2xl z-0" />

      <div className="relative z-10 w-full max-w-6xl px-4 pb-0 flex flex-col items-center">
        {/* Platform header image — SVG for crisp rendering at any resolution */}
        <div className="relative w-full max-w-[1100px]">
          <img
            src="/img/nossa-plataforma/header.svg"
            alt="Plataforma Prize — telas do sistema com dashboards, lista de premiados e fluxo de pagamento"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path d="M0 80V40C360 0 1080 0 1440 40V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
