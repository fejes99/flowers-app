import axios from 'axios';
import { Dispatch } from 'redux';
import { LoginData } from '../components/LoginModal/LoginModal';
import { ProfileData } from '../components/ProfileModal/ProfileModal';
import { RegisterData } from '../components/RegisterModal/RegisterModal';
import * as actionTypes from './authTypes';

const registerUserRequest = () => ({ type: actionTypes.REGISTER_REQUEST });
const registerUserSuccess = () => ({
  type: actionTypes.REGISTER_SUCCESS,
});
const registerUserFail = (error: string) => ({ type: actionTypes.REGISTER_FAIL, error: error });

export const registerUser = (registerData: RegisterData) => (dispatch: Dispatch) => {
  dispatch(registerUserRequest());

  axios
    .post('/users/register', registerData)
    .then((response) => {
      dispatch(registerUserSuccess());
    })
    .catch((error) => dispatch(registerUserFail(error)));
};

const loginUserRequest = () => ({ type: actionTypes.LOGIN_REQUEST });
const loginUserSuccess = (token: string) => ({ type: actionTypes.LOGIN_SUCCESS, token: token });
const loginUserFail = (error: string) => ({ type: actionTypes.LOGIN_FAIL, error: error });

export const loginUser = (loginData: LoginData) => (dispatch: Dispatch) => {
  dispatch(loginUserRequest());

  axios
    .post('/users/login', loginData)
    .then((response) => dispatch(loginUserSuccess(response.data.auth_token)))
    .catch((error) => dispatch(loginUserFail(error)));
};

const fetchUserRequest = () => ({ type: actionTypes.FETCH_USER_REQUEST });
const fetchUserSuccess = (profileData: ProfileData) => ({
  type: actionTypes.FETCH_USER_SUCCESS,
  data: profileData,
});
const fetchUserFail = (error: string) => ({ type: actionTypes.FETCH_USER_FAIL, payload: error });

export const fetchUser = (token: string) => (dispatch: Dispatch) => {
  dispatch(fetchUserRequest());

  axios
    .get('/users/me', { headers: { Authorization: token } })
    .then((response) => dispatch(fetchUserSuccess(response.data.user)))
    .catch((error) => dispatch(fetchUserFail(error)));
};

const logout = () => ({ type: actionTypes.LOGOUT_USER });

export const logoutUser = () => (dispatch: Dispatch) => {
  dispatch(logout());
};
