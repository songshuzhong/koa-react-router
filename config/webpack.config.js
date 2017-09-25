const path = require( 'path' );
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const merge = require( './build-utils/merge' );
const resolvePath = require( './build-utils/resolvePath' );

const commConfig = {
  output: {
    path: __dirname + '../dist/',
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000'
  },

  module: {
    loaders: [
      {test: /\.json$/,loader: "json"},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.jsx?$/,exclude: /node_modules/,loader: 'babel-loader'},
      {test: /\.(less|css)$/, use: ExtractTextPlugin.extract({ use:[ 'css-loader','less-loader'], fallback: 'style-loader',})},
      {test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10000&name=/images/[name].[ext]',},
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, use: ['file-loader?name=/images/[name].[ext]?[hash]']}
    ]
  }
};
const devConfig = {
  entry: {
    app: ['./client/scripts/config/entry.js', 'webpack-hot-middleware/client?reload=true']
  },

  output: {
    path: path.resolve( './dist' ),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000'
  },

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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({ filename: "main.css", disable: false, allChunks: true }),
  ]
};

const proConfig = {
  entry: './client/scripts/config/entry.js',
  output: {
    path: path.resolve( '../dist/' ),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000'
  },

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
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({ filename: "main.css", disable: false, allChunks: true }),
  ]
};

module.exports = devConfig;
/*
module.exports = ( env ) => {
  const mergeConfig = {};
  switch ( env ) {
    case 'prod':
    case 'production':
      merge( mergeConfig, commConfig, proConfig );
      break;
    case 'dev':
    case 'development':
    default:
      merge( mergeConfig, commConfig, devConfig );
  }

  console.log( mergeConfig );
  return mergeConfig;
};*/
