"use client";

import AdminEditable from "@/components/AdminEditable";

interface Product {
  name: string;
  price: string;
  img: string;
}

export default function BordasAtermicasPage() {
  const bordas: Product[] = [
    { name: "Borda Atérmica Piscina 50x25x2,0cm Maresias Branca - Areia D...", price: "69,20", img: "https://cdn.awsli.com.br/2500x2500/1957/1957621/produto/143251805/premium-50x25cm-ugstwe.jpg" },
    { name: "Borda Atérmica Piscina 50x20x1,5cm Malibu Cinza Areia De Qua...", price: "52,53", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x20x1,5cm_malibu_cinza__areia_de_qua_1570435811_4fba_300x300.png" },
    { name: "Borda Atérmica Piscina - Havaí 100 X 27,5 X 25 X 4 X 2,5cm F...", price: "318,37", img: "https://cdn.leroymerlin.com.br/products/borda__atermica_piscina_havai_100_x_27,5_x_25_x_4_x_2,5cm_f_1568442710_24b1_300x300.jpg" },
    { name: "Borda Atérmica Piscina 50x15x1,5cm Cinza - Areia De Quartzo I...", price: "45,63", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x15x1,5cm_cinza_areia_de_quartzo_i_1570814144_b30e_300x300.jpg" },
    { name: "Borda Atérmica Antiderrapante Para Piscina 50x25x1,5cm Malibu...", price: "57,40", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_antiderrapante_para_piscina_50x25x1,5cm_malibu_1570494403_066f_300x300.jpg" },
    { name: "Borda Atérmica Piscina 50x20x1,5cm Malibu Champagne Areia De", price: "52,53", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x20x1,5cm_malibu_champagne_areia_de_1570435806_3697_300x300.jpg" },
    { name: "Borda Atérmica Piscina 50x15x1,5cm Champagne - Areia De Quar...", price: "45,63", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x15x1,5cm_champagne__areia_de_quar_1570814138_5d52_300x300.jpg" },
    { name: "Borda Atérmica Piscina 50x15x1,5cm Fendi - Areia De Quartzo", price: "45,63", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x15x1,5cm_fendi__areia_de_quartzo_1570814141_04a8_300x300.jpg" },
    { name: "Borda Atérmica Piscina 50x15x1,5cm Branca - Areia De Quartzo", price: "45,63", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x15x1,5cm_branca_areia_de_quartzo_1570814143_9ae8_300x300.jpg" },
    { name: "Borda Atérmica Piscina Salinas 50x25x2,5x1,5cm Fendi - Areia...", price: "73,28", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina__salinas_50x25x2,5x1,5cm_fendi_areia_1568442702_a1e5_300x300.jpg" },
    { name: "Borda Atérmica Piscina Salvattore 50x25cm Kit C/60", price: "5.320,00", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_salvattore_50x25cm_kit_c_60_1569035135_ff1d_300x300.jpg" },
    { name: "Borda Atérmica Para Piscina 50x25x1,5cm Malibu Branca Arei...", price: "57,40", img: "https://cdn.leroymerlin.com.br/products/borda__atermica_para__piscina_50x25x1,5cm_malibu_branca__arei_1570289004_3b10_300x300.jpg" },
    { name: "Borda Atérmica Piscina Salvattore 50x25cm Kit C/70", price: "4.480,00", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_salvattore_50x25cm_kit_c_70_1569035134_e456_300x300.jpg" },
    { name: "Borda Atérmica Piscina Salvattore 50x25cm Kit C/30", price: "2.100,00", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_salvattore_50x25cm_kit_c_30_1569035137_4a0e_300x300.jpg" },
    { name: "Borda Atérmica Piscina 50x30x1,5cm Branca - Areia de Quartzo...", price: "63,63", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina__50x30x1,5cm_branca_areia_de_quartzo_1568442712_d998_300x300.png" },
    { name: "Borda Atérmica Piscina 50x20x1,5cm Malibu Fendi Areia De Qua...", price: "52,53", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x20x1,5cm_malibu_fendi__areia_de_qua_1570435810_7cda_300x300.png" },
    { name: "Borda Atérmica Piscina 50x25x1,5cm Malibu Cinza - Areia De Qu...", price: "56,70", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x25x1,5cm_malibu_cinza_areia_de_qu_1570435804_a419_300x300.jpg" },
    { name: "Borda Atérmica Piscina 50x30x1,5cm Malibu Champagne - Areia...", price: "63,60", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina__50x30x1,5cm__malibu_champagne_areia_1570814142_5fc8_300x300.png" },
    { name: "Borda Atérmica Piscina 50x30x1,5cm Fendi - Areia De Quartzo I...", price: "63,60", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x30x1,5cm_fendi_areia_de_quartzo_i_1570814139_a44e_300x300.png" },
    { name: "Borda Atérmica Piscina 50x30x1,5cm Cinza Malibu- Areia De Qua...", price: "63,60", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x30x1,5cm_cinza_malibu__areia_de_qua_1570814140_cc89_300x300.png" },
    { name: "Borda Atérmica Piscina Salvattore 50x25cm Kit C/45", price: "3.500,00", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_salvattore_50x25cm_kit_c_45_1569035136_bdb7_300x300.jpg" },
    { name: "Borda Atérmica Piscina 50x25x2,3x1,5cm Salinas Branca - Are...", price: "73,28", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x25x2,3x1,5cm_salinas___branca_are_1568442713_a2dc_300x300.png" },
    { name: "Borda Atérmica Piscina Linha Prime SBF 50x25x2cm Fendi - Arei...", price: "73,29", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_linha_prime_sbf_50x25x2cm_fendi_arei_1568442706_27fd_300x300.png" },
    { name: "Borda Atérmica Piscina 50x25x2cm Maresias Cinza - Areia De Qu...", price: "69,38", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x25x2cm_maresias_cinza_areia_de_qu_1570437038_06a1_300x300.jpg" },
    { name: "Borda Atérmica Piscina 50x25x1,5cm Malibu Fendi - Areia De Qu...", price: "57,40", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x25x1,5cm_malibu_fendi_areia_de_qu_1570314523_b19e_300x300.png" },
    { name: "Borda Atérmica Piscina 50x25x2,3x1,5cm Salinas Cinza - Areia...", price: "73,35", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x25x2,3x1,5cm_salinas__cinza_areia_1568442714_a0ac_300x300.png" },
    { name: "Borda Atérmica E Antiderrapante 50x10x1,5cm BRANCO - KIT C/ 1...", price: "770,00", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_e_antiderrapante_50x10x1,5cm_branco_kit_c__1_1568791017_57d7_300x300.png" },
    { name: "Borda Atérmica E Antiderrapante 50x25x1,5cm BRANCO - KIT C/8", price: "770,00", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_e_antiderrapante_50x25x1,5cm_branco_kit_c_8_1568791019_2a01_300x300.png" },
    { name: "Borda Atérmica Para Piscina 50x25x1,5cm Branca Areia de Quar...", price: "574,00", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_para_piscina_50x25x1,5cm_branca__areia_de_quar_1572457533_f861_300x300.jpg" },
    { name: "Borda Atérmica Piscina 50x25x2cm Maresias Champagne - Areia D...", price: "73,29", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x25x2cm_maresias_champagne_areia_d_1570238851_3d3b_300x300.jpg" },
    { name: "Borda Atérmica Piscina Salvattore 50x25cm Kit C/50", price: "3.430,00", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_salvattore_50x25cm_kit_c_50_1569035138_7f14_300x300.jpg" },
    { name: "Borda Atérmica Piscina Linha Prime 50x25x2cm Champagne - Arei...", price: "73,29", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_linha_prime_50x25x2cm_champagne_arei_1568442715_5058_300x300.jpg" },
    { name: "Borda Atérmica Piscina Linha Prime SBF 50x25x2cm Cinza - Are...", price: "73,29", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_linha_prime_sbf__50x25x2cm_cinza_are_1568442699_99ac_300x300.jpg" },
    { name: "Borda Atérmica Peito De Pombo Salinas Baby 33x16x2,3x1,5cm Br...", price: "130,17", img: "https://cdn.leroymerlin.com.br/products/borda_atermica_peito_de_pombo_salinas_baby_33x16x2,3x1,5cm_br_1572325176_6f90_300x300.jpg" }
  ];

  return (
    <main className="pt-20">
      <section className="parallax-header text-white text-center px-4 h-[48vh] flex items-center justify-center bg-[url('https://cdn.awsli.com.br/2500x2500/1957/1957621/produto/143251805/premium-50x25cm-ugstwe.jpg')] bg-fixed bg-center bg-no-repeat bg-cover">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold font-oswald mb-4 tracking-tight uppercase">Bordas Atérmicas</h1>
          <p className="text-xl md:text-2xl italic">Acabamentos que não esquentam para sua piscina em Campinas e região</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-oswald mb-4 uppercase">Catálogo de Bordas Atérmicas</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Confira nossa linha completa de bordas para piscina com tecnologia atérmica.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {bordas.map((borda, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col">
                <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
                  <AdminEditable id={`borda-item-${index}`} type="img">
                    <img src={borda.img} className="max-h-full max-w-full object-contain" alt={borda.name} loading="lazy" />
                  </AdminEditable>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-bold text-sm mb-2 h-12 overflow-hidden">{borda.name}</h3>
                  <p className="text-orange-600 text-xl font-bold mb-4 mt-auto">
                    R$ <AdminEditable id={`borda-item-${index}`} type="price"><span>{borda.price}</span></AdminEditable>
                  </p>
                  <a 
                    href={`https://wa.me/5519984515960?text=${encodeURIComponent('Ola! Quero orcar ' + borda.name + ' para uma obra em Campinas.')}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 transition text-sm"
                  >
                    Comprar no WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
