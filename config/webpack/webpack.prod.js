const path = require("path");
const DotenvWebpackPlugin = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  output: {
    assetModuleFilename: "static/media/[name].[contenthash:8].[ext]",
    chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
    clean: true,
    filename: "static/js/[name].[contenthash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        common: {
          reuseExistingChunk: true,
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
        },
      },
    },
  },
  plugins: [
    new DotenvWebpackPlugin({
      path: path.resolve(".env.production"),
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:8].css",
    }),
  ],
  devtool: "source-map",
};
