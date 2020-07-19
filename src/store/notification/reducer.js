import {extend} from "@common/utils";

import {ActionType} from "./const";


const initialState = {
  notifications: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_NOTIFICATION:
      const notifications = state.notifications.slice();
      notifications.push(action.payload);
      return extend(state, {
        notifications,
      });
    case ActionType.REMOVE_NOTIFICATION:
      const filteredNotifications = state.notifications.slice()
        .filter((notification) => notification.id !== action.payload);
      return extend(state, {
        notifications: filteredNotifications,
      });
    default:
      return state;
  }
};

export default reducer;
