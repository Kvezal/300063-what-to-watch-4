import {
  ENotificationAction,
  IAddNotification,
  INotification,
  IRemoveNotification,
  IRemoveNotificationsByName,
  IResetNotification,
} from "./interface";


const addNotification = (notification: INotification): IAddNotification => ({
  type: ENotificationAction.ADD_NOTIFICATION,
  payload: notification,
});

const removeNotification = (notificationId: string): IRemoveNotification => ({
  type: ENotificationAction.REMOVE_NOTIFICATION,
  payload: notificationId,
});

const removeNotificationsByName = (payload: string): IRemoveNotificationsByName => ({
  type: ENotificationAction.REMOVE_NOTIFICATIONS_BY_NAME,
  payload,
});

const resetNotification = (): IResetNotification => ({
  type: ENotificationAction.RESET_NOTIFICATIONS,
});

export {
  addNotification,
  removeNotification,
  removeNotificationsByName,
  resetNotification,
};
