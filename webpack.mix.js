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

mix.js('resources/js/dashboard.js', 'public/js'); 
mix.js('resources/js/app.js', 'public/js');


mix.webpackConfig({
    output: {
        chunkFilename: 'js/chunks/[name].[chunkhash].js',//replace with your path
    },
});