require( 'babel-register' );
const path = require( 'path' );
const serve = require( 'koa-static' );
const webpack = require( 'webpack' );
const koaWebpack = require( 'koa-webpack' );

const render = require( './middleware/render' );

const webpackConfig = require( './webpack.config' );
const compiler = webpack( webpackConfig );

const app = require( '../server/app' );

app.use( koaWebpack( { compiler: compiler, dev: { noInfo: true } } ) );

app.use( serve( path.join( __dirname, '..', '/dist' ) ) );

app.use( render );

app.listen( 3000, () => console.log( 'the server is running on 3000.' ) );