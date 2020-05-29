import { createReducer } from 'typesafe-actions';
import { AccountActionType, AccountType, Gender } from './types';
import { SIGN_IN, SIGN_OUT } from './action'

const initialState: AccountType = {
  id: '',
  name: '',
  pwd: '',
  gender: Gender.male
};

export const reducer = createReducer<AccountType, AccountActionType>(initialState, {
  [SIGN_IN]: (state) => {
    return {
      ...state
    };
  },
  [SIGN_OUT]: (state) => {
    return {
      ...state
    };
  }
});