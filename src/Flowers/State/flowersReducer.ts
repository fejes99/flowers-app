import { Reducer } from 'redux';
import FlowerState from './flowerState';
import * as actionTypes from './flowerTypes';

const initialState: FlowerState = {
  flowers: [],
  loading: false,
  error: null,
};

const flowersReducer: Reducer<FlowerState, actionTypes.FlowerActionTypes> = (
  state = initialState,
  action
): FlowerState => {
  switch (action.type) {
    case actionTypes.FETCH_FLOWERS_REQUEST:
      return { ...state, loading: true, flowers: [], error: null };
    case actionTypes.FETCH_FLOWERS_SUCCESS:
      return { ...state, loading: false, flowers: action.flowers };
    case actionTypes.FETCH_FLOWERS_FAIL:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default flowersReducer;
