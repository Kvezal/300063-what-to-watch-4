import {extend} from "@common/utils";

import ActionType from "./action-type";
import {AuthorizationStatus} from "./const";


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTHORIZATION_STATUS:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    default:
      return state;
  }
};

export default reducer;
