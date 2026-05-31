import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import TrustBar from "@/components/TrustBar";
import ProductCarousel from "@/components/ProductCarousel";
import CityGrid from "@/components/CityGrid";
import FAQ from "@/components/FAQ";
import CTAWhatsApp from "@/components/CTAWhatsApp";
import ServiceArea from "@/components/ServiceArea";
import { buildCanonical, buildWhatsAppUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fábrica de Blocos em Campinas",
  description:
    "Blocos estruturais, areia, pedra, pedrisco, cimento e materiais para sua obra com entrega em Campinas e RMC. Peça orçamento no WhatsApp e agilize.",
  alternates: {
    canonical: buildCanonical("/"),
  },
  openGraph: {
    title: "Fábrica de Blocos e Materiais de Construção em Campinas",
    description:
      "Atendimento direto no WhatsApp para orçamento. Entrega em Campinas e Região Metropolitana de Campinas.",
    url: buildCanonical("/"),
  },
};

export default function HomePage() {
  const destaquesBlocos = [
    {
      name: "Bloco 14×19×39 Estrutural",
      price: "Sob consulta",
      img: "https://static.wixstatic.com/media/2d7880_3bad9af6c0844a3eb332e04af6dedde3~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_3bad9af6c0844a3eb332e04af6dedde3~mv2.png",
    },
    {
      name: "Bloco 9×19×39 Estrutural",
      price: "Sob consulta",
      img: "https://static.wixstatic.com/media/2d7880_565031a70e14493182833932780cc783~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_565031a70e14493182833932780cc783~mv2.png",
    },
    {
      name: "Canaleta 14×19×39",
      price: "Sob consulta",
      img: "https://static.wixstatic.com/media/2d7880_3d4936a89d58444a91ba0883e3d1c53b~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_3d4936a89d58444a91ba0883e3d1c53b~mv2_d_5472_3648_s_4_2.png",
    },
    {
      name: "Piso intertravado (retangular)",
      price: "Sob consulta",
      img: "https://static.wixstatic.com/media/2d7880_9f57a72ebdda4682bcd9c2512b18a234~mv2.jpg/v1/fill/w_460,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_9f57a72ebdda4682bcd9c2512b18a234~mv2.jpg",
    },
  ];

  const destaquesAgregados = [
    {
      name: "Areia para construção",
      price: "Sob consulta",
      img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Pedra e pedrisco",
      price: "Sob consulta",
      img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <main className="pt-20">
      <Hero
        h1="Fábrica de Blocos e Materiais de Construção em Campinas"
        subtitle="Blocos estruturais, areia, pedra, pedrisco, cimento e materiais para sua obra com entrega em Campinas e RMC."
        primaryCta={{
          label: "Pedir orçamento no WhatsApp",
          href: buildWhatsAppUrl(
            "Olá! Quero um orçamento de blocos e materiais para entrega em Campinas.",
          ),
        }}
        secondaryCta={{ label: "Ver produtos", href: "/blocos" }}
        badges={[
          "Entrega em Campinas e região",
          "Pedido mínimo de 1.000 blocos",
          "Atendimento rápido pelo WhatsApp",
        ]}
      />

      <CategoryGrid />
      <TrustBar />

      <section className="bg-white py-4" id="produtos">
        <ProductCarousel
          title="Destaques em blocos e pisos"
          products={destaquesBlocos}
          idPrefix="home-destaque-blocos"
        />
        <ProductCarousel
          title="Agregados para obra"
          products={destaquesAgregados}
          idPrefix="home-destaque-agregados"
        />
      </section>

      <section id="cidades">
        <CityGrid />
      </section>

      <section id="orcamento" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Sua obra não pode parar. Peça seu orçamento agora.
              </h2>
              <p className="mt-3 text-gray-600">
                Envie sua lista (ou a medida do bloco), a cidade de entrega e o prazo. Retornamos
                com a cotação e orientações para comprar do jeito certo.
              </p>
            </div>
            <CTAWhatsApp
              title="Orçamento pelo WhatsApp"
              description="Atendimento direto para cotar blocos, areia, pedra, pedrisco e materiais para sua obra."
              message="Olá! Quero um orçamento de materiais para construção com entrega em Campinas e RMC."
            />
          </div>
        </div>
      </section>

      <FAQ
        title="Perguntas frequentes"
        items={[
          {
            question: "Vocês entregam em Campinas?",
            answer:
              "Sim. Atendemos Campinas e cidades da Região Metropolitana conforme a logística e o volume do pedido.",
          },
          {
            question: "Qual é o pedido mínimo?",
            answer: "Para blocos, o pedido mínimo é de 1.000 unidades.",
          },
          {
            question: "Vocês vendem bloco estrutural?",
            answer:
              "Sim. Trabalhamos com medidas comuns de obra. Envie a medida desejada para cotação.",
          },
          {
            question: "Fazem orçamento pelo WhatsApp?",
            answer:
              "Sim. Envie a lista de materiais, a cidade da entrega e o prazo. Retornamos com a cotação.",
          },
          {
            question: "Atendem obras grandes?",
            answer:
              "Sim. Cotamos volumes maiores com programação de entrega conforme a necessidade da obra.",
          },
          {
            question: "Entregam areia, pedra e pedrisco?",
            answer:
              "Sim. Trabalhamos com agregados para obra e podemos cotar junto com blocos conforme disponibilidade.",
          },
        ]}
      />

      <ServiceArea />
    </main>
  );
}
