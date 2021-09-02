/* eslint-disable */
const path = require('path');

const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const __DEV__ = process.env.NODE_ENV === 'development';

const context = path.resolve(__dirname, 'src');

const getAlias = () => {
    const aliasObj = { "@": "." };

    const aliasList = [
        "interfaces",
        "components",
        "redux",
        "services",
        "utils",
    ];
    // resolve "@interfaces", etc.
    aliasList.map(aliasName => { aliasObj[`@${aliasName}`] = path.resolve(context, aliasName) });

    return aliasObj;
};

module.exports = {
    context,
    entry: './index.tsx',
    devtool: __DEV__ ? 'source-map' : false,
    devServer: {
        port: 5000,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        alias: getAlias(),
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, "dist"),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: './assets/favicon.ico', to: 'favicon.ico' }],
        }),
        new CleanWebpackPlugin(),
    ],
};
