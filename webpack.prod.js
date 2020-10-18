const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  output: {
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: false,
              modules: true,
            },
          },
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
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: `[name].[hash].css`,
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production",
      DEBUG: false,
      API_URL:
        "https://xoel2szaa2.execute-api.ap-southeast-1.amazonaws.com/production/api",
      AUTH_URL:
        "https://xoel2szaa2.execute-api.ap-southeast-1.amazonaws.com/production/auth",
    }),
  ],
};
