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
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold font-oswald uppercase mb-4">{title}</h2>
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
              className="min-w-[280px] md:min-w-[320px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col snap-start hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
                <AdminEditable id={`${idPrefix}-${index}`} type="img">
                  <img src={product.img} className="max-h-full max-w-full object-contain" alt={product.name} loading="lazy" />
                </AdminEditable>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-bold text-sm mb-2 h-12 overflow-hidden">{product.name}</h3>
                <p className="text-orange-600 text-xl font-bold mb-4 mt-auto">
                  R$ <AdminEditable id={`${idPrefix}-${index}`} type="price"><span>{product.price}</span></AdminEditable>
                </p>
                <a 
                  href={`https://wa.me/5519984515960?text=${encodeURIComponent('Ola! Quero orcar ' + product.name + ' para uma obra em Campinas.')}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 transition text-sm"
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
