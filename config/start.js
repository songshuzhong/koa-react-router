require( 'babel-register' );
const path = require( 'path' );
const serve = require( 'koa-static' );

const render = require( './middleware/render' );

const app = require( '../server/app' );

app.use( serve( path.join( __dirname, '..', '/public' ) ) );

app.use( render );

app.listen( 3000, () => console.log( 'the server is running on 3000.' ) );