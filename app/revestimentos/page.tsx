"use client";

import AdminEditable from "@/components/AdminEditable";

interface Product {
  name: string;
  price: string;
  img: string;
}

export default function RevestimentosPage() {
  const revestimentos: Product[] = [
    { name: "Revestimento para Piscina 10x10cm Noronha Jade Mesh Eliane", price: "138,05", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_noronha_jade_30x40,10cm_eliane_92004465_e723_300x300.JPG" },
    { name: "Revestimento para Piscina 10x10cm Noronha Mar Mesh Eliane", price: "138,05", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_noronha_mar_30x40,1cm_eliane_92009582_4af0_300x300.JPG" },
    { name: "Revestimento para Piscina 20x20cm Hijau Verde Artens", price: "184,11", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_brilhante_hijau_verde_20x20cm_91920073_7069_300x300.JPG" },
    { name: "Revestimento para Piscina 20x20cm Hijau Azul Artens", price: "184,11", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_brilhante_hijau_azul_20x20cm_91920052_011b_300x300.JPG" },
    { name: "Revestimento para Piscina 20x20cm Hijau Verde Artens (Acetinado)", price: "184,11", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_acetinado_hijau_verde_20x20cm_91920080_83da_300x300.JPG" },
    { name: "Revestimento para Piscina 20x20cm Hijau Azul Artens (Acetinado)", price: "184,11", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_acetinado_hijau_azul_20x20cm_91920066_1e88_300x300.JPG" },
    { name: "Revestimento para Piscina 10x10cm Java Mar Mesh Eliane", price: "122,26", img: "https://cdn.leroymerlin.com.br/products/rev_ex_br_bo_10x10_java_mar_mesh_m2_92359071_ae1e_300x300.png" },
    { name: "Revestimento para Piscina Boreal Ivy 20x20cm Artens", price: "115,68", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_boreal_ivy_20x20cm_artens_91943866_00dc_300x300.JPG" },
    { name: "Revestimento para Piscina 20x20cm Grace Bay Artens", price: "90,86", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_grace_bay_20x20cm_artens_90700701_70af_300x300.JPG" },
    { name: "Revestimento para Piscina Binar Ivy 20x20cm", price: "115,68", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_binar_ivy_20x20cm_91943880_b50c_300x300.JPG" },
    { name: "Revestimento para Piscina 10x10cm Noronha Aqua Mesh Eliane", price: "138,05", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_noronha_agua_mesh_30x40,1cm_92011682_4dad_300x300.png" },
    { name: "Revestimento para Piscina 10x10cm Noronha Jade Mesh Eliane (Acetinado)", price: "157,79", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_30x40,1cm_noronha_mesh_jade_92051960_1880_300x300.png" },
    { name: "Revestimento para Piscina 7,5x7,5cm Java Lago Eliane", price: "131,47", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_java_lago_31,2x39,1cm_eliane_92108835_0cf5_300x300.jpg" },
    { name: "Revestimento para Piscina 10x10cm Noronha Mar Mesh Eliane (Acetinado)", price: "138,05", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_30x40,1cm_noronha_mesh_mar_92051953_413d_300x300.png" },
    { name: "Revestimento para Piscina 20x20cm Capri Hijau Eliane", price: "135,95", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_20x20cm_capri_hijau_92049552_9083_300x300.jpg" },
    { name: "Revestimento para Piscina 20x20cm Malibu Lake Portobello", price: "243,33", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_20x20cm_malibu_lake_portobello_91849653_75da_300x300.jpg" },
    { name: "Revestimento para Fachada 15,46x15,46cm Piscina Branco Eliane", price: "103,73", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_branco_15,4x15,4cm_eliane_86951725_1787_300x300.JPG" },
    { name: "Revestimento para Piscina 20x20cm Malibu Mountain Portobello", price: "243,33", img: "https://cdn.leroymerlin.com.br/products/revestimento_externo_malibu_mountain_20x20cm_portobello_90240024_2ebe_300x300.JPG" },
    { name: "Revestimento para Piscina 20x20cm Onda Azul Mar Eliane", price: "102,52", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_azul_mar_onda_20x20cm_eliane_90408101_e2fb_300x300.JPG" },
    { name: "Revestimento para Piscina 20x20cm Onda Céu Azul Eliane", price: "102,52", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_ceu_onda_azul_20x20cm_eliane_90613341_d690_300x300.JPG" },
    { name: "Revestimento para Piscina 10x10cm Java Lago Mesh Eliane", price: "177,53", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_java_lago_mesh_30x40,10cm_92007972_a6ba_300x300.JPG" },
    { name: "Revestimento para Piscina 10x10cm Java Mar Mesh Eliane (Acetinado)", price: "170,95", img: "https://cdn.leroymerlin.com.br/products/revestimento_externo_java_mar_mesh_matte_10x10cm_eliane_92359085_f928_300x300.png" },
    { name: "Revestimento para Piscina 20x20cm Onda Verde Jade Eliane", price: "111,73", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_verde_jade_onda_20x20cm_eliane_90408080_4b90_300x300.JPG" },
    { name: "Revestimento para Piscina 10x10cm Noronha Aqua Mesh Eliane (Acetinado)", price: "138,05", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_10x10cm_noronha_agua_mesh_92051946_2a65_300x300.jpg" },
    { name: "Revestimento para Piscina 20,13x20,13cm Pacific Portinari", price: "170,95", img: "https://cdn.leroymerlin.com.br/products/revestimento_pacific_verde_20,13x20,13cm_portinari_92251012_7540_300x300.jpg" },
    { name: "Revestimento para Piscina 10x10cm Amalfi Grupo Ceral", price: "111,73", img: "https://cdn.leroymerlin.com.br/products/revestimento_acetinado_amalfi_30,7x30,7cm_grupo_ceral_92357790_d580_300x300.png" },
    { name: "Revestimento para Piscina 20x20cm Onda Azul Petroleo Eliane", price: "102,52", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_petroleo_onda_azul_20x20cm_eliane_90613320_8886_300x300.JPG" },
    { name: "Revestimento para Piscina 20x20cm Malibu Ocean Portobello", price: "243,33", img: "https://cdn.leroymerlin.com.br/products/revestimento_externo_malibu_ocean_20x20cm_portobello_90240010_108c_300x300.JPG" },
    { name: "Revestimento para Piscina 10x10cm Noronha Safira Mesh Eliane", price: "138,05", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_brilhante_safira_mesh_30x40,1cm_92056160_e293_300x300.png" },
    { name: "Revestimento para Piscina 10x10cm Sancho Blue Grupo Ceral", price: "111,85", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_10x10cm_sancho_blue_grupo_ceral_92247575_c60e_300x300.jpg" },
    { name: "Revestimento para Piscina 10x10cm Sancho Green Grupo Ceral", price: "111,85", img: "https://cdn.leroymerlin.com.br/products/revestimento_sancho_green_10x10cm_grupo_ceral_92247582_00a4_300x300.jpg" },
    { name: "Revestimento para Piscina 10x10cm Amalfi Grupo Ceral (Brilhante)", price: "111,73", img: "https://cdn.leroymerlin.com.br/products/revestimento_brilhante_amalfi_30,7x30,7cm_grupo_ceral_92357804_f3b2_300x300.png" },
    { name: "Revestimento para Piscina 15x15cm Aquarium Surf Eliane", price: "190,69", img: "https://cdn.leroymerlin.com.br/products/revestimento_piscina_acetinado_15x15cm_aquarium_surf_eliane_92268512_a3f6_300x300.jpg" },
    { name: "Revestimento para Piscina 20,3x20,3cm Bora Bora Grupo Ceral", price: "105,15", img: "https://cdn.leroymerlin.com.br/products/revestimento_acetinado_bora_bora_20,3x20,3cm_grupo_ceral_92357832_575f_300x300.png" },
    { name: "Revestimento para Piscina 10x10cm Phuket Green Grupo Ceral", price: "111,73", img: "https://cdn.leroymerlin.com.br/products/revestimento_acetinado_phuket_green_30,7x30,7cm_grupo_ceral_92357825_2274_300x300.png" },
    { name: "Revestimento para Piscina 20x20cm Capri Marine Eliane", price: "144,63", img: "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_20x20cm_capri_marine_92049566_fdba_300x300.jpg" }
  ];

  return (
    <main className="pt-20">
      <section className="parallax-header text-white text-center px-4 h-[48vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1950&q=80')] bg-fixed bg-center bg-no-repeat bg-cover">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold font-oswald mb-4 tracking-tight uppercase">Revestimentos para Piscina</h1>
          <p className="text-xl md:text-2xl italic">Acabamentos e revestimentos de alta qualidade para sua obra em Campinas</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-oswald mb-4 uppercase">Catálogo de Revestimentos</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Confira nossa linha completa de revestimentos para piscina e áreas externas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {revestimentos.map((rev, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col">
                <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
                  <AdminEditable id={`rev-item-${index}`} type="img">
                    <img src={rev.img} className="max-h-full max-w-full object-contain" alt={rev.name} loading="lazy" />
                  </AdminEditable>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-bold text-sm mb-2 h-12 overflow-hidden">{rev.name}</h3>
                  <p className="text-orange-600 text-xl font-bold mb-4 mt-auto">
                    R$ <AdminEditable id={`rev-item-${index}`} type="price"><span>{rev.price}</span></AdminEditable>
                  </p>
                  <a 
                    href={`https://wa.me/5519984515960?text=${encodeURIComponent('Ola! Quero orcar ' + rev.name + ' para uma obra em Campinas.')}`} 
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
