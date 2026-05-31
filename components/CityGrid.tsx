import Link from "next/link";
import { CITIES } from "@/lib/cities";

export default function CityGrid() {
  const featured = CITIES.filter((c) =>
    [
      "campinas",
      "hortolandia",
      "sumare",
      "paulinia",
      "valinhos",
      "vinhedo",
      "monte-mor",
      "nova-odessa",
    ].includes(c.slug),
  );

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Entrega em Campinas e cidades da RMC
        </h2>
        <p className="mt-2 max-w-3xl text-gray-600">
          Conteúdo local com informações objetivas e CTA direto para orçamento no WhatsApp.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((city) => (
            <Link
              key={city.slug}
              href={`/cidade/${city.slug}`}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-orange-200 hover:shadow-md"
            >
              <h3 className="text-base font-bold text-gray-900">{city.name}</h3>
              <p className="mt-2 text-sm text-gray-600">
                Blocos, areia, pedra e materiais para obra com entrega em {city.name}.
              </p>
              <p className="mt-4 text-sm font-semibold text-orange-700">Ver página da cidade</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
