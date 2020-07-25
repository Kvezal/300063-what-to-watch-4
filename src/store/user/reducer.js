import {extend} from "@common/utils";

import {ActionType, AuthorizationStatus} from "./const";


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTHORIZATION_STATUS:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_USER:
      return extend(state, {
        user: action.payload,
      });
    default:
      return state;
  }
};

export default reducer;
