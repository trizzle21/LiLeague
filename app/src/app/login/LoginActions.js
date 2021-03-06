export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';


export function loginRequest() {
  return { type: LOGIN_REQUEST }
}

export function loginFailure() {
  return { type: LOGIN_FAILURE }
}

export function loginSuccess() {
  return { type: LOGIN_SUCCESS }
}

export function registerRequest() {
  return { type: REGISTER_REQUEST }
}

export function registerFailure() {
  return { type: REGISTER_FAILURE }
}

export function registerSuccess() {
  return { type: REGISTER_SUCCESS }
}
