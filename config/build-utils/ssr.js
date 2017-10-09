import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../../client/scripts/config/routes';
import Html from './html';

const serverSideRender = ( state, routerCtx ) => (
  `<!DOCTYPE html>` + renderToString(
    <Html>
    {
      renderToStaticMarkup(
        <StaticRouter { ...routerCtx }>
          <App initialState={ state } />
        </StaticRouter>)
    }
    </Html>
  )
);

module.exports = serverSideRender;