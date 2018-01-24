/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/25$ 22:00$
 *@desc
 */


const app = require( '../server/app' );

require( './middleware/start-mode' )( app );

app.listen( 3000, () => console.log( 'the server is running on 3000.' ) );