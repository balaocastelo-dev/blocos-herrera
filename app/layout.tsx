import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AdminProvider from "@/components/AdminProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Material de Construcao em Campinas e RMC | Herrera Materiais para construcao e fabrica de blocos",
  description: "Herrera Materiais para construcao e fabrica de blocos vende blocos estruturais, areia, pedra, pedrisco, cimento e revestimentos com entrega rapida em Campinas e regiao.",
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
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </AdminProvider>
      </body>
    </html>
  );
}
