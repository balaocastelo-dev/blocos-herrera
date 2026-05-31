import { Factory, MapPin, MessageCircle, Truck } from "lucide-react";

const ITEMS = [
  {
    title: "Fábrica de blocos",
    description: "Blocos estruturais e canaletas para sua obra.",
    Icon: Factory,
  },
  {
    title: "Entrega em Campinas e RMC",
    description: "Logística organizada conforme o volume e o tipo de material.",
    Icon: MapPin,
  },
  {
    title: "Atendimento direto",
    description: "Fale com a equipe pelo WhatsApp e receba resposta rápida.",
    Icon: MessageCircle,
  },
  {
    title: "Compra sem dor de cabeça",
    description: "Cotação clara e orientação na escolha dos materiais.",
    Icon: Truck,
  },
] as const;

export default function TrustBar() {
  return (
    <section className="border-y border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-orange-50 p-3 text-orange-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-gray-900">{title}</h2>
                  <p className="mt-2 text-sm text-gray-600">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
