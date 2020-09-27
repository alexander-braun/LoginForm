import { TOGGLE_LOGIN_OPTIONS, AppActions, LoginOptions } from './constants';

export const toggleLoginOptions = (payload: LoginOptions): AppActions => ({
  type: TOGGLE_LOGIN_OPTIONS,
  payload,
});
