const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/duels.js', 'public/js'); 
mix.js('resources/js/space.js', 'public/js');
mix.js('resources/js/profile.js', 'public/js');
mix.js('resources/js/trends.js', 'public/js');
mix.js('resources/js/home.js', 'public/js');

