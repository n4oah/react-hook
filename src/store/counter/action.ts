import { createAction } from 'typesafe-actions';

export const COUNT_PLUS = `count/PLUS`;
export const COUNT_MINUS = `count/MINUS`;
export const COUNT_CHANGE = `count/CHANGE_COUNTER`;

export const increment = createAction(COUNT_PLUS)();
export const decrement = createAction(COUNT_MINUS)();
// export const changeCounter = createAction(COUNT_CHANGE)<number>();
/*
export const changeCounter = createAction(COUNT_CHANGE)();
*/
export const changeCounter = createAction(
  COUNT_CHANGE,
  (counter) => ({ counter: counter })
)();