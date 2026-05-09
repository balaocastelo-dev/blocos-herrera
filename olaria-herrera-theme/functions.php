<?php
/**
 * Olaria Herrera functions and definitions
 */

function olaria_herrera_scripts() {
    // Tailwind CSS
    wp_enqueue_script('tailwind-cdn', 'https://cdn.tailwindcss.com', array(), null, false);
    
    // Alpine.js
    wp_enqueue_script('alpine-js', 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js', array(), null, true);
    
    // Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Oswald:wght@500;700&display=swap', array(), null);
    
    // Custom Styles
    wp_enqueue_style('olaria-herrera-style', get_stylesheet_uri());
    wp_enqueue_style('olaria-herrera-parallax', get_template_directory_uri() . '/parallax.css');
    
    // Custom Scripts
    wp_enqueue_script('olaria-herrera-calculator', get_template_directory_uri() . '/calculator.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'olaria_herrera_scripts');

// Theme Support
add_theme_support('title-tag');
add_theme_support('post-thumbnails');

// Register Menus
function olaria_herrera_menus() {
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'olaria-herrera'),
    ));
}
add_action('init', 'olaria_herrera_menus');
