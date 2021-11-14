const path = require("path");

module.exports = {
  mode: "development",
  entry: [path.resolve(__dirname, "./src/index.tsx")],
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js",".json"],
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};