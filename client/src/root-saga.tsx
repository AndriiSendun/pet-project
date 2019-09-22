import { all } from 'redux-saga/effects';

function* rootSaga(): IterableIterator<any> {
  yield all([]);
}

export default rootSaga;
