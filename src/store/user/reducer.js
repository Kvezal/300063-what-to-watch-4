import {extend} from "@common/utils";
import {ErrorType} from "@store/user/const";

import ActionType from "./action-type";
import {AuthorizationStatus} from "./const";


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  error: ErrorType.NONE,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTHORIZATION_STATUS:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.ADD_AUTHORIZATION_ERROR:
      return extend(state, {
        error: action.payload,
      });
    default:
      return state;
  }
};

export default reducer;
