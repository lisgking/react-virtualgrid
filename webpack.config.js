var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
   entry : [
	'./src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve:{
      extensions:['', '.js', '.jsx', '.scss', '.sass']
  },
  module: {
    loaders: [
           {
	    test: /\.(js|jsx)$/,
            loader: 'babel',
            exclude: /node_modules/,
            include:__dirname,
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
          test: /\.sass$/,
	  loader: ExtractTextPlugin.extract("style", 'css!sass')
        }
    ]
  },
  plugins: [
        new ExtractTextPlugin('../../virtualgrid.css', {
            allChunks: true
        })
    ]
};
