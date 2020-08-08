import {extend} from "@common/utils";

import {ENotificationAction, INotification, INotificationState, TNotificationAction} from "./interface";


const initialState: INotificationState = {
  notifications: [],
};

const reducer = (state: INotificationState = initialState, action: TNotificationAction): INotificationState => {
  switch (action.type) {
    case ENotificationAction.ADD_NOTIFICATION:
      return extend(state, {
        notifications: state.notifications.concat(action.payload),
      });
    case ENotificationAction.REMOVE_NOTIFICATION:
      return extend(state, {
        notifications: state.notifications.filter((notification: INotification) => notification.id !== action.payload),
      });
    case ENotificationAction.REMOVE_NOTIFICATIONS_BY_NAME:
      return extend(state, {
        notifications: state.notifications.filter((notification) => notification.name !== action.payload),
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
