import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AdminProvider from "@/components/AdminProvider";
import JsonLd from "@/components/JsonLd";
import {
  ADDRESS_FULL,
  SITE_BRAND,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_NUMBER_E164,
} from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  metadataBase: new URL("https://blocos-herrera.vercel.app"),
  title: {
    default: SITE_BRAND,
    template: "%s | Herrera",
  },
  description:
    "Compre blocos estruturais, areia, pedra, pedrisco e materiais para construção com entrega em Campinas e RMC. Atendimento rápido no WhatsApp para orçamento.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_BRAND,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${oswald.variable} font-sans`}>
        <AdminProvider>
          <JsonLd
            data={[
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: SITE_NAME,
                url: SITE_URL,
                telephone: WHATSAPP_NUMBER_E164,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: ADDRESS_FULL,
                  addressLocality: "Campinas",
                  addressRegion: "SP",
                  addressCountry: "BR",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": ["LocalBusiness", "Store", "HardwareStore"],
                name: SITE_NAME,
                url: SITE_URL,
                telephone: WHATSAPP_NUMBER_E164,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: ADDRESS_FULL,
                  addressLocality: "Campinas",
                  addressRegion: "SP",
                  addressCountry: "BR",
                },
                areaServed: [
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
                ],
                makesOffer: [
                  "Blocos estruturais",
                  "Blocos de concreto",
                  "Canaletas",
                  "Pisos intertravados",
                  "Areia",
                  "Pedra",
                  "Pedrisco",
                  "Cimento",
                  "Revestimentos",
                  "Bordas atérmicas",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: SITE_BRAND,
                url: SITE_URL,
                inLanguage: "pt-BR",
              },
            ]}
          />
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </AdminProvider>
      </body>
    </html>
  );
}
