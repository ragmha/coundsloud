import { connectSC, fetchSCUser } from './actions/auth';
import { put, take } from 'redux-saga/effects';

export function* auth() {
  console.info('Saga-Auth');
  try {
    const session = yield connectSC();
    console.log(session);

    const me = yield fetchSCUser(session);
    console.log(me);

    yield put({ type: 'ME_SET', me });
  } catch (error) {
    yield put({ type: 'ME_SET_FAILURE', error });
  }
}

export function* watchForAuthScUser() {
  while (true) {
    yield take('AUTH_SC_USER');
    yield auth();
  }
}
