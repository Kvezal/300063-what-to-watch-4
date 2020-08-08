import {AxiosInstance} from "axios";
import {connect} from "react-redux";

import NotificationList from "@components/notification-list/notification-list";
import {IDispatch} from "@middlewares/interface";
import {removeNotification} from "@store/notification/action-creator";
import {getDisplayedNotifications} from "@store/notification/selectors";
import {TStoreAction, TStoreState} from "@store/interface";

import {
  INotificationListMapDispatchToProps,
  INotificationListMapStateToProps
} from "./interface";

const mapStateToProps = (state: TStoreState): INotificationListMapStateToProps => ({
  notifications: getDisplayedNotifications(state),
});

const mapDispatchToProps = (dispatch: IDispatch<TStoreState, AxiosInstance, TStoreAction>): INotificationListMapDispatchToProps => ({
  onCloseNotification: (notificationId: string): void => {
    dispatch(removeNotification(notificationId));
  },
});

export default connect<INotificationListMapStateToProps, INotificationListMapDispatchToProps>(mapStateToProps, mapDispatchToProps)(NotificationList);
