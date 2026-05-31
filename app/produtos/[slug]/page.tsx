import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTAWhatsApp from "@/components/CTAWhatsApp";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { PRODUCTS, getProduct, type ProductSlug } from "@/lib/products";
import { buildCanonical, buildWhatsAppUrl } from "@/lib/site";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams(): Array<{ slug: ProductSlug }> {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = getProduct(params.slug);
  if (!product) return { title: "Página não encontrada" };

  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: product.canonical },
    openGraph: {
      title: product.name,
      description: product.description,
      url: product.canonical,
    },
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Produtos", href: "/blocos" },
    { label: product.shortName, href: `/produtos/${product.slug}` },
  ];

  const message = `Olá, quero orçamento do produto ${product.name} para entrega em Campinas.`;

  return (
    <main className="pt-20">
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pt-8 pb-12">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-50">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-6"
                />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
                {product.name}
              </h1>
              {product.measure ? (
                <p className="mt-3 inline-flex rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-900">
                  Medida: {product.measure}
                </p>
              ) : null}
              <p className="mt-5 max-w-3xl text-lg text-gray-600">{product.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={buildWhatsAppUrl(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-green-500 px-6 py-4 text-base font-bold text-white transition hover:bg-green-600"
                >
                  Orçar no WhatsApp
                </a>
                <Link
                  href="/cidade/campinas"
                  className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-4 text-base font-bold text-gray-900 transition hover:border-gray-300"
                >
                  Ver entrega em Campinas
                </Link>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Dica: envie também a quantidade e a cidade de entrega (Campinas, Hortolândia,
                Sumaré, Paulínia e região) para agilizar a cotação.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Compra rápida e entrega programada
              </h2>
              <p className="mt-3 text-gray-600">
                Atendemos obras em Campinas e na Região Metropolitana com cotação objetiva e
                atendimento direto pelo WhatsApp.
              </p>
            </div>
            <CTAWhatsApp
              title="Pedir orçamento"
              description={`Solicite cotação de ${product.shortName} com entrega em Campinas e região.`}
              message={message}
            />
          </div>
        </div>
      </section>

      <FAQ title="Perguntas frequentes" items={product.faq} />

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { label: "Início", href: "/" },
              { label: product.shortName, href: `/produtos/${product.slug}` },
            ].map((b, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              name: b.label,
              item: buildCanonical(b.href),
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            image: [product.image.src],
            description: product.description,
            brand: { "@type": "Brand", name: "Herrera" },
            offers: {
              "@type": "Offer",
              url: product.canonical,
              priceCurrency: "BRL",
              availability: "https://schema.org/InStock",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: product.faq.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          },
        ]}
      />
    </main>
  );
}
