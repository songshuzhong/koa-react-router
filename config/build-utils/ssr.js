const React = require( 'react' );
const { renderToStaticMarkup } = require( 'react-dom/server' );
import Html from '../../client/scripts/frame/html';

const serverSideRender = ( state, routerCtx ) => (
  `<!DOCTYPE html>` + renderToStaticMarkup( <Html initialState={ state } routerCtx={ routerCtx } /> )
);

module.exports = serverSideRender;