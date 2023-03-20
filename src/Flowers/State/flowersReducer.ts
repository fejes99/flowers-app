import FlowerState from './flowerState';
import * as actionTypes from './flowerTypes';

const initialState: FlowerState = {
  flowers: [],
  loading: false,
  error: null,
};

const flowersReducer = (
  state = initialState,
  action: actionTypes.FlowerActionTypes
): FlowerState => {
  switch (action.type) {
    case actionTypes.FETCH_FLOWERS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.FETCH_FLOWERS_SUCCESS:
      return { ...state, loading: false, flowers: action.payload };
    case actionTypes.FETCH_FLOWERS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default flowersReducer;
