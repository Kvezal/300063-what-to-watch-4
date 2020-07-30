import {ENotificationAction, INotification, INotificationAction} from "./interface";


const addNotification = (notification: INotification): INotificationAction<INotification> => ({
  type: ENotificationAction.ADD_NOTIFICATION,
  payload: notification,
});

const removeNotification = (notificationId: number): INotificationAction<number> => ({
  type: ENotificationAction.REMOVE_NOTIFICATION,
  payload: notificationId,
});

const removeNotificationsByName = (payload: string): INotificationAction<string> => ({
  type: ENotificationAction.REMOVE_NOTIFICATIONS_BY_NAME,
  payload,
});

const resetNotification = (): INotificationAction => ({
  type: ENotificationAction.RESET_NOTIFICATIONS,
  payload: null,
});

export {
  addNotification,
  removeNotification,
  removeNotificationsByName,
  resetNotification,
};
