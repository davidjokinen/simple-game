const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: './game/index.js'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  output: {
    path: path.resolve(__dirname, 'game/dist'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    'ie': 10
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  }
};
