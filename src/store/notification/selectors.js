import {createSelector} from "reselect";

import NameSpace from "@store/name-space";
import {NotificationType} from "@store/notification/const";


const NAME_SPACE = NameSpace.NOTIFICATION;

const getNotifications = (state) => {
  return state[NAME_SPACE].notifications;
};

const getNotificationsByName = (state, name) => {
  return state[NAME_SPACE].notifications
    .filter((notification) => notification.name === name);
};

const getDisplayedNotifications = createSelector(
    getNotifications,
    (notifications) => notifications.filter(
        (notification) => notification.type !== NotificationType.HIDDEN
    )
);

export {
  getNotifications,
  getNotificationsByName,
  getDisplayedNotifications,
};
