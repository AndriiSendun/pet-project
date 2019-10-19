import { takeEvery, put, call } from 'redux-saga/effects';

// MODELS
import { LogInAction, User } from './log-in.models';

import ACTION_TYPES from './log-in.action-types';

import { logInAPI } from './log-in.api';

function* authorizationWatcher(): IterableIterator<any> {
  yield takeEvery(ACTION_TYPES.LOG_IN, authorization);
}

function* authorization(action: LogInAction): IterableIterator<any> {
  try {
    const user: undefined | User = yield call(logInAPI, action.payload);

    yield put({ type: ACTION_TYPES.LOG_IN_SUCCESS, payload: user });
  } catch (err) {
    yield put({ type: ACTION_TYPES.LOG_IN_FAIL, payload: err });
  }
}

export {
  authorizationWatcher,
}
