const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  target: 'node',
  entry: {
    main: "./bin/www.ts",
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: "out-bundle.js", // <--- Will be compiled to this single file
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