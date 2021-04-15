import { all, takeLatest, call, put } from 'redux-saga/effects';

import { signInSuccess, signInError } from './actions';

import api from 'api';

export function* signIn(payload) {
  try {
    const res = yield call(api.post, 'user/login', payload.data);
    api.defaults.headers.Authorization = `Bearer ${res.data.token}`;

    return yield put(signInSuccess(res.data));
  } catch (error) {
    yield put(signInError());
  }
}

export function setToken({ payload }) {
  if (!payload || !payload.auth) return;

  const { token } = payload.auth;

  if (token) api.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGNIN_REQUEST', signIn),
]);
