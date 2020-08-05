import {IUser} from "@common/types";

import {EAuthorizationStatus, EUserAction, IUserAction} from "./interface";


const setAuthorizationStatus = (payload: EAuthorizationStatus): IUserAction<EAuthorizationStatus> => ({
  type: EUserAction.SET_AUTHORIZATION_STATUS,
  payload,
});

const setUser = (payload: IUser): IUserAction<IUser> => ({
  type: EUserAction.SET_USER,
  payload
});

export {
  setAuthorizationStatus,
  setUser,
};
