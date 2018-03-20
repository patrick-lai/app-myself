/**
 * Webpack 2
 * https://webpack.js.org/configuration/
 */

require("dotenv").config({ silent: true });
require("rename-osx-terminal-tab");
const devServer = require("./webpack.devServer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const lodash = require("lodash");
const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const rules = require("react-app-engine/src/webpack/rules")({
  includePaths: [
    path.resolve(__dirname, "node_modules/react-router-transition") // NOTE - remove this when the repo fixes this
  ]
});

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".scss", ".css"],
    modules: [__dirname + "/node_modules", "node_modules"], // Looks local node_modules first
    symlinks: false // Treat symlinks as if its not symlinked,
  },
  entry: "./src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
    chunkFilename: "[id].[hash].chunk.js"
  },
  devtool: process.env.NODE_ENV ? "source-map" : "cheap-eval-source-map",
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
    // Serves html
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    // .env
    new Dotenv()
  ],
  module: { rules },
  node: { fs: "empty" }, // TODO - Remove once CSS loader sorts this out
  devServer
};
