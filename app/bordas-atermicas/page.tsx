import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTAWhatsApp from "@/components/CTAWhatsApp";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import ProductCard from "@/components/ProductCard";
import { buildCanonical } from "@/lib/site";

type Product = {
  id: string;
  name: string;
  price?: string;
  image: { src: string; alt: string; width: number; height: number };
};

export const metadata: Metadata = {
  title: "Bordas Atérmicas em Campinas",
  description:
    "Bordas atérmicas para piscina em Campinas e região, com atendimento direto pelo WhatsApp. Peça orçamento e combine entrega conforme disponibilidade.",
  alternates: { canonical: buildCanonical("/bordas-atermicas") },
  openGraph: {
    title: "Bordas atérmicas para piscina em Campinas",
    description:
      "Acabamento que não esquenta para sua piscina. Orçamento rápido no WhatsApp para Campinas e RMC.",
    url: buildCanonical("/bordas-atermicas"),
  },
};

export default function BordasAtermicasPage() {
  const products: Product[] = [
    {
      id: "borda-item-0",
      name: "Borda atérmica premium 50×25",
      price: "69,20",
      image: {
        src: "https://cdn.awsli.com.br/2500x2500/1957/1957621/produto/143251805/premium-50x25cm-ugstwe.jpg",
        alt: "Borda atérmica premium 50x25 para piscina",
        width: 300,
        height: 300,
      },
    },
    {
      id: "borda-item-1",
      name: "Borda atérmica Malibu 50×20 (cinza)",
      price: "52,53",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x20x1,5cm_malibu_cinza__areia_de_qua_1570435811_4fba_300x300.png",
        alt: "Borda atérmica Malibu 50x20 cinza",
        width: 300,
        height: 300,
      },
    },
    {
      id: "borda-item-2",
      name: "Borda atérmica Havaí 100×27,5",
      price: "318,37",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/borda__atermica_piscina_havai_100_x_27,5_x_25_x_4_x_2,5cm_f_1568442710_24b1_300x300.jpg",
        alt: "Borda atérmica Havaí para piscina",
        width: 300,
        height: 300,
      },
    },
    {
      id: "borda-item-3",
      name: "Borda atérmica 50×15 (cinza)",
      price: "45,63",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x15x1,5cm_cinza_areia_de_quartzo_i_1570814144_b30e_300x300.jpg",
        alt: "Borda atérmica 50x15 cinza",
        width: 300,
        height: 300,
      },
    },
    {
      id: "borda-item-4",
      name: "Borda atérmica antiderrapante 50×25 (Malibu)",
      price: "57,40",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/borda_atermica_antiderrapante_para_piscina_50x25x1,5cm_malibu_1570494403_066f_300x300.jpg",
        alt: "Borda atérmica antiderrapante 50x25",
        width: 300,
        height: 300,
      },
    },
    {
      id: "borda-item-5",
      name: "Borda atérmica Malibu 50×20 (champagne)",
      price: "52,53",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x20x1,5cm_malibu_champagne_areia_de_1570435806_3697_300x300.jpg",
        alt: "Borda atérmica Malibu 50x20 champagne",
        width: 300,
        height: 300,
      },
    },
    {
      id: "borda-item-6",
      name: "Borda atérmica 50×15 (branca)",
      price: "45,63",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x15x1,5cm_branca_areia_de_quartzo_1570814143_9ae8_300x300.jpg",
        alt: "Borda atérmica 50x15 branca",
        width: 300,
        height: 300,
      },
    },
    {
      id: "borda-item-7",
      name: "Borda atérmica Salinas 50×25 (fendi)",
      price: "73,28",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina__salinas_50x25x2,5x1,5cm_fendi_areia_1568442702_a1e5_300x300.jpg",
        alt: "Borda atérmica Salinas 50x25 fendi",
        width: 300,
        height: 300,
      },
    },
    {
      id: "borda-item-8",
      name: "Borda atérmica Malibu 50×25 (branca)",
      price: "57,40",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/borda__atermica_para__piscina_50x25x1,5cm_malibu_branca__arei_1570289004_3b10_300x300.jpg",
        alt: "Borda atérmica Malibu 50x25 branca",
        width: 300,
        height: 300,
      },
    },
    {
      id: "borda-item-9",
      name: "Borda atérmica Salvattore 50×25 (kit)",
      price: "5.320,00",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_salvattore_50x25cm_kit_c_60_1569035135_ff1d_300x300.jpg",
        alt: "Borda atérmica Salvattore para piscina",
        width: 300,
        height: 300,
      },
    },
  ];

  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Bordas atérmicas", href: "/bordas-atermicas" },
  ];

  return (
    <main className="pt-20">
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Bordas atérmicas para piscina em Campinas e região
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            Acabamento confortável e com visual premium. Selecione um modelo e peça orçamento no
            WhatsApp com a cidade de entrega.
          </p>
        </div>
      </div>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                name={p.name}
                price={p.price}
                image={p.image}
                cityForMessage="Campinas"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Precisa de ajuda para escolher o modelo?
              </h2>
              <p className="mt-3 text-gray-600">
                Envie uma foto do seu projeto ou uma referência e a cidade de entrega. Retornamos
                com a cotação e as opções disponíveis.
              </p>
            </div>
            <CTAWhatsApp
              title="Orçar borda atérmica no WhatsApp"
              description="Atendimento direto para cotar bordas atérmicas para piscina."
              message="Olá! Quero um orçamento de borda atérmica para entrega em Campinas."
            />
          </div>
        </div>
      </section>

      <FAQ
        title="Perguntas frequentes sobre bordas atérmicas"
        items={[
          {
            question: "Borda atérmica é indicada para piscina?",
            answer:
              "Sim. Ela é pensada para áreas externas e ajuda no conforto térmico. Confirme o modelo ideal para sua área pelo WhatsApp.",
          },
          {
            question: "Entregam em Campinas e RMC?",
            answer:
              "Sim. Atendemos Campinas e cidades próximas conforme disponibilidade e logística.",
          },
        ]}
      />

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbs.map((b, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              name: b.label,
              item: buildCanonical(b.href),
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Borda atérmica é indicada para piscina?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim. Ela é pensada para áreas externas e ajuda no conforto térmico. Confirme o modelo ideal para sua área pelo WhatsApp.",
                },
              },
              {
                "@type": "Question",
                name: "Entregam em Campinas e RMC?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim. Atendemos Campinas e cidades próximas conforme disponibilidade e logística.",
                },
              },
            ],
          },
        ]}
      />
    </main>
  );
}
