const Koa = require( 'koa' );
const path = require( 'path' );
const serve = require( 'koa-static' );
const render = require( './render' );

const app = new Koa();

app.use( serve( path.join( __dirname, '..', '/public' ) ) );

app.use( render );

app.listen( 3000, () => console.log(`the server is start at port 3000`) );

