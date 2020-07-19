import {extend} from "@common/utils";
import {HTTPMethod, NotificationType} from "@store/notification/const";

import {ActionType} from "./const";
import {addNotification, removeNotification} from "./action-creator";
import reducer from "./reducer";


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
});
