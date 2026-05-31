import Link from "next/link";
import {
  Blocks,
  BrickWall,
  Droplets,
  Gem,
  LayoutGrid,
  Waves,
  Sun,
} from "lucide-react";

const CATEGORIES = [
  {
    title: "Blocos estruturais",
    description: "Blocos e canaletas para sua obra.",
    href: "/blocos",
    Icon: Blocks,
  },
  {
    title: "Canaletas",
    description: "Vergas, cintas e amarrações.",
    href: "/produtos/canaleta-concreto",
    Icon: BrickWall,
  },
  {
    title: "Piso intertravado",
    description: "Áreas externas com acabamento premium.",
    href: "/produtos/piso-intertravado",
    Icon: LayoutGrid,
  },
  {
    title: "Areia e pedra",
    description: "Agregados para concreto e assentamento.",
    href: "/produtos/areia-construcao",
    Icon: Droplets,
  },
  {
    title: "Pedrisco",
    description: "Agregado para concreto e base.",
    href: "/produtos/pedra-pedrisco",
    Icon: Gem,
  },
  {
    title: "Revestimentos",
    description: "Revestimentos e acabamentos.",
    href: "/revestimentos",
    Icon: Waves,
  },
  {
    title: "Bordas atérmicas",
    description: "Acabamento para piscina que não esquenta.",
    href: "/bordas-atermicas",
    Icon: Sun,
  },
] as const;

export default function CategoryGrid() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Produtos e categorias
            </h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              Selecione uma categoria e peça orçamento pelo WhatsApp com entrega em Campinas e RMC.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map(({ title, description, href, Icon }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:border-orange-200 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-orange-50 p-3 text-orange-700 transition group-hover:bg-orange-100">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{description}</p>
                  <p className="mt-4 text-sm font-semibold text-orange-700">Ver detalhes</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
