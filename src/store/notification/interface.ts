import {AnyAction} from "redux";


enum ENotificationAction {
  ADD_NOTIFICATION = `ADD_NOTIFICATION`,
  REMOVE_NOTIFICATION = `REMOVE_NOTIFICATION`,
  REMOVE_NOTIFICATIONS_BY_NAME = `REMOVE_NOTIFICATIONS_BY_NAME`,
  RESET_NOTIFICATIONS = `RESET_NOTIFICATIONS`,
}

enum ENotificationType {
  ERROR = `error`,
  HIDDEN = `hidden`,
}

enum EHTTPMethod {
  GET = `get`,
  POST = `post`,
}

interface INotificationAction<T = null> extends AnyAction {
  type: ENotificationAction;
  payload: T;
}

interface INotification {
  id: string;
  type: ENotificationType;
  name: string;
  method: EHTTPMethod;
  title: string;
  text: string;
}

interface INotificationState {
  notifications: INotification[];
}

type TNotificationAction = INotificationAction<INotification | string | number>;

export {
  ENotificationAction,
  ENotificationType,
  EHTTPMethod,
  INotification,
  INotificationAction,
  INotificationState,
  TNotificationAction,
};
