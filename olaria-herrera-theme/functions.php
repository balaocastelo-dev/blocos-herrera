<?php
/**
 * Olaria Herrera functions and definitions
 */

function olaria_herrera_scripts() {
    wp_enqueue_script('tailwind-cdn', 'https://cdn.tailwindcss.com', array(), null, false);
    wp_enqueue_script('alpine-js', 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js', array(), null, true);

    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Oswald:wght@500;700&display=swap', array(), null);
    wp_enqueue_style('olaria-herrera-style', get_stylesheet_uri(), array(), '1.1');
    wp_enqueue_style('olaria-herrera-parallax', get_template_directory_uri() . '/parallax.css', array(), '1.1');

    wp_enqueue_script('olaria-herrera-calculator', get_template_directory_uri() . '/calculator.js', array(), '1.0', true);
    wp_enqueue_script('olaria-herrera-admin', get_template_directory_uri() . '/admin.js', array(), '1.0', true);
    wp_localize_script('olaria-herrera-calculator', 'themeData', array(
        'templateDir' => get_template_directory_uri(),
        'whatsApp'    => '5519984515960',
    ));
}
add_action('wp_enqueue_scripts', 'olaria_herrera_scripts');

add_theme_support('title-tag');
add_theme_support('post-thumbnails');

function olaria_herrera_menus() {
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'olaria-herrera'),
    ));
}
add_action('init', 'olaria_herrera_menus');

function olaria_herrera_business_data() {
    return array(
        'name'        => 'Olaria Herrera',
        'phone'       => '+55 19 98451-5960',
        'phone_link'  => '5519984515960',
        'street'      => 'Rua Julia Aberle Fritz, 200',
        'neighborhood'=> 'Parque Vista Alegre',
        'city'        => 'Campinas',
        'state'       => 'SP',
        'postal_code' => '13056-432',
        'country'     => 'BR',
        'map'         => 'https://www.google.com/maps?q=Rua+Julia+Aberle+Fritz,+200,+Campinas,+SP',
        'areas'       => array('Campinas', 'Hortolandia', 'Sumare', 'Paulinia', 'Valinhos', 'Vinhedo', 'Monte Mor', 'Nova Odessa', 'Indaiatuba'),
    );
}

function olaria_herrera_city_pages() {
    return array(
        'campinas' => array(
            'name' => 'Campinas',
            'slug' => 'campinas',
            'headline' => 'Material de Construcao em Campinas',
            'keywords' => 'material de construcao em campinas, deposito de material de construcao campinas, blocos de concreto campinas, areia em campinas, pedra em campinas',
            'description' => 'Olaria Herrera atende Campinas com blocos estruturais, areia, pedra, pedrisco, cimento e revestimentos para obras com atendimento rapido no WhatsApp 19 98451-5960.',
        ),
        'hortolandia' => array(
            'name' => 'Hortolandia',
            'slug' => 'hortolandia',
            'headline' => 'Material de Construcao em Hortolandia',
            'keywords' => 'material de construcao em hortolandia, blocos de concreto hortolandia, areia em hortolandia, pedra em hortolandia, deposito de material hortolandia',
            'description' => 'Entrega de material de construcao em Hortolandia com foco em blocos estruturais, areia, pedra e pedrisco para obras residenciais e comerciais.',
        ),
        'sumare' => array(
            'name' => 'Sumare',
            'slug' => 'sumare',
            'headline' => 'Material de Construcao em Sumare',
            'keywords' => 'material de construcao em sumare, blocos de concreto sumare, areia em sumare, pedra em sumare, deposito de material sumare',
            'description' => 'A Olaria Herrera atende Sumare com material de construcao, blocos estruturais, areia, pedra, pedrisco e atendimento agil pelo WhatsApp.',
        ),
        'paulinia' => array(
            'name' => 'Paulinia',
            'slug' => 'paulinia',
            'headline' => 'Material de Construcao em Paulinia',
            'keywords' => 'material de construcao em paulinia, blocos de concreto paulinia, areia em paulinia, pedra em paulinia, deposito de material paulinia',
            'description' => 'Fornecimento de material de construcao em Paulinia com entrega rapida, blocos estruturais, areia, pedra e revestimentos para obras na cidade.',
        ),
        'valinhos' => array(
            'name' => 'Valinhos',
            'slug' => 'valinhos',
            'headline' => 'Material de Construcao em Valinhos',
            'keywords' => 'material de construcao em valinhos, blocos de concreto valinhos, areia em valinhos, pedra em valinhos, deposito de material valinhos',
            'description' => 'A Olaria Herrera atende Valinhos com material para obra, blocos, areia, pedra, pedrisco e apoio comercial pelo WhatsApp.',
        ),
        'vinhedo' => array(
            'name' => 'Vinhedo',
            'slug' => 'vinhedo',
            'headline' => 'Material de Construcao em Vinhedo',
            'keywords' => 'material de construcao em vinhedo, blocos de concreto vinhedo, areia em vinhedo, pedra em vinhedo, deposito de material vinhedo',
            'description' => 'Material de construcao em Vinhedo com entrega para obras, blocos estruturais, areia, pedra, pedrisco e atendimento rapido da Olaria Herrera.',
        ),
        'monte-mor' => array(
            'name' => 'Monte Mor',
            'slug' => 'monte-mor',
            'headline' => 'Material de Construcao em Monte Mor',
            'keywords' => 'material de construcao em monte mor, blocos de concreto monte mor, areia em monte mor, pedra em monte mor, deposito de material monte mor',
            'description' => 'A Olaria Herrera atende Monte Mor com blocos estruturais, areia, pedra, pedrisco e materiais para obras residenciais e comerciais.',
        ),
        'nova-odessa' => array(
            'name' => 'Nova Odessa',
            'slug' => 'nova-odessa',
            'headline' => 'Material de Construcao em Nova Odessa',
            'keywords' => 'material de construcao em nova odessa, blocos de concreto nova odessa, areia em nova odessa, pedra em nova odessa, deposito de material nova odessa',
            'description' => 'Entrega de material de construcao em Nova Odessa com foco em blocos estruturais, areia, pedra e pedrisco para obras em toda a cidade.',
        ),
    );
}

