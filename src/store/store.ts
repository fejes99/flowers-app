import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import flowersReducer from '../Flowers/State/flowersReducer';
import StoreState from './store.d';
import { FlowerActionTypes } from '../Flowers/State/flowerTypes';

const rootReducer = combineReducers<StoreState>({
  flowers: flowersReducer,
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
