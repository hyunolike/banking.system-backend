const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/openapi.js',
    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
    ],
};