import {ActionType} from "./const";


const addNotification = (notification) => ({
  type: ActionType.ADD_NOTIFICATION,
  payload: notification,
});

const removeNotification = (notificationId) => ({
  type: ActionType.REMOVE_NOTIFICATION,
  payload: notificationId,
});

export {
  addNotification,
  removeNotification,
};
