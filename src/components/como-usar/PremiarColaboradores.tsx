export default function PremiarColaboradores() {
  const campanhaEntries = [
    { initials: 'IN', color: 'bg-amber-200', label: 'inform*******@gmail.com', prizes: '450 prizes' },
    { initials: 'JC', color: 'bg-sky-200', label: '(11) 988*******', prizes: '500 prizes' },
    { initials: 'FC', color: 'bg-rose-200', label: 'fabio********@gmail.com', prizes: '270 prizes' },
  ];

  return (
    <section className="w-full flex justify-center py-16 md:py-24 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-500 italic">
            Premiar colaboradores
          </h2>
          <p className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">
            Prêmios em larga escala com conformidade
          </p>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md">
            Realize pagamentos em lotes nominais com total respaldo legal e alinhamento às boas práticas de Compliance corporativo.
          </p>
        </div>

        {/* Blue Card UI */}
        <div className="flex justify-center md:justify-end">
          <div className="bg-brand-500 rounded-2xl shadow-xl p-6 md:p-0 w-full max-w-md">
            {/* Card header */}
            <div className="flex items-center gap-3 md:p-6">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 7 17 7" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
              <span className="text-white font-bold italic text-base md:text-lg">
                Primeira campanha de premiação
              </span>
            </div>

            {/* Entries */}
            <div className="flex flex-col gap-3 bg-blue-100 md:p-6 rounded-b-2xl">
              {campanhaEntries.map((entry, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-xl px-4 py-3 border border-blue-500"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-gray-700 ${entry.color} border-blue-50 border`}>
                      {entry.initials}
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      {entry.label}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-white bg-brand-500 px-3 py-1.5 rounded-full whitespace-nowrap ml-2">
                    {entry.prizes}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
