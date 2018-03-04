import React from 'react' ;
import { RenderRoutes } from '../config/router-utils/index';

import routes from './scripts/config/routes';

import './styles/nprogress.css';

/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/08/10
 *@desc 首页
 */
const App = ( { initialState, basename } ) => {
  return (
    <div>
      <RenderRoutes routes={ routes } initialState={ initialState } autoLoadData />
    </div>
  );
};
export default App;