import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

export const sagaMiddleware = createSagaMiddleware();

export const configureStore = (initialState = {}, history) => {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
};
