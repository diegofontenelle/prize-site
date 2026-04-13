import { Linkedin, MessageCircle, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="max-w-7xl w-full bg-brand-500 text-white flex flex-col items-center pt-16 pb-6 px-4 mt-12 rounded-tl-[60px] rounded-tr-[60px]">
      <div className="w-full px-[96px] flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 mb-16">

        <div className="flex items-center gap-2 text-white font-bold text-4xl tracking-tighter">
          <Image
            src="/img/logo-prize-white.png"
            alt="Logo Prize"
            width={168}
            height={43}
          />
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-xl font-semibold mb-2">Funcionamento</h4>
          <p className="text-white/90">Seg à Sex | 8:00 - 18:00</p>
          <p className="text-white/90">Sáb | 8:00 - 12:00</p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-xl font-semibold mb-2">Contatos</h4>
          <a href="mailto:adm@prizebr.com" className="text-white/90 hover:text-white transition-colors">
            adm@prizebr.com
          </a>
          <a href="tel:+5511975821007" className="text-white/90 hover:text-white transition-colors">
            +55 (11) 97582-1007
          </a>
          <a href="/fale-conosco" className="text-white/90 hover:text-white transition-colors underline underline-offset-2">
            Fale Conosco →
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-semibold mb-2">Nossas redes</h4>
          <div className="flex items-center gap-4">
            <a href="#linkedin" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Linkedin className="w-5 h-5 fill-current" aria-hidden="true" />
            </a>
            <a href="#whatsapp" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
              <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
            </a>
            <a href="#email" aria-label="Email" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Mail className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>

      <div className="w-full max-w-7xl border-t border-white/20 pt-6 text-center text-sm text-white/70">
        © 2026 Prize | CNPJ: 30.673.508/0001-11 | Todos direitos reservados
      </div>
    </footer>
  );
}
