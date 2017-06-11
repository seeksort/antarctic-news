const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/indexapp.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devtool: "source-map",
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      { 
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'es2015']
          }
        }
      }
    ]
  }
};
