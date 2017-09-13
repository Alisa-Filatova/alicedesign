var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var NODE_ENV = process.env.NODE_ENV;

module.exports = {
    context: __dirname,

    entry: {
        index: './js/index.js',
        graphicDesign: './js/portfolio-graphic.js',
        webDesign: './js/portfolio-web.js',
        code: './js/portfolio-code.js',
        graphicDesignEn: './js/portfolio-graphic-en.js',
        webDesignEn: './js/portfolio-web-en.js',
        codeEn: './js/portfolio-code-en.js',
        illustrations: './js/portfolio-illustrations.js'
    },

    output: {
        path: __dirname + '/dist',
        publicPath: '/dist/',
        filename: 'js/[name].js'
    },

    devtool: NODE_ENV === 'production' ? false : 'eval-source-map',

    module: {
        loaders: [
            {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: `css-loader?${NODE_ENV === 'production' ? 'minimize' : ''}!less-loader`,
                }),
            }, {
                test: /\.(ttf|eot|woff2?)$/,
                loader: 'file-loader?name=fonts/[hash].[ext]',
            }, {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'file-loader?name=img/[hash].[ext]',
            }, {
                // обрабатывать ссылки на svg файлы и помещать их в папку svg
                test: /\.svg$/,
                loader: 'file-loader?name=svg/[hash].svg',
            }, {
                // этот кусок нужен только при использовании modernizr
                test: /modernizr/,
                loader: 'imports-loader?this=>window!exports-loader?window.Modernizr',
            }
        ],
    },

    plugins: [
        new ExtractTextPlugin('css/[name].css'),
    ],
};

if (NODE_ENV === 'production') {
    var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_console: true,
        },
    });
    
    module.exports.plugins.push(uglifyJsPlugin);
}