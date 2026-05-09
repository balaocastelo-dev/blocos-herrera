"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const cityData: { [key: string]: any } = {
  'campinas': {
    name: 'Campinas',
    headline: 'Material de Construcao em Campinas',
    description: 'A Olaria Herrera atende Campinas com blocos estruturais, areia, pedra, pedrisco, cimento e revestimentos para obras residenciais, comerciais e industriais.',
    keywords: 'material de construcao em Campinas, blocos de concreto em Campinas, areia em Campinas, pedra em Campinas',
  },
  'hortolandia': {
    name: 'Hortolandia',
    headline: 'Material de Construcao em Hortolandia',
    description: 'Entrega de material de construcao em Hortolandia com foco em blocos estruturais, areia, pedra e pedrisco para obras residenciais e comerciais.',
    keywords: 'material de construcao em hortolandia, blocos de concreto hortolandia, areia em hortolandia, pedra em hortolandia',
  },
  'sumare': {
    name: 'Sumare',
    headline: 'Material de Construcao em Sumare',
    description: 'A Olaria Herrera atende Sumare com material de construcao, blocos estruturais, areia, pedra, pedrisco e atendimento agil pelo WhatsApp.',
    keywords: 'material de construcao em sumare, blocos de concreto sumare, areia em sumare, pedra em sumare',
  },
  'paulinia': {
    name: 'Paulinia',
    headline: 'Material de Construcao em Paulinia',
    description: 'Fornecimento de material de construcao em Paulinia com entrega rapida, blocos estruturais, areia, pedra e revestimentos para obras na cidade.',
    keywords: 'material de construcao em paulinia, blocos de concreto paulinia, areia em paulinia, pedra em paulinia',
  },
  'valinhos': {
    name: 'Valinhos',
    headline: 'Material de Construcao em Valinhos',
    description: 'A Olaria Herrera atende Valinhos com material para obra, blocos, areia, pedra, pedrisco e apoio comercial pelo WhatsApp.',
    keywords: 'material de construcao em valinhos, blocos de concreto valinhos, areia em valinhos, pedra em valinhos',
  },
  'vinhedo': {
    name: 'Vinhedo',
    headline: 'Material de Construcao em Vinhedo',
    description: 'Material de construcao em Vinhedo com entrega para obras, blocos estruturais, areia, pedra, pedrisco e atendimento rapido da Olaria Herrera.',
    keywords: 'material de construcao em vinhedo, blocos de concreto vinhedo, areia em vinhedo, pedra em vinhedo',
  },
  'monte-mor': {
    name: 'Monte Mor',
    headline: 'Material de Construcao em Monte Mor',
    description: 'A Olaria Herrera atende Monte Mor com blocos estruturais, areia, pedra, pedrisco e materiais para obras residenciais e comerciais.',
    keywords: 'material de construcao em monte mor, blocos de concreto monte mor, areia em monte mor, pedra em monte mor',
  },
  'nova-odessa': {
    name: 'Nova Odessa',
    headline: 'Material de Construcao em Nova Odessa',
    description: 'Entrega de material de construcao em Nova Odessa com foco em blocos estruturais, areia, pedra e pedrisco para obras em toda a cidade.',
    keywords: 'material de construcao em nova odessa, blocos de concreto nova odessa, areia em nova odessa, pedra em nova odessa',
  },
};

export default function CityPage() {
  const params = useParams();
  const slug = params.slug as string;
  const city = cityData[slug];

  if (!city) {
    return <div>Cidade não encontrada</div>;
  }

  return (
    <main className="pt-20">
      <section className="parallax-hero text-center text-white px-4 relative h-[68vh] flex items-center justify-center overflow-hidden">
        <div className="hero-overlay absolute inset-0 bg-black/50 z-0"></div>
        <iframe 
          src="https://www.youtube.com/embed/nzUsq1lbKzI?autoplay=1&mute=1&loop=1&playlist=nzUsq1lbKzI&controls=0&rel=0&showinfo=0&iv_load_policy=3" 
          frameBorder="0" 
          allow="autoplay; encrypted-media"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"
        ></iframe>
        <div className="max-w-5xl relative z-10">
          <p className="mb-4 text-orange-200 font-bold uppercase tracking-[0.35em]">Pagina local da RMC</p>
          <h1 className="text-5xl md:text-7xl font-extrabold font-oswald mb-6 tracking-tight uppercase">{city.headline}</h1>
          <p className="mx-auto max-w-4xl text-lg md:text-2xl text-orange-50">Deposito de material de construcao em {city.name} com entrega rapida e atendimento no WhatsApp</p>
        </div>
      </section>

      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <h2 className="mb-3 text-2xl font-bold text-orange-800 uppercase">Busca local forte</h2>
            <p className="text-gray-700">{city.keywords}</p>
          </div>
          <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <h2 className="mb-3 text-2xl font-bold text-orange-800 uppercase">Atendimento comercial</h2>
            <p className="text-gray-700">A Olaria Herrera atende {city.name} com blocos estruturais, areia, pedra, pedrisco, cimento e revestimentos para obras residenciais, comerciais e industriais.</p>
          </div>
          <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <h2 className="mb-3 text-2xl font-bold text-orange-800 uppercase">Conversao rapida</h2>
            <p className="text-gray-700">CTA forte para WhatsApp 19 98451-5960, copy local e malha interna com cidades da RMC.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-50/70">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] items-center">
            <div>
              <p className="text-orange-600 font-bold uppercase tracking-[0.3em] mb-4">SEO extremo local</p>
              <h2 className="text-4xl font-bold font-oswald uppercase mb-6">Deposito de material de construcao em {city.name} com foco em ranqueamento e lead</h2>
              <p className="text-lg text-gray-700 mb-6">A landing page de {city.name} foi escrita para atacar buscas de alta intencao comercial, com termos agressivos ligados a compra de material de construcao, blocos estruturais, areia para obra, pedra e pedrisco, cimento e atendimento por WhatsApp.</p>
              <div className="flex flex-wrap gap-3">
                {city.keywords.split(',').map((kw: string, i: number) => (
                  <span key={i} className="chip">{kw.trim()}</span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Pedir cotacao agora</h2>
              <p className="text-gray-600 mb-6">Fale com a equipe da Olaria Herrera para cotar blocos, areia, pedra, pedrisco, cimento e revestimentos para entrega em {city.name}.</p>
              <a href={`https://wa.me/5519984515960?text=${encodeURIComponent('Ola! Quero cotar material de construcao para entrega em ' + city.name + '.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex w-full justify-center rounded-xl bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-600">WhatsApp de vendas</a>
            </div>
          </div>
        </div>
      </section>

      {/* Malha Interna */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold font-oswald uppercase mb-4">Outras cidades da RMC</h2>
            <p className="text-gray-600">Malha interna local para reforcar rastreamento, indexacao e distribuicao de relevancia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.keys(cityData).filter(s => s !== slug).map(s => (
              <Link key={s} href={`/cidade/${s}`} className="rounded-2xl border border-orange-100 bg-orange-50 p-5 shadow-sm transition hover:shadow-lg">
                <h3 className="text-lg font-bold mb-2">{cityData[s].name}</h3>
                <p className="text-gray-600 text-sm">Material de construcao em {cityData[s].name}.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
