/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/25$ 22:21$
 *@desc
 */
const fs = require( 'fs' );
const path = require( 'path' );

const appDirectory = fs.realpathSync( process.cwd() );

const resolveApp = ( ...relativePath ) => path.resolve( appDirectory, ...relativePath );

module.exports = resolveApp;