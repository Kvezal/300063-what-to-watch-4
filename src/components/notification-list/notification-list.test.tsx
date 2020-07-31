import * as React from "react";
import * as render from "react-test-renderer";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import NotificationList from "./notification-list";
import {EHTTPMethod, ENotificationType} from "@store/notification/interface";


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
  test(`should render component`, () => {
    const tree = render.create(
        <NotificationList
          list={notifications}
          onCloseNotification={() => null}
          maxItems={5}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const notificationListComponent = shallow(
        <NotificationList
          list={notifications}
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
          list={notifications}
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
          list={notifications}
          onCloseNotification={() => null}
          maxItems={maxItems}
        />
    );
    const notificationItems = notificationListComponent.find(`.notification-list__item`);
    expect(notificationItems).toHaveLength(maxItems);
  });
});
