import SC from 'soundcloud';

import { CLIENT_ID, REDIRECT_URI } from '../constants/auth';
export const connectSC = () => {
  const client_id = CLIENT_ID;
  const redirect_uri = REDIRECT_URI;

  return new Promise((resolve, reject) => {
    SC.initialize({ client_id, redirect_uri });
    SC.connect().then(session => resolve(session));
  });
};

export const AUTH_SUCCESS = 'AUTH_SUCESS';
export const authSuccess = token => ({
  type: AUTH_SUCCESS,
  token,
});

export const AUTH_FAILURE = 'AUTH_FAILURE';
export const authFailure = token => ({
  type: AUTH_FAILURE,
  token,
});

export const SET_SESSION = 'SET_SESSION';
export const setSession = session => ({
  type: SET_SESSION,
  session,
});

export const RESET_SESSION = 'RESET_SESSION';
export const resetSession = () => ({
  type: RESET_SESSION,
});

export const SET_USER = 'SET_USER';
export const setUser = user => ({
  type: SET_USER,
  user,
});

export const SET_USER_FAILURE = 'SET_USER_FAILURE';
export const setUserFailure = user => ({
  type: SET_USER_FAILURE,
  user,
});

export const LOGIN_SC_USER = 'LOGIN_SC_USER';
export const logInSCuser = () => ({
  type: LOGIN_SC_USER,
});

export const LOGOUT_SC_USER = 'LOGOUT_SC_USER';
export const logOutSCuser = () => ({
  type: LOGOUT_SC_USER,
});
