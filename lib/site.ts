const OFFICIAL_SITE_URL = "https://blocos-herrera.vercel.app";
const RAW_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || OFFICIAL_SITE_URL;

export const SITE_URL = RAW_SITE_URL.includes("olariaherrera.com.br")
  ? OFFICIAL_SITE_URL
  : RAW_SITE_URL;

export const SITE_NAME = "Herrera Materiais para Construção";
export const SITE_BRAND =
  "Herrera Materiais para Construção | Fábrica de Blocos em Campinas";

export const WHATSAPP_NUMBER_E164 = "+5519984515960";
export const WHATSAPP_NUMBER_DIGITS = "5519984515960";
export const WHATSAPP_DISPLAY = "(19) 98451-5960";

export const ADDRESS_FULL =
  "Rua Julia Aberle Fritz, 200 - Pq Vista Alegre, Campinas/SP";

export const SERVICE_AREA_CITIES = [
  "Campinas",
  "Hortolândia",
  "Sumaré",
  "Paulínia",
  "Valinhos",
  "Vinhedo",
  "Monte Mor",
  "Nova Odessa",
  "Indaiatuba",
  "Americana",
  "Santa Bárbara d’Oeste",
] as const;

export function buildCanonical(pathname: string) {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SITE_URL}${normalized}`;
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER_DIGITS}?text=${encodeURIComponent(
    message,
  )}`;
}
