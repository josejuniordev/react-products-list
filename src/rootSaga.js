import { all, fork } from 'redux-saga/effects';
import productsSaga from './sagas/productsSaga';

export default function* rootSaga() {
  yield all([
    fork(productsSaga),
  ]);
}
