/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/26$ 11:00$
 *@desc
 */
const path = require( 'path' );
const serve = require( 'koa-static' );

const render = require( './render' );

module.exports = ( app ) => {

  app.use( serve( path.join( __dirname, '../..', '/dist' ) ) );

  app.use( render );
};