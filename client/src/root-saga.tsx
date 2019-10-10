import { all } from 'redux-saga/effects';

// SAGAS
import { authorizationWatcher } from './components/log-in/log-in.saga';

function* rootSaga(): IterableIterator<any> {
  yield all([
    authorizationWatcher(),
  ]);
}

export default rootSaga;
