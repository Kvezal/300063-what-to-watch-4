import {AnyAction} from "redux";


export enum ENotificationAction {
  ADD_NOTIFICATION = `ADD_NOTIFICATION`,
  REMOVE_NOTIFICATION = `REMOVE_NOTIFICATION`,
  REMOVE_NOTIFICATIONS_BY_NAME = `REMOVE_NOTIFICATIONS_BY_NAME`,
  RESET_NOTIFICATIONS = `RESET_NOTIFICATIONS`,
}

export enum ENotificationType {
  ERROR = `error`,
  HIDDEN = `hidden`,
}

export enum EHTTPMethod {
  GET = `get`,
  POST = `post`,
}

export interface INotificationAction<T = null> extends AnyAction {
  type: ENotificationAction;
  payload: T;
}

export interface INotification {
  id: string;
  type: ENotificationType;
  name: string;
  method: EHTTPMethod;
  title: string;
  text: string;
}

export interface INotificationState {
  notifications: INotification[];
}

export type TNotificationAction = INotificationAction<INotification | string | number>;
