const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  target: 'node',
  entry: {
    main: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: "build/bundle.js",
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};