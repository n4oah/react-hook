import { all } from 'redux-saga/effects';
import { signIn2 } from './Account';

export default function* rootSaga() {
  yield all([
    signIn2()
  ])
};