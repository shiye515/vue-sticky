var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var projectRoot = path.resolve(__dirname, '../')

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            './example/main.js',
            // 'webpack-hot-middleware/client?reload=true'
            './build/dev-client'
        ]
    },
    output: {
        path: '/',
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'src': path.resolve(__dirname, '../src')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        preLoaders: [{
            test: /\.vue$/,
            loader: 'eslint',
            include: projectRoot,
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            loader: 'eslint',
            include: projectRoot,
            exclude: /node_modules/
        }],
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            include: projectRoot,
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.html$/,
            loader: 'vue-html'
        }, {
            test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: '[name].[hash:7].[ext]'
            }
        }]
    },
    eslint: {
        formatter: require('eslint-friendly-formatter')
    },
    vue: {
        loaders: {
            less: ExtractTextPlugin.extract('vue-style-loader', ['css-loader', 'less-loader']),
            css: ExtractTextPlugin.extract('vue-style-loader', ['css-loader'])
        }
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].[hash:7].css'),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './example/index.html',
            inject: true
        })
    ]
}
