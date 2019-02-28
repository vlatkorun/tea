const mix = require('laravel-mix');

// const WebpackShellPlugin = require('webpack-shell-plugin');

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

mix.autoload({
    lodash: ['_', 'lodash'],
});

mix.webpackConfig({
    // module: {
    //     rules: [
    //         {
    //             // Matches all PHP or JSON files in `resources/lang` directory.
    //             test: /resources[\\\/]lang.+\.(php|json)$/,
    //             loader: 'laravel-localization-loader',
    //         }
    //     ]
    // },
    // plugins: [
    //     new WebpackShellPlugin({
    //         onBuildStart:['php artisan ziggy:generate resources/js/routes/ziggy.js']
    //     })
    // ]
});

mix.react('resources/js/index.js', 'public/js/app.js').extract([
    'axios',
    'lodash',
    'moment',
    'react',
    'react-dom',
    'indicative',
    'reselect',
    'recompose',
    'redux',
    'react-redux',
    'redux-form',
    'bootstrap',
    'classnames',
    'collect.js',
    'immutability-helper',
    'prop-types',
    'reactstrap',
    'react-hot-loader',
    'react-router-dom',
    'connected-react-router',
    'react-error-boundary',
    'react-router',
    'redux-thunk',
    'redux-devtools-extension',
    'redux-actions',
    'laravel-echo',
    'pusher-js',
    '@fortawesome/react-fontawesome',
    '@fortawesome/fontawesome-svg-core',
    '@fortawesome/free-solid-svg-icons',
    '@fortawesome/free-brands-svg-icons',
    'styled-components'
]);

mix.sass('resources/sass/app.scss', 'public/css');

mix.version();
