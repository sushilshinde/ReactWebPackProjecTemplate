var path = require("path");
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");

var DD = path.resolve(__dirname, "dist");
var SD = path.resolve(__dirname, "src");

var config = {
    entry: SD + "/app/index.js",
    output: {
        path: DD + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [{
            test: /\.js?/,
            include: SD,
            loader: "babel-loader",
            query: {
                presets: ["react", "es2015", "stage-2"]
            }
        }]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: SD + '/index.html',
            to: DD + "/index.html"
        }])
    ]
}

module.exports = config;