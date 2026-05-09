<?php
/**
 * Template Name: Bordas Atérmicas
 */
get_header(); ?>

<style>
    .parallax-header {
        background-image: linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), url('https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x25x2,0cm_maresias__branca_areia_d_1570471570_82ee_300x300.jpg');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 48vh;
        display: flex;
        align-items: center;
        justify-content: center;
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

<main class="pt-20">
    <section class="parallax-header text-white text-center px-4">
        <div class="max-w-4xl">
            <h1 class="text-5xl md:text-6xl font-extrabold font-oswald mb-4 tracking-tight uppercase">Bordas Atérmicas</h1>
            <p class="text-xl md:text-2xl italic">Acabamentos que não esquentam para sua piscina em Campinas e região</p>
            <p class="mt-6 text-orange-200">Segurança, conforto térmico e elegância para sua área de lazer.</p>
        </div>
    </section>

    <section class="py-16 bg-orange-50/70">
        <div class="container mx-auto px-4">
            <div class="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
                <div>
                    <p class="text-orange-600 font-bold uppercase tracking-[0.3em] mb-4">Conforto e Qualidade</p>
                    <h2 class="text-4xl font-bold font-oswald uppercase mb-6">Bordas de Piscina que não esquentam ao sol em Campinas</h2>
                    <p class="text-lg text-gray-700 mb-6">Nossas bordas atérmicas são produzidas com tecnologia avançada para garantir que a superfície permaneça fresca mesmo sob sol intenso, evitando queimaduras e proporcionando conforto total para sua família na região de Campinas.</p>
                    <div class="flex flex-wrap gap-3">
                        <span class="chip">Borda Atérmica Campinas</span>
                        <span class="chip">Conforto Térmico</span>
                        <span class="chip">Antiderrapante</span>
                        <span class="chip">Alta Durabilidade</span>
                    </div>
                </div>
                <div class="bg-white rounded-3xl border border-orange-100 p-8 shadow-xl">
                    <h2 class="text-2xl font-bold mb-4">Orçamento Personalizado</h2>
                    <p class="text-gray-600 mb-6">Fale com nossos especialistas para escolher o modelo ideal de borda para o projeto da sua piscina em Campinas e RMC.</p>
                    <a href="https://wa.me/5519984515960?text=<?php echo rawurlencode('Ola! Quero orcar bordas atermicas para piscina em Campinas.'); ?>" target="_blank" class="inline-flex w-full justify-center rounded-xl bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-600">Solicitar cotacao</a>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold font-oswald mb-4 uppercase">Catálogo de Bordas Atérmicas</h2>
                <div class="w-24 h-1 bg-orange-600 mx-auto"></div>
                <p class="mt-4 text-gray-600">Confira nossa linha completa de bordas para piscina com tecnologia atérmica.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <?php
                $bordas = [
                    ['name' => "Borda Atérmica Piscina 50x25x2,0cm Maresias Branca - Areia D...", 'price' => "69,20", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x25x2,0cm_maresias__branca_areia_d_1570471570_82ee_300x300.jpg"],
                    ['name' => "Borda Atérmica Piscina 50x20x1,5cm Malibu Cinza Areia De Qua...", 'price' => "52,53", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x20x1,5cm_malibu_cinza__areia_de_qua_1570435811_4fba_300x300.png"],
                    ['name' => "Borda Atérmica Piscina - Havaí 100 X 27,5 X 25 X 4 X 2,5cm F...", 'price' => "318,37", 'img' => "https://cdn.leroymerlin.com.br/products/borda__atermica_piscina_havai_100_x_27,5_x_25_x_4_x_2,5cm_f_1568442710_24b1_300x300.jpg"],
                    ['name' => "Borda Atérmica Piscina 50x15x1,5cm Cinza - Areia De Quartzo I...", 'price' => "45,63", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x15x1,5cm_cinza_areia_de_quartzo_i_1570814144_b30e_300x300.jpg"],
                    ['name' => "Borda Atérmica Antiderrapante Para Piscina 50x25x1,5cm Malibu...", 'price' => "57,40", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_antiderrapante_para_piscina_50x25x1,5cm_malibu_1570494403_066f_300x300.jpg"],
                    ['name' => "Borda Atérmica Piscina 50x20x1,5cm Malibu Champagne Areia De", 'price' => "52,53", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x20x1,5cm_malibu_champagne_areia_de_1570435806_3697_300x300.jpg"],
                    ['name' => "Borda Atérmica Piscina 50x15x1,5cm Champagne - Areia De Quar...", 'price' => "45,63", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x15x1,5cm_champagne__areia_de_quar_1570814138_5d52_300x300.jpg"],
                    ['name' => "Borda Atérmica Piscina 50x15x1,5cm Fendi - Areia De Quartzo", 'price' => "45,63", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x15x1,5cm_fendi__areia_de_quartzo_1570814141_04a8_300x300.jpg"],
                    ['name' => "Borda Atérmica Piscina 50x15x1,5cm Branca - Areia De Quartzo", 'price' => "45,63", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x15x1,5cm_branca_areia_de_quartzo_1570814143_9ae8_300x300.jpg"],
                    ['name' => "Borda Atérmica Piscina Salinas 50x25x2,5x1,5cm Fendi - Areia...", 'price' => "73,28", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina__salinas_50x25x2,5x1,5cm_fendi_areia_1568442702_a1e5_300x300.jpg"],
                    ['name' => "Borda Atérmica Piscina Salvattore 50x25cm Kit C/60", 'price' => "5.320,00", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_salvattore_50x25cm_kit_c_60_1569035135_ff1d_300x300.jpg"],
                    ['name' => "Borda Atérmica Para Piscina 50x25x1,5cm Malibu Branca Arei...", 'price' => "57,40", 'img' => "https://cdn.leroymerlin.com.br/products/borda__atermica_para__piscina_50x25x1,5cm_malibu_branca__arei_1570289004_3b10_300x300.jpg"],
                    ['name' => "Borda Atérmica Piscina Salvattore 50x25cm Kit C/70", 'price' => "4.480,00", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_salvattore_50x25cm_kit_c_70_1569035134_e456_300x300.jpg"],
                    ['name' => "Borda Atérmica Piscina Salvattore 50x25cm Kit C/30", 'price' => "2.100,00", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_salvattore_50x25cm_kit_c_30_1569035137_4a0e_300x300.jpg"],
                    ['name' => "Borda Atérmica Piscina 50x30x1,5cm Branca - Areia de Quartzo...", 'price' => "63,63", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina__50x30x1,5cm_branca_areia_de_quartzo_1568442712_d998_300x300.png"],
                    ['name' => "Borda Atérmica Piscina 50x20x1,5cm Malibu Fendi Areia De Qua...", 'price' => "52,53", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x20x1,5cm_malibu_fendi__areia_de_qua_1570435810_7cda_300x300.png"],
                    ['name' => "Borda Atérmica Piscina 50x25x1,5cm Malibu Cinza - Areia De Qu...", 'price' => "56,70", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x25x1,5cm_malibu_cinza_areia_de_qu_1570435804_a419_300x300.jpg"],
                    ['name' => "Borda Atérmica Piscina 50x30x1,5cm Malibu Champagne - Areia...", 'price' => "63,60", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina__50x30x1,5cm__malibu_champagne_areia_1570814142_5fc8_300x300.png"],
                    ['name' => "Borda Atérmica Piscina 50x30x1,5cm Fendi - Areia De Quartzo I...", 'price' => "63,60", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x30x1,5cm_fendi_areia_de_quartzo_i_1570814139_a44e_300x300.png"],
                    ['name' => "Borda Atérmica Piscina 50x30x1,5cm Cinza Malibu- Areia De Qua...", 'price' => "63,60", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x30x1,5cm_cinza_malibu__areia_de_qua_1570814140_cc89_300x300.png"],
                    ['name' => "Borda Atérmica Piscina Salvattore 50x25cm Kit C/45", 'price' => "3.500,00", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_salvattore_50x25cm_kit_c_45_1569035136_bdb7_300x300.jpg"],
                    ['name' => "Borda Atérmica Piscina 50x25x2,3x1,5cm Salinas Branca - Are...", 'price' => "73,28", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x25x2,3x1,5cm_salinas___branca_are_1568442713_a2dc_300x300.png"],
                    ['name' => "Borda Atérmica Piscina Linha Prime SBF 50x25x2cm Fendi - Arei...", 'price' => "73,29", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_linha_prime_sbf_50x25x2cm_fendi_arei_1568442706_27fd_300x300.png"],
                    ['name' => "Borda Atérmica Piscina 50x25x2cm Maresias Cinza - Areia De Qu...", 'price' => "69,38", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x25x2cm_maresias_cinza_areia_de_qu_1570437038_06a1_300x300.jpg"],
                    ['name' => "Borda Atérmica Piscina 50x25x1,5cm Malibu Fendi - Areia De Qu...", 'price' => "57,40", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x25x1,5cm_malibu_fendi_areia_de_qu_1570314523_b19e_300x300.png"],
                    ['name' => "Borda Atérmica Piscina 50x25x2,3x1,5cm Salinas Cinza - Areia...", 'price' => "73,35", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x25x2,3x1,5cm_salinas__cinza_areia_1568442714_a0ac_300x300.png"],
                    ['name' => "Borda Atérmica E Antiderrapante 50x10x1,5cm BRANCO - KIT C/ 1...", 'price' => "770,00", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_e_antiderrapante_50x10x1,5cm_branco_kit_c__1_1568791017_57d7_300x300.png"],
                    ['name' => "Borda Atérmica E Antiderrapante 50x25x1,5cm BRANCO - KIT C/8", 'price' => "770,00", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_e_antiderrapante_50x25x1,5cm_branco_kit_c_8_1568791019_2a01_300x300.png"],
                    ['name' => "Borda Atérmica Para Piscina 50x25x1,5cm Branca Areia de Quar...", 'price' => "574,00", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_para_piscina_50x25x1,5cm_branca__areia_de_quar_1572457533_f861_300x300.jpg"],
                    ['name' => "Borda Atérmica Piscina 50x25x2cm Maresias Champagne - Areia D...", 'price' => "73,29", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_50x25x2cm_maresias_champagne_areia_d_1570238851_3d3b_300x300.jpg"],
                    ['name' => "Borda Atérmica Piscina Salvattore 50x25cm Kit C/50", 'price' => "3.430,00", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_salvattore_50x25cm_kit_c_50_1569035138_7f14_300x300.jpg"],
                    ['name' => "Borda Atérmica Piscina Linha Prime 50x25x2cm Champagne - Arei...", 'price' => "73,29", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_linha_prime_50x25x2cm_champagne_arei_1568442715_5058_300x300.jpg"],
                    ['name' => "Borda Atérmica Piscina Linha Prime SBF 50x25x2cm Cinza - Are...", 'price' => "73,29", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_piscina_linha_prime_sbf__50x25x2cm_cinza_are_1568442699_99ac_300x300.jpg"],
                    ['name' => "Borda Atérmica Peito De Pombo Salinas Baby 33x16x2,3x1,5cm Br...", 'price' => "130,17", 'img' => "https://cdn.leroymerlin.com.br/products/borda_atermica_peito_de_pombo_salinas_baby_33x16x2,3x1,5cm_br_1572325176_6f90_300x300.jpg"]
                ];

                foreach ($bordas as $index => $borda): 
                    $adminId = "borda-item-" . $index;
                    ?>
                    <article class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col">
                        <div class="h-48 bg-gray-50 flex items-center justify-center p-4">
                            <img src="<?php echo $borda['img']; ?>" class="max-h-full max-w-full object-contain" alt="<?php echo $borda['name']; ?>" loading="lazy" data-admin-id="<?php echo $adminId; ?>">
                        </div>
                        <div class="p-6 flex-grow flex flex-col">
                            <h3 class="font-bold text-sm mb-2 h-12 overflow-hidden"><?php echo $borda['name']; ?></h3>
                            <p class="text-orange-600 text-xl font-bold mb-4 mt-auto">R$ <span data-admin-id="<?php echo $adminId; ?>" data-admin-type="price"><?php echo $borda['price']; ?></span></p>
                            <a href="https://wa.me/5519984515960?text=<?php echo rawurlencode('Ola! Quero orcar ' . $borda['name'] . ' para uma obra em Campinas.'); ?>" class="block text-center bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 transition text-sm">Comprar no WhatsApp</a>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <section class="py-20 bg-white">
        <div class="container mx-auto px-4 max-w-5xl">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold font-oswald uppercase mb-4">FAQ de Bordas Atérmicas em Campinas</h2>
                <p class="text-gray-600">Dúvidas frequentes sobre acabamentos que não esquentam para piscina.</p>
            </div>
            <div class="grid gap-6 md:grid-cols-2">
                <div class="rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <h3 class="text-xl font-bold mb-3">A borda atérmica realmente não esquenta?</h3>
                    <p class="text-gray-600">Sim. Devido à sua composição cimentícia especial e baixa absorção de calor, ela mantém uma temperatura agradável mesmo sob sol forte.</p>
                </div>
                <div class="rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <h3 class="text-xl font-bold mb-3">As bordas são antiderrapantes?</h3>
                    <p class="text-gray-600">Sim, todos os modelos do nosso catálogo possuem textura antiderrapante, garantindo segurança total na área molhada.</p>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
