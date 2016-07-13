var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        sticky: './src/Sticky'
    },
    output: {
        library: 'vue-sticky',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    externals: {
        vue: 'vue'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'src': path.resolve(__dirname, '../src')
        }
    },
    module: {
        preLoaders: [{
            test: /\.vue$/,
            loader: 'eslint',
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            loader: 'eslint',
            exclude: /node_modules/
        }],
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            loader: 'vue-html'
        }]
    },
    eslint: {
        formatter: require('eslint-friendly-formatter')
    },
    vue: {
        loaders: {
            less: 'vue-style-loader!css-loader!less-loader',
            css: 'vue-style-loader!css-loader'
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
}
