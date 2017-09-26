/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/26$ 11:00$
 *@desc
 */
const path = require( 'path' );
const serve = require( 'koa-static' );
const webpack = require( 'webpack' );

const koaWebpack = require( './koa-webpack' );
const render = require( './render' );

const webpackConfig = require( '../webpack.config' )( 'dev' );
const compiler = webpack( webpackConfig );

module.exports = ( app ) => {

  app.use( serve( path.join( __dirname, '../..', '/dist' ) ) );

  app.use( koaWebpack( { compiler: compiler, dev: { noInfo: true } } ) );

  app.use( render );
};