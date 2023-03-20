import AuthState from './authState';
import * as actionTypes from './authTypes';

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.REGISTER_REQUEST:
      return { ...state, loading: true };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          token: action.payload,
        },
      };
    case actionTypes.REGISTER_FAIL:
      return { ...state, loading: false, error: action.payload };

    case actionTypes.LOGIN_REQUEST:
      return { ...state, loading: true };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          token: action.payload,
        },
      };
    case actionTypes.LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };

    case actionTypes.FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case actionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          data: action.payload,
        },
      };
    case actionTypes.FETCH_USER_FAIL:
      return { ...state, loading: false, error: action.payload };

    case actionTypes.LOGOUT_USER: {
      return { ...state, loading: false, user: null };
    }
    default:
      return state;
  }
};

export default authReducer;
