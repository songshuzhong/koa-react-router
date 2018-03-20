import React from 'react' ;
import { Provider } from 'react-redux';

import { RenderRoutes } from '../config/router-utils/index';

import routes from './scripts/config/routes';
import store from './scripts/redux/store';

import './styles/component.css';
import './styles/nprogress.css';

/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/08/10
 *@desc 首页
 */
const App = ( { initialState, basename } ) => {
  return (
    <Provider store={ store }>
      <RenderRoutes routes={ routes } initialState={ initialState } autoLoadData />
    </Provider>
  );
};
export default App;