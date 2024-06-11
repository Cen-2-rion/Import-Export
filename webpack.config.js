const path = require('path'); // модуль для работы с путями
const HtmlWebpackPlugin = require('html-webpack-plugin'); // плагин для сборки html-файлов
const MiniCSSExtractPlugin = require('mini-css-extract-plugin'); // плагин для извлечения css-файлов

module.exports = {
    entry: './src/index.js', // точка входа

    output: {
        path: path.resolve(__dirname, 'dist') // папка для сборки бандлов
    },

    module: {
        rules: [
            {
                test: /\.css$/, // маска
                use: [
                    MiniCSSExtractPlugin.loader, // загрузчик
                    'css-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // шаблон
            filename: 'index.html' // имя файла
        }),
        new MiniCSSExtractPlugin()
    ]
}
