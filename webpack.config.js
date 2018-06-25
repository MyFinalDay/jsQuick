const path = require("path");

module.exports = {
  devtool: "eval-source-map",
  mode: "production",
  entry: "./src/index.js",
  devServer: {
    contentBase: "./dist",
    port: 7000,
    overlay: true,
    stats: "errors-only",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
