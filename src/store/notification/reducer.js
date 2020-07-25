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
      return extend(state, {
        notifications: state.notifications.slice()
          .filter((notification) => notification.id !== action.payload),
      });
    case ActionType.REMOVE_NOTIFICATIONS_BY_NAME:
      return extend(state, {
        notifications: state.notifications.slice()
          .filter((notification) => notification.name !== action.payload),
      });
    default:
      return state;
  }
};

export default reducer;
