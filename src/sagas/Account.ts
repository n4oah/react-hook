import { take } from 'redux-saga/effects';
import { signIn } from '../store/account/action'

export function* signIn2() {
  let { payload } = yield take(`${signIn}`);

  console.log('payload', payload);


  // yield put({
  //   type: SIGN_IN
  // });
}