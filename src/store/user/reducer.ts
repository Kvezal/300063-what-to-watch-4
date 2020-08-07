import {extend} from "@common/utils";

import {EUserAction, IUserState, TUserAction} from "./interface";


const initialState: IUserState = {
  user: null,
  authorizationStatus: null,
};

const reducer = (state: IUserState = initialState, action: TUserAction): IUserState => {
  switch (action.type) {
    case EUserAction.SET_AUTHORIZATION_STATUS:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case EUserAction.SET_USER:
      return extend(state, {
        user: action.payload,
      });
    default:
      return state;
  }
};

export default reducer;
