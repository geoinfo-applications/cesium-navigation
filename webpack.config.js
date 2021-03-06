"use strict";

const fs = require("fs");
const path = require("path");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");


function getExtractTextPlugin() {
    return [
        {
            loader: ExtractCssChunks.loader,
            options: {
                publicPath: "../"
            }
        },
        {
            loader: "css-loader"
        }
    ];
}

const webpackConfig = {
    entry: {
        app: ["./src/app.ts"]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "[name].js",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [...getExtractTextPlugin(), "stylus-relative-loader"]
            },
            {
                test: /\.css$/,
                use: getExtractTextPlugin()
            },
            {
                test: /\.ts$/,
                include: (() => {
                    const p = fs.realpathSync(path.join(__dirname, "src"));
                    return (filePath) => filePath.startsWith(p);
                })(),
                use: [{
                    loader: "babel-loader", options: {}
                }, {
                    loader: "ts-loader",
                    options: { allowTsInNodeModules: true, happyPackMode: true }
                }
                ]
            },
            {
                test: /\.m?js$/,
                include: (() => {
                    const p = fs.realpathSync(path.join(__dirname, "src"));
                    return (filePath) => filePath.startsWith(p);
                })(),
                use: [{
                    loader: "babel-loader", options: {}
                }
                ]
            },
            {
                test: /\.(pug)$/,
                use: "pug-loader"
            }
        ]
    },

    externals: {
        angular: "angular"
    },

    resolve: {
        extensions: [".ts", ".mjs", ".js", ".json"]
    },

    plugins: [
        new ExtractCssChunks({
            filename: "./[name].css",
            chunkFilename: "./[name].css",
            hot: false
        })
    ]
};

module.exports = webpackConfig;
