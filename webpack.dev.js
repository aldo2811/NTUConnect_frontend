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
  devtool: "#source-map",
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
    contentBase: path.resolve(__dirname, "build"),
    hot: true,
    compress: true,
    historyApiFallback: true,
    disableHostCheck: true,
    proxy: {
      "/api": {
        target:
          "https://rd1q7s8kc8.execute-api.ap-southeast-1.amazonaws.com/dev/",
        changeOrigin: true,
        secure: false,
      },
      "/auth": {
        target:
          "https://rd1q7s8kc8.execute-api.ap-southeast-1.amazonaws.com/dev/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
      DEBUG: true,
      API_URL: "/api",
      AUTH_URL: "/auth",
    }),
  ],
};
