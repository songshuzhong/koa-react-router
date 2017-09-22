import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from '../config/routes';

const clientSideRender = ( state, routerCtx ) => (
  render(
    <BrowserRouter { ...routerCtx }>
      { routes }
    </BrowserRouter>
    ,
    document.getElementById( "app" )
  )
);

const initScriptTemplate = ( state, routerCtx ) => `clientSideRender(${ state },${ routerCtx })`;

const Html = ( initialState, routerCtx, children ) => (
  <html lang="zh-cn">
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
    <link href="main.css" rel="stylesheet" />
    <title>{ 'EPM UI App' }</title>
  </head>
  <body>
    <div id="app"/>
    <script src="bundle.js" />
{/*    <script dangerouslySetInnerHTML={ { __html: initScriptTemplate( JSON.stringify( initialState ), JSON.stringify( routerCtx ) ) } } />*/}
  </body>
  </html>
);

export { Html };
export default Html;