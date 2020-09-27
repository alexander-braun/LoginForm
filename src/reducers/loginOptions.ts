import {
  TOGGLE_LOGIN_OPTIONS,
  AppActions,
  LoginOptions,
} from '../actions/constants';

const initialState = {
  external: true,
  recover: true,
  icons: true,
  register: true,
};

export const loginOptions = (
  state: LoginOptions = initialState,
  action: AppActions
): LoginOptions => {
  switch (action.type) {
    case TOGGLE_LOGIN_OPTIONS:
      return action.payload;
    default:
      return state;
  }
};
