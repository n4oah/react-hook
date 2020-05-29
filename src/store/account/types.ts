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
