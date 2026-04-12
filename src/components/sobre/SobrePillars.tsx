import { Target, Eye, Star } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    color: 'text-brand-600',
    bgColor: 'bg-brand-50',
    content:
      'Oferecer um ecossistema de incentivos digitais completo para engajar times e multiplicar resultados.',
  },
  {
    icon: Eye,
    color: 'text-brand-600',
    bgColor: 'bg-brand-50',
    content:
      'Ser reconhecida como a plataforma de programas de incentivo mais inovadora e inclusiva do mercado, transformando a forma como as empresas motivam suas pessoas.',
  },
  {
    icon: Star,
    color: 'text-brand-600',
    bgColor: 'bg-brand-50',
    content: [
      'Buscar soluções que simplifiquem processos;',
      'Engajar times para construir relações sólidas e transparentes com empresas;',
      'Multiplicar conquistas.',
    ],
  },
];

export default function SobrePillars() {
  return (
    <section className="w-full flex justify-center px-6 py-16 md:py-24">
      <div className="max-w-5xl w-full flex flex-col gap-10">
        {/* Header */}
        <div>
          <p className="text-sm text-gray-500 mb-2">Nossos pilares</p>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-600 leading-snug">
            Missão, visão e valores da Prize
          </h2>
        </div>

        {/* Pillar cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex items-start gap-3"
            >
              <div className={`w-10 h-10 rounded-full ${pillar.bgColor} flex items-center justify-center flex-shrink-0`}>
                <pillar.icon className={`w-5 h-5 ${pillar.color}`} />
              </div>
              <div className="text-sm text-gray-600 leading-relaxed">
                {Array.isArray(pillar.content) ? (
                  <ul className="list-none flex flex-col gap-1">
                    {pillar.content.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{pillar.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