function olaria_herrera_current_city_data() {
    if (!is_page()) {
        return null;
    }

    $city_pages = olaria_herrera_city_pages();
    $page = get_queried_object();
    $slug = isset($page->post_name) ? $page->post_name : '';

    return isset($city_pages[$slug]) ? $city_pages[$slug] : null;
}

function olaria_herrera_current_seo_data() {
    $data = array(
        'title'       => 'Material de Construcao em Campinas e RMC | Olaria Herrera',
        'description' => 'Olaria Herrera vende blocos estruturais, areia, pedra, pedrisco e revestimentos com entrega rapida em Campinas e regiao metropolitana. Orcamento no WhatsApp 19 98451-5960.',
        'keywords'    => 'material de construcao em campinas, deposito de material de construcao campinas, blocos de concreto campinas, areia em campinas, pedra brita campinas, pedrisco campinas, olaria campinas, material para obra campinas, material de construcao rmc',
        'type'        => 'website',
    );

    if (is_page('blocos') || is_page_template('page-blocos.php')) {
        $data = array(
            'title'       => 'Blocos de Concreto Estrutural em Campinas | Olaria Herrera',
            'description' => 'Compre blocos estruturais, canaletas, meios blocos e pisos intertravados em Campinas com entrega rapida para toda a RMC. Fale agora no WhatsApp 19 98451-5960.',
            'keywords'    => 'bloco estrutural campinas, bloco de concreto campinas, bloco 14x19x39 campinas, canaleta de concreto campinas, piso intertravado campinas, bloco de vedacao campinas, comprar blocos campinas',
            'type'        => 'product.group',
        );
    } elseif (is_page('revestimentos') || is_page_template('page-revestimentos.php')) {
        $data = array(
            'title'       => 'Revestimento para Piscina em Campinas e RMC | Olaria Herrera',
            'description' => 'Revestimentos para piscina, pastilhas, pedras especiais em Campinas e regiao. Atendimento rapido e orcamento pelo WhatsApp 19 98451-5960.',
            'keywords'    => 'revestimento para piscina campinas, pastilha para piscina campinas, pedra hijau campinas, acabamento para piscina campinas',
            'type'        => 'website',
        );
    } elseif (is_page('bordas-atermicas') || is_page_template('page-bordas-atermicas.php')) {
        $data = array(
            'title'       => 'Bordas Atérmicas para Piscina em Campinas e RMC | Olaria Herrera',
            'description' => 'Bordas atérmicas que não esquentam para piscina em Campinas e regiao. Diversos modelos e tamanhos com entrega rápida. WhatsApp 19 98451-5960.',
            'keywords'    => 'borda atermica campinas, borda de piscina campinas, borda que nao esquenta campinas, borda cimenticia campinas',
            'type'        => 'website',
        );
    } elseif ($city = olaria_herrera_current_city_data()) {
        $data = array(
            'title'       => $city['headline'] . ' | Olaria Herrera',
            'description' => $city['description'],
            'keywords'    => $city['keywords'],
            'type'        => 'website',
        );
    }

    return $data;
}

function olaria_herrera_document_title($title) {
    $seo = olaria_herrera_current_seo_data();
    return $seo['title'];
}
add_filter('pre_get_document_title', 'olaria_herrera_document_title');

