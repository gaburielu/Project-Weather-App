const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    personalize: "./src/personalize.js",
    API: "./src/api.js",
    render: "./src/render.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/main.html", // The path to your HTML template file
      filename: "index.html", // The name of the output HTML file
      favicon: "src/asset/icons8-cloud-64.png",
    }),
  ],
  devtool: "inline-source-map", //For error log
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
