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
  title: "Revestimentos em Campinas",
  description:
    "Revestimentos e acabamentos para piscina e áreas externas com atendimento direto em Campinas. Peça orçamento no WhatsApp e receba uma cotação rápida.",
  alternates: { canonical: buildCanonical("/revestimentos") },
  openGraph: {
    title: "Revestimentos para piscina em Campinas",
    description:
      "Revestimentos e acabamentos para sua obra em Campinas e região. Orçamento rápido no WhatsApp.",
    url: buildCanonical("/revestimentos"),
  },
};

export default function RevestimentosPage() {
  const products: Product[] = [
    {
      id: "rev-item-0",
      name: "Revestimento para piscina 10×10 Noronha Jade (Eliane)",
      price: "138,05",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_noronha_jade_30x40,10cm_eliane_92004465_e723_300x300.JPG",
        alt: "Revestimento para piscina 10x10 Noronha Jade",
        width: 300,
        height: 300,
      },
    },
    {
      id: "rev-item-1",
      name: "Revestimento para piscina 10×10 Noronha Mar (Eliane)",
      price: "138,05",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_noronha_mar_30x40,1cm_eliane_92009582_4af0_300x300.JPG",
        alt: "Revestimento para piscina 10x10 Noronha Mar",
        width: 300,
        height: 300,
      },
    },
    {
      id: "rev-item-2",
      name: "Revestimento para piscina 20×20 Hijau Verde (Artens)",
      price: "184,11",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_brilhante_hijau_verde_20x20cm_91920073_7069_300x300.JPG",
        alt: "Revestimento para piscina 20x20 Hijau Verde",
        width: 300,
        height: 300,
      },
    },
    {
      id: "rev-item-3",
      name: "Revestimento para piscina 20×20 Hijau Azul (Artens)",
      price: "184,11",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_brilhante_hijau_azul_20x20cm_91920052_011b_300x300.JPG",
        alt: "Revestimento para piscina 20x20 Hijau Azul",
        width: 300,
        height: 300,
      },
    },
    {
      id: "rev-item-4",
      name: "Revestimento para piscina 20×20 Hijau Verde acetinado (Artens)",
      price: "184,11",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_acetinado_hijau_verde_20x20cm_91920080_83da_300x300.JPG",
        alt: "Revestimento para piscina 20x20 Hijau Verde acetinado",
        width: 300,
        height: 300,
      },
    },
    {
      id: "rev-item-5",
      name: "Revestimento para piscina 20×20 Hijau Azul acetinado (Artens)",
      price: "184,11",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_acetinado_hijau_azul_20x20cm_91920066_1e88_300x300.JPG",
        alt: "Revestimento para piscina 20x20 Hijau Azul acetinado",
        width: 300,
        height: 300,
      },
    },
    {
      id: "rev-item-6",
      name: "Revestimento para piscina 10×10 Java Mar (Eliane)",
      price: "122,26",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/rev_ex_br_bo_10x10_java_mar_mesh_m2_92359071_ae1e_300x300.png",
        alt: "Revestimento para piscina 10x10 Java Mar",
        width: 300,
        height: 300,
      },
    },
    {
      id: "rev-item-7",
      name: "Revestimento para piscina Boreal Ivy 20×20 (Artens)",
      price: "115,68",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_boreal_ivy_20x20cm_artens_91943866_00dc_300x300.JPG",
        alt: "Revestimento para piscina Boreal Ivy 20x20",
        width: 300,
        height: 300,
      },
    },
    {
      id: "rev-item-8",
      name: "Revestimento para piscina Grace Bay 20×20 (Artens)",
      price: "90,86",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_grace_bay_20x20cm_artens_90700701_70af_300x300.JPG",
        alt: "Revestimento para piscina Grace Bay 20x20",
        width: 300,
        height: 300,
      },
    },
    {
      id: "rev-item-9",
      name: "Revestimento para piscina Noronha Aqua 10×10 (Eliane)",
      price: "138,05",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_noronha_agua_mesh_30x40,1cm_92011682_4dad_300x300.png",
        alt: "Revestimento para piscina Noronha Aqua 10x10",
        width: 300,
        height: 300,
      },
    },
    {
      id: "rev-item-10",
      name: "Revestimento para piscina Binar Ivy 20×20",
      price: "115,68",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_binar_ivy_20x20cm_91943880_b50c_300x300.JPG",
        alt: "Revestimento para piscina Binar Ivy 20x20",
        width: 300,
        height: 300,
      },
    },
    {
      id: "rev-item-11",
      name: "Revestimento para fachada/piscina 15×15 Branco (Eliane)",
      price: "103,73",
      image: {
        src: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_branco_15,4x15,4cm_eliane_86951725_1787_300x300.JPG",
        alt: "Revestimento branco 15x15 para piscina",
        width: 300,
        height: 300,
      },
    },
  ];

  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Revestimentos", href: "/revestimentos" },
  ];

  return (
    <main className="pt-20">
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pt-8 pb-10">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Revestimentos e acabamentos para piscina
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            Selecione um modelo e peça orçamento no WhatsApp. Se você já tem a metragem (m²), envie
            na mensagem para agilizar a cotação.
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
                Quer cotar com a metragem da sua área?
              </h2>
              <p className="mt-3 text-gray-600">
                Envie as medidas e a cidade de entrega. Retornamos com a cotação e orientações para
                compra do revestimento.
              </p>
            </div>
            <CTAWhatsApp
              title="Orçar revestimento no WhatsApp"
              description="Atendimento direto para cotar revestimentos e acabamentos."
              message="Olá! Quero um orçamento de revestimento para entrega em Campinas."
            />
          </div>
        </div>
      </section>

      <FAQ
        title="Perguntas frequentes sobre revestimentos"
        items={[
          {
            question: "Vocês fazem orçamento pelo WhatsApp?",
            answer:
              "Sim. Envie o modelo desejado (ou link/foto) e a metragem aproximada para cotação.",
          },
          {
            question: "Entregam em Campinas e região?",
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
                name: "Vocês fazem orçamento pelo WhatsApp?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim. Envie o modelo desejado (ou link/foto) e a metragem aproximada para cotação.",
                },
              },
              {
                "@type": "Question",
                name: "Entregam em Campinas e região?",
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
