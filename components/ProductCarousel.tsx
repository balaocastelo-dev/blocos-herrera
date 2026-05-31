"use client";

import { useRef } from "react";
import AdminEditable from "./AdminEditable";

interface Product {
  name: string;
  price: string;
  img: string;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
  idPrefix: string;
}

export default function ProductCarousel({ title, products, idPrefix }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-between items-end mb-10 gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
            <div className="w-24 h-1 bg-orange-600"></div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-gray-200 hover:bg-orange-600 hover:text-white transition shadow-sm"
              aria-label="Anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button 
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-gray-200 hover:bg-orange-600 hover:text-white transition shadow-sm"
              aria-label="Próximo"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, index) => (
            <article 
              key={index} 
              className="min-w-[280px] md:min-w-[320px] bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-200 flex flex-col snap-start hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center p-6">
                <AdminEditable id={`${idPrefix}-${index}`} type="img">
                  <img
                    src={product.img}
                    width={460}
                    height={460}
                    className="h-full w-full object-contain"
                    alt={product.name}
                    loading="lazy"
                  />
                </AdminEditable>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-bold text-sm mb-2 h-12 overflow-hidden">{product.name}</h3>
                <p className="text-orange-600 text-xl font-bold mb-4 mt-auto">
                  R$ <AdminEditable id={`${idPrefix}-${index}`} type="price"><span>{product.price}</span></AdminEditable>
                </p>
                <a 
                  href={`https://wa.me/5519984515960?text=${encodeURIComponent('Olá! Quero orçamento de ' + product.name + ' para entrega em Campinas.')}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-green-500 text-white font-bold py-3 rounded-2xl hover:bg-green-600 transition text-sm"
                >
                  Orçar no WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
