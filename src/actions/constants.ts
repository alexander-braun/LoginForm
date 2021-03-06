export const TOGGLE_AUTHORISATION = 'TOGGLE_AUTHORISAT';
export const TOGGLE_LOGIN_OPTIONS = 'TOGGLE_LOGIN_OPTIONS';

/**
 * Authorization
 */
export type Authorized = boolean;
export interface Authorize {
  type: typeof TOGGLE_AUTHORISATION;
  payload: Authorized;
}

/**
 * Feature Options
 */
export type LoginOptions = {
  external: boolean;
  recover: boolean;
  icons: boolean;
  register: boolean;
};

export type ToggleLoginOptions = {
  type: typeof TOGGLE_LOGIN_OPTIONS;
  payload: LoginOptions;
};

/**
 * App Action Creator
 */
export type AuthActionTypes = Authorize;
export type LoginOptionActionTypes = ToggleLoginOptions;

export type AppActions = AuthActionTypes | LoginOptionActionTypes;
