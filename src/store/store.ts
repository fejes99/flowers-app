import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import StoreState from './store.d';
import flowersReducer from '../Flowers/State/flowersReducer';
import { FlowerActionTypes } from '../Flowers/State/flowerTypes';
import authReducer from '../auth/State/authReducer';

const rootReducer = combineReducers<StoreState>({
  flowers: flowersReducer,
  auth: authReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<StoreState, FlowerActionTypes>))
);

export default store;
