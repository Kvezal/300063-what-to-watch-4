import {AnyAction} from "redux";

import {UserInterface} from "@common/types";

enum EUserAction {
  SET_AUTHORIZATION_STATUS = `SET_AUTHORIZATION_STATUS`,
  SET_USER = `SET_USER`,
}

enum EAuthorizationStatus {
  AUTH = `AUTH`,
  NO_AUTH = `NO_AUTH`,
}

enum EUserErrorNotificationName {
  EMAIL = `DATA:EMAIL`,
}

enum EUserURLHandlerPath {
  LOGIN = `/login`,
}

interface IUserAction<T = null> extends AnyAction {
  type: EUserAction;
  payload: T;
}

interface IUserState {
  user: UserInterface;
  authorizationStatus: EAuthorizationStatus;
}

type TUserAction = IUserAction<EAuthorizationStatus | UserInterface>;

export {
  EUserAction,
  EAuthorizationStatus,
  EUserErrorNotificationName,
  EUserURLHandlerPath,
  IUserAction,
  IUserState,
  TUserAction,
};
