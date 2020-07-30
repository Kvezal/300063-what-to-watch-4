import {extend} from "@common/utils";

import {ENotificationAction, INotification, INotificationState, TNotificationAction} from "./interface";
import {Reducer} from "redux";


const initialState: INotificationState = {
  notifications: [],
};

const reducer: Reducer<INotificationState, TNotificationAction> = (state: INotificationState = initialState, action: TNotificationAction) => {
  switch (action.type) {
    case ENotificationAction.ADD_NOTIFICATION:
      const notifications = state.notifications.slice();
      notifications.push(action.payload as INotification);
      return extend(state, {
        notifications,
      });
    case ENotificationAction.REMOVE_NOTIFICATION:
      return extend(state, {
        notifications: state.notifications.slice()
          .filter((notification) => notification.id !== action.payload),
      });
    case ENotificationAction.REMOVE_NOTIFICATIONS_BY_NAME:
      return extend(state, {
        notifications: state.notifications.slice()
          .filter((notification) => notification.name !== action.payload),
      });
    case ENotificationAction.RESET_NOTIFICATIONS:
      return extend(state, {
        notifications: [],
      });
    default:
      return state;
  }
};

export default reducer;
