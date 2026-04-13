'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ESTADOS = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO',
  'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI',
  'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
];

const SETORES = [
  'Tecnologia', 'Saúde', 'Educação', 'Varejo', 'Indústria',
  'Financeiro', 'Agronegócio', 'Serviços', 'Outro',
];

const SEGMENTOS = [
  'Pequena empresa', 'Média empresa', 'Grande empresa', 'Startup', 'Outro',
];

const TIPOS_DEMANDA = [
  'Premiação de funcionários', 'Campanhas de incentivo', 'Benefícios corporativos',
  'Parceria comercial', 'Suporte técnico', 'Outro',
];

const inputCls =
  'w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition';

function SelectField({
  value,
  onChange,
  placeholder,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputCls} appearance-none cursor-pointer pr-10 ${value === '' ? 'text-gray-400' : 'text-gray-700'}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

export default function FaleContatoHero() {
  const [form, setForm] = useState({
    email: '',
    emailComercial: '',
    cargo: '',
    setor: '',
    estado: '',
    segmento: '',
    tipoDemanda: '',
    aceite: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof typeof form>(key: K, val: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.emailComercial || !form.cargo) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.emailComercial)) return;
    setSubmitted(true);
  };

  return (
    <section className="w-full pt-20 md:pt-24 flex justify-center rounded-tr-[80px]">
      <div className="hidden md:block bg-brand-500 w-full h-[260px] absolute top-[80px] left-0 z-0 rounded-tl-[120px] rounded-br-[120px]" />
      <div className="max-w-7xl w-full flex flex-col md:flex-row md:items-start gap-6 md:gap-4 px-4 md:px-8 pt-8 pb-12 md:pb-16 md:mt-[40px]">

        {/* ── Left: portrait image ── */}
        <div className="hidden md:block w-[42%] shrink-0">
          <div className="relative w-full h-[730px] rounded-3xl overflow-hidden">
            <Image
              src="/img/fale-conosco/contact-form.png"
              alt="Mulher segurando smartphone, pensativa"
              fill
              sizes="(min-width: 768px)"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* ── Right: form card ── */}
        <div className="w-full md:w-[58%] md:h-[730px] bg-white rounded-2xl shadow-xl border border-gray-100 p-7 md:p-8 z-10">

          {/* Heading */}
          <div className="mb-6">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">
              Alguma dúvida?
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-brand-600 mb-2">
              Entre em contato
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              Nossa time está à disposição para responder a todas as suas perguntas.
            </p>
          </div>

          {submitted ? (
            /* Success state */
            <div className="flex flex-col items-center justify-center py-14 gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Mensagem enviada!</h2>
              <p className="text-gray-500 text-sm max-w-xs">
                Obrigado pelo contato. Nossa equipe responderá em breve.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ email: '', emailComercial: '', cargo: '', setor: '', estado: '', segmento: '', tipoDemanda: '', aceite: false }); }}
                className="mt-1 text-brand-500 text-sm font-medium hover:text-brand-600 transition-colors underline-offset-2 hover:underline"
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5" noValidate>

              {/* Email row */}
              <input
                type="email"
                placeholder="Email *"
                required
                value={form.email}
                onChange={(e) => set('email', e.target.value)}
                className={inputCls}
              />

              {/* Email comercial */}
              <input
                type="email"
                placeholder="Email comercial *"
                required
                value={form.emailComercial}
                onChange={(e) => set('emailComercial', e.target.value)}
                className={inputCls}
              />

              {/* Cargo */}
              <input
                type="text"
                placeholder="Cargo *"
                required
                value={form.cargo}
                onChange={(e) => set('cargo', e.target.value)}
                className={inputCls}
              />

              {/* Setor + Estado — 2 col on desktop */}
              <div className="grid grid-cols-1 gap-3.5">
                <SelectField
                  value={form.setor}
                  onChange={(v) => set('setor', v)}
                  placeholder="Setor"
                  options={SETORES}
                />
                <SelectField
                  value={form.estado}
                  onChange={(v) => set('estado', v)}
                  placeholder="Estado"
                  options={ESTADOS}
                />
              </div>

              {/* Segmento */}
              <SelectField
                value={form.segmento}
                onChange={(v) => set('segmento', v)}
                placeholder="Segmento"
                options={SEGMENTOS}
              />

              {/* Tipo de demanda */}
              <SelectField
                value={form.tipoDemanda}
                onChange={(v) => set('tipoDemanda', v)}
                placeholder="Tipo de demanda"
                options={TIPOS_DEMANDA}
              />

              {/* Consent checkbox */}
              <label className="flex items-start gap-3 cursor-pointer group mt-1">
                <input
                  type="checkbox"
                  checked={form.aceite}
                  onChange={(e) => set('aceite', e.target.checked)}
                  className="mt-0.5 w-4 h-4 shrink-0 accent-brand-500 cursor-pointer"
                />
                <span className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                  Eu concordo em receber comunicações da Prize por e-mail e WhatsApp.
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3.5 rounded-full flex items-center justify-center gap-2 transition-colors shadow-md mt-1"
              >
                Enviar mensagem
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
