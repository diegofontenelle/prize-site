import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full flex justify-center py-4 px-4 fixed top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-brand-600 font-bold text-3xl tracking-tighter">
          <Image src="/img/logo-prize.png" alt="Logo Prize" width={100} height={100} />
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
            <Link href="#produto" className="flex items-center gap-1 hover:text-brand-600 transition-colors text-brand-500">
              Produto <ChevronDown className="w-4 h-4" />
            </Link>
            <Link href="#sobre" className="flex items-center gap-1 hover:text-brand-600 transition-colors text-brand-500">
              Sobre <ChevronDown className="w-4 h-4" />
            </Link>
            <Link href="#ajuda" className="flex items-center gap-1 hover:text-brand-600 transition-colors text-brand-500">
              Ajuda <ChevronDown className="w-4 h-4" />
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="#login"
              className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm"
            >
              Acessar conta
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
