import {extend} from "@common/utils";

import {EAuthorizationStatus, EUserAction, IUserState, TUserAction} from "./interface";
import {IUser} from "@common/types";


const initialState: IUserState = {
  user: null,
  authorizationStatus: null,
};

const reducer = (state: IUserState = initialState, action: TUserAction): IUserState => {
  switch (action.type) {
    case EUserAction.SET_AUTHORIZATION_STATUS:
      return extend(state, {
        authorizationStatus: action.payload as EAuthorizationStatus,
      });
    case EUserAction.SET_USER:
      return extend(state, {
        user: action.payload as IUser,
      });
    default:
      return state;
  }
};

export default reducer;
