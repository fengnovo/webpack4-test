let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let Happypack = require('happypack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        port: 3000,
        open: true,
        contentBase: './dist'
    },
    module: {
        noParse: /jquery/,  // 不去解析jquery中的依赖关系
        rules: [{
            test: /\.js$/, 
            exclude: /node_modules/,
            include: path.resolve('src'),
            use: 'Happypack/loader?id=js',
        },{
            test: /\.css$/,
            use: 'Happypack/loader?id=css',
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new Happypack({
            id: 'css',
            use: ['style-loader', 'css-loader']
        }),
        new Happypack({
            id: 'js',
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                }
            }]
        }),

        // 
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, 'dist', 'manifest.json')
        }),

        /**bundle.js    从 1.24 MiB  变到  827 KiB */
        //  因为不需要语言包locale
        new webpack.IgnorePlugin(/\.\/locale/, /moment/),

        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
