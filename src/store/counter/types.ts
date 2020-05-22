import { ActionType } from 'typesafe-actions';
import * as actions from './action';

export type CounterActionType = ActionType<typeof actions>;
export interface CounterType {
  counter: number
};