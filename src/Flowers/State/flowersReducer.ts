import FlowerState from './flowerState';
import {
  FETCH_FLOWERS_FAILURE,
  FETCH_FLOWERS_REQUEST,
  FETCH_FLOWERS_SUCCESS,
  FlowerActionTypes,
} from './flowerTypes';

const initialState: FlowerState = {
  flowers: [],
  loading: false,
  error: null,
};

const flowersReducer = (state = initialState, action: FlowerActionTypes): FlowerState => {
  switch (action.type) {
    case FETCH_FLOWERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_FLOWERS_SUCCESS:
      return { ...state, loading: false, flowers: action.payload };
    case FETCH_FLOWERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default flowersReducer;
