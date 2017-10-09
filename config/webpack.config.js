/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/25$ 22:00$
 *@desc
 */
const path = require( 'path' );
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const DEV_CONFIG = {
  entry: {
    app: ['./client/scripts/config/entry.js', 'webpack-hot-middleware/client?reload=true']
  },

  output: {
    path: path.resolve( './dist' ),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/',
    library: 'ReactRender',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {test: /\.json$/,loader: "json"},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.jsx?$/,exclude: /node_modules/,loader: 'babel-loader'},
      {test: /\.(less|css)$/, use: ExtractTextPlugin.extract({ use:[ 'css-loader','less-loader'], fallback: 'style-loader',})},
      {test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10000&name=[name].[ext]',},
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, use: ['file-loader?name=[name].[ext]']}
    ]
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({ filename: "main.css", disable: false, allChunks: true }),
  ]
};

const PRO_CONFIG = {
  entry: './client/scripts/config/entry.js',

  output: {
    path: path.resolve( './dist/' ),
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {test: /\.json$/,loader: "json"},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.jsx?$/,exclude: /node_modules/,loader: 'babel-loader'},
      {test: /\.(less|css)$/, use: ExtractTextPlugin.extract({ use:[ 'css-loader','less-loader'], fallback: 'style-loader',})},
      {test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10000&name=/images/[name].[ext]',},
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, use: ['file-loader?name=/images/[name].[ext]']}
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({ filename: "main.css", disable: false, allChunks: true }),
    new webpack.optimize.UglifyJsPlugin( { output: { comments: false }, compress: { warnings: false } } )
  ]
};

module.exports = ( env ) => {
  let WEBPACK_CONFIG;
  switch ( env ) {
    default:
    case 'prod':
    case 'production':
      WEBPACK_CONFIG = PRO_CONFIG;
      break;
    case 'dev':
    case 'development':
      WEBPACK_CONFIG = DEV_CONFIG;
  }

  return WEBPACK_CONFIG;
};
