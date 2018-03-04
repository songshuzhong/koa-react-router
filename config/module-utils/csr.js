/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/25$ 22:00$
 *@desc
 */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from '../../client/app';

const clientSideRender = ( state, routerCtx ) => (
    render(
        <BrowserRouter { ...routerCtx }>
          <App initialState={ state } basename={ routerCtx.basename }/>
        </BrowserRouter>,
        document.getElementById('react-root'),
      () => {
        document.body.removeChild( document.body.lastElementChild );
      }
    )
);

export default clientSideRender;
