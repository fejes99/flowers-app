import { Reducer } from 'redux';
import { Error } from '../../common/Error';
import FlowerState from './flowerState';
import * as actionTypes from './flowerTypes';

const initialState: FlowerState = {
  flowers: [],
  loading: false,
  error: null,
  favoriteFlowers: [],
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
      return { ...state, loading: false, error: action.error as Error };

    case actionTypes.FETCH_SEARCH_FLOWERS_REQUEST:
      return { ...state, loading: true, flowers: [], error: null };
    case actionTypes.FETCH_SEARCH_FLOWERS_SUCCESS:
      return { ...state, loading: false, flowers: action.flowers };
    case actionTypes.FETCH_SEARCH_FLOWERS_FAIL:
      return { ...state, loading: false, error: action.error as Error };

    case actionTypes.FETCH_FAVORITE_FLOWERS_REQUEST:
      return { ...state, loading: true, error: null, favoriteFlowers: [] };
    case actionTypes.FETCH_FAVORITE_FLOWERS_SUCCESS:
      return { ...state, loading: false, favoriteFlowers: action.flowers };
    case actionTypes.FETCH_FAVORITE_FLOWERS_FAIL:
      return { ...state, loading: false, error: action.error as Error };

    case actionTypes.REMOVE_FAVORITE_FLOWERS:
      return { ...state, favoriteFlowers: [] };

    case actionTypes.ADD_FAVORITE_FLOWER_REQUEST:
      return { ...state, error: null };
    case actionTypes.ADD_FAVORITE_FLOWER_SUCCESS:
      return { ...state };
    case actionTypes.ADD_FAVORITE_FLOWER_FAIL:
      return { ...state, loading: false, error: action.error as Error };

    case actionTypes.REMOVE_FAVORITE_FLOWER_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.REMOVE_FAVORITE_FLOWER_SUCCESS:
      return { ...state, loading: false };
    case actionTypes.REMOVE_FAVORITE_FLOWER_FAIL:
      return { ...state, loading: false, error: action.error as Error };
    default:
      return state;
  }
};

export default flowersReducer;
