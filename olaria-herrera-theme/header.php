<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <style>
        [x-cloak] { display: none !important; }
        .font-oswald { font-family: 'Oswald', sans-serif; }
        .parallax {
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    </style>
</head>
<body <?php body_class('bg-gray-50 text-gray-900 font-inter'); ?>>
    <header class="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <a href="<?php echo home_url(); ?>">
                <img src="https://raw.githubusercontent.com/balaocastelo-dev/blocos-herrera/master/logo.jpg" alt="Olaria Herrera" class="h-12 md:h-16">
            </a>
            <nav class="hidden md:flex space-x-8 font-semibold">
                <a href="<?php echo home_url(); ?>" class="hover:text-orange-600 transition">Início</a>
                <a href="<?php echo get_permalink(get_page_by_path('blocos')); ?>" class="hover:text-orange-600 transition">Blocos</a>
                <a href="<?php echo get_permalink(get_page_by_path('revestimentos')); ?>" class="hover:text-orange-600 transition">Revestimentos</a>
                <a href="<?php echo home_url(); ?>#orcamento" class="hover:text-orange-600 transition">Orçamento</a>
                <a href="<?php echo home_url(); ?>#contato" class="hover:text-orange-600 transition">Contato</a>
            </nav>
            <a href="https://wa.me/5519984515960?text=Olá! Gostaria de fazer um orçamento." target="_blank" class="bg-green-500 text-white px-6 py-2 rounded-full font-bold hover:bg-green-600 transition flex items-center space-x-2">
                <span>WhatsApp</span>
            </a>
        </div>
    </header>
