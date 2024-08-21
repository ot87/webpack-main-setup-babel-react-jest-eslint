const path = require("path");
const DotenvWebpackPlugin = require("dotenv-webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader"],
      },
    ],
  },
  plugins: [
    new DotenvWebpackPlugin({
      path: path.resolve(".env.development"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    compress: true,
    open: true,
  },
  devtool: "eval-source-map",
};
