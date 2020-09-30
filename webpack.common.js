const path = require("path");

module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.jsx") },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".css", "scss"],
  },
  optimization: {
    splitChunks: { chunks: "all" },
  },
};
