import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-14" id="rodape">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-orange-500 font-oswald mb-6 uppercase">Herrera Materiais para construcao e fabrica de blocos</h2>
            <p className="text-gray-400">Material de construcao em Campinas com foco em blocos estruturais, areia, pedra, pedrisco, cimento e revestimentos para obras residenciais, comerciais e industriais.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-6">Contato</h2>
            <p className="text-gray-400">Rua Julia Aberle Fritz, 200 - Pq Vista Alegre, Campinas/SP</p>
            <p className="text-gray-400 mt-3">(19) 98451-5960</p>
            <p className="text-green-400 font-semibold mt-3">Orcamento rapido pelo WhatsApp para Campinas e regiao.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-6">Links Rapidos</h2>
            <div className="space-y-2 text-gray-400 flex flex-col">
              <Link href="/revestimentos" className="hover:text-orange-500 transition">Nossos produtos</Link>
              <Link href="/#orcamento" className="hover:text-orange-500 transition">Calculadora de materiais</Link>
              <a href="https://wa.me/5519984515960" className="hover:text-orange-500 transition">Falar no WhatsApp</a>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-6">Regiao Atendida</h2>
            <p className="text-gray-400">Campinas, Hortolandia, Sumare, Paulinia, Valinhos, Vinhedo, Monte Mor, Nova Odessa e cidades da RMC.</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm space-y-2">
          <p>&copy; 2026 Herrera Materiais para construcao e fabrica de blocos. Todos os direitos reservados. Pedido minimo de 1000 blocos.</p>
        </div>
      </div>
    </footer>
  );
}
