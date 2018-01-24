/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/25$ 22:00$
 *@desc
 */
const path = require( 'path' );
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const ReactAssetPlugin = require( './build-utils/react-asset-plugin' );

const settings = require( './settings' );

const dev = {
  entry: {
    app: ['webpack-hot-middleware/client?reload=true', './config/module-utils/index.js']
  },

  output: {
    path: settings.paths.output.views,
    filename: `${ settings.config.js }.js`,
    publicPath: `http://localhost:${ settings.config.port }/`,
    library: 'ReactRender',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {test: /\.json$/,loader: "json"},
      {test: /\.(js|jsx?)$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.(less|css)$/, use: ExtractTextPlugin.extract({ use:[ 'css-loader','less-loader'], fallback: 'style-loader'})},
      {test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10000&name=[name].[ext]',},
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, use: ['file-loader?name=[name].[ext]']}
    ]
  },

  resolve: {
    alias: { context: path.resolve( process.cwd(), 'frontend.config.js' ) }
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({ filename: "main.css", disable: false, allChunks: true }),
    new ReactAssetPlugin( settings.config )
  ]
};

const pro = {
  entry: './config/module-utils/index.js',

  output: {
    path: settings.paths.output.views,
    filename: `${ settings.config.js }.js`,
    library: 'ReactRender',
    libraryTarget: 'umd'
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

  resolve: {
    alias: { context: path.resolve( process.cwd(), 'frontend.config.js' ) }
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({ filename: "main.css", disable: false, allChunks: true }),
    new webpack.optimize.UglifyJsPlugin( { output: { comments: false }, compress: { warnings: false } } )
  ]
};

module.exports = ( env ) => {
  let config;
  switch ( env ) {
    default:
    case 'prod':
    case 'production':
      config = pro;
      break;
    case 'dev':
    case 'development':
      config = dev;
  }

  return config;
};
