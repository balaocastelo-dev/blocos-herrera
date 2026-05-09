"use client";

import AdminEditable from "@/components/AdminEditable";

interface Product {
  name: string;
  price: string;
  img: string;
}

export default function BlocosPage() {
  const blocos: Product[] = [
    { name: "Piso Intertravado 16 faces (Onda) 11x22x06 - 35MPa", price: "2,65", img: "https://static.wixstatic.com/media/2d7880_894de5958ce74b52a16a6a536e74e712~mv2.jpg/v1/fill/w_252,h_252,al_c,lg_1,q_80,enc_avif,quality_auto/2d7880_894de5958ce74b52a16a6a536e74e712~mv2.jpg" },
    { name: "Piso Intertravado Retangular 10x20x06 - 35MPa", price: "2,11", img: "https://static.wixstatic.com/media/2d7880_9f57a72ebdda4682bcd9c2512b18a234~mv2.jpg/v1/fill/w_460,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_9f57a72ebdda4682bcd9c2512b18a234~mv2.jpg" },
    { name: "Bloco 14x19x39 Estrutural Vazado 3,0 MPa ( Sem fundo )", price: "5,15", img: "https://static.wixstatic.com/media/2d7880_3bad9af6c0844a3eb332e04af6dedde3~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_3bad9af6c0844a3eb332e04af6dedde3~mv2.png" },
    { name: "Bloco Pilar 29x19x29 Estrutural", price: "15,64", img: "https://static.wixstatic.com/media/2d7880_028e7a897d0e4977ac649a0f716f5024~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_028e7a897d0e4977ac649a0f716f5024~mv2.png" },
    { name: "Bloco Jardim Vertical 21x19x39", price: "21,70", img: "https://static.wixstatic.com/media/2d7880_a5b0ef52cc6b495099939708c17e9132~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_a5b0ef52cc6b495099939708c17e9132~mv2.png" },
    { name: "Bloco 19x19x39 3,0 MPa Estrutural Vazado ( Sem fundo )", price: "6,45", img: "https://static.wixstatic.com/media/2d7880_0c5d884df5164a30ad1876c1a7ee52bd~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_0c5d884df5164a30ad1876c1a7ee52bd~mv2.png" },
    { name: "Canaleta 14x19x39 Estrutural", price: "6,45", img: "https://static.wixstatic.com/media/2d7880_3d4936a89d58444a91ba0883e3d1c53b~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_3d4936a89d58444a91ba0883e3d1c53b~mv2_d_5472_3648_s_4_2.png" },
    { name: "Bloco 14x19x29 Estrutural 4,5 MPa", price: "5,52", img: "https://static.wixstatic.com/media/2d7880_46f2eb3d3cf141dd84aeb3b93f86f019~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_46f2eb3d3cf141dd84aeb3b93f86f019~mv2_d_5472_3648_s_4_2.png" },
    { name: "Canaleta 14x19x29 Estrutural", price: "5,66", img: "https://static.wixstatic.com/media/2d7880_356a919f1fa14149938950f923e7a6c5~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_356a919f1fa14149938950f923e7a6c5~mv2_d_5472_3648_s_4_2.png" },
    { name: "Meio Bloco 14x19x14", price: "3,35", img: "https://static.wixstatic.com/media/2d7880_30a270b564ad4f959ecf0eee6e1902eb~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_30a270b564ad4f959ecf0eee6e1902eb~mv2_d_5472_3648_s_4_2.png" },
    { name: "Bloco 09x19x39 3,0 MPa Estrutural ( Sem fundo )", price: "4,48", img: "https://static.wixstatic.com/media/2d7880_565031a70e14493182833932780cc783~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_565031a70e14493182833932780cc783~mv2.png" },
    { name: "Meio Bloco 09x19x19", price: "2,76", img: "https://static.wixstatic.com/media/2d7880_b6fb106f8ad7448ead25085b5661311f~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_b6fb106f8ad7448ead25085b5661311f~mv2_d_5472_3648_s_4_2.png" },
    { name: "Canaleta 09x19x39", price: "5,80", img: "https://static.wixstatic.com/media/2d7880_4aa9f2932a0e4494845bd22e9906bd45~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_4aa9f2932a0e4494845bd22e9906bd45~mv2_d_5472_3648_s_4_2.png" },
    { name: "Meia Canaleta 09x19x19", price: "2,98", img: "https://static.wixstatic.com/media/2d7880_a32a852bdb524db0a7a87784168d6c5e~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_a32a852bdb524db0a7a87784168d6c5e~mv2_d_5472_3648_s_4_2.png" },
    { name: "Meio Bloco 19x19x19", price: "4,27", img: "https://static.wixstatic.com/media/2d7880_6e6e730296e54a579d2c96024a834cfe~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_6e6e730296e54a579d2c96024a834cfe~mv2_d_5472_3648_s_4_2.png" },
    { name: "Canaleta 19x19x39", price: "8,27", img: "https://static.wixstatic.com/media/2d7880_089242993348462197cc84c286014030~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_089242993348462197cc84c286014030~mv2_d_5472_3648_s_4_2.png" },
    { name: "Bloco 19x19x39 4,5 MPa ( Estrutural Vazado )", price: "7,38", img: "https://static.wixstatic.com/media/2d7880_d0bf06948bc04a83ad69c20f10ae6e50~mv2.jpg/v1/fill/w_460,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_d0bf06948bc04a83ad69c20f10ae6e50~mv2.jpg" },
    { name: "Meia Canaleta 14x19x19", price: "3,68", img: "https://static.wixstatic.com/media/2d7880_bf5e870e6055470cbc58fb42e490ad6c~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_bf5e870e6055470cbc58fb42e490ad6c~mv2_d_5472_3648_s_4_2.png" },
    { name: "Meio Bloco 14x19x19", price: "3,44", img: "https://static.wixstatic.com/media/2d7880_465c72e8624047b3aace7519fcb3de6e~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_465c72e8624047b3aace7519fcb3de6e~mv2_d_5472_3648_s_4_2.png" },
    { name: "Bloco 14x19x39 4,5 MPa Estrutural ( Sem Fundo )", price: "5,95", img: "https://static.wixstatic.com/media/2d7880_603946cae5574172a9f53dae3753ba1b~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_603946cae5574172a9f53dae3753ba1b~mv2.png" }
  ];

  return (
    <main className="pt-20">
      <section className="parallax-header text-white text-center px-4 h-[60vh] flex items-center justify-center relative overflow-hidden">
        <div className="video-overlay absolute inset-0 bg-black/50 z-0"></div>
        <iframe 
          src="https://www.youtube.com/embed/nzUsq1lbKzI?autoplay=1&mute=1&loop=1&playlist=nzUsq1lbKzI&controls=0&rel=0&showinfo=0&iv_load_policy=3" 
          frameBorder="0" 
          allow="autoplay; encrypted-media"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"
        ></iframe>
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold font-oswald mb-4 tracking-tight uppercase">Blocos Estruturais</h1>
          <p className="text-xl md:text-2xl italic">Blocos de concreto em Campinas com entrega rapida para obras em toda a RMC</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blocos.map((bloco, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col">
                <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
                  <AdminEditable id={`bloco-${index}`} type="img">
                    <img src={bloco.img} className="max-h-full max-w-full object-contain" alt={bloco.name} loading="lazy" />
                  </AdminEditable>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-bold text-lg mb-2 h-14 overflow-hidden">{bloco.name}</h3>
                  <p className="text-orange-600 text-3xl font-bold mb-4 mt-auto">
                    R$ <AdminEditable id={`bloco-${index}`} type="price"><span>{bloco.price}</span></AdminEditable>
                  </p>
                  <a 
                    href={`https://wa.me/5519984515960?text=${encodeURIComponent('Ola! Quero orcar ' + bloco.name + ' para uma obra em Campinas.')}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition"
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
