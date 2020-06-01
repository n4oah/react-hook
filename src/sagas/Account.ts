import { take } from 'redux-saga/effects';
import { signRequest } from '../store/account/action'

export function* signInSaga() {
  while (true) {
    yield take(signRequest);
  
    // let { payload } = yield take(`${signIn}`);
  
    // console.log('payload', payload);
  
    console.log('a');
  
  
    // yield put({
    //   type: SIGN_IN
    // });
  }
}