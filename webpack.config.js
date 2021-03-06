var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: [
    './app/scripts/app'
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'app/scripts')
    }]
  }
};
