import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
  Reducer,
} from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import FlowerState from '../Flowers/State/flowerState';
import flowersReducer from '../Flowers/State/flowersReducer';
import AuthState from '../auth/State/authState';
import authReducer from '../auth/State/authReducer';
import { AuthActionTypes } from '../auth/State/authTypes';
import { FlowerActionTypes } from '../Flowers/State/flowerTypes';

export interface StoreState {
  flowers: FlowerState;
  auth: AuthState;
}

type StoreAction = FlowerActionTypes | AuthActionTypes;

const rootReducer: Reducer<StoreState, StoreAction> = combineReducers<StoreState>({
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
  composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<StoreState, any>))
);

export default store;
