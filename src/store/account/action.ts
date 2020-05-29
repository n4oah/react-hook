import { createAction } from 'typesafe-actions';
import { AccountSiginType } from './types';

export const SIGN_IN = `account/SIGN_IN`;
export const SIGN_OUT = `account/SIGN_OUT`;

export const signIn = createAction(SIGN_IN)<AccountSiginType>();
export const signOut = createAction(SIGN_OUT)<AccountSiginType>();