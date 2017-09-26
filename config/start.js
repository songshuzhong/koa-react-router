/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/25$ 22:00$
 *@desc
 */
require( 'babel-register' );
const NODE_ENV = process.env.NODE_ENV.trim();

const app = require( '../server/app' );

NODE_ENV === 'production'? require( './middleware/prod-mode' )( app ): require( './middleware/dev-mode' )( app );

app.listen( 3000, () => console.log( 'the server is running on 3000.' ) );