import {INotification} from "@store/notification/interface";


export interface INotificationList {
  list: INotification[];
  onCloseNotification: (notificationId: string) => void;
  maxItems: number;
}
