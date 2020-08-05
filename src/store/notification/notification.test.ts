import {extend} from "@common/utils";
import {removeNotificationsByName} from "@store/notification/action-creator";
import {EHTTPMethod, ENotificationType} from "@store/notification/interface";

import {ENotificationAction} from "./interface";
import {addNotification, removeNotification, resetNotification} from "./action-creator";
import reducer from "./reducer";


const initialState = {
  notifications: [],
};

describe(`NotificationReducer`, () => {
  test(`add error notification action should return correct object`, () => {
    const notification = {
      id: `test-id`,
      type: ENotificationType.ERROR,
      name: `test`,
      method: EHTTPMethod.GET,
      title: `title`,
      text: `text`,
    };
    expect(addNotification(notification))
      .toEqual({
        type: ENotificationAction.ADD_NOTIFICATION,
        payload: notification,
      });
  });

  test(`remove notification action should return correct object`, () => {
    const notificationId = `test-id`;
    expect(removeNotification(notificationId))
      .toEqual({
        type: ENotificationAction.REMOVE_NOTIFICATION,
        payload: notificationId,
      });
  });

  test(`remove notifications by name should return correct object`, () => {
    const notificationName = `test`;
    expect(removeNotificationsByName(notificationName))
      .toEqual({
        type: ENotificationAction.REMOVE_NOTIFICATIONS_BY_NAME,
        payload: notificationName,
      });
  });

  test(`reset notifications by name should return correct object`, () => {
    expect(resetNotification())
      .toEqual({
        type: ENotificationAction.RESET_NOTIFICATIONS,
        payload: null,
      });
  });

  test(`should add new notification`, () => {
    const notification = {
      id: `test-id-1`,
      type: ENotificationType.ERROR,
      name: `test`,
      method: EHTTPMethod.GET,
      title: `title 1`,
      text: `text 1`,
    };
    const addErrorNotificationAction = {
      type: ENotificationAction.ADD_NOTIFICATION,
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
          type: ENotificationType.ERROR,
          name: `test`,
          method: EHTTPMethod.GET,
          title: `title 1`,
          text: `text 1`,
        }
      ],
    });
    const removeNotificationAction = {
      type: ENotificationAction.REMOVE_NOTIFICATION,
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
          type: ENotificationType.ERROR,
          name: `name1`,
          method: EHTTPMethod.GET,
          title: `title 1`,
          text: `text 1`,
        }, {
          id: 2,
          type: ENotificationType.ERROR,
          name: `name1`,
          method: EHTTPMethod.GET,
          title: `title 2`,
          text: `text 2`,
        }, {
          id: 3,
          type: ENotificationType.ERROR,
          name: `name2`,
          method: EHTTPMethod.GET,
          title: `title 3`,
          text: `text 3`,
        }
      ],
    });
    const removeNotificationAction = {
      type: ENotificationAction.REMOVE_NOTIFICATIONS_BY_NAME,
      payload: notificationName,
    };
    expect(reducer(state, removeNotificationAction))
      .toEqual(extend(state, {
        notifications: [{
          id: 3,
          type: ENotificationType.ERROR,
          name: `name2`,
          method: EHTTPMethod.GET,
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
          type: ENotificationType.ERROR,
          name: `test`,
          method: EHTTPMethod.GET,
          title: `title 1`,
          text: `text 1`,
        },
        {
          id: 2,
          type: ENotificationType.ERROR,
          name: `test 2`,
          method: EHTTPMethod.GET,
          title: `title 2`,
          text: `text 2`,
        }
      ],
    });
    const resetNotificationsAction = {
      type: ENotificationAction.RESET_NOTIFICATIONS,
      payload: null,
    };
    expect(reducer(state, resetNotificationsAction))
      .toEqual(extend(state, {
        notifications: [],
      }));
  });
});
