const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");


module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "js/index.bundle.js",
    },

    plugins: [new HtmlWebpackPlugin({
        title: "Косметолог",
        template: "./src/templates/index.html",
        publicPath: "/public",
        filename: (entryName) => path.resolve(__dirname, "views", entryName + '.html')
    }), new MiniCssExtractPlugin({
        filename: "css/main.css"
    })],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            }
        ]
    },
    mode: "development",
};

