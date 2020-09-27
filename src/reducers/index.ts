import { combineReducers } from 'redux';
import { auth } from './auth';
import { loginOptions } from './loginOptions';

export const rootReducer = combineReducers({
  auth,
  loginOptions,
});

export type AppState = ReturnType<typeof rootReducer>;
