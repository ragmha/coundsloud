import Cookies from 'js-cookie';
import { put, take, call, fork, race } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { OAUTH_TOKEN } from '../constants/auth';

import {
  connectSC,
  authSuccess,
  authFailure,
  setUser,
  setUserFailure,
  setSession,
  resetSession,
  LOGIN_SC_USER,
  LOGOUT_SC_USER,
} from '../actions/auth';

import { fetchSCUser, fetchStream } from '../api';

import { setAuthToken, getAuthToken, removeAuthToken } from './sideEffects';

import { setTracks } from '../actions/track';

function* login() {
  try {
    const session = yield connectSC();
    // localStorage.setItem(OAUTH_TOKEN, session.oauth_token);
    Cookies.set(OAUTH_TOKEN, session.oauth_token);
    yield put(setSession(session));
    const user = yield call(fetchSCUser, session);

    yield put(setUser(user));
    const stream = yield call(fetchStream, session);
    const tracks = stream.collection;
    yield put(setTracks(tracks));
  } catch (error) {
    yield put(setUserFailure(error));
  }
}

function* watchForLogin() {
  while (true) {
    yield take(LOGIN_SC_USER);
    yield login();
  }
}

function* logout() {
  Cookies.remove(OAUTH_TOKEN);
  yield put(resetSession());
}

function* watchForLogOut() {
  while (true) {
    yield take(LOGOUT_SC_USER);
    yield logout();
  }
}

// ========================  WIP ==================================//
function* authorize(refresh) {
  try {
    const token = yield call(connectSC, refresh);
    yield call(setAuthToken, token);
    yield put(authSuccess(token));
    return token;
  } catch (e) {
    yield call(removeAuthToken);
    yield put(authFailure(e));
    return null;
  }
}

function* authorizeLoop(token) {
  while (true) {
    const refresh = token != null;
    token = yield call(authorize, refresh);
    if (token === null) return;
    yield call(delay, token.expires_in);
  }
}

function* authentication() {
  const storedToken = yield call(getAuthToken);

  while (true) {
    if (!storedToken) yield take(LOGIN_SC_USER);

    const { logOutAction } = yield race({
      logOutAction: take(LOGOUT_SC_USER),
      authLoop: call(authorizeLoop, storedToken),
    });

    if (logOutAction) {
      yield call(removeAuthToken);
    }
  }
}

// ================================================================= //

export const authSagas = [fork(watchForLogin), fork(watchForLogOut)];
