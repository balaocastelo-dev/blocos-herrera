"use client";

import { useMemo } from "react";
import { buildWhatsAppUrl } from "@/lib/site";
import { useAdmin } from "./AdminProvider";

type ProductCardProps = {
  id: string;
  name: string;
  price?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  cityForMessage?: string;
  className?: string;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
  cityForMessage,
  className,
}: ProductCardProps) {
  const { siteData } = useAdmin();
  const saved = siteData[id];

  const src = saved?.img || image.src;
  const finalPrice = saved?.price || price;

  const message = useMemo(() => {
    const city = cityForMessage ? ` para entrega em ${cityForMessage}` : "";
    return `Olá, quero orçamento do produto ${name}${city}.`;
  }, [cityForMessage, name]);

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md ${className || ""}`}
    >
      <div className="aspect-[4/3] w-full bg-gray-50">
        <img
          src={src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          className="h-full w-full object-contain p-6"
          data-admin-id={id}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-base font-bold leading-snug text-gray-900">{name}</h3>
        {finalPrice ? (
          <p className="mt-3 text-xl font-extrabold text-orange-700">
            R${" "}
            <span data-admin-id={id} data-admin-type="price">
              {finalPrice}
            </span>
          </p>
        ) : (
          <p className="mt-3 text-sm text-gray-600">Preço sob consulta</p>
        )}
        <a
          href={buildWhatsAppUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-full items-center justify-center rounded-2xl bg-green-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-600"
        >
          Orçar no WhatsApp
        </a>
      </div>
    </article>
  );
}
