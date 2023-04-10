import { fetchFavoriteFlowers, removeFavoriteFlowers } from './../../Flowers/State/flowerActions';
import axios from 'axios';
import { LoginData } from '../components/LoginModal/LoginModal';
import { ProfileData } from '../components/ProfileModal/ProfileModal';
import { RegisterData } from '../components/RegisterModal/RegisterModal';
import * as actionTypes from './authTypes';
import Error from '../../common/Error';
import { AppDispatch } from '../../store/store';

const registerUserRequest = () => ({ type: actionTypes.REGISTER_REQUEST });
const registerUserSuccess = () => ({
  type: actionTypes.REGISTER_SUCCESS,
});
const registerUserFail = (error: Error) => ({ type: actionTypes.REGISTER_FAIL, error: error });

export const registerUser = (registerData: RegisterData) => (dispatch: AppDispatch) => {
  dispatch(registerUserRequest());

  axios
    .post('/users/register', registerData)
    .then((response) => dispatch(registerUserSuccess()))
    .catch((error) => dispatch(registerUserFail(error)));
};

const loginUserRequest = () => ({ type: actionTypes.LOGIN_REQUEST });
const loginUserSuccess = (token: string) => ({ type: actionTypes.LOGIN_SUCCESS, token: token });
const loginUserFail = (error: Error) => ({ type: actionTypes.LOGIN_FAIL, error: error });

export const loginUser = (loginData: LoginData) => (dispatch: AppDispatch) => {
  dispatch(loginUserRequest());

  axios
    .post('/users/login', loginData)
    .then((response) => dispatch(loginUserSuccess(response.data.auth_token)))
    .catch((error) => {
      dispatch(loginUserFail(error));
      console.log(error.response.data.error);
    });
};

const fetchUserRequest = () => ({ type: actionTypes.FETCH_USER_REQUEST });
const fetchUserSuccess = (profileData: ProfileData) => ({
  type: actionTypes.FETCH_USER_SUCCESS,
  data: profileData,
});
const fetchUserFail = (error: Error) => ({ type: actionTypes.FETCH_USER_FAIL, payload: error });

export const fetchUser = (token: string) => (dispatch: AppDispatch) => {
  dispatch(fetchUserRequest());

  axios
    .get('/users/me', { headers: { Authorization: token } })
    .then((response) => {
      dispatch(fetchUserSuccess(response.data.user));
      dispatch(fetchFavoriteFlowers(token));
    })
    .catch((error) => dispatch(fetchUserFail(error)));
};

const logout = () => ({ type: actionTypes.LOGOUT_USER });

export const logoutUser = () => (dispatch: AppDispatch) => {
  dispatch(removeFavoriteFlowers());
  dispatch(logout());
};
