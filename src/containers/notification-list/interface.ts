import {INotification} from "@store/notification/interface";

export interface INotificationListMapStateToProps {
  notifications: INotification[];
}

export interface INotificationListMapDispatchToProps {
  onCloseNotification: (notificationId: string) => void;
}
