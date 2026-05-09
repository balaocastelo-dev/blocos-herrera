<?php get_header(); ?>

<style>
    .parallax-hero {
        background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://raw.githubusercontent.com/balaocastelo-dev/blocos-herrera/master/parallax-blocks.jpg');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

<main>
    <!-- Hero Section -->
    <section id="home" class="parallax-hero text-center text-white px-4">
        <div class="max-w-4xl relative z-10">
            <h1 class="text-5xl md:text-7xl font-extrabold font-oswald mb-6 tracking-tight">OLARIA HERRERA</h1>
            <p class="text-xl md:text-2xl mb-8 font-light italic">Blocos Estruturais, Areia e Pedra com Entrega em 24 Horas</p>
            <div class="flex flex-col md:flex-row gap-4 justify-center">
                <a href="<?php echo get_permalink(get_page_by_path('blocos')); ?>" class="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl">Ver Blocos</a>
                <a href="#orcamento" class="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl">Fazer Orçamento</a>
            </div>
            <p class="mt-8 text-orange-400 font-bold uppercase tracking-widest">Frete Grátis para Campinas | Pedido Mín. 1000 Blocos</p>
        </div>
    </section>

    <!-- Info Section -->
    <section class="py-16 bg-white border-b">
        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div class="p-6">
                <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Entrega em 24h</h3>
                <p class="text-gray-600">Rapidez total para sua obra não parar.</p>
            </div>
            <div class="p-6">
                <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Qualidade Superior</h3>
                <p class="text-gray-600">Blocos estruturais de alta resistência.</p>
            </div>
            <div class="p-6">
                <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Campinas e Região</h3>
                <p class="text-gray-600">Frete grátis em toda a cidade de Campinas.</p>
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section id="produtos" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold font-oswald mb-4 uppercase">Outros Produtos</h2>
                <div class="w-24 h-1 bg-orange-600 mx-auto"></div>
                <p class="mt-4 text-gray-600">Materiais básicos e acabamentos para sua obra.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <?php
                $products = [
                    ['name' => 'Cimento Votoran (50kg)', 'price' => 34.90, 'image' => 'https://images.tcdn.com.br/img/img_prod/1110543/cimento_todas_obras_50kg_cpii_votoran_17_1_0920c5d011f0458129e71c9985223e71.jpg', 'unit' => 'Saco'],
                    ['name' => 'Areia (Fina/Média/Grossa)', 'price' => 700.00, 'image' => 'https://raw.githubusercontent.com/balaocastelo-dev/blocos-herrera/master/caminhao-areia.jpg', 'unit' => 'Caminhão 7m³'],
                    ['name' => 'Pedra e Pedrisco', 'price' => 850.00, 'image' => 'data:image/webp;base64,UklGRhgiAABXRUJQVlA4IAwiAACQhQCdASofAdcAPkUgjUSioiES2O4MKAREs7dwt4cADKhUJdLxt+/nQ/Wb+fumN6ff6r6H/OD9Nf+c3030AOl5tLLTX8kfOnyX+0Pb//D+5tlb7A9SP55+B/2P+E/c32Q/7P+Z8e/lx/seop+V/zv/P/mT+bH2AwlepH1noO+0P2P/k/438qPg5/C83+/d8BiPzqdGKXfW8/dl0GcEtLMsHpnH9rXAN6XvJ/E0V7eoPVHUWsvdrJ94ipM7NQjfgfJmsbzSxCU95b/WitHvVJ7+HFKBr/Vees03B5CO2Tkpa8U6fPR5tijMKt4oTjWkx72qppt1tn6qKQKworhtsfY4TrbfW4fGUdsdv+J9n8jcv5U93n39G4ViVwUf08WuTxuWOZHSpCPiofl7SHOgqtuurfZ5ZedzX9+B1+sLTUA5LTn91tPZipP9ilBt5gL0v8h76TXgByEDT/YP8nO+uwVawhnJRvI67yZeXxSPsq7NW6hbXupB5COCfokex9u943654vWih72S7/56tn5djdQ5CE3Vhbaiw6vLYIVx6n/JLCC1Ac0oovKocKa3P+ePlCxtWW91e+YiWqj92Y3t6g7bGVYuVyE5LYpGPJ/iEsZQ1tfQD7Ws9eJfG7QVfMx3gjPifKIWJJDbTNTK6FVTIPU71+B87KVTy2/Z5L0PtXRvNdnbZg1WcqMEdr8QGOBntdKdZmS4m8wdg9lxFQG1BgOd39Jznc4Wp2f4MIWzxBdBTt86cnFLrzMN8Zi1xN/Xak0yLfbtz6M02VuR3QsH9zaRJ6albcuYia11h2m6fHrRTy3du2cC5/86PSxeF48+Rcdovp/XPc3v+Qs67RHgmTUc1ykcWof1zW7NjcjVKS419+TnqtRI6SZCk/SMGi6XzL7DXi+vyP2jn9gew9NZR5S2EJv/1oOdTA1AEpM5ZQIcbQ8UopG1xQcZ00bjIjz8mV6cPy1uvPkrM9Q80c7R0YJW998irB0nvea/CGSKVP3B2EXJI/8+hZPVokTYECvvZhBb6aHYdbfl3KEDRriIIx6CRAZRVcTACMex9IIiYMpa5NYgUvCRwrmXxTAgGO0YEKo3p+mIDB2TJXbhucWlosGn7u+ZhCr6Y1P/JEL3VP9ZbH5qpS6w2aig+nO4NwZ0d49By/du+kFt//5NmtV/oLNmYHkDp9QjkCgftWK5Z2pD2x+du9g7IFnYeX3nSQHjj3nB35K6OVQPYRMNNGwCf2SWq1ePtqhbQNwu9+hoeMcgXYUh0p33psfhcn/vIAdO+xgySITMHUI0akSLiDlfsy3IeGmARfMwzKNXho9sLU2R7b6CNSX2lc2gUM5pZgUA+0jX43OsZoSC0JmYhirsvRZmIP/fRHJXKBczPVMJtEWl4tGxD84Z3NB8FX3rcrb2A4DaDFyxAS5sL9f/jdx8bkndqTLkhEzf8Ecc55JZ9bjE31oDhFiukMANpHIO6atE+LRz0X7heX2cfrd1Hu3C5qsz/UzP2J6hB2EgXsw4N+wR4Xlu17LJQuZnuwfpYn3xESC4Gk9Q0KXEgU9OQuzdJlJGEqIY85ouxcSbwJbmClS287Qc4pOk/ROL5QAE3zE/y7rr1nyRCim7zxk0MBpaN9TnuEf9/f9MfRrHMf4dMfDDsQ7GpcTOIzaje51olxpz0Tt4/jL7gbNeciwQfN8VgDrg0z8BI2ZcTDXVt8IACSf7cA+vnzK0j070YUL8fbcO/RqDHvX073QKJCGvh7Eyz2unwh70eFdaaV7MXI+O3DHJXhUHaSdEoDI2XsBIQ9jqy5IU3rEaUmHfWQAdpCvO2D1AKi34yfIt+Rsn9Eq5scC0Yh2/ZgN/EVWX1HxS6jNqNmCYygAADCvyZ4UwReHQZ6garBiEl3aB2pOfuzy3ItPFHexgmROsAlgyeAAAAAAAAAA', 'unit' => 'Caminhão 7m³'],
                    ['name' => 'Revestimentos (Piscina)', 'price' => 0, 'image' => 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'unit' => 'm²'],
                ];

                foreach ($products as $product): ?>
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                        <div class="h-48 bg-gray-50 flex items-center justify-center p-2">
                            <img src="<?php echo $product['image']; ?>" alt="<?php echo $product['name']; ?>" class="max-h-full max-w-full object-contain">
                        </div>
                        <div class="p-6 text-center">
                            <h3 class="font-bold text-lg mb-2"><?php echo $product['name']; ?></h3>
                            <p class="text-orange-600 text-2xl font-bold mb-4">
                                <?php if ($product['price'] > 0): ?>
                                    R$ <?php echo number_format($product['price'], 2, ',', '.'); ?>
                                <?php else: ?>
                                    Consulte
                                <?php endif; ?>
                                <span class="text-sm text-gray-500 font-normal">/ <?php echo $product['unit']; ?></span>
                            </p>
                            <?php if ($product['name'] === 'Revestimentos (Piscina)'): ?>
                                <a href="<?php echo get_permalink(get_page_by_path('revestimentos')); ?>" class="block text-center border-2 border-orange-600 text-orange-600 font-bold py-2 rounded-lg hover:bg-orange-600 hover:text-white transition">Ver Catálogo</a>
                            <?php else: ?>
                                <a href="https://wa.me/5519984515960?text=Gostaria de saber mais sobre <?php echo $product['name']; ?>" class="block text-center border-2 border-orange-600 text-orange-600 font-bold py-2 rounded-lg hover:bg-orange-600 hover:text-white transition">Orçar no WhatsApp</a>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Parallax Divider -->
    <section class="parallax parallax-section flex items-center justify-center text-white py-24">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl md:text-5xl font-bold font-oswald mb-6 uppercase">Construa com quem entende</h2>
            <p class="text-xl max-w-2xl mx-auto">Desde blocos estruturais até acabamentos para piscina, a Herrera é sua parceira em Campinas.</p>
        </div>
    </section>

    <!-- Calculator Section -->
    <section id="orcamento" class="py-20 bg-white" x-data="materialCalculator">
        <div class="container mx-auto px-4 max-w-4xl">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold font-oswald mb-4 uppercase">Calculadora de Materiais</h2>
                <div class="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
                <p class="text-gray-600">Informe a metragem e descubra quanto material você vai precisar.</p>
            </div>

            <div class="bg-gray-50 rounded-2xl p-8 shadow-inner border">
                <div class="flex mb-8 justify-center space-x-4">
                    <button @click="calcMode = 'area'" :class="calcMode === 'area' ? 'bg-orange-600 text-white' : 'bg-gray-200'" class="px-6 py-2 rounded-full font-bold transition">Por Área (m²)</button>
                    <button @click="calcMode = 'dims'" :class="calcMode === 'dims' ? 'bg-orange-600 text-white' : 'bg-gray-200'" class="px-6 py-2 rounded-full font-bold transition">Por Dimensões</button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div class="space-y-6">
                        <template x-if="calcMode === 'area'">
                            <div>
                                <label class="block text-sm font-bold text-gray-700 mb-2">Área Total das Paredes (m²)</label>
                                <input type="number" x-model="area" @input="calculate" class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Ex: 50">
                            </div>
                        </template>
                        <template x-if="calcMode === 'dims'">
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-bold text-gray-700 mb-2">Comprimento (m)</label>
                                    <input type="number" x-model="length" @input="calculate" class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Ex: 10">
                                </div>
                                <div>
                                    <label class="block text-sm font-bold text-gray-700 mb-2">Altura (m)</label>
                                    <input type="number" x-model="height" @input="calculate" class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Ex: 2.8">
                                </div>
                            </div>
                        </template>

                        <div class="bg-orange-50 p-6 rounded-xl border border-orange-100">
                            <h4 class="font-bold text-orange-800 mb-4">Estimativa de Material:</h4>
                            <ul class="space-y-3">
                                <li class="flex justify-between"><span>Blocos (14x19x39):</span> <span class="font-bold text-orange-600" x-text="results.blocks">0</span></li>
                                <li class="flex justify-between"><span>Cimento (Sacos):</span> <span class="font-bold text-orange-600" x-text="results.cement">0</span></li>
                                <li class="flex justify-between"><span>Ferro (Metros):</span> <span class="font-bold text-orange-600" x-text="results.iron">0</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="p-6 bg-white rounded-xl shadow-md">
                            <p class="text-sm text-gray-500 mb-4">*Cálculo baseado em padrões médios de construção. Consulte seu engenheiro.</p>
                            <a :href="getWhatsAppLink()" target="_blank" class="bg-green-500 hover:bg-green-600 text-white w-full py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center space-x-2 transition">
                                <span>Enviar Orçamento no WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Map/Location -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-4xl font-bold font-oswald mb-6 uppercase">Onde Estamos</h2>
                <p class="text-lg text-gray-600 mb-8">Visite nossa olaria ou solicite sua entrega. Atendemos toda a região de Campinas com frota própria.</p>
                <div class="space-y-4">
                    <div class="flex items-start space-x-4">
                        <div class="bg-orange-600 p-2 rounded-lg text-white mt-1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <div>
                            <p class="font-bold">Endereço</p>
                            <p class="text-gray-600">Rua Julia Aberle Fritz, 200<br>Pq Vista Alegre - Campinas / SP</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rounded-2xl overflow-hidden shadow-2xl h-96">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.331291845166!2d-47.128624!3d-22.9379684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b87e7b68f61d%3A0x79461f6a1e36c53e!2sRua%20J%C3%BAlia%20Aberle%20Fritz%2C%20200%20-%20Parque%20Vista%20Alegre%2C%20Campinas%20-%20SP%2C%2013056-432!5e0!3m2!1spt-BR!2sbr!4v1715200000000!5m2!1spt-BR!2sbr" 
                    width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
