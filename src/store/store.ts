import { applyMiddleware, combineReducers, compose, createStore, Reducer } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import FlowerState from '../Flowers/State/flowerState';
import flowersReducer from '../Flowers/State/flowersReducer';
import AuthState from '../auth/State/authState';
import authReducer from '../auth/State/authReducer';

export interface StoreState {
  flowers: FlowerState;
  auth: AuthState;
}

const rootReducer: Reducer<StoreState, any> = combineReducers<StoreState>({
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
