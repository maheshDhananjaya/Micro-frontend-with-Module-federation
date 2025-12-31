const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    mode: "development",
    devServer: {
        port: 3001,
        static: false,
    },
    entry: "./src/index.js",
    output: {
        publicPath: "auto",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "productApp",
            filename: "remoteEntry.js",
            exposes: {
                "./ProductList": "./src/ProductList",
                "./ProductCard": "./src/ProductCard.js"
            },

        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
};
