const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './client/scripts/config/entry.js',

  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],

  module: {
    loaders: [
      {test: /\.json$/,loader: "json"},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.jsx?$/,exclude: /node_modules/,loader: 'babel-loader'},
      {test: /\.(less|css)$/, use: ExtractTextPlugin.extract({ use:[ 'css-loader','less-loader'], fallback: 'style-loader',})},
      {test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10000&name=/images/[name].[ext]',},
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, use: ['file-loader?name=/images/[name].[ext]?[hash]']}
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].css",
      disable: false,
      allChunks: true,
    }),
  ]
};