import { Shield, Undo2, LayoutDashboard } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Premiação Sem Mordida do Imposto',
    description:
      'Os encargos tributários não comprometem o valor que seu funcionário recebe. Ele ganha o que você quer dar — sem desconto surpresa.',
  },
  {
    icon: Undo2,
    title: 'Estorno Fácil e Sem Dor de Cabeça',
    description:
      'Aconteceu algo inesperado? Com poucos cliques, você estorna a bonificação de forma segura e rastreável.',
  },
  {
    icon: LayoutDashboard,
    title: 'Gestão Simples do Início ao Fim',
    description:
      'Painel intuitivo, relatórios claros e fluxo simplificado para distribuir, acompanhar e gerenciar.',
  },
];

export default function SobreWhyPrize() {
  return (
    <section className="w-full flex justify-center px-6 py-16 md:py-24 bg-brand-50">
      <div className="max-w-5xl w-full flex flex-col items-center md:items-start gap-10">
        {/* Header */}
        <div className="text-center md:text-left w-full">
          <p className="text-sm text-gray-500 mb-2">Por que a Prize?</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug max-w-xl">
            Tudo que sua empresa precisa para valorizar seus talentos
          </h2>
        </div>

        {/* Feature cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-4">
              <div className="flex items-start gap-4 md:flex-col md:gap-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <feature.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
