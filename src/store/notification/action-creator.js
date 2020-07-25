import {ActionType} from "./const";


const addNotification = (notification) => ({
  type: ActionType.ADD_NOTIFICATION,
  payload: notification,
});

const removeNotification = (notificationId) => ({
  type: ActionType.REMOVE_NOTIFICATION,
  payload: notificationId,
});

const removeNotificationsByName = (payload) => ({
  type: ActionType.REMOVE_NOTIFICATIONS_BY_NAME,
  payload,
});

export {
  addNotification,
  removeNotification,
  removeNotificationsByName,
};
