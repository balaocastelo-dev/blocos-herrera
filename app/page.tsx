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
  ];

  const bordas = [
    { name: "Borda Atérmica Piscina 50x25x2,0cm Maresias Branca - Areia D...", price: "69,20", img: "https://cdn.awsli.com.br/2500x2500/1957/1957621/produto/143251805/premium-50x25cm-ugstwe.jpg" },
    { name: "Borda Atérmica Piscina 50x20x1,5cm Malibu Cinza Areia De Qua...", price: "52,53", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x20x1,5cm_malibu_cinza__areia_de_qua_1570435811_4fba_300x300.png" },
    { name: "Borda Atérmica Piscina - Havaí 100 X 27,5 X 25 X 4 X 2,5cm F...", price: "318,37", img: "https://cdn.leroymerlin.com.br/products/borda__atermica_piscina_havai_100_x_27,5_x_25_x_4_x_2,5cm_f_1568442710_24b1_300x300.jpg" },
    { name: "Borda Atérmica Piscina 50x15x1,5cm Cinza - Areia De Quartzo I...", price: "45,63", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x15x1,5cm_cinza_areia_de_quartzo_i_1570814144_b30e_300x300.jpg" },
    { name: "Borda Atérmica Antiderrapante Para Piscina 50x25x1,5cm Malibu...", price: "57,40", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_antiderrapante_para_piscina_50x25x1,5cm_malibu_1570494403_066f_300x300.jpg" },
    { name: "Borda Atérmica Piscina 50x20x1,5cm Malibu Champagne Areia De", price: "52,53", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x20x1,5cm_malibu_champagne_areia_de_1570435806_3697_300x300.jpg" },
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

      {/* Products Grid */}
      <section id="produtos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-oswald mb-4 uppercase">Outros Produtos Para Sua Obra</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Materiais basicos, acabamentos e insumos para obras em Campinas e regiao.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            <ProductCard id="cimento-home" title="Cimento Votoran (50kg)" price="R$ 37,50" unit="/ Saco" img="https://images.tcdn.com.br/img/img_prod/1110543/cimento_todas_obras_50kg_cpii_votoran_17_1_0920c5d011f0458129e71c9985223e71.jpg" />
            <ProductCard id="areia-home" title="Areia (Fina/Media/Grossa)" price="R$ 150,00" unit="/ Metro (Min. 7m)" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaVMQuZbSa8KchhDeWYcYc7gHk9JeshP6fg&s" />
            <ProductCard id="pedra-home" title="Pedra e Pedrisco" price="R$ 200,00" unit="/ Metro (Min. 7m)" img="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80" />
            <ProductCard id="piscina-home" title="Revestimentos (Piscina)" price="Consulte" unit="/ m²" img="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80" link="/revestimentos" />
            <ProductCard id="bordas-home" title="Bordas Atérmicas" price="Consulte" unit="/ Unidade" img="https://cdn.awsli.com.br/2500x2500/1957/1957621/produto/143251805/premium-50x25cm-ugstwe.jpg" link="/bordas-atermicas" />
          </div>
        </div>
      </section>

      {/* Product Carousels */}
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

function ProductCard({ id, title, price, unit, img, link }: { id: string; title: string; price: string; unit: string; img: string; link?: string }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <div className="h-48 bg-gray-50 flex items-center justify-center p-2">
        <AdminEditable id={id} type="img">
          <img src={img} alt={title} className="max-h-full max-w-full object-contain" />
        </AdminEditable>
      </div>
      <div className="p-6 text-center">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-orange-600 text-2xl font-bold mb-4">
          <AdminEditable id={id} type="price">
            <span>{price}</span>
          </AdminEditable>
          <span className="text-sm text-gray-500 font-normal"> {unit}</span>
        </p>
        {link ? (
          <Link href={link} className="block text-center border-2 border-orange-600 text-orange-600 font-bold py-2 rounded-lg hover:bg-orange-600 hover:text-white transition">Ver Catalogo</Link>
        ) : (
          <a href={`https://wa.me/5519984515960?text=Gostaria de saber mais sobre ${title}`} className="block text-center border-2 border-orange-600 text-orange-600 font-bold py-2 rounded-lg hover:bg-orange-600 hover:text-white transition">Orcar no WhatsApp</a>
        )}
      </div>
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
