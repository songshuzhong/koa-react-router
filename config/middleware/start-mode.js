/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/26$ 11:00$
 *@desc
 */
const path = require( 'path' );
const serve = require( 'koa-static' );
const webpack = require( 'webpack' );
const mode = process.env.NODE_ENV.trim() || 'dev';

const koaWebpack = require( './koa-webpack' );
const render = require( './renderer' );

const webpackConfig = require( '../webpack.config' )( 'dev' );
const compiler = webpack( webpackConfig );

const DEV_MODE = ( app ) => {

  app.use( serve( path.join( __dirname, '../..', '/dist' ) ) );

  app.use( koaWebpack( { compiler: compiler, dev: { noInfo: true } } ) );

  app.use( render );
};

const PROD_MODE = ( app ) => {

  app.use( serve( path.join( __dirname, '../..', '/dist' ) ) );

  app.use( render );
};

module.exports = ( app ) => {
  let MODE_CONFIG;
  switch ( mode ) {
    case 'dev':
    case 'development':
      MODE_CONFIG = DEV_MODE( app );
      break;
    case 'prod':
    case 'default':
    case 'production':
      MODE_CONFIG = PROD_MODE( app );
      break;
  }
  return MODE_CONFIG;
};