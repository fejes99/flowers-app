import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import flowerReducer from './reducers/flowerReducer';

const rootReducer = combineReducers({
  flower: flowerReducer,
});

const logger = (store: any) => {
  return (next: any) => {
    return (action: any) => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    };
  };
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;
