import { combineReducers } from 'redux';
import { reducer as counter } from './counter/reducer';
import { reducer as account } from './account/reducer';

const rootReducer = combineReducers({
  counter,
  account
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;