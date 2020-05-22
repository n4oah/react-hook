import { createReducer } from 'typesafe-actions';
import { CounterType, CounterActionType } from './types';
import { COUNT_CHANGE, COUNT_PLUS, COUNT_MINUS } from './action'

const initialState: CounterType = {
  counter: 0
};

export const reducer = createReducer<CounterType, CounterActionType>(initialState, {
  [COUNT_PLUS]: (state) => {
    return {
      ...state,
      counter: state.counter + 1
    };
  },
  [COUNT_MINUS]: (state) => {
    return {
      ...state,
      counter: state.counter - 1
    };
  },
  [COUNT_CHANGE]: (state, action) => {
    return {
      ...state,
      counter: action.payload
    };
  }
});