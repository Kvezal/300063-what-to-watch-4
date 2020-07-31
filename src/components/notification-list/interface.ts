import {INotification} from "@store/notification/interface";


export interface INotificationList {
  notifications: INotification[];
  onCloseNotification: (notificationId: string) => void;
  maxItems: number;
}
