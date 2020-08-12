import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from './utils/history';

import appReducer from './containers/App/reducers';

const rootReducer = combineReducers({
  router: connectRouter(history),
  global: appReducer,
});

export default rootReducer;
