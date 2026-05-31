"use client";

import Link from "next/link";
import AdminEditable from "./AdminEditable";

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-orange-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center gap-4">
        <Link href="/" className="flex items-center gap-3">
          <AdminEditable id="site-logo" type="img">
            <img 
              src="/assets/img/logo-herrera.svg" 
              alt="Herrera Materiais para Construção | Fábrica de Blocos em Campinas" 
              className="h-12 md:h-16" 
            />
          </AdminEditable>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 font-semibold text-sm lg:text-base">
          <Link href="/" className="hover:text-orange-600 transition">Início</Link>
          <Link href="/blocos" className="hover:text-orange-600 transition">Blocos</Link>
          <Link href="/revestimentos" className="hover:text-orange-600 transition">Revestimentos</Link>
          <Link href="/bordas-atermicas" className="hover:text-orange-600 transition">Bordas Atérmicas</Link>
          <Link href="/#orcamento" className="hover:text-orange-600 transition">Orçamento</Link>
          <Link href="/#contato" className="hover:text-orange-600 transition">Contato</Link>
        </nav>
        <a 
          href="https://wa.me/5519984515960?text=Olá! Quero um orçamento de material de construção em Campinas." 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-5 py-3 rounded-full font-bold hover:bg-green-600 transition whitespace-nowrap"
        >
          WhatsApp 19 98451-5960
        </a>
      </div>
    </header>
  );
}
