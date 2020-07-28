import {extend} from "@common/utils";
import {HTTPMethod, NotificationType} from "@store/notification/const";

import {ActionType} from "./const";
import {addNotification, removeNotification, resetNotification} from "./action-creator";
import reducer from "./reducer";
import {removeNotificationsByName} from "@store/notification/action-creator";


const initialState = {
  notifications: [],
};

describe(`NotificationReducer`, () => {
  test(`add error notification action should return correct object`, () => {
    const notification = {
      id: `test-id`,
      type: NotificationType.ERROR,
      name: `test`,
      method: HTTPMethod.GET,
      title: `title`,
      text: `text`,
    };
    expect(addNotification(notification))
      .toEqual({
        type: ActionType.ADD_NOTIFICATION,
        payload: notification,
      });
  });

  test(`remove notification action should return correct object`, () => {
    const notificationId = `test-id`;
    expect(removeNotification(notificationId))
      .toEqual({
        type: ActionType.REMOVE_NOTIFICATION,
        payload: notificationId,
      });
  });

  test(`remove notifications by name should return correct object`, () => {
    const notificationName = `test`;
    expect(removeNotificationsByName(notificationName))
      .toEqual({
        type: ActionType.REMOVE_NOTIFICATIONS_BY_NAME,
        payload: notificationName,
      });
  });

  test(`reset notifications by name should return correct object`, () => {
    expect(resetNotification())
      .toEqual({
        type: ActionType.RESET_NOTIFICATIONS,
        payload: null,
      });
  });

  test(`should return base state if action type is incorrect`, () => {
    const incorrectAction = {
      type: `test`,
      payload: null,
    };
    expect(reducer(initialState, incorrectAction)).toEqual(initialState);
  });

  test(`should add new notification`, () => {
    const notification = {
      id: `test-id-1`,
      type: NotificationType.ERROR,
      name: `test`,
      method: HTTPMethod.GET,
      title: `title 1`,
      text: `text 1`,
    };
    const addErrorNotificationAction = {
      type: ActionType.ADD_NOTIFICATION,
      payload: notification,
    };
    expect(reducer(initialState, addErrorNotificationAction))
      .toEqual(extend(initialState, {
        notifications: [notification],
      }));
  });

  test(`should remove notification`, () => {
    const notificationId = `test-id-1`;
    const state = extend(initialState, {
      notifications: [
        {
          id: notificationId,
          type: NotificationType.ERROR,
          name: `test`,
          method: HTTPMethod.GET,
          title: `title 1`,
          text: `text 1`,
        }
      ],
    });
    const removeNotificationAction = {
      type: ActionType.REMOVE_NOTIFICATION,
      payload: notificationId,
    };
    expect(reducer(state, removeNotificationAction))
      .toEqual(extend(state, {
        notifications: [],
      }));
  });

  test(`should remove notifications by name`, () => {
    const notificationName = `name1`;
    const state = extend(initialState, {
      notifications: [
        {
          id: 1,
          type: NotificationType.ERROR,
          name: `name1`,
          method: HTTPMethod.GET,
          title: `title 1`,
          text: `text 1`,
        }, {
          id: 2,
          type: NotificationType.ERROR,
          name: `name1`,
          method: HTTPMethod.GET,
          title: `title 2`,
          text: `text 2`,
        }, {
          id: 3,
          type: NotificationType.ERROR,
          name: `name2`,
          method: HTTPMethod.GET,
          title: `title 3`,
          text: `text 3`,
        }
      ],
    });
    const removeNotificationAction = {
      type: ActionType.REMOVE_NOTIFICATIONS_BY_NAME,
      payload: notificationName,
    };
    expect(reducer(state, removeNotificationAction))
      .toEqual(extend(state, {
        notifications: [{
          id: 3,
          type: NotificationType.ERROR,
          name: `name2`,
          method: HTTPMethod.GET,
          title: `title 3`,
          text: `text 3`,
        }],
      }));
  });

  test(`should reset notifications`, () => {
    const state = extend(initialState, {
      notifications: [
        {
          id: 1,
          type: NotificationType.ERROR,
          name: `test`,
          method: HTTPMethod.GET,
          title: `title 1`,
          text: `text 1`,
        },
        {
          id: 2,
          type: NotificationType.ERROR,
          name: `test 2`,
          method: HTTPMethod.GET,
          title: `title 2`,
          text: `text 2`,
        }
      ],
    });
    const resetNotificationsAction = {
      type: ActionType.RESET_NOTIFICATIONS,
      payload: null,
    };
    expect(reducer(state, resetNotificationsAction))
      .toEqual(extend(state, {
        notifications: [],
      }));
  });
});
