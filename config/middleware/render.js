const isJsonBody = require( 'koa-is-json' );
const serverSideRender = require( '../build-utils/ssr' );

const render = async ( ctx, next ) => {
  if ( !ctx.body || isJsonBody( ctx.body ) ) {
    const state = ctx.body || {};
    const routerCtx = { basename: '', context: {} };

    if ( ctx.accepts( 'html' ) ) {
      const html = serverSideRender( state, routerCtx );
      ctx.type = 'html';
      ctx.body = html;
    } else if ( ctx.accepts( 'json' ) ) {
      ctx.type = 'json';
      ctx.body = state;
    } else {
      await next();
    }
  } else {
    await next();
  }
};

module.exports = render;
