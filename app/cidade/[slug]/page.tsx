import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTAWhatsApp from "@/components/CTAWhatsApp";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { CITIES, getCity, type CitySlug } from "@/lib/cities";
import { buildCanonical } from "@/lib/site";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams(): Array<{ slug: CitySlug }> {
  return CITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCity(params.slug);
  if (!city) return { title: "Página não encontrada" };

  return {
    title: city.title,
    description: city.description,
    alternates: { canonical: city.canonical },
    openGraph: {
      title: city.title,
      description: city.description,
      url: city.canonical,
    },
  };
}

export default function CityPage({ params }: PageProps) {
  const city = getCity(params.slug);
  if (!city) notFound();

  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Cidades", href: "/#cidades" },
    { label: city.name, href: `/cidade/${city.slug}` },
  ];

  return (
    <main className="pt-20">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pt-8 pb-12">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-700">
                Entrega na região
              </p>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
                {city.h1}
              </h1>
              <p className="mt-5 max-w-3xl text-lg text-gray-600">{city.intro}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="text-base font-bold text-gray-900">Produtos mais pedidos</h2>
                  <ul className="mt-4 space-y-2 text-sm">
                    {city.topProducts.map((p) => (
                      <li key={p.href}>
                        <Link
                          href={p.href}
                          className="font-semibold text-orange-700 hover:text-orange-800"
                        >
                          {p.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="text-base font-bold text-gray-900">Bairros e regiões</h2>
                  <p className="mt-3 text-sm text-gray-600">
                    Atendimento comercial para {city.name} e regiões próximas como{" "}
                    {city.neighborhoods.slice(0, 4).join(", ")}.
                  </p>
                </div>
              </div>
            </div>
            <CTAWhatsApp
              title={`Orçamento com entrega em ${city.name}`}
              description="Envie a lista de materiais (ou a medida do bloco), a quantidade e o prazo. Retornamos com a cotação e opções de entrega."
              message={city.whatsappText}
            />
          </div>
        </div>
      </section>

      <FAQ title={`Perguntas frequentes em ${city.name}`} items={city.faq} />

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Cidades próximas</h2>
          <p className="mt-2 text-gray-600">
            Selecione outra cidade para ver informações e pedir orçamento com entrega na região.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {city.nearbySlugs.map((slug) => {
              const nearby = getCity(slug);
              if (!nearby) return null;
              return (
                <Link
                  key={nearby.slug}
                  href={`/cidade/${nearby.slug}`}
                  className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-orange-200 hover:shadow-md"
                >
                  <h3 className="text-base font-bold text-gray-900">{nearby.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Cotação de blocos, areia, pedra e pedrisco com entrega em {nearby.name}.
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { label: "Início", href: "/" },
              { label: city.name, href: `/cidade/${city.slug}` },
            ].map((b, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              name: b.label,
              item: buildCanonical(b.href),
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: city.faq.map((f) => ({
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
