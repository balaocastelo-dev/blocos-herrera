<?php
/**
 * Template Name: Blocos Estruturais
 */
get_header(); ?>

<style>
    .parallax-video {
        position: relative;
        height: 60vh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .parallax-video iframe {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100vw;
        height: 100vh;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: -1;
    }
    .video-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 0;
    }
</style>

<main class="pt-20">
    <!-- Video Parallax Section -->
    <section class="parallax-video">
        <div class="video-overlay"></div>
        <iframe src="https://www.youtube.com/embed/nzUsq1lbKzI?autoplay=1&mute=1&loop=1&playlist=nzUsq1lbKzI&controls=0&showinfo=0&rel=0&iv_load_policy=3" frameborder="0" allow="autoplay; encrypted-media"></iframe>
        <div class="relative z-10 text-center text-white px-4">
            <h1 class="text-5xl md:text-7xl font-extrabold font-oswald mb-4">BLOCOS ESTRUTURAIS</h1>
            <p class="text-xl md:text-2xl italic">Qualidade Aveiro com o melhor atendimento de Campinas</p>
        </div>
    </section>

    <!-- Products Grid -->
    <section class="py-20">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                $blocos = [
                    ['name' => "Bloco 14x19x39 Estrutural Vazado 3,0 MPa", 'price' => 7.36],
                    ['name' => "Bloco Pilar 29x19x29 Estrutural", 'price' => 22.34],
                    ['name' => "Bloco 19x19x39 3,0 MPa Estrutural Vazado", 'price' => 9.22],
                    ['name' => "Canaleta 14x19x39 Estrutural", 'price' => 9.22],
                    ['name' => "Bloco 14x19x29 Estrutural 4,5 MPa", 'price' => 7.88],
                    ['name' => "Canaleta 14x19x29 Estrutural", 'price' => 8.08],
                    ['name' => "Meio Bloco 14x19x14", 'price' => 4.78],
                    ['name' => "Bloco 09x19x39 3,0 MPa Estrutural", 'price' => 6.40],
                    ['name' => "Meio Bloco 09x19x19", 'price' => 3.94],
                    ['name' => "Canaleta 09x19x39", 'price' => 8.28],
                    ['name' => "Meia Canaleta 09x19x19", 'price' => 4.26],
                    ['name' => "Meio Bloco 19x19x19", 'price' => 6.10],
                    ['name' => "Canaleta 19x19x39", 'price' => 11.82],
                    ['name' => "Bloco 19x19x39 4,5 MPa", 'price' => 10.54],
                    ['name' => "Meia Canaleta 14x19x19", 'price' => 5.26]
                ];

                foreach ($blocos as $bloco): ?>
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border border-gray-100">
                        <div class="h-48 bg-gray-50 flex items-center justify-center p-4">
                            <img src="https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/8c7ae78baf2278ac8b579789a5355b77~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1783475163&x-signature=tSrR03D06iuWmwNlXPGbsJp9t6o%3D" class="max-h-full max-w-full object-contain" alt="<?php echo $bloco['name']; ?>">
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
