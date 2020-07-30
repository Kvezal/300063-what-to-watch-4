import {INotification} from "@store/notification/interface";


interface INotificationList {
  list: INotification[];
  onCloseNotification: (notificationId: string) => void;
  maxItems: number;
}

export {
  INotificationList,
};
