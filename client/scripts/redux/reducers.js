import { combineReducers } from 'redux';

import planlist from './planlist';

var reducers = combineReducers({
  planlist: planlist
});

export default reducers;
