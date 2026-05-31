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
  title: "Blocos Estruturais em Campinas",
  description:
    "Blocos de concreto, canaletas e pisos intertravados com entrega em Campinas e RMC. Peça orçamento no WhatsApp e receba atendimento direto.",
  alternates: { canonical: buildCanonical("/blocos") },
  openGraph: {
    title: "Blocos Estruturais e Canaletas em Campinas",
    description:
      "Blocos de concreto e canaletas com entrega em Campinas e RMC. Orçamento rápido no WhatsApp.",
    url: buildCanonical("/blocos"),
  },
};

export default function BlocosPage() {
  const products: Product[] = [
    {
      id: "bloco-0",
      name: "Bloco estrutural 14×19×39 (vazado)",
      price: "5,15",
      image: {
        src: "https://static.wixstatic.com/media/2d7880_3bad9af6c0844a3eb332e04af6dedde3~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_3bad9af6c0844a3eb332e04af6dedde3~mv2.png",
        alt: "Bloco estrutural 14x19x39 de concreto",
        width: 460,
        height: 460,
      },
    },
    {
      id: "bloco-1",
      name: "Bloco estrutural 9×19×39 (vazado)",
      price: "4,48",
      image: {
        src: "https://static.wixstatic.com/media/2d7880_565031a70e14493182833932780cc783~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_565031a70e14493182833932780cc783~mv2.png",
        alt: "Bloco estrutural 9x19x39 de concreto",
        width: 460,
        height: 460,
      },
    },
    {
      id: "bloco-2",
      name: "Canaleta 14×19×39 estrutural",
      price: "6,45",
      image: {
        src: "https://static.wixstatic.com/media/2d7880_3d4936a89d58444a91ba0883e3d1c53b~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_3d4936a89d58444a91ba0883e3d1c53b~mv2_d_5472_3648_s_4_2.png",
        alt: "Canaleta 14x19x39 de concreto",
        width: 460,
        height: 460,
      },
    },
    {
      id: "bloco-3",
      name: "Piso intertravado retangular 10×20×06 (35 MPa)",
      price: "2,11",
      image: {
        src: "https://static.wixstatic.com/media/2d7880_9f57a72ebdda4682bcd9c2512b18a234~mv2.jpg/v1/fill/w_460,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_9f57a72ebdda4682bcd9c2512b18a234~mv2.jpg",
        alt: "Piso intertravado retangular para áreas externas",
        width: 460,
        height: 460,
      },
    },
    {
      id: "bloco-4",
      name: "Piso intertravado 16 faces (onda) 11×22×06 (35 MPa)",
      price: "2,65",
      image: {
        src: "https://static.wixstatic.com/media/2d7880_894de5958ce74b52a16a6a536e74e712~mv2.jpg/v1/fill/w_252,h_252,al_c,lg_1,q_80,enc_avif,quality_auto/2d7880_894de5958ce74b52a16a6a536e74e712~mv2.jpg",
        alt: "Piso intertravado 16 faces tipo onda",
        width: 252,
        height: 252,
      },
    },
  ];

  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Blocos", href: "/blocos" },
  ];

  return (
    <main className="pt-20">
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Blocos estruturais e pisos com entrega em Campinas
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            Linha de blocos de concreto, canaletas e piso intertravado para obra. Para orçamento,
            envie a medida, a quantidade e a cidade de entrega.
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
                Precisa de ajuda para escolher medida e quantidade?
              </h2>
              <p className="mt-3 text-gray-600">
                Chame no WhatsApp e envie o que você precisa (ou o projeto). Retornamos com a
                cotação e as opções de entrega em Campinas e região.
              </p>
            </div>
            <CTAWhatsApp
              title="Orçar blocos no WhatsApp"
              description="Atendimento direto para cotar blocos estruturais, canaletas e piso intertravado."
              message="Olá! Quero um orçamento de blocos/canaletas para entrega em Campinas."
            />
          </div>
        </div>
      </section>

      <FAQ
        title="Perguntas frequentes sobre blocos"
        items={[
          {
            question: "Qual é o pedido mínimo de blocos?",
            answer: "O pedido mínimo é de 1.000 blocos.",
          },
          {
            question: "Vocês entregam em Campinas e RMC?",
            answer:
              "Sim. Entregamos em Campinas e cidades próximas conforme a logística e o volume do pedido.",
          },
          {
            question: "Posso pedir orçamento com meu projeto?",
            answer:
              "Sim. Envie o que você tiver (medidas e quantidade estimada) pelo WhatsApp que ajudamos na cotação.",
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
        ]}
      />
    </main>
  );
}
