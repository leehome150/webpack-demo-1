const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js", //默认为下面的index.js,去掉效果一样（入口）
  output: {
    path: path.resolve(__dirname, "dist"), //默认为dist（出口）
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "test",
      template: "src/assets/index.html",
    }),
  ],
};
