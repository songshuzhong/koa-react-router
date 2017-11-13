/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/25$ 22:00$
 *@desc
 */
const isJsonBody = require( 'koa-is-json' );

const render = ( appBundle ) => {
  return async ( ctx, next ) => {
      if ( !ctx.body || isJsonBody( ctx.body ) ) {
          const state = ctx.body || {};
          const routerCtx = { basename: '', context: {} };
          const { ssr } = appBundle();

          if ( ctx.accepts( 'html' ) ) {
              const html = ssr( state, routerCtx );
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
  }
};

module.exports = render;
