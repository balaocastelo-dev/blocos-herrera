import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AdminProvider from "@/components/AdminProvider";
import JsonLd from "@/components/JsonLd";
import { ADDRESS_FULL, SERVICE_AREA_CITIES, SITE_BRAND, SITE_NAME, SITE_URL, WHATSAPP_NUMBER_E164 } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_BRAND,
    template: "%s | Herrera Materiais (Campinas)",
  },
  description:
    "Compre blocos estruturais, areia, pedra, pedrisco e materiais para construção com entrega em Campinas e RMC. Atendimento rápido no WhatsApp para orçamento.",
  applicationName: SITE_NAME,
  keywords: [
    "material de construção em Campinas",
    "depósito de material de construção",
    "fábrica de blocos",
    "blocos estruturais",
    "blocos de concreto",
    "areia",
    "pedra",
    "pedrisco",
    "cimento",
    "revestimentos",
    "bordas atérmicas",
    "Campinas",
    "RMC",
    "Hortolândia",
    "Sumaré",
    "Paulínia",
    "Valinhos",
    "Vinhedo",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_BRAND,
    description:
      "Blocos estruturais, areia, pedra, pedrisco, cimento e revestimentos com entrega rápida em Campinas e região. Orçamento pelo WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_BRAND,
    description:
      "Orçamento rápido no WhatsApp. Entrega em Campinas e região. Blocos, areia, pedra, pedrisco, cimento e revestimentos.",
  },
  icons: {
    icon: [{ url: "/assets/logo.svg" }],
    apple: [{ url: "/assets/logo.svg" }],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
                areaServed: SERVICE_AREA_CITIES,
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
