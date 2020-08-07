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

export interface IAddNotification {
  type: ENotificationAction.ADD_NOTIFICATION;
  payload: INotification;
}

export interface IRemoveNotification {
  type: ENotificationAction.REMOVE_NOTIFICATION;
  payload: string;
}

export interface IRemoveNotificationsByName {
  type: ENotificationAction.REMOVE_NOTIFICATIONS_BY_NAME;
  payload: string;
}

export interface IResetNotification {
  type: ENotificationAction.RESET_NOTIFICATIONS;
}

export type TNotificationAction = IAddNotification
  | IRemoveNotification
  | IRemoveNotificationsByName
  | IResetNotification;
