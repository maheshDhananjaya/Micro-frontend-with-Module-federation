const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
    mode: "development",

    entry: "./src/index.js",

    devServer: {
        port: 3000,
        historyApiFallback: true,
        hot: true,
    },

    output: {
        publicPath: "auto",
        clean: true,
    },

    resolve: {
        extensions: [".js", ".jsx"],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "hostApp",
            remotes: {
                productApp: "productApp@http://localhost:3001/remoteEntry.js",
            },
            shared: {
                react: { singleton: true, requiredVersion: false },
                "react-dom": { singleton: true, requiredVersion: false },
            },
        }),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
        }),
    ],
};
