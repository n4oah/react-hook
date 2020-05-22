import { combineReducers } from 'redux';
import { reducer as counter } from './counter/reducer';

const rootReducer = combineReducers({
  counter
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;