const mix = require('laravel-mix');



mix.js('resources/js/app.js', 'public/js')
    .sass('resources/scss/main.scss', 'public/css')
    .options({processCssUrls: false})
    .copyDirectory('resources/fonts', 'public/fonts')
    .disableSuccessNotifications();
