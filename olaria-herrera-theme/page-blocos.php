<?php
/**
 * Template Name: Blocos Estruturais
 */
get_header(); ?>

<style>
    .parallax-header {
        background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://raw.githubusercontent.com/balaocastelo-dev/blocos-herrera/master/parallax-blocks.jpg');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 60vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

<main class="pt-20">
    <!-- Parallax Header Section -->
    <section class="parallax-header text-white text-center px-4">
        <div class="max-w-4xl">
            <h1 class="text-5xl md:text-7xl font-extrabold font-oswald mb-4 tracking-tight">BLOCOS ESTRUTURAIS</h1>
            <p class="text-xl md:text-2xl italic">Qualidade Aveiro com o melhor atendimento de Campinas</p>
        </div>
    </section>

    <!-- Products Grid -->
    <section class="py-20">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                $blocos = [
                    ['name' => "Piso Intertravado 16 faces (Onda) 11x22x06 - 35MPa", 'price' => 3.78, 'img' => "https://static.wixstatic.com/media/2d7880_894de5958ce74b52a16a6a536e74e712~mv2.jpg/v1/fill/w_252,h_252,al_c,lg_1,q_80,enc_avif,quality_auto/2d7880_894de5958ce74b52a16a6a536e74e712~mv2.jpg"],
                    ['name' => "Piso Intertravado Retangular 10x20x06 - 35MPa", 'price' => 3.02, 'img' => "https://static.wixstatic.com/media/2d7880_9f57a72ebdda4682bcd9c2512b18a234~mv2.jpg/v1/fill/w_460,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_9f57a72ebdda4682bcd9c2512b18a234~mv2.jpg"],
                    ['name' => "Bloco 14x19x39 Estrutural Vazado 3,0 MPa ( Sem fundo )", 'price' => 7.36, 'img' => "https://static.wixstatic.com/media/2d7880_3bad9af6c0844a3eb332e04af6dedde3~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_3bad9af6c0844a3eb332e04af6dedde3~mv2.png"],
                    ['name' => "Bloco Pilar 29x19x29 Estrutural", 'price' => 22.34, 'img' => "https://static.wixstatic.com/media/2d7880_028e7a897d0e4977ac649a0f716f5024~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_028e7a897d0e4977ac649a0f716f5024~mv2.png"],
                    ['name' => "Bloco Jardim Vertical 21x19x39", 'price' => 31.00, 'img' => "https://static.wixstatic.com/media/2d7880_a5b0ef52cc6b495099939708c17e9132~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_a5b0ef52cc6b495099939708c17e9132~mv2.png"],
                    ['name' => "Bloco 19x19x39 3,0 MPa Estrutural Vazado ( Sem fundo )", 'price' => 9.22, 'img' => "https://static.wixstatic.com/media/2d7880_0c5d884df5164a30ad1876c1a7ee52bd~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_0c5d884df5164a30ad1876c1a7ee52bd~mv2.png"],
                    ['name' => "Canaleta 14x19x39 Estrutural", 'price' => 9.22, 'img' => "https://static.wixstatic.com/media/2d7880_3d4936a89d58444a91ba0883e3d1c53b~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_3d4936a89d58444a91ba0883e3d1c53b~mv2_d_5472_3648_s_4_2.png"],
                    ['name' => "Bloco 14x19x29 Estrutural 4,5 MPa", 'price' => 7.88, 'img' => "https://static.wixstatic.com/media/2d7880_46f2eb3d3cf141dd84aeb3b93f86f019~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_46f2eb3d3cf141dd84aeb3b93f86f019~mv2_d_5472_3648_s_4_2.png"],
                    ['name' => "Canaleta 14x19x29 Estrutural", 'price' => 8.08, 'img' => "https://static.wixstatic.com/media/2d7880_356a919f1fa14149938950f923e7a6c5~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_356a919f1fa14149938950f923e7a6c5~mv2_d_5472_3648_s_4_2.png"],
                    ['name' => "Meio Bloco 14x19x14", 'price' => 4.78, 'img' => "https://static.wixstatic.com/media/2d7880_30a270b564ad4f959ecf0eee6e1902eb~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_30a270b564ad4f959ecf0eee6e1902eb~mv2_d_5472_3648_s_4_2.png"],
                    ['name' => "Bloco 09x19x39 3,0 MPa Estrutural ( Sem fundo )", 'price' => 6.40, 'img' => "https://static.wixstatic.com/media/2d7880_565031a70e14493182833932780cc783~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_565031a70e14493182833932780cc783~mv2.png"],
                    ['name' => "Meio Bloco 09x19x19", 'price' => 3.94, 'img' => "https://static.wixstatic.com/media/2d7880_b6fb106f8ad7448ead25085b5661311f~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_b6fb106f8ad7448ead25085b5661311f~mv2_d_5472_3648_s_4_2.png"],
                    ['name' => "Canaleta 09x19x39", 'price' => 8.28, 'img' => "https://static.wixstatic.com/media/2d7880_4aa9f2932a0e4494845bd22e9906bd45~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_4aa9f2932a0e4494845bd22e9906bd45~mv2_d_5472_3648_s_4_2.png"],
                    ['name' => "Meia Canaleta 09x19x19", 'price' => 4.26, 'img' => "https://static.wixstatic.com/media/2d7880_a32a852bdb524db0a7a87784168d6c5e~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_a32a852bdb524db0a7a87784168d6c5e~mv2_d_5472_3648_s_4_2.png"],
                    ['name' => "Meio Bloco 19x19x19", 'price' => 6.10, 'img' => "https://static.wixstatic.com/media/2d7880_6e6e730296e54a579d2c96024a834cfe~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_6e6e730296e54a579d2c96024a834cfe~mv2_d_5472_3648_s_4_2.png"],
                    ['name' => "Canaleta 19x19x39", 'price' => 11.82, 'img' => "https://static.wixstatic.com/media/2d7880_089242993348462197cc84c286014030~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_089242993348462197cc84c286014030~mv2_d_5472_3648_s_4_2.png"],
                    ['name' => "Bloco 19x19x39 4,5 MPa ( Estrutural Vazado )", 'price' => 10.54, 'img' => "https://static.wixstatic.com/media/2d7880_d0bf06948bc04a83ad69c20f10ae6e50~mv2.jpg/v1/fill/w_460,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_d0bf06948bc04a83ad69c20f10ae6e50~mv2.jpg"],
                    ['name' => "Meia Canaleta 14x19x19", 'price' => 5.26, 'img' => "https://static.wixstatic.com/media/2d7880_bf5e870e6055470cbc58fb42e490ad6c~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_bf5e870e6055470cbc58fb42e490ad6c~mv2_d_5472_3648_s_4_2.png"],
                    ['name' => "Meio Bloco 14x19x19", 'price' => 4.92, 'img' => "https://static.wixstatic.com/media/2d7880_465c72e8624047b3aace7519fcb3de6e~mv2_d_5472_3648_s_4_2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_465c72e8624047b3aace7519fcb3de6e~mv2_d_5472_3648_s_4_2.png"],
                    ['name' => "Bloco 14x19x39 4,5 MPa Estrutural ( Sem Fundo )", 'price' => 8.50, 'img' => "https://static.wixstatic.com/media/2d7880_603946cae5574172a9f53dae3753ba1b~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d7880_603946cae5574172a9f53dae3753ba1b~mv2.png"]
                ];

                foreach ($blocos as $bloco): ?>
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border border-gray-100">
                        <div class="h-48 bg-gray-50 flex items-center justify-center p-4">
                            <img src="<?php echo $bloco['img']; ?>" class="max-h-full max-w-full object-contain" alt="<?php echo $bloco['name']; ?>">
                        </div>
                        <div class="p-6">
                            <h3 class="font-bold text-lg mb-2 h-14 overflow-hidden"><?php echo $bloco['name']; ?></h3>
                            <p class="text-orange-600 text-3xl font-bold mb-4">R$ <?php echo number_format($bloco['price'], 2, ',', '.'); ?></p>
                            <a href="https://wa.me/5519984515960?text=Gostaria de orçar <?php echo $bloco['name']; ?>" class="block text-center bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition">Comprar no WhatsApp</a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
