import {extend} from "@common/utils";

import {EAuthorizationStatus, EUserAction, IUserState, TUserAction} from "./interface";
import {UserInterface} from "@common/types";
import {Reducer} from "redux";


const initialState: IUserState = {
  user: null,
  authorizationStatus: null,
};

const reducer: Reducer<IUserState, TUserAction> = (state: IUserState = initialState, action: TUserAction) => {
  switch (action.type) {
    case EUserAction.SET_AUTHORIZATION_STATUS:
      return extend(state, {
        authorizationStatus: action.payload as EAuthorizationStatus,
      });
    case EUserAction.SET_USER:
      return extend(state, {
        user: action.payload as UserInterface,
      });
    default:
      return state;
  }
};

export default reducer;
