import {AnyAction} from "redux";

import {IUser} from "@common/types";

export enum EUserAction {
  SET_AUTHORIZATION_STATUS = `SET_AUTHORIZATION_STATUS`,
  SET_USER = `SET_USER`,
}

export enum EAuthorizationStatus {
  AUTH = `AUTH`,
  NO_AUTH = `NO_AUTH`,
}

export enum EUserErrorNotificationName {
  EMAIL = `DATA:EMAIL`,
}

export enum EUserURLHandlerPath {
  LOGIN = `/login`,
}

export interface IUserAction<T = null> extends AnyAction {
  type: EUserAction;
  payload: T;
}

export interface IUserState {
  user: IUser;
  authorizationStatus: EAuthorizationStatus;
}

export type TUserAction = IUserAction<EAuthorizationStatus | IUser>;
