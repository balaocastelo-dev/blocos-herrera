import { buildCanonical, SITE_BRAND } from "./site";

export type CitySlug =
  | "campinas"
  | "hortolandia"
  | "sumare"
  | "paulinia"
  | "valinhos"
  | "vinhedo"
  | "monte-mor"
  | "nova-odessa"
  | "indaiatuba"
  | "americana"
  | "santa-barbara-do-oeste";

export type CityFAQItem = {
  question: string;
  answer: string;
};

export type City = {
  slug: CitySlug;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  neighborhoods: string[];
  nearbySlugs: CitySlug[];
  topProducts: {
    label: string;
    href: string;
  }[];
  faq: CityFAQItem[];
  whatsappText: string;
  canonical: string;
};

const PRODUCT_LINKS = {
  blocos: { label: "Blocos estruturais e canaletas", href: "/blocos" },
  revestimentos: { label: "Revestimentos", href: "/revestimentos" },
  bordas: { label: "Bordas atérmicas", href: "/bordas-atermicas" },
  bloco14: {
    label: "Bloco estrutural 14×19×39",
    href: "/produtos/bloco-estrutural-14x19x39",
  },
  bloco9: {
    label: "Bloco estrutural 9×19×39",
    href: "/produtos/bloco-estrutural-9x19x39",
  },
  canaleta: {
    label: "Canaleta de concreto",
    href: "/produtos/canaleta-concreto",
  },
  piso: { label: "Piso intertravado", href: "/produtos/piso-intertravado" },
  areia: { label: "Areia para construção", href: "/produtos/areia-construcao" },
  pedra: { label: "Pedra e pedrisco", href: "/produtos/pedra-pedrisco" },
} as const;

