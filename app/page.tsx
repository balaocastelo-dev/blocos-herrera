"use client";

import Link from "next/link";
import AdminEditable from "@/components/AdminEditable";
import ProductCarousel from "@/components/ProductCarousel";

export default function Home() {
  const revestimentos = [
    { name: "Revestimento para Piscina 10x10cm Noronha Jade Mesh Eliane", price: "138,05", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_noronha_jade_30x40,10cm_eliane_92004465_e723_300x300.JPG" },
    { name: "Revestimento para Piscina 10x10cm Noronha Mar Mesh Eliane", price: "138,05", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_noronha_mar_30x40,1cm_eliane_92009582_4af0_300x300.JPG" },
    { name: "Revestimento para Piscina 20x20cm Hijau Verde Artens", price: "184,11", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_brilhante_hijau_verde_20x20cm_91920073_7069_300x300.JPG" },
    { name: "Revestimento para Piscina 20x20cm Hijau Azul Artens", price: "184,11", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_brilhante_hijau_azul_20x20cm_91920052_011b_300x300.JPG" },
    { name: "Revestimento para Piscina 20x20cm Hijau Verde Artens (Acetinado)", price: "184,11", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_acetinado_hijau_verde_20x20cm_91920080_83da_300x300.JPG" },
    { name: "Revestimento para Piscina 20x20cm Hijau Azul Artens (Acetinado)", price: "184,11", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_acetinado_hijau_azul_20x20cm_91920066_1e88_300x300.JPG" },
    { name: "Revestimento para Piscina 10x10cm Java Mar Mesh Eliane", price: "122,26", img: "https://cdn.leroymerlin.com.br/products/rev_ex_br_bo_10x10_java_mar_mesh_m2_92359071_ae1e_300x300.png" },
    { name: "Revestimento para Piscina Boreal Ivy 20x20cm Artens", price: "115,68", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_boreal_ivy_20x20cm_artens_91943866_00dc_300x300.JPG" },
    { name: "Revestimento para Piscina 20x20cm Grace Bay Artens", price: "90,86", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_grace_bay_20x20cm_artens_90700701_70af_300x300.JPG" },
    { name: "Revestimento para Piscina 10x10cm Noronha Aqua Mesh Eliane", price: "138,05", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_noronha_agua_mesh_30x40,1cm_92011682_4dad_300x300.png" },
  ];

  const bordas = [
    { name: "Borda Atérmica Piscina 50x25cm Premium", price: "69,20", img: "https://cdn.awsli.com.br/2500x2500/1957/1957621/produto/143251805/premium-50x25cm-ugstwe.jpg" },
    { name: "Borda Atérmica Piscina 50x20cm Malibu Cinza", price: "52,53", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x20x1,5cm_malibu_cinza__areia_de_qua_1570435811_4fba_300x300.png" },
    { name: "Borda Atérmica Piscina Havaí 100x27cm", price: "318,37", img: "https://cdn.leroymerlin.com.br/products/borda__atermica_piscina_havai_100_x_27,5_x_25_x_4_x_2,5cm_f_1568442710_24b1_300x300.jpg" },
    { name: "Borda Atérmica Piscina 50x15cm Cinza", price: "45,63", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x15x1,5cm_cinza_areia_de_quartzo_i_1570814144_b30e_300x300.jpg" },
    { name: "Borda Atérmica Malibu Champagne 50x20cm", price: "52,53", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x20x1,5cm_malibu_champagne_areia_de_1570435806_3697_300x300.jpg" },
    { name: "Borda Atérmica Piscina Salinas 50x25cm Fendi", price: "73,28", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina__salinas_50x25x2,5x1,5cm_fendi_areia_1568442702_a1e5_300x300.jpg" },
    { name: "Borda Atérmica Piscina Salvattore 50x25cm", price: "5.320,00", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_salvattore_50x25cm_kit_c_60_1569035135_ff1d_300x300.jpg" },
    { name: "Borda Atérmica Malibu Branca 50x25cm", price: "57,40", img: "https://cdn.leroymerlin.com.br/products/borda__atermica_para__piscina_50x25x1,5cm_malibu_branca__arei_1570289004_3b10_300x300.jpg" },
  ];

  const areiaPedra = [
    { name: "Areia Fina", price: "150,00", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaVMQuZbSa8KchhDeWYcYc7gHk9JeshP6fg&s" },
    { name: "Areia Média", price: "150,00", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaVMQuZbSa8KchhDeWYcYc7gHk9JeshP6fg&s" },
    { name: "Areia Grossa", price: "150,00", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaVMQuZbSa8KchhDeWYcYc7gHk9JeshP6fg&s" },
    { name: "Pedrisco", price: "200,00", img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80" },
    { name: "Pedra 2", price: "200,00", img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80" },
    { name: "Pedra 4", price: "200,00", img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="parallax-hero text-center text-white px-4 relative">
        <div className="hero-overlay"></div>
        <iframe 
          src="https://www.youtube.com/embed/nzUsq1lbKzI?autoplay=1&mute=1&loop=1&playlist=nzUsq1lbKzI&controls=0&rel=0&showinfo=0&iv_load_policy=3" 
          frameBorder="0" 
          allow="autoplay; encrypted-media"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"
        ></iframe>
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold font-oswald mb-6 tracking-tight">Herrera Materiais para construcao e fabrica de blocos</h1>
          <p className="text-xl md:text-2xl mb-4 font-light italic">Material de construcao em Campinas com entrega rapida para obras em toda a RMC</p>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-orange-100 mb-8">Blocos estruturais, areia, pedra, pedrisco, cimento e revestimentos com atendimento agil pelo WhatsApp para Campinas, Hortolandia, Sumare, Paulinia, Valinhos e cidades vizinhas.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/blocos" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl text-center">Ver Blocos</Link>
            <Link href="/#orcamento" className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl text-center">Fazer Orcamento</Link>
            <a href="https://wa.me/5519984515960?text=Ola! Quero comprar material de construcao em Campinas." target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl text-center">WhatsApp Agora</a>
          </div>
          <p className="mt-8 text-orange-300 font-bold uppercase tracking-widest">Entrega rapida em Campinas e Regiao Metropolitana | Pedido minimo de 1000 blocos</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <FeatureItem title="Entrega em 24h" desc="Agilidade para sua obra em Campinas nao parar." icon="M13 10V3L4 14h7v7l9-11h-7z" />
          <FeatureItem title="Qualidade Superior" desc="Blocos estruturais e materiais de alta resistencia." icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          <FeatureItem title="Campinas e Regiao" desc="Atendimento em Campinas, Hortolandia, Sumare, Paulinia e RMC." icon="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          <FeatureItem title="Orcamento Rapido" desc="Resposta agil pelo WhatsApp 19 98451-5960." icon="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-2m10-8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V8z" />
        </div>
      </section>

      {/* Product Carousels */}
      <ProductCarousel title="Areia e Pedra" products={areiaPedra} idPrefix="areia-pedra-home" />
      <ProductCarousel title="Destaques em Revestimentos" products={revestimentos} idPrefix="rev-home" />
      <ProductCarousel title="Destaques em Bordas Atérmicas" products={bordas} idPrefix="borda-home-carousel" />

      {/* City Pages Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold font-oswald uppercase mb-4">Paginas Locais da RMC</h2>
            <p className="text-gray-600 max-w-4xl mx-auto">Malha interna criada para atacar buscas locais de alta intencao comercial por cidade e fortalecer a indexacao organica em toda a regiao metropolitana de Campinas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CityLink slug="campinas" name="Campinas" desc="Material de construcao em Campinas com foco em busca local." />
            <CityLink slug="hortolandia" name="Hortolandia" desc="Landing local para blocos, areia, pedra e cimento." />
            <CityLink slug="sumare" name="Sumare" desc="Conteudo focado em obra residencial e comercial." />
            <CityLink slug="paulinia" name="Paulinia" desc="Material para obra com CTA direto para WhatsApp." />
            <CityLink slug="valinhos" name="Valinhos" desc="Busca local com copy orientada a conversao." />
            <CityLink slug="vinhedo" name="Vinhedo" desc="Pagina otimizada para ranquear termos comerciais." />
            <CityLink slug="monte-mor" name="Monte Mor" desc="Relevancia regional e captacao de lead local." />
            <CityLink slug="nova-odessa" name="Nova Odessa" desc="Landing dedicada para ampliar a coverage da RMC." />
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureItem({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="p-6">
      <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon}></path>
        </svg>
      </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function CityLink({ slug, name, desc }: { slug: string; name: string; desc: string }) {
  return (
    <Link href={`/cidade/${slug}`} className="rounded-2xl border border-orange-100 bg-orange-50 p-6 shadow-sm transition hover:shadow-lg">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600">{desc}</p>
    </Link>
  );
}
