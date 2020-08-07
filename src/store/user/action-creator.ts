import {IUser} from "@common/types";

import {EAuthorizationStatus, EUserAction, ISetAuthorizationStatus, ISetUser} from "./interface";


const setAuthorizationStatus = (payload: EAuthorizationStatus): ISetAuthorizationStatus => ({
  type: EUserAction.SET_AUTHORIZATION_STATUS,
  payload,
});

const setUser = (payload: IUser): ISetUser => ({
  type: EUserAction.SET_USER,
  payload
});

export {
  setAuthorizationStatus,
  setUser,
};