function olaria_herrera_seo_meta() {
    $seo = olaria_herrera_current_seo_data();
    $business = olaria_herrera_business_data();
    $url = is_singular() ? get_permalink() : home_url('/');
    $city = olaria_herrera_current_city_data();

    $schema = array(
        array(
            '@context' => 'https://schema.org',
            '@type' => 'HomeAndConstructionBusiness',
            'name' => $business['name'],
            'url' => home_url('/'),
            'description' => $seo['description'],
            'telephone' => $business['phone'],
            'address' => array(
                '@type' => 'PostalAddress',
                'streetAddress' => $business['street'],
                'addressLocality' => $business['city'],
                'addressRegion' => $business['state'],
                'postalCode' => $business['postal_code'],
                'addressCountry' => $business['country'],
            ),
            'areaServed' => array_map(function ($city) {
                return array('@type' => 'City', 'name' => $city);
            }, $business['areas']),
            'contactPoint' => array(
                '@type' => 'ContactPoint',
                'telephone' => $business['phone'],
                'contactType' => 'sales',
                'areaServed' => 'BR',
                'availableLanguage' => array('pt-BR'),
            ),
            'hasMap' => $business['map'],
            'sameAs' => array(
                'https://wa.me/' . $business['phone_link'],
            ),
        ),
        array(
            '@context' => 'https://schema.org',
            '@type' => 'WebSite',
            'name' => $business['name'],
            'url' => home_url('/'),
            'potentialAction' => array(
                '@type' => 'SearchAction',
                'target' => home_url('/?s={search_term_string}'),
                'query-input' => 'required name=search_term_string',
            ),
        ),
        array(
            '@context' => 'https://schema.org',
            '@type' => 'WebPage',
            'name' => $seo['title'],
            'url' => $url,
            'description' => $seo['description'],
            'about' => array(
                'material de construcao em Campinas',
                'blocos estruturais em Campinas',
                'areia e pedra em Campinas',
                'materiais para obra na RMC',
            ),
        ),
    );

    $schema[] = array(
        '@context' => 'https://schema.org',
        '@type' => 'BreadcrumbList',
        'itemListElement' => array_values(array_filter(array(
            array(
                '@type' => 'ListItem',
                'position' => 1,
                'name' => 'Inicio',
                'item' => home_url('/'),
            ),
            is_front_page() ? null : array(
                '@type' => 'ListItem',
                'position' => 2,
                'name' => $seo['title'],
                'item' => $url,
            ),
        ))),
    );

    if (is_front_page()) {
        $schema[] = array(
            '@context' => 'https://schema.org',
            '@type' => 'FAQPage',
            'mainEntity' => array(
                array(
                    '@type' => 'Question',
                    'name' => 'Vocês entregam material de construcao em Campinas e regiao?',
                    'acceptedAnswer' => array(
                        '@type' => 'Answer',
                        'text' => 'Sim. A Olaria Herrera atende Campinas e cidades da RMC com foco em entrega rapida para blocos estruturais, areia, pedra e pedrisco.',
                    ),
                ),
                array(
                    '@type' => 'Question',
                    'name' => 'Como pedir um orcamento rapido?',
                    'acceptedAnswer' => array(
                        '@type' => 'Answer',
                        'text' => 'O jeito mais rapido e chamar no WhatsApp 19 98451-5960 para informar o material, metragem e cidade de entrega.',
                    ),
                ),
            ),
        );
    }

    if ($city) {
        $schema[] = array(
            '@context' => 'https://schema.org',
            '@type' => 'Service',
            'name' => $city['headline'],
            'serviceType' => 'Fornecimento de material de construcao',
            'provider' => array(
                '@type' => 'HomeAndConstructionBusiness',
                'name' => $business['name'],
            ),
            'areaServed' => array(
                '@type' => 'City',
                'name' => $city['name'],
            ),
            'description' => $city['description'],
        );
    }
    ?>
    <link rel="canonical" href="<?php echo esc_url($url); ?>">
    <meta name="description" content="<?php echo esc_attr($seo['description']); ?>">
    <meta name="keywords" content="<?php echo esc_attr($seo['keywords']); ?>">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="googlebot" content="index, follow">
    <meta name="geo.region" content="BR-SP">
    <meta name="geo.placename" content="<?php echo esc_attr($city ? $city['name'] : 'Campinas'); ?>">
    <meta property="og:locale" content="pt_BR">
    <meta property="og:type" content="<?php echo esc_attr($seo['type']); ?>">
    <meta property="og:title" content="<?php echo esc_attr($seo['title']); ?>">
    <meta property="og:description" content="<?php echo esc_attr($seo['description']); ?>">
    <meta property="og:url" content="<?php echo esc_url($url); ?>">
    <meta property="og:site_name" content="Olaria Herrera">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo esc_attr($seo['title']); ?>">
    <meta name="twitter:description" content="<?php echo esc_attr($seo['description']); ?>">
    <script type="application/ld+json"><?php echo wp_json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES); ?></script>
    <?php
}
add_action('wp_head', 'olaria_herrera_seo_meta', 5);
