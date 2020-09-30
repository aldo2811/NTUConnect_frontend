const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "/",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true } },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, "src/stylesheets")],
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: "./build",
    hot: true,
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
      DEBUG: true,
    }),
  ],
};
