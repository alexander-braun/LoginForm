import { TOGGLE_AUTHORISATION, AppActions } from './constants';

export const authorize = (payload: boolean): AppActions => ({
  type: TOGGLE_AUTHORISATION,
  payload,
});
