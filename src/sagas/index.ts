import { all } from 'redux-saga/effects';
import { signInSaga } from './Account';

export default function* rootSaga() {
  yield all([
    signInSaga()
  ])
};