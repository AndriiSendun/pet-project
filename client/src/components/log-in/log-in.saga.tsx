export { takeEvery, put, call } from 'redux-saga/effects';

import ACTION_TYPES from './log-in.action-types';

// MODELS
import { LogInAction } from './log-in.models';

function* authorizationWatcher(): IterableIterator<any> {
  yield takeEvery(ACTION_TYPES.LOG_IN, authorization);
}

function* authorization(action: LogInAction): IterableIterator<any> {
  try {
    console.log('success authorization')

  } catch (err) {
    console.log('fail authorization');
  }
}

export {
  authorizationWatcher,
}
