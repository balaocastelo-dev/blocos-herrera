<?php get_header(); ?>

<style>
    .parallax-hero {
        position: relative;
        height: 100vh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .parallax-hero iframe {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100vw;
        height: 100vh;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: -1;
    }
    .hero-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(0, 0, 0, 0.82), rgba(124, 45, 18, 0.72));
        z-index: 0;
    }
    .chip {
        display: inline-flex;
        align-items: center;
        border-radius: 9999px;
        padding: 0.55rem 0.9rem;
        font-size: 0.85rem;
        font-weight: 700;
        background: #fff7ed;
        color: #9a3412;
        border: 1px solid #fed7aa;
    }
</style>

<main>
    <section id="home" class="parallax-hero text-center text-white px-4">
        <div class="hero-overlay"></div>
        <iframe src="https://www.youtube.com/embed/nzUsq1lbKzI?autoplay=1&mute=1&loop=1&playlist=nzUsq1lbKzI&controls=0&rel=0&showinfo=0&iv_load_policy=3" frameborder="0" allow="autoplay; encrypted-media"></iframe>
        <div class="max-w-4xl relative z-10">
            <h1 class="text-5xl md:text-7xl font-extrabold font-oswald mb-6 tracking-tight">Herrera Materiais para construcao e fabrica de blocos</h1>
            <p class="text-xl md:text-2xl mb-4 font-light italic">Material de construcao em Campinas com entrega rapida para obras em toda a RMC</p>
            <p class="max-w-3xl mx-auto text-base md:text-lg text-orange-100 mb-8">Blocos estruturais, areia, pedra, pedrisco, cimento e revestimentos com atendimento agil pelo WhatsApp para Campinas, Hortolandia, Sumare, Paulinia, Valinhos e cidades vizinhas.</p>
            <div class="flex flex-col md:flex-row gap-4 justify-center">
                <a href="<?php echo get_permalink(get_page_by_path('blocos')); ?>" class="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl">Ver Blocos</a>
                <a href="#orcamento" class="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl">Fazer Orcamento</a>
                <a href="https://wa.me/5519984515960?text=Ola! Quero comprar material de construcao em Campinas." target="_blank" class="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl">WhatsApp 19 98451-5960</a>
            </div>
            <p class="mt-8 text-orange-300 font-bold uppercase tracking-widest">Entrega rapida em Campinas e Regiao Metropolitana | Pedido minimo de 1000 blocos</p>
        </div>
    </section>

    <section class="py-16 bg-white border-b">
        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div class="p-6">
                <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Entrega em 24h</h3>
                <p class="text-gray-600">Agilidade para sua obra em Campinas nao parar.</p>
            </div>
            <div class="p-6">
                <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Qualidade Superior</h3>
                <p class="text-gray-600">Blocos estruturais e materiais de alta resistencia.</p>
            </div>
            <div class="p-6">
                <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Campinas e Região</h3>
                <p class="text-gray-600">Atendimento em Campinas, Hortolandia, Sumare, Paulinia e RMC.</p>
            </div>
            <div class="p-6">
                <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-2m10-8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V8z"></path></svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Orcamento Rapido</h3>
                <p class="text-gray-600">Resposta comercial agil pelo WhatsApp 19 98451-5960.</p>
            </div>
        </div>
    </section>

    <section class="py-20 bg-orange-50/60">
        <div class="container mx-auto px-4">
            <div class="grid gap-10 lg:grid-cols-[1.3fr_1fr] items-center">
                <div>
                    <p class="text-orange-600 font-bold uppercase tracking-[0.3em] mb-4">SEO local para Campinas e RMC</p>
                    <h2 class="text-4xl font-bold font-oswald mb-6 uppercase">Depósito de material de construção em Campinas com foco em busca local e conversão</h2>
                    <p class="text-gray-700 text-lg mb-6">A Herrera Materiais para construcao e fabrica de blocos foi posicionada neste projeto para aparecer com força nas buscas por material de construcao em Campinas, blocos de concreto em Campinas, areia em Campinas, pedra em Campinas, pedrisco em Campinas, cimento em Campinas e revestimento para piscina em Campinas e regiao.</p>
                    <div class="flex flex-wrap gap-3">
                        <span class="chip">Material de construcao em Campinas</span>
                        <span class="chip">Blocos estruturais em Campinas</span>
                        <span class="chip">Areia e pedra em Campinas</span>
                        <span class="chip">Depósito na RMC</span>
                        <span class="chip">WhatsApp rapido</span>
                    </div>
                </div>
                <div class="bg-white rounded-3xl shadow-xl p-8 border border-orange-100">
                    <h3 class="text-2xl font-bold mb-4">Atendimento comercial direto</h3>
                    <ul class="space-y-3 text-gray-700 mb-6">
                        <li>Blocos de concreto estrutural para obras em Campinas.</li>
                        <li>Areia fina, media e grossa com pedido minimo de 7m.</li>
                        <li>Pedra e pedrisco com entrega programada para RMC.</li>
                        <li>Orcamento agil pelo WhatsApp para pessoa fisica e construtoras.</li>
                    </ul>
                    <a href="https://wa.me/5519984515960?text=Ola! Quero cotar blocos, areia ou pedra para uma obra em Campinas." target="_blank" class="inline-flex w-full justify-center rounded-xl bg-green-500 px-6 py-4 text-center font-bold text-white transition hover:bg-green-600">Pedir cotacao agora</a>
                </div>
            </div>
        </div>
    </section>

    <section id="produtos" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <!-- Areia e Pedra Carousel -->
            <div class="flex justify-between items-end mb-12">
                <div>
                    <h2 class="text-4xl font-bold font-oswald uppercase mb-4">Areia e Pedra</h2>
                    <div class="w-24 h-1 bg-orange-600"></div>
                </div>
                <div class="flex gap-2">
                    <button id="areia-prev" class="p-3 rounded-full border border-gray-200 hover:bg-orange-600 hover:text-white transition shadow-sm">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button id="areia-next" class="p-3 rounded-full border border-gray-200 hover:bg-orange-600 hover:text-white transition shadow-sm">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>
            <div id="areia-carousel" class="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 mb-16" style="scrollbar-width: none; -ms-overflow-style: none;">
                <?php
                $areiaPedra = [
                    ['name' => 'Areia Fina', 'price' => '150,00', 'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaVMQuZbSa8KchhDeWYcYc7gHk9JeshP6fg&s', 'id' => 'areia-fina'],
                    ['name' => 'Areia Média', 'price' => '150,00', 'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaVMQuZbSa8KchhDeWYcYc7gHk9JeshP6fg&s', 'id' => 'areia-media'],
                    ['name' => 'Areia Grossa', 'price' => '150,00', 'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaVMQuZbSa8KchhDeWYcYc7gHk9JeshP6fg&s', 'id' => 'areia-grossa'],
                    ['name' => 'Pedrisco', 'price' => '200,00', 'image' => get_template_directory_uri() . '/assets/img/pedra.jpg', 'id' => 'pedrisco'],
                    ['name' => 'Pedra 2', 'price' => '200,00', 'image' => get_template_directory_uri() . '/assets/img/pedra.jpg', 'id' => 'pedra-2'],
                    ['name' => 'Pedra 4', 'price' => '200,00', 'image' => get_template_directory_uri() . '/assets/img/pedra.jpg', 'id' => 'pedra-4'],
                ];
                foreach ($areiaPedra as $p): ?>
                    <div class="min-w-[280px] md:min-w-[320px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col snap-start hover:shadow-xl transition-shadow">
                        <div class="h-48 bg-gray-50 flex items-center justify-center p-4">
                            <img src="<?php echo $p['image']; ?>" class="max-h-full max-w-full object-contain" data-admin-id="<?php echo $p['id']; ?>">
                        </div>
                        <div class="p-6 flex-grow flex flex-col">
                            <h3 class="font-bold text-sm mb-2 h-12 overflow-hidden"><?php echo $p['name']; ?></h3>
                            <p class="text-orange-600 text-xl font-bold mb-4 mt-auto">R$ <span data-admin-id="<?php echo $p['id']; ?>" data-admin-type="price"><?php echo $p['price']; ?></span></p>
                            <a href="https://wa.me/5519984515960?text=<?php echo rawurlencode('Ola! Quero orcar ' . $p['name'] . ' para uma obra em Campinas.'); ?>" class="block text-center bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 transition text-sm">Orcar no WhatsApp</a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

            <!-- Revestimentos Carousel -->
            <div class="flex justify-between items-end mb-12">
                <div>
                    <h2 class="text-4xl font-bold font-oswald uppercase mb-4">Destaques em Revestimentos</h2>
                    <div class="w-24 h-1 bg-orange-600"></div>
                </div>
                <div class="flex gap-2">
                    <button id="rev-prev" class="p-3 rounded-full border border-gray-200 hover:bg-orange-600 hover:text-white transition shadow-sm">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button id="rev-next" class="p-3 rounded-full border border-gray-200 hover:bg-orange-600 hover:text-white transition shadow-sm">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>
            <div id="rev-carousel" class="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 mb-16" style="scrollbar-width: none; -ms-overflow-style: none;">
                 <?php
                 $revestimentos = [
                     ['name' => "Noronha Jade Mesh Eliane", 'price' => "138,05", 'img' => "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_noronha_jade_30x40,10cm_eliane_92004465_e723_300x300.JPG"],
                     ['name' => "Noronha Mar Mesh Eliane", 'price' => "138,05", 'img' => "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_noronha_mar_30x40,1cm_eliane_92009582_4af0_300x300.JPG"],
                     ['name' => "Hijau Verde Artens", 'price' => "184,11", 'img' => "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_brilhante_hijau_verde_20x20cm_91920073_7069_300x300.JPG"],
                     ['name' => "Hijau Azul Artens", 'price' => "184,11", 'img' => "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_brilhante_hijau_azul_20x20cm_91920052_011b_300x300.JPG"],
                     ['name' => "Hijau Verde Artens (Acetinado)", 'price' => "184,11", 'img' => "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_acetinado_hijau_verde_20x20cm_91920080_83da_300x300.JPG"],
                     ['name' => "Hijau Azul Artens (Acetinado)", 'price' => "184,11", 'img' => "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_acetinado_hijau_azul_20x20cm_91920066_1e88_300x300.JPG"],
                     ['name' => "Java Mar Mesh Eliane", 'price' => "122,26", 'img' => "https://cdn.leroymerlin.com.br/products/rev_ex_br_bo_10x10_java_mar_mesh_m2_92359071_ae1e_300x300.png"],
                     ['name' => "Boreal Ivy 20x20cm Artens", 'price' => "115,68", 'img' => "https://cdn.leroymerlin.com.br/products/revestimento_para_piscina_boreal_ivy_20x20cm_artens_91943866_00dc_300x300.JPG"],
                 ];
                 foreach ($revestimentos as $index => $r): ?>
                     <div class="min-w-[280px] md:min-w-[320px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col snap-start hover:shadow-xl transition-shadow">
                         <div class="h-48 bg-gray-50 flex items-center justify-center p-4">
                             <img src="<?php echo $r['img']; ?>" class="max-h-full max-w-full object-contain" data-admin-id="rev-home-<?php echo $index; ?>">
                         </div>
                         <div class="p-6 flex-grow flex flex-col">
                             <h3 class="font-bold text-sm mb-2 h-12 overflow-hidden"><?php echo $r['name']; ?></h3>
                             <p class="text-orange-600 text-xl font-bold mb-4 mt-auto">R$ <span data-admin-id="rev-home-<?php echo $index; ?>" data-admin-type="price"><?php echo $r['price']; ?></span></p>
                             <a href="https://wa.me/5519984515960?text=<?php echo rawurlencode('Ola! Quero orcar ' . $r['name'] . ' para uma obra em Campinas.'); ?>" class="block text-center bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 transition text-sm">Orcar no WhatsApp</a>
                         </div>
                     </div>
                 <?php endforeach; ?>
             </div>

             <!-- Bordas Carousel -->
             <div class="flex justify-between items-end mb-12">
                 <div>
                     <h2 class="text-4xl font-bold font-oswald uppercase mb-4">Destaques em Bordas Atérmicas</h2>
                     <div class="w-24 h-1 bg-orange-600"></div>
                 </div>
                 <div class="flex gap-2">
                     <button id="borda-prev" class="p-3 rounded-full border border-gray-200 hover:bg-orange-600 hover:text-white transition shadow-sm">
                         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                     </button>
                     <button id="borda-next" class="p-3 rounded-full border border-gray-200 hover:bg-orange-600 hover:text-white transition shadow-sm">
                         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                     </button>
                 </div>
             </div>
             <div id="borda-carousel" class="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4" style="scrollbar-width: none; -ms-overflow-style: none;">
                 <?php
                 $bordas = [
                     ['name' => "Borda Atérmica 50x25cm Premium", 'price' => "69,20", 'img' => "https://cdn.awsli.com.br/2500x2500/1957/1957621/produto/143251805/premium-50x25cm-ugstwe.jpg"],
                     ['name' => "Borda Malibu Cinza 50x20cm", 'price' => "52,53", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x20x1,5cm_malibu_cinza__areia_de_qua_1570435811_4fba_300x300.png"],
                     ['name' => "Borda Atérmica Piscina Havaí 100x27cm", 'price' => "318,37", 'img' => "https://cdn.leroymerlin.com.br/products/borda__atermica_piscina_havai_100_x_27,5_x_25_x_4_x_2,5cm_f_1568442710_24b1_300x300.jpg"],
                     ['name' => "Borda Atérmica Piscina 50x15cm Cinza", 'price' => "45,63", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x15x1,5cm_cinza_areia_de_quartzo_i_1570814144_b30e_300x300.jpg"],
                     ['name' => "Borda Atérmica Malibu Champagne 50x20cm", 'price' => "52,53", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x20x1,5cm_malibu_champagne_areia_de_1570435806_3697_300x300.jpg"],
                     ['name' => "Borda Atérmica Piscina Salinas 50x25cm Fendi", 'price' => "73,28", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina__salinas_50x25x2,5x1,5cm_fendi_areia_1568442702_a1e5_300x300.jpg"],
                     ['name' => "Borda Atérmica Piscina Salvattore 50x25cm", 'price' => "5.320,00", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_salvattore_50x25cm_kit_c_60_1569035135_ff1d_300x300.jpg"],
                     ['name' => "Borda Atérmica Malibu Branca 50x25cm", 'price' => "57,40", 'img' => "https://cdn.leroymerlin.com.br/products/borda__atermica_para__piscina_50x25x1,5cm_malibu_branca__arei_1570289004_3b10_300x300.jpg"],
                 ];
                 foreach ($bordas as $index => $b): ?>
                    <div class="min-w-[280px] md:min-w-[320px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col snap-start hover:shadow-xl transition-shadow">
                        <div class="h-48 bg-gray-50 flex items-center justify-center p-4">
                            <img src="<?php echo $b['img']; ?>" class="max-h-full max-w-full object-contain" data-admin-id="borda-home-<?php echo $index; ?>">
                        </div>
                        <div class="p-6 flex-grow flex flex-col">
                            <h3 class="font-bold text-sm mb-2 h-12 overflow-hidden"><?php echo $b['name']; ?></h3>
                            <p class="text-orange-600 text-xl font-bold mb-4 mt-auto">R$ <span data-admin-id="borda-home-<?php echo $index; ?>" data-admin-type="price"><?php echo $b['price']; ?></span></p>
                            <a href="https://wa.me/5519984515960?text=<?php echo rawurlencode('Ola! Quero orcar ' . $b['name'] . ' para uma obra em Campinas.'); ?>" class="block text-center bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 transition text-sm">Orcar no WhatsApp</a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <script>
        const setupCarousel = (id, prevId, nextId) => {
            const el = document.getElementById(id);
            document.getElementById(prevId).onclick = () => el.scrollBy({ left: -340, behavior: 'smooth' });
            document.getElementById(nextId).onclick = () => el.scrollBy({ left: 340, behavior: 'smooth' });
        };
        setupCarousel('areia-carousel', 'areia-prev', 'areia-next');
        setupCarousel('rev-carousel', 'rev-prev', 'rev-next');
        setupCarousel('borda-carousel', 'borda-prev', 'borda-next');
    </script>

    <section class="parallax parallax-section flex items-center justify-center text-white py-24">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl md:text-5xl font-bold font-oswald mb-6 uppercase">Compre material de construção em Campinas com quem entende de obra</h2>
            <p class="text-xl max-w-3xl mx-auto">Do bloco estrutural ao acabamento, o site agora destaca termos de busca locais relevantes para aumentar relevancia organica na regiao de Campinas e converter em atendimento por WhatsApp.</p>
        </div>
    </section>

    <section id="orcamento" class="py-20 bg-white" x-data="materialCalculator">
        <div class="container mx-auto px-4 max-w-4xl">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold font-oswald mb-4 uppercase">Calculadora de Materiais Para Obras em Campinas</h2>
                <div class="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
                <p class="text-gray-600">Informe a metragem da obra e envie uma estimativa pelo WhatsApp para validar blocos, cimento e ferro.</p>
            </div>

            <div class="bg-gray-50 rounded-2xl p-8 shadow-inner border">
                <div class="flex mb-8 justify-center space-x-4">
                    <button @click="calcMode = 'area'" :class="calcMode === 'area' ? 'bg-orange-600 text-white' : 'bg-gray-200'" class="px-6 py-2 rounded-full font-bold transition">Por Area (m²)</button>
                    <button @click="calcMode = 'dims'" :class="calcMode === 'dims' ? 'bg-orange-600 text-white' : 'bg-gray-200'" class="px-6 py-2 rounded-full font-bold transition">Por Dimensoes</button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div class="space-y-6">
                        <template x-if="calcMode === 'area'">
                            <div>
                                <label class="block text-sm font-bold text-gray-700 mb-2">Area total das paredes (m²)</label>
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
                            <h4 class="font-bold text-orange-800 mb-4">Estimativa de material:</h4>
                            <ul class="space-y-3">
                                <li class="flex justify-between"><span>Blocos (14x19x39):</span> <span class="font-bold text-orange-600" x-text="results.blocks">0</span></li>
                                <li class="flex justify-between"><span>Cimento (Sacos):</span> <span class="font-bold text-orange-600" x-text="results.cement">0</span></li>
                                <li class="flex justify-between"><span>Ferro (Metros):</span> <span class="font-bold text-orange-600" x-text="results.iron">0</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="p-6 bg-white rounded-xl shadow-md">
                            <p class="text-sm text-gray-500 mb-4">*Calculo baseado em padroes medios de construcao. Consulte seu engenheiro para validacao final.</p>
                            <a :href="getWhatsAppLink()" target="_blank" class="bg-green-500 hover:bg-green-600 text-white w-full py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center space-x-2 transition">
                                <span>Enviar Orcamento no WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20 bg-orange-50/70">
        <div class="container mx-auto px-4">
            <div class="text-center mb-10">
                <h2 class="text-4xl font-bold font-oswald uppercase mb-4">Regioes e buscas que este site trabalha</h2>
                <p class="text-gray-700 max-w-4xl mx-auto">Campinas, Hortolandia, Sumare, Paulinia, Valinhos, Vinhedo, Monte Mor, Nova Odessa e cidades proximas. O conteudo foi reforcado com termos como deposito de material de construcao em Campinas, blocos de concreto em Campinas, areia para obra em Campinas, pedra e pedrisco em Campinas e materiais para construcao na RMC.</p>
            </div>
            <div class="flex flex-wrap justify-center gap-3">
                <?php foreach (array('Campinas', 'Hortolandia', 'Sumare', 'Paulinia', 'Valinhos', 'Vinhedo', 'Monte Mor', 'Nova Odessa', 'Material de construcao', 'Blocos de concreto', 'Areia para obra', 'Pedra e pedrisco') as $term): ?>
                    <span class="chip"><?php echo esc_html($term); ?></span>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-10">
                <h2 class="text-4xl font-bold font-oswald uppercase mb-4">Paginas Locais da RMC</h2>
                <p class="text-gray-600 max-w-4xl mx-auto">Estrutura pensada para criar uma malha interna de paginas por cidade, ampliar a indexacao e distribuir relevancia organica para buscas locais de alta intencao comercial.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <?php foreach (olaria_herrera_city_pages() as $slug => $city): ?>
                    <a href="<?php echo esc_url(home_url('/' . $slug . '/')); ?>" class="rounded-2xl border border-orange-100 bg-orange-50 p-6 shadow-sm transition hover:shadow-lg">
                        <h3 class="text-xl font-bold mb-2"><?php echo esc_html($city['name']); ?></h3>
                        <p class="text-gray-600"><?php echo esc_html($city['headline']); ?> com foco em busca local, relevancia comercial e conversao.</p>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-4xl font-bold font-oswald mb-6 uppercase">Onde Estamos</h2>
                <p class="text-lg text-gray-600 mb-8">Visite nossa empresa ou solicite sua entrega. Atendemos Campinas e cidades da RMC com foco em obras residenciais, comerciais e industriais.</p>
                <div class="space-y-4">
                    <div class="flex items-start space-x-4">
                        <div class="bg-orange-600 p-2 rounded-lg text-white mt-1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <div>
                            <p class="font-bold">Endereco</p>
                            <p class="text-gray-600">Rua Julia Aberle Fritz, 200<br>Pq Vista Alegre - Campinas / SP</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
                        <p class="font-bold text-lg mb-2">WhatsApp para vendas</p>
                        <p class="text-gray-600 mb-4">Chame no numero 19 98451-5960 para cotar material de construcao em Campinas e regiao.</p>
                        <a href="https://wa.me/5519984515960?text=Ola! Preciso de material de construcao para entrega em Campinas." target="_blank" class="inline-flex rounded-xl bg-green-500 px-6 py-3 font-bold text-white hover:bg-green-600 transition">Abrir WhatsApp</a>
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

    <section class="py-20 bg-white">
        <div class="container mx-auto px-4 max-w-5xl">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold font-oswald uppercase mb-4">Perguntas frequentes sobre material de construcao em Campinas</h2>
                <p class="text-gray-600">FAQ criado para fortalecer SEO semantico local e responder intencoes de busca reais.</p>
            </div>
            <div class="grid gap-6 md:grid-cols-2">
                <div class="rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <h3 class="text-xl font-bold mb-3">Vocês entregam blocos estruturais em Campinas e RMC?</h3>
                    <p class="text-gray-600">Sim. O atendimento cobre Campinas e cidades proximas com foco em entrega rapida para blocos estruturais, canaletas, meios blocos e pisos intertravados.</p>
                </div>
                <div class="rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <h3 class="text-xl font-bold mb-3">Como pedir areia, pedra ou pedrisco?</h3>
                    <p class="text-gray-600">Basta informar no WhatsApp a quantidade, cidade de entrega e tipo de material. A equipe retorna com orientacao comercial e disponibilidade.</p>
                </div>
                <div class="rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <h3 class="text-xl font-bold mb-3">A Herrera Materiais para construcao e fabrica de blocos atende construtoras e obras residenciais?</h3>
                    <p class="text-gray-600">Atende ambos os perfis, desde pequenas reformas ate obras maiores em Campinas e regiao.</p>
                </div>
                <div class="rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <h3 class="text-xl font-bold mb-3">Qual o canal mais rapido para orcamento?</h3>
                    <p class="text-gray-600">O WhatsApp 19 98451-5960 esta destacado em toda a navegacao e no botao flutuante para captacao direta.</p>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
