import {createSelector} from "reselect";

import ENameSpace from "@store/name-space";
import {ENotificationType, INotification} from "@store/notification/interface";
import {TStoreState} from "@store/interface";


const NAME_SPACE = ENameSpace.NOTIFICATION;

const getNotifications = (state: TStoreState): INotification[] => {
  return state[NAME_SPACE].notifications;
};

const getNotificationName = (state: TStoreState, props): ENotificationType => {
  return props.notificationName;
};

const getNotificationsByName = createSelector(
    getNotifications,
    getNotificationName,
    (notifications: INotification[], notificationName: ENotificationType): INotification[] => {
      return notifications.filter((notification: INotification) => notification.name === notificationName);
    }
);

const getDisplayedNotifications = createSelector(
    getNotifications,
    (notifications: INotification[]): INotification[] => notifications.filter(
        (notification: INotification) => notification.type !== ENotificationType.HIDDEN
    )
);

export {
  getNotifications,
  getNotificationsByName,
  getDisplayedNotifications,
};
