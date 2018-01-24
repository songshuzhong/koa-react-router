/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/26$ 11:00$
 *@desc
 */
const path = require( 'path' );
const serve = require( 'koa-static' );
const webpack = require( 'webpack' );
const mode = 'dev';

const render = require( './renderer' );

const dev = ( app ) => {
  const koaWebpack = require( 'koa-webpack' );

  const webpackConfig = require( '../webpack.config' )( 'dev' );

  const compiler = webpack( webpackConfig );

  const dynamicAppBundle = require( './dynamic-bundle' );

  app.use( serve( path.join( __dirname, '../..', '/dist' ) ) );

  app.use( koaWebpack( { compiler: compiler, dev: { noInfo: true } } ) );

  const appBundle = dynamicAppBundle( compiler );

  app.use( render( appBundle ) );
};

const pro = ( app ) => {

  app.use( serve( path.join( __dirname, '../..', '/dist' ) ) );

  app.use( render );
};

module.exports = ( app ) => {
  let config;
  switch ( mode ) {
    case 'dev':
    case 'development':
      config = dev( app );
      break;
    case 'prod':
    case 'default':
    case 'production':
      config = pro( app );
      break;
  }
  return config;
};