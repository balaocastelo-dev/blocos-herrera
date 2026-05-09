<?php
/**
 * Template Name: Cidade RMC SEO
 */

get_header();

$city = olaria_herrera_current_city_data();
if (!$city) {
    $city = array(
        'name' => 'Campinas',
        'slug' => 'campinas',
        'headline' => 'Material de Construcao em Campinas',
        'description' => 'A Olaria Herrera atende Campinas e RMC com blocos estruturais, areia, pedra, pedrisco, cimento e revestimentos.',
    );
}

$all_cities = olaria_herrera_city_pages();
?>

<style>
    .city-hero {
        position: relative;
        min-height: 68vh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .city-hero iframe {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100vw;
        height: 100vh;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: -1;
    }
    .city-overlay {
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

<main class="pt-20">
    <section class="city-hero px-4 text-center text-white">
        <div class="city-overlay"></div>
        <iframe src="https://www.youtube.com/embed/nzUsq1lbKzI?autoplay=1&mute=1&loop=1&playlist=nzUsq1lbKzI&controls=0&rel=0&showinfo=0&iv_load_policy=3" frameborder="0" allow="autoplay; encrypted-media"></iframe>
        <div class="relative z-10 max-w-5xl">
            <p class="mb-4 text-orange-200 font-bold uppercase tracking-[0.35em]">Pagina local da RMC</p>
            <h1 class="mb-6 text-5xl md:text-7xl font-extrabold font-oswald tracking-tight"><?php echo esc_html(strtoupper($city['headline'])); ?></h1>
            <p class="mx-auto mb-8 max-w-3xl text-lg md:text-2xl text-orange-50">Blocos estruturais, areia, pedra, pedrisco, cimento e revestimentos com atendimento comercial rapido para obras em <?php echo esc_html($city['name']); ?>.</p>
            <div class="flex flex-col md:flex-row gap-4 justify-center">
                <a href="<?php echo esc_url(home_url('/blocos/')); ?>" class="rounded-xl bg-orange-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition hover:bg-orange-700">Ver blocos</a>
                <a href="https://wa.me/5519984515960?text=<?php echo rawurlencode('Ola! Quero cotar material de construcao para entrega em ' . $city['name'] . '.'); ?>" target="_blank" class="rounded-xl bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-xl transition hover:bg-green-600">WhatsApp 19 98451-5960</a>
            </div>
        </div>
    </section>

    <section class="py-16 bg-white border-b">
        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="rounded-2xl border border-orange-100 bg-orange-50 p-6">
                <h2 class="mb-3 text-2xl font-bold">Entrega agil</h2>
                <p class="text-gray-700">Atendimento rapido para obras em <?php echo esc_html($city['name']); ?> e apoio comercial pelo WhatsApp.</p>
            </div>
            <div class="rounded-2xl border border-orange-100 bg-orange-50 p-6">
                <h2 class="mb-3 text-2xl font-bold">Materiais para obra</h2>
                <p class="text-gray-700">Blocos estruturais, areia fina, media e grossa, pedra, pedrisco, cimento e revestimentos.</p>
            </div>
            <div class="rounded-2xl border border-orange-100 bg-orange-50 p-6">
                <h2 class="mb-3 text-2xl font-bold">Busca local forte</h2>
                <p class="text-gray-700">Conteudo focado em ranquear por material de construcao em <?php echo esc_html($city['name']); ?> e termos comerciais da regiao.</p>
            </div>
        </div>
    </section>

    <section class="py-20 bg-orange-50/70">
        <div class="container mx-auto px-4">
            <div class="grid gap-10 lg:grid-cols-[1.25fr_1fr] items-center">
                <div>
                    <p class="mb-4 text-orange-600 font-bold uppercase tracking-[0.3em]">SEO local agressivo</p>
                    <h2 class="mb-6 text-4xl font-bold font-oswald uppercase">Deposito de material de construcao em <?php echo esc_html($city['name']); ?> com foco em busca e conversao</h2>
                    <p class="mb-6 text-lg text-gray-700">Esta landing page local trabalha intencoes de busca como deposito de material de construcao em <?php echo esc_html($city['name']); ?>, blocos de concreto em <?php echo esc_html($city['name']); ?>, areia para obra em <?php echo esc_html($city['name']); ?>, pedra e pedrisco em <?php echo esc_html($city['name']); ?> e compra de material para obra com atendimento comercial imediato.</p>
                    <div class="flex flex-wrap gap-3">
                        <span class="chip">Material de construcao em <?php echo esc_html($city['name']); ?></span>
                        <span class="chip">Blocos de concreto em <?php echo esc_html($city['name']); ?></span>
                        <span class="chip">Areia e pedra em <?php echo esc_html($city['name']); ?></span>
                        <span class="chip">WhatsApp rapido</span>
                    </div>
                </div>
                <div class="rounded-3xl border border-orange-100 bg-white p-8 shadow-xl">
                    <h2 class="mb-4 text-2xl font-bold">Solicite sua cotacao</h2>
                    <p class="mb-6 text-gray-600">Fale agora com a Olaria Herrera para cotar material de construcao em <?php echo esc_html($city['name']); ?> e cidades proximas da RMC.</p>
                    <a href="https://wa.me/5519984515960?text=<?php echo rawurlencode('Ola! Quero cotar blocos, areia, pedra ou cimento para uma obra em ' . $city['name'] . '.'); ?>" target="_blank" class="inline-flex w-full justify-center rounded-xl bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-600">Pedir cotacao agora</a>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="mb-12 text-center">
                <h2 class="mb-4 text-4xl font-bold font-oswald uppercase">O que a Olaria Herrera entrega em <?php echo esc_html($city['name']); ?></h2>
                <p class="mx-auto max-w-4xl text-gray-600">A pagina foi escrita para capturar busca local de alta intencao comercial e converter em WhatsApp com destaque para os principais materiais de construcao procurados na regiao.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <h3 class="mb-3 text-xl font-bold">Blocos estruturais</h3>
                    <p class="text-gray-600">Bloco estrutural, canaleta, meio bloco e piso intertravado para obras em <?php echo esc_html($city['name']); ?>.</p>
                </div>
                <div class="rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <h3 class="mb-3 text-xl font-bold">Areia para obra</h3>
                    <p class="text-gray-600">Areia fina, media e grossa para construcao civil com orientacao comercial e pedido minimo.</p>
                </div>
                <div class="rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <h3 class="mb-3 text-xl font-bold">Pedra e pedrisco</h3>
                    <p class="text-gray-600">Brita, pedra e pedrisco para concretagem, base e diversas etapas da obra.</p>
                </div>
                <div class="rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <h3 class="mb-3 text-xl font-bold">Revestimentos</h3>
                    <p class="text-gray-600">Revestimentos para piscina e acabamento com atendimento comercial pela mesma equipe.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4 max-w-5xl">
            <div class="mb-12 text-center">
                <h2 class="mb-4 text-4xl font-bold font-oswald uppercase">Perguntas frequentes sobre material de construcao em <?php echo esc_html($city['name']); ?></h2>
                <p class="text-gray-600">FAQ local para reforcar relevancia semantica e responder buscas reais de compra.</p>
            </div>
            <div class="grid gap-6 md:grid-cols-2">
                <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 class="mb-3 text-xl font-bold">Vocês entregam material de construcao em <?php echo esc_html($city['name']); ?>?</h3>
                    <p class="text-gray-600">Sim. O atendimento comercial da Olaria Herrera e preparado para obras em <?php echo esc_html($city['name']); ?> e em cidades vizinhas da regiao metropolitana.</p>
                </div>
                <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 class="mb-3 text-xl font-bold">Como pedir um orcamento rapido?</h3>
                    <p class="text-gray-600">Basta chamar no WhatsApp 19 98451-5960 informando material, quantidade, endereco e prazo desejado.</p>
                </div>
                <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 class="mb-3 text-xl font-bold">Quais materiais sao mais procurados em <?php echo esc_html($city['name']); ?>?</h3>
                    <p class="text-gray-600">Blocos estruturais, areia, pedra, pedrisco, cimento e revestimentos sao as categorias com maior foco comercial nesta pagina.</p>
                </div>
                <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 class="mb-3 text-xl font-bold">Atendem obra residencial e construtora?</h3>
                    <p class="text-gray-600">Sim. A equipe atende desde pequenas reformas ate demandas maiores de construcao civil na RMC.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="mb-10 text-center">
                <h2 class="mb-4 text-4xl font-bold font-oswald uppercase">Outras cidades da RMC</h2>
                <p class="text-gray-600">Malha interna de links locais para ampliar relevancia e rastreamento.</p>
            </div>
            <div class="flex flex-wrap justify-center gap-3">
                <?php foreach ($all_cities as $slug => $item): ?>
                    <a href="<?php echo esc_url(home_url('/' . $slug . '/')); ?>" class="chip"><?php echo esc_html($item['name']); ?></a>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
