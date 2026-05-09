<?php get_header(); ?>

<main>
    <!-- Hero Section -->
    <section id="home" class="parallax parallax-hero flex items-center justify-center text-center text-white px-4">
        <div class="max-w-4xl">
            <h1 class="text-5xl md:text-7xl font-extrabold font-oswald mb-6 tracking-tight">OLARIA HERRERA</h1>
            <p class="text-xl md:text-2xl mb-8 font-light italic">Blocos Estruturais, Areia e Pedra com Entrega em 24 Horas</p>
            <div class="flex flex-col md:flex-row gap-4 justify-center">
                <a href="#produtos" class="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl">Ver Produtos</a>
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
                <h2 class="text-4xl font-bold font-oswald mb-4">NOSSOS PRODUTOS</h2>
                <div class="w-24 h-1 bg-orange-600 mx-auto"></div>
                <p class="mt-4 text-gray-600">Preços competitivos e materiais de primeira linha.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Blocos (Example from Aveiro with 100% markup) -->
                <?php
                $products = [
                    ['name' => 'Bloco 14x19x39 Estrutural', 'price' => 7.36, 'image' => 'https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/8c7ae78baf2278ac8b579789a5355b77~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1783475163&x-signature=tSrR03D06iuWmwNlXPGbsJp9t6o%3D', 'unit' => 'Unidade'],
                    ['name' => 'Bloco 19x19x39 Estrutural', 'price' => 9.22, 'image' => 'https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/d4ca0ab6a853a6cb8306755511bf55a2~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1783475163&x-signature=hHF7C2RuaKjqlIMchihDmGKzfn4%3D', 'unit' => 'Unidade'],
                    ['name' => 'Areia (Fina/Média/Grossa)', 'price' => 700.00, 'image' => 'https://images.unsplash.com/photo-1533460004989-cef01064af7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'unit' => 'Caminhão 7m³'],
                    ['name' => 'Pedra e Pedrisco', 'price' => 850.00, 'image' => 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'unit' => 'Caminhão 7m³'],
                    ['name' => 'Revestimento de Parede', 'price' => 45.90, 'image' => 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'unit' => 'm²'],
                    ['name' => 'Revestimento Piscina', 'price' => 89.90, 'image' => 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'unit' => 'm²'],
                    ['name' => 'Bloco Pilar 29x19x29', 'price' => 22.34, 'image' => 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'unit' => 'Unidade'],
                    ['name' => 'Canaleta 14x19x39', 'price' => 9.22, 'image' => 'https://images.unsplash.com/photo-1590069230002-70cc6a474351?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'unit' => 'Unidade'],
                ];

                foreach ($products as $product): ?>
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                        <img src="<?php echo $product['image']; ?>" alt="<?php echo $product['name']; ?>" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <h3 class="font-bold text-lg mb-2"><?php echo $product['name']; ?></h3>
                            <p class="text-orange-600 text-2xl font-bold mb-4">R$ <?php echo number_format($product['price'], 2, ',', '.'); ?> <span class="text-sm text-gray-500 font-normal">/ <?php echo $product['unit']; ?></span></p>
                            <a href="https://wa.me/5519984515960?text=Gostaria de saber mais sobre <?php echo $product['name']; ?>" class="block text-center border-2 border-orange-600 text-orange-600 font-bold py-2 rounded-lg hover:bg-orange-600 hover:text-white transition">Orçar no WhatsApp</a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Parallax Divider -->
    <section class="parallax parallax-section flex items-center justify-center text-white py-24">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl md:text-5xl font-bold font-oswald mb-6">CONSTRUA COM QUEM ENTENDE</h2>
            <p class="text-xl max-w-2xl mx-auto">Desde blocos estruturais até acabamentos para piscina, a Olaria Herrera é sua parceira em Campinas.</p>
        </div>
    </section>

    <!-- Calculator Section -->
    <section id="orcamento" class="py-20 bg-white" x-data="materialCalculator">
        <div class="container mx-auto px-4 max-w-4xl">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold font-oswald mb-4">CALCULADORA DE MATERIAIS</h2>
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
                <h2 class="text-4xl font-bold font-oswald mb-6">ONDE ESTAMOS</h2>
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
                <!-- Placeholder for map -->
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.868128456453!2d-47.1085!3d-22.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b6f7a6a7a6a7%3A0x0!2zMjLCsDU3JzAwLjAiUyA0N8KwMDYnMzAuNiJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                    width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
