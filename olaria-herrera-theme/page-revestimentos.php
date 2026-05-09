<?php
/**
 * Template Name: Revestimentos
 */
get_header(); ?>

<style>
    .parallax-header {
        background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 40vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

<main class="pt-20">
    <section class="parallax-header text-white text-center px-4">
        <div class="max-w-4xl">
            <h1 class="text-5xl md:text-6xl font-extrabold font-oswald mb-4 tracking-tight">REVESTIMENTOS PARA PISCINA</h1>
            <p class="text-xl md:text-2xl italic">O toque final que sua área de lazer merece</p>
        </div>
    </section>

    <section class="py-20">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <!-- Revestimento 1 -->
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">
                    <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Revestimento Piscina Azul" class="w-full h-64 object-cover">
                    <div class="p-8 text-center">
                        <h3 class="text-2xl font-bold mb-4">Pastilha Cerâmica Azul</h3>
                        <p class="text-gray-600 mb-6 italic">Ideal para piscinas residenciais e comerciais, alta durabilidade e brilho.</p>
                        <a href="https://wa.me/5519984515960?text=Gostaria de orçar pastilhas cerâmicas" class="inline-block bg-orange-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-orange-700 transition">Solicitar Preço</a>
                    </div>
                </div>

                <!-- Revestimento 2 -->
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">
                    <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Pedra Hijau" class="w-full h-64 object-cover">
                    <div class="p-8 text-center">
                        <h3 class="text-2xl font-bold mb-4">Revestimento Pedra Hijau</h3>
                        <p class="text-gray-600 mb-6 italic">Visual natural e sofisticado, efeito terapêutico na água.</p>
                        <a href="https://wa.me/5519984515960?text=Gostaria de orçar Pedra Hijau" class="inline-block bg-orange-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-orange-700 transition">Solicitar Preço</a>
                    </div>
                </div>

                <!-- Revestimento 3 -->
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">
                    <img src="https://images.unsplash.com/photo-1590069230002-70cc6a474351?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Borda de Piscina" class="w-full h-64 object-cover">
                    <div class="p-8 text-center">
                        <h3 class="text-2xl font-bold mb-4">Bordas atérmicas</h3>
                        <p class="text-gray-600 mb-6 italic">Segurança e conforto térmico para o entorno da sua piscina.</p>
                        <a href="https://wa.me/5519984515960?text=Gostaria de orçar bordas atérmicas" class="inline-block bg-orange-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-orange-700 transition">Solicitar Preço</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
