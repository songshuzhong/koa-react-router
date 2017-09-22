const React = require( 'react' );
const isJsonBody = require( 'koa-is-json' );
const { renderToStaticMarkup } = require( 'react-dom/server' );

import Html from '../client/scripts/frame/html';

const render = async ( ctx, next ) => {
  if ( !ctx.body || isJsonBody( ctx.body ) ) {
    const state = ctx.body || {};
    const routerCtx = { basename: '', context: {} };

    if ( ctx.accepts( 'html' ) ) {
      const html = `<!DOCTYPE html>` + renderToStaticMarkup( <Html initialState={ state } routerCtx={ routerCtx } /> );
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
