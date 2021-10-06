const mix = require('laravel-mix');



mix.js('resources/js/app.js', 'public/js')
    .sourceMaps(true, 'source-map');

mix.sass('resources/scss/main.scss', 'public/css')
    .sourceMaps(true, 'source-map')
    .options({processCssUrls: false});


mix.copyDirectory('resources/fonts', 'public/fonts')
    .disableNotifications()
mix.copyDirectory('resources/svg', 'public/svg');
