import { ActionType } from 'typesafe-actions';
import * as actions from './action';

export type AccountActionType = ActionType<typeof actions>;
export enum Gender {
  male,
  female
};
export interface AccountSiginType {
  id: string,
  pwd: string,
}
export interface AccountType extends AccountSiginType {
  name: string,
  gender: Gender,
  email?: string
};

type AccountT = AccountSiginType | AccountType;
export interface Account {
  account?: AccountT,
  status: string
}

const b: Account = {
  status: 'a',
  account: {
    gender: Gender.male,
    id: '1',
    name: '1',
    pwd: '1',
    email: '1'
  }
};