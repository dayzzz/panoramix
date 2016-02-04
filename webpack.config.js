var webpack = require('webpack');
var path    = require('path');

var BUILD_DIR = path.resolve(__dirname, 'panoramix/static');    // output
var APP_DIR   = path.resolve(__dirname, 'panoramix/static/js'); // input

var config = {
  entry: {
    index: APP_DIR + '/index.js'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].entry.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
