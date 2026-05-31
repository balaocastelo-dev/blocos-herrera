import { buildCanonical } from "./site";

export type ProductSlug =
  | "bloco-estrutural-14x19x39"
  | "bloco-estrutural-9x19x39"
  | "canaleta-concreto"
  | "piso-intertravado"
  | "areia-construcao"
  | "pedra-pedrisco";

export type ProductFAQItem = {
  question: string;
  answer: string;
};

export type Product = {
  slug: ProductSlug;
  name: string;
  shortName: string;
  measure?: string;
  category: "blocos" | "agregados" | "pisos";
  description: string;
  intro: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  faq: ProductFAQItem[];
  canonical: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "bloco-estrutural-14x19x39",
    name: "Bloco Estrutural 14×19×39",
    shortName: "Bloco 14×19×39",
    measure: "14×19×39 cm",
    category: "blocos",
    description:
      "Bloco estrutural 14×19×39 para alvenaria estrutural e vedação. Entrega em Campinas e RMC. Peça orçamento no WhatsApp com medida e quantidade.",
    intro:
      "O bloco 14×19×39 é uma das medidas mais usadas em obras por equilibrar resistência e produtividade. Envie a quantidade e o local de entrega para cotação.",
    image: {
      src: "https://static.wixstatic.com/media/2d7880_3bad9af6c0844a3eb332e04af6dedde3~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_3bad9af6c0844a3eb332e04af6dedde3~mv2.png",
      alt: "Bloco estrutural 14x19x39 de concreto",
      width: 460,
      height: 460,
    },
    faq: [
      {
        question: "Qual é o pedido mínimo?",
        answer: "Para blocos, o pedido mínimo é de 1.000 unidades.",
      },
      {
        question: "Entregam em Campinas e região?",
        answer:
          "Sim. Atendemos Campinas e cidades da Região Metropolitana conforme logística e volume.",
      },
      {
        question: "Vocês fazem orçamento pelo WhatsApp?",
        answer:
          "Sim. Envie quantidade, medida e a cidade da entrega para receber sua cotação.",
      },
    ],
    canonical: buildCanonical("/produtos/bloco-estrutural-14x19x39"),
  },
  {
    slug: "bloco-estrutural-9x19x39",
    name: "Bloco Estrutural 9×19×39",
    shortName: "Bloco 9×19×39",
    measure: "9×19×39 cm",
    category: "blocos",
    description:
      "Bloco estrutural 9×19×39 para obra com bom rendimento e economia de argamassa. Entrega em Campinas e RMC. Orce no WhatsApp.",
    intro:
      "O bloco 9×19×39 é muito usado em alvenaria estrutural e paredes internas, dependendo do seu projeto. Solicite orçamento com quantidade e cidade.",
    image: {
      src: "https://static.wixstatic.com/media/2d7880_565031a70e14493182833932780cc783~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_565031a70e14493182833932780cc783~mv2.png",
      alt: "Bloco estrutural 9x19x39 de concreto",
      width: 460,
      height: 460,
    },
    faq: [
      {
        question: "O bloco 9×19×39 é estrutural?",
        answer:
          "Pode ser estrutural dependendo do projeto e da especificação. Envie seu projeto ou necessidade para confirmarmos o indicado.",
      },
      {
        question: "Qual é o pedido mínimo?",
        answer: "Para blocos, o pedido mínimo é de 1.000 unidades.",
      },
    ],
    canonical: buildCanonical("/produtos/bloco-estrutural-9x19x39"),
  },
  {
    slug: "canaleta-concreto",
    name: "Canaleta de Concreto",
    shortName: "Canaleta de concreto",
    category: "blocos",
    description:
      "Canaleta de concreto para vergas e cintas. Entrega em Campinas e RMC. Peça orçamento no WhatsApp com medida e quantidade.",
    intro:
      "A canaleta de concreto é usada para executar vigas e amarrações com mais praticidade. Informe a medida desejada e a cidade para cotação.",
    image: {
      src: "https://static.wixstatic.com/media/2d7880_3d4936a89d58444a91ba0883e3d1c53b~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_3d4936a89d58444a91ba0883e3d1c53b~mv2_d_5472_3648_s_4_2.png",
      alt: "Canaleta de concreto para obra",
      width: 460,
      height: 460,
    },
    faq: [
      {
        question: "Vocês vendem canaleta junto com bloco estrutural?",
        answer:
          "Sim. Podemos cotar bloco e canaleta juntos para facilitar compra e entrega.",
      },
    ],
    canonical: buildCanonical("/produtos/canaleta-concreto"),
  },
  {
    slug: "piso-intertravado",
    name: "Piso Intertravado",
    shortName: "Piso intertravado",
    category: "pisos",
    description:
      "Piso intertravado para calçadas, pátios e áreas externas. Cotação no WhatsApp e entrega em Campinas e RMC conforme disponibilidade.",
    intro:
      "O piso intertravado é uma solução durável e com ótimo acabamento para áreas externas. Informe o tipo/medida e a área aproximada para cotação.",
    image: {
      src: "https://static.wixstatic.com/media/2d7880_9f57a72ebdda4682bcd9c2512b18a234~mv2.jpg/v1/fill/w_460,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_9f57a72ebdda4682bcd9c2512b18a234~mv2.jpg",
      alt: "Piso intertravado para áreas externas",
      width: 460,
      height: 460,
    },
    faq: [
      {
        question: "Vocês ajudam a calcular a quantidade?",
        answer:
          "Sim. Envie a área em m² e o tipo de piso desejado para orientar a compra.",
      },
    ],
    canonical: buildCanonical("/produtos/piso-intertravado"),
  },
  {
    slug: "areia-construcao",
    name: "Areia para Construção",
    shortName: "Areia",
    category: "agregados",
    description:
      "Areia fina, média ou grossa para sua obra, com entrega em Campinas e RMC. Peça orçamento no WhatsApp informando volume e cidade.",
    intro:
      "Fornecemos areia para assentamento, reboco e concreto. Se tiver dúvida entre fina/média/grossa, descreva o uso que orientamos.",
    image: {
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      alt: "Agregado para construção (areia)",
      width: 800,
      height: 533,
    },
    faq: [
      {
        question: "Qual tipo de areia devo comprar?",
        answer:
          "Depende do uso (reboco, assentamento, concreto). Conte o que você vai fazer e orientamos o tipo mais indicado.",
      },
    ],
    canonical: buildCanonical("/produtos/areia-construcao"),
  },
  {
    slug: "pedra-pedrisco",
    name: "Pedra e Pedrisco",
    shortName: "Pedra e pedrisco",
    category: "agregados",
    description:
      "Pedra e pedrisco para concreto e base, com entrega em Campinas e RMC. Orçamento no WhatsApp com volume e cidade da obra.",
    intro:
      "Trabalhamos com agregados para concreto e nivelamento. Informe o uso e o volume estimado para receber a cotação com entrega.",
    image: {
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      alt: "Pedrisco e pedra para construção",
      width: 800,
      height: 533,
    },
    faq: [
      {
        question: "Vocês entregam pedra e pedrisco junto com outros materiais?",
        answer:
          "Sim. Podemos cotar a entrega junto com blocos e areia, conforme disponibilidade e logística.",
      },
    ],
    canonical: buildCanonical("/produtos/pedra-pedrisco"),
  },
];

export const PRODUCT_BY_SLUG = Object.fromEntries(
  PRODUCTS.map((p) => [p.slug, p]),
) as Record<ProductSlug, Product>;

export function getProduct(slug: string) {
  return (PRODUCT_BY_SLUG as Record<string, Product | undefined>)[slug];
}
