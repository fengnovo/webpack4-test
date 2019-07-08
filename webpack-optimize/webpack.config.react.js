let path = require('path');
let webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        // test: './src/test.js',
        react: ['react', 'react-dom'],
    },
    output: {
        // filename: '[name].js',
        filename: '_dll_[name].js', // 产生的文件名
        path: path.resolve(__dirname, 'dist'),
        // library: 'ab',  //把导出的整体赋值给ab变量
        // libraryTarget: 'var', //umd commonjs  var this...

        library: '_dll_[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '_dll_[name]',
            path: path.resolve(__dirname, 'dist', 'manifest.json')
        })
    ]

}