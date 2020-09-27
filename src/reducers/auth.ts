import { TOGGLE_AUTHORISATION, AppActions } from '../actions/constants';

const initialState: boolean = false;

export const auth = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case TOGGLE_AUTHORISATION:
      return action.payload;
    default:
      return state;
  }
};
