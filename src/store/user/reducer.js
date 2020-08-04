import {extend} from "@common/utils";

import {ActionType} from "./const";


const initialState = {
  authorizationStatus: null,
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
