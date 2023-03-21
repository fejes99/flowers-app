import { Reducer } from 'redux';
import AuthState from './authState';
import * as actionTypes from './authTypes';

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer: Reducer<AuthState, actionTypes.AuthActionTypes> = (
  state = initialState,
  action
): AuthState => {
  switch (action.type) {
    case actionTypes.REGISTER_REQUEST:
      return { ...state, loading: true, user: null, error: null };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.REGISTER_FAIL:
      return { ...state, loading: false, error: action.error };

    case actionTypes.LOGIN_REQUEST:
      return { ...state, loading: true, user: null, error: null };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          token: action.token,
        },
      };
    case actionTypes.LOGIN_FAIL:
      return { ...state, loading: false, error: action.error };

    case actionTypes.FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          data: action.data,
        },
        error: null,
      };
    case actionTypes.FETCH_USER_FAIL:
      return { ...state, loading: false, error: action.error };

    case actionTypes.LOGOUT_USER: {
      return { ...state, loading: false, user: null, error: null };
    }
    default:
      return state;
  }
};

export default authReducer;
