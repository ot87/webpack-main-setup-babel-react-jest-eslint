const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              configFile: path.resolve("config/babel.config.json"),
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve("config/postcss.config.js"),
              },
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg)$/i,
        type: "asset",
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              titleProp: true,
              ref: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
    extensions: [".jsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("public/index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve("public/favicons"),
          to: "favicons",
        },
      ],
    }),
    new ESLintPlugin({
      cache: true,
      configType: "flat",
      context: path.resolve("src"),
      overrideConfigFile: path.resolve("config/eslint.config.js"),
      extensions: ["jsx", "js"],
    }),
  ],
};
