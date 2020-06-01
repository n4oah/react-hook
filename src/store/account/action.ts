import { createAction } from 'typesafe-actions';
import { AccountSiginType } from './types';

export const SIGN_IN = `account/SIGN_IN`;
export const SIGN_OUT = `account/SIGN_OUT`;

export const SIGN_REQUEST = `account/SIGN_REQUEST`;
export const SIGN_SUCCESS = `account/SIGN_SUCCESS`;
export const SIGN_FAILED = `account/SIGN_FAILED`;

export const signIn = createAction(SIGN_IN)<AccountSiginType>();
export const signOut = createAction(SIGN_OUT)<AccountSiginType>();
export const signRequest = createAction(SIGN_REQUEST)<AccountSiginType>();