export const CITIES: City[] = [
  {
    slug: "campinas",
    name: "Campinas",
    title: "Materiais de Construção em Campinas",
    description:
      "Compre blocos estruturais, areia, pedra e pedrisco com entrega em Campinas. Orçamento rápido no WhatsApp e atendimento direto para sua obra.",
    h1: "Fábrica de Blocos e Materiais de Construção em Campinas",
    intro:
      "Atendemos Campinas com foco em agilidade, organização e entrega. Peça sua cotação e receba orientação para escolher a medida do bloco, tipo de areia e o volume ideal.",
    neighborhoods: [
      "Ouro Verde",
      "Campo Grande",
      "Barão Geraldo",
      "Taquaral",
      "Cambuí",
      "Nova Campinas",
      "Jardim do Lago",
    ],
    nearbySlugs: [
      "valinhos",
      "vinhedo",
      "hortolandia",
      "sumare",
      "paulinia",
      "indaiatuba",
    ],
    topProducts: [
      PRODUCT_LINKS.bloco14,
      PRODUCT_LINKS.bloco9,
      PRODUCT_LINKS.canaleta,
      PRODUCT_LINKS.areia,
      PRODUCT_LINKS.pedra,
    ],
    faq: [
      {
        question: "Vocês entregam em Campinas?",
        answer:
          "Sim. Organizamos a entrega em Campinas e região conforme o tipo de material e a logística do dia. Peça seu orçamento no WhatsApp.",
      },
      {
        question: "Qual é o pedido mínimo de blocos?",
        answer:
          "O pedido mínimo é de 1.000 blocos. Para outros itens, consulte disponibilidade e frete no WhatsApp.",
      },
      {
        question: "Vocês vendem bloco estrutural e canaleta?",
        answer:
          "Sim. Trabalhamos com blocos estruturais em medidas comuns de obra e canaletas de concreto. Envie a medida desejada para cotação.",
      },
      {
        question: "Fazem orçamento pelo WhatsApp?",
        answer:
          "Sim. Você pode enviar lista de materiais, endereço e prazo. Retornamos com a cotação e condições de entrega.",
      },
    ],
    whatsappText: "Olá! Quero um orçamento de blocos e materiais para entrega em Campinas.",
    canonical: buildCanonical("/cidade/campinas"),
  },
  {
    slug: "hortolandia",
    name: "Hortolândia",
    title: "Materiais de Construção em Hortolândia",
    description:
      "Blocos de concreto, canaletas, areia, pedra e pedrisco com entrega em Hortolândia. Peça orçamento no WhatsApp e agilize sua obra.",
    h1: "Materiais de Construção em Hortolândia com Entrega",
    intro:
      "Atendemos Hortolândia com fornecimento de blocos estruturais e agregados para obra. Fale no WhatsApp e receba uma cotação objetiva e rápida.",
    neighborhoods: ["Jardim Amanda", "Vila Real", "Rosolém", "Remanso Campineiro"],
    nearbySlugs: ["campinas", "sumare", "paulinia", "americana"],
    topProducts: [
      PRODUCT_LINKS.bloco14,
      PRODUCT_LINKS.canaleta,
      PRODUCT_LINKS.areia,
      PRODUCT_LINKS.pedra,
    ],
    faq: [
      {
        question: "Vocês entregam material em Hortolândia?",
        answer:
          "Sim. Atendemos Hortolândia com entrega conforme disponibilidade e tipo de material. Chame no WhatsApp para cotar.",
      },
      {
        question: "Consigo comprar areia e pedra junto com blocos?",
        answer:
          "Sim. Podemos cotar o conjunto de itens para facilitar a sua compra e a entrega na obra.",
      },
      {
        question: "O pedido mínimo de blocos também vale para Hortolândia?",
        answer: "Sim, o pedido mínimo é de 1.000 blocos.",
      },
    ],
    whatsappText:
      "Olá! Quero um orçamento de material de construção para entrega em Hortolândia.",
    canonical: buildCanonical("/cidade/hortolandia"),
  },
  {
    slug: "sumare",
    name: "Sumaré",
    title: "Materiais de Construção em Sumaré",
    description:
      "Depósito de materiais para obra em Sumaré: blocos estruturais, canaletas, areia, pedra e pedrisco. Orçamento rápido no WhatsApp.",
    h1: "Materiais de Construção em Sumaré: Blocos e Agregados",
    intro:
      "Em Sumaré, atendemos obras residenciais e comerciais com materiais essenciais e entrega organizada. Envie sua lista e receba a cotação pelo WhatsApp.",
    neighborhoods: ["Centro", "Nova Veneza", "Maria Antônia", "Matão"],
    nearbySlugs: ["hortolandia", "campinas", "americana", "nova-odessa"],
    topProducts: [
      PRODUCT_LINKS.bloco9,
      PRODUCT_LINKS.bloco14,
      PRODUCT_LINKS.areia,
      PRODUCT_LINKS.pedra,
    ],
    faq: [
      {
        question: "Vocês entregam em Sumaré?",
        answer:
          "Sim. Atendemos Sumaré e região com entrega conforme logística e volume. Peça seu orçamento no WhatsApp.",
      },
      {
        question: "Quais medidas de bloco são mais comuns?",
        answer:
          "As mais solicitadas são 14×19×39 e 9×19×39. Se você tiver projeto, envie para confirmarmos a indicação.",
      },
      {
        question: "Vocês vendem pedrisco e pedra?",
        answer:
          "Sim. Trabalhamos com agregados para concreto e assentamento. Informe o uso para recomendarmos o melhor tipo.",
      },
    ],
    whatsappText: "Olá! Quero um orçamento de blocos e agregados para entrega em Sumaré.",
    canonical: buildCanonical("/cidade/sumare"),
  },
  {
    slug: "paulinia",
    name: "Paulínia",
    title: "Materiais de Construção em Paulínia",
    description:
      "Compre blocos de concreto, canaletas, areia, pedra e pedrisco com entrega em Paulínia. Atendimento rápido no WhatsApp para orçamento.",
    h1: "Materiais de Construção em Paulínia com Atendimento Rápido",
    intro:
      "Atendemos Paulínia com foco em velocidade na cotação e clareza na entrega. Fale com a equipe pelo WhatsApp e receba seu orçamento.",
    neighborhoods: ["Centro", "João Aranha", "Betel", "Santa Terezinha"],
    nearbySlugs: ["campinas", "hortolandia", "sumare", "americana"],
    topProducts: [
      PRODUCT_LINKS.bloco14,
      PRODUCT_LINKS.canaleta,
      PRODUCT_LINKS.areia,
      PRODUCT_LINKS.pedra,
    ],
    faq: [
      {
        question: "Vocês conseguem entregar em Paulínia rapidamente?",
        answer:
          "Dependendo do dia e do volume, sim. Para prazos, envie local e itens no WhatsApp que confirmamos a melhor janela.",
      },
      {
        question: "Vocês fazem orçamento para obras maiores?",
        answer:
          "Sim. Atendemos demandas maiores com pedido organizado e programação de entrega.",
      },
    ],
    whatsappText: "Olá! Quero um orçamento de materiais para entrega em Paulínia.",
    canonical: buildCanonical("/cidade/paulinia"),
  },
  {
    slug: "valinhos",
    name: "Valinhos",
    title: "Materiais de Construção em Valinhos",
    description:
      "Blocos estruturais, areia, pedra e pedrisco com entrega em Valinhos. Peça cotação no WhatsApp e receba atendimento direto para sua obra.",
    h1: "Materiais de Construção em Valinhos com Entrega",
    intro:
      "Em Valinhos, fornecemos materiais essenciais para alvenaria e concreto, com atendimento direto para orçamento e entrega programada.",
    neighborhoods: ["Centro", "Jardim Paiquerê", "Jardim São Marcos", "Vila Santana"],
    nearbySlugs: ["campinas", "vinhedo", "indaiatuba"],
    topProducts: [
      PRODUCT_LINKS.bloco14,
      PRODUCT_LINKS.bloco9,
      PRODUCT_LINKS.areia,
      PRODUCT_LINKS.pedra,
    ],
    faq: [
      {
        question: "Vocês entregam em Valinhos?",
        answer:
          "Sim. Atendemos Valinhos com entrega conforme tipo de material e volume. Solicite orçamento no WhatsApp.",
      },
      {
        question: "Posso pedir só areia, pedra ou pedrisco?",
        answer: "Sim. Informe o endereço e o volume aproximado para cotação e frete.",
      },
    ],
    whatsappText: "Olá! Quero um orçamento para entrega de materiais em Valinhos.",
    canonical: buildCanonical("/cidade/valinhos"),
  },
  {
    slug: "vinhedo",
    name: "Vinhedo",
    title: "Materiais de Construção em Vinhedo",
    description:
      "Materiais para obra em Vinhedo: blocos de concreto, canaletas, areia, pedra e pedrisco com entrega. Orçamento rápido no WhatsApp.",
    h1: "Materiais de Construção em Vinhedo: Blocos e Agregados",
    intro:
      "Atendemos Vinhedo com materiais para obras residenciais e comerciais. Chame no WhatsApp para cotação e entrega.",
    neighborhoods: ["Centro", "Capela", "Aquário", "Jardim Três Irmãos"],
    nearbySlugs: ["valinhos", "campinas", "indaiatuba"],
    topProducts: [
      PRODUCT_LINKS.bloco14,
      PRODUCT_LINKS.canaleta,
      PRODUCT_LINKS.areia,
      PRODUCT_LINKS.pedra,
    ],
    faq: [
      {
        question: "Como pedir orçamento para Vinhedo?",
        answer:
          "Envie sua lista de materiais e o endereço da obra no WhatsApp. Retornamos com a cotação e opções de entrega.",
      },
    ],
    whatsappText: "Olá! Quero um orçamento de blocos e materiais para entrega em Vinhedo.",
    canonical: buildCanonical("/cidade/vinhedo"),
  },
  {
    slug: "monte-mor",
    name: "Monte Mor",
    title: "Materiais de Construção em Monte Mor",
    description:
      "Blocos estruturais, areia, pedra e pedrisco com entrega em Monte Mor. Atendimento rápido pelo WhatsApp para cotação e disponibilidade.",
    h1: "Materiais de Construção em Monte Mor com Entrega",
    intro:
      "Atendemos Monte Mor com materiais essenciais para sua obra. Fale com a equipe pelo WhatsApp e receba sua cotação.",
    neighborhoods: ["Centro", "Jardim Moreira", "Jardim Panorama", "Jardim Alvorada"],
    nearbySlugs: ["indaiatuba", "campinas", "vinhedo", "sumare"],
    topProducts: [
      PRODUCT_LINKS.bloco14,
      PRODUCT_LINKS.bloco9,
      PRODUCT_LINKS.areia,
      PRODUCT_LINKS.pedra,
    ],
    faq: [
      {
        question: "Vocês entregam em Monte Mor?",
        answer:
          "Sim. Solicite sua cotação no WhatsApp informando o endereço e a lista de materiais.",
      },
    ],
    whatsappText: "Olá! Quero um orçamento de materiais para entrega em Monte Mor.",