import { SERVICE_AREA_CITIES } from "@/lib/site";

export default function ServiceArea() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Área de atendimento</h2>
          <p className="mt-3 text-gray-600">
            Entrega e atendimento comercial para Campinas e cidades da Região Metropolitana.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {SERVICE_AREA_CITIES.map((city) => (
              <li
                key={city}
                className="rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-900"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
