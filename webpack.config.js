const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/indexapp.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devtool: "source-map",
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
