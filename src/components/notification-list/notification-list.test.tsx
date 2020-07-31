import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import {EHTTPMethod, ENotificationType} from "@store/notification/interface";

import NotificationList from "./notification-list";


configure({
  adapter: new Adapter(),
});

const notifications = [
  {
    id: `test-id-1`,
    type: ENotificationType.ERROR,
    name: `test`,
    method: EHTTPMethod.GET,
    title: `title 1`,
    text: `title 1`,
  }, {
    id: `test-id-2`,
    type: ENotificationType.ERROR,
    name: `test`,
    method: EHTTPMethod.GET,
    title: `title 2`,
    text: `title 2`,
  }, {
    id: `test-id-3`,
    type: ENotificationType.ERROR,
    name: `test`,
    method: EHTTPMethod.GET,
    title: `title 3`,
    text: `title 3`,
  }, {
    id: `test-id-4`,
    type: ENotificationType.ERROR,
    name: `test`,
    method: EHTTPMethod.GET,
    title: `title 4`,
    text: `title 4`,
  }, {
    id: `test-id-5`,
    type: ENotificationType.ERROR,
    name: `test`,
    method: EHTTPMethod.GET,
    title: `title 5`,
    text: `title 5`,
  }
];

describe(`NotificationListComponent`, () => {
  test(`should create component`, () => {
    const notificationListComponent = shallow(
        <NotificationList
          notifications={notifications}
          onCloseNotification={() => null}
          maxItems={5}
        />
    );
    const notificationList = notificationListComponent.find(`ul.notification-list`);
    expect(notificationList).toHaveLength(1);
  });

  test(`should have notifications`, () => {
    const notificationListComponent = shallow(
        <NotificationList
          notifications={notifications}
          onCloseNotification={() => null}
          maxItems={5}
        />
    );
    const notificationItems = notificationListComponent.find(`.notification-list__item`);
    expect(notificationItems).toHaveLength(notifications.length);
  });

  test(`should limit notification count`, () => {
    const maxItems = 3;
    const notificationListComponent = shallow(
        <NotificationList
          notifications={notifications}
          onCloseNotification={() => null}
          maxItems={maxItems}
        />
    );
    const notificationItems = notificationListComponent.find(`.notification-list__item`);
    expect(notificationItems).toHaveLength(maxItems);
  });

  test(`cross should be pressed`, () => {
    const onCloseNotification = jest.fn();
    const notificationListComponent = shallow(
        <NotificationList
          notifications={notifications}
          onCloseNotification={onCloseNotification}
          maxItems={5}
        />
    );
    notificationListComponent.find(`.notification-list__button`).at(0).simulate(`click`);
    expect(onCloseNotification).toBeCalledTimes(1);
  });

  test(`should have title`, () => {
    const notification = {
      id: `test-id-1`,
      type: ENotificationType.ERROR,
      name: `test`,
      method: EHTTPMethod.GET,
      title: `title 1`,
      text: `title 1`,
    };
    const notificationListComponent = shallow(
        <NotificationList
          notifications={[notification]}
          onCloseNotification={() => null}
          maxItems={1}
        />
    );
    const notificationTitle = notificationListComponent.find(`.notification-list__title`).text();
    expect(notificationTitle).toBe(notification.title);
  });

  test(`should have description`, () => {
    const notification = {
      id: `test-id-1`,
      type: ENotificationType.ERROR,
      name: `test`,
      method: EHTTPMethod.GET,
      title: `title 1`,
      text: `title 1`,
    };
    const notificationListComponent = shallow(
        <NotificationList
          notifications={[notification]}
          onCloseNotification={() => null}
          maxItems={1}
        />
    );
    const notificationText = notificationListComponent.find(`.notification-list__text`).text();
    expect(notificationText).toBe(notification.text);
  });
});
