const { mergeWithRules } = require("webpack-merge");
const commonConfig = require("./webpack/webpack.common.js");

module.exports = () => {
  const envName = process.env.NODE_ENV === "production" ? "prod" : "dev";
  const envConfig = require(`./webpack/webpack.${envName}.js`);

  return mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "prepend",
      },
    },
  })(commonConfig, envConfig);
};
