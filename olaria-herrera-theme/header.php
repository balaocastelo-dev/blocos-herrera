<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <style>
        [x-cloak] { display: none !important; }
        .font-oswald { font-family: 'Oswald', sans-serif; }
        .logo-fallback {
            display: none;
        }
        .parallax {
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
        .floating-whatsapp {
            position: fixed;
            right: 1.25rem;
            bottom: 1.25rem;
            z-index: 60;
            box-shadow: 0 20px 40px rgba(34, 197, 94, 0.35);
        }
    </style>
</head>
<body <?php body_class('bg-gray-50 text-gray-900 font-inter'); ?>>
    <header class="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-orange-100">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center gap-4">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-3">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo-herrera.jpg" alt="Olaria Herrera" class="h-12 md:h-16" data-admin-id="site-logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';">
                <span class="logo-fallback items-center rounded-xl bg-orange-600 px-4 py-2 text-lg font-black uppercase tracking-[0.2em] text-white">Herrera</span>
            </a>
            <nav class="hidden md:flex items-center space-x-6 font-semibold text-sm lg:text-base">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="hover:text-orange-600 transition">Inicio</a>
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('blocos'))); ?>" class="hover:text-orange-600 transition">Blocos</a>
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('revestimentos'))); ?>" class="hover:text-orange-600 transition">Revestimentos</a>
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('bordas-atermicas'))); ?>" class="hover:text-orange-600 transition">Bordas Atérmicas</a>
                <a href="<?php echo esc_url(home_url('/#orcamento')); ?>" class="hover:text-orange-600 transition">Orcamento</a>
                <a href="<?php echo esc_url(home_url('/#contato')); ?>" class="hover:text-orange-600 transition">Contato</a>
            </nav>
            <a href="https://wa.me/5519984515960?text=Ola! Quero um orcamento de material de construcao em Campinas." target="_blank" class="bg-green-500 text-white px-5 py-3 rounded-full font-bold hover:bg-green-600 transition flex items-center space-x-2 whitespace-nowrap">
                <span>WhatsApp 19 98451-5960</span>
            </a>
        </div>
    </header>
    <a href="https://wa.me/5519984515960?text=Ola! Quero um orcamento rapido de material de construcao em Campinas e RMC." target="_blank" class="floating-whatsapp inline-flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 text-sm font-bold text-white hover:bg-green-600 transition">
        <span>Chamar no WhatsApp</span>
    </a>
