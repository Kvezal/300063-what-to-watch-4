import {IUser} from "@common/types";


export interface IUserAuthorizationParams {
  email: string;
  password: string;
}

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

export interface IUserState {
  user: IUser;
  authorizationStatus: EAuthorizationStatus;
}

export interface ISetAuthorizationStatus {
  type: EUserAction.SET_AUTHORIZATION_STATUS;
  payload: EAuthorizationStatus;
}

export interface ISetUser {
  type: EUserAction.SET_USER;
  payload: IUser;
}

export type TUserAction = ISetAuthorizationStatus | ISetUser;
