import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from '../middleware';
import thunk from "redux-thunk";
import rootReducer, { RootState } from './rootReducer';

export function configureStore(initialState?: RootState) {
  let middleware = applyMiddleware(logger,thunk);

  if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer, initialState, middleware) as Store<RootState>;

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextReducer = require('./rootReducer');
      store.replaceReducer(nextReducer); 
    });
  }

  return store;
}
