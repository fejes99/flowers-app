export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';

export const LOGOUT_USER = 'LOGOUT_USER';

interface RegisterRequestAction {
  type: typeof REGISTER_REQUEST;
}

interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  token: string;
}

interface RegisterFailAction {
  type: typeof REGISTER_FAIL;
  error: string;
}

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  token: string;
}

interface LoginFailAction {
  type: typeof LOGIN_FAIL;
  error: string;
}

interface FetchUserRequestAction {
  type: typeof FETCH_USER_REQUEST;
}

interface FetchUserSuccessAction {
  type: typeof FETCH_USER_SUCCESS;
  data: any;
}

interface FetchUserFailAction {
  type: typeof FETCH_USER_FAIL;
  error: string;
}

interface LogoutUserAction {
  type: typeof LOGOUT_USER;
}

export type AuthActionTypes =
  | RegisterRequestAction
  | RegisterSuccessAction
  | RegisterFailAction
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailAction
  | FetchUserRequestAction
  | FetchUserSuccessAction
  | FetchUserFailAction
  | LogoutUserAction;
