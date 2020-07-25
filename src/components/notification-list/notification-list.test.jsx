import React from "react";
import render from "react-test-renderer";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NotificationList from "./notification-list";


Enzyme.configure({
  adapter: new Adapter(),
});

const notifications = [
  {
    id: `test-id-1`,
    type: `error`,
    title: `title 1`,
    text: `text 1`,
    httpCode: 500,
  }, {
    id: `test-id-2`,
    type: `error`,
    title: `title 2`,
    text: `text 2`,
    httpCode: 500,
  }, {
    id: `test-id-3`,
    type: `error`,
    title: `title 3`,
    text: `text 3`,
    httpCode: 500,
  }, {
    id: `test-id-4`,
    type: `error`,
    title: `title 4`,
    text: `text 4`,
    httpCode: 500,
  }, {
    id: `test-id-5`,
    type: `error`,
    title: `title 5`,
    text: `text 5`,
    httpCode: 500,
  }
];

describe(`NotificationListComponent`, () => {
  test(`should render component`, () => {
    const tree = render.create(
        <NotificationList
          list={notifications}
          onCloseNotification={() => {}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const notificationListComponent = shallow(
      <NotificationList
        list={notifications}
        onCloseNotification={() => {}}
      />
    );
    const notificationList = notificationListComponent.find(`ul.notification-list`);
    expect(notificationList).toHaveLength(1);
  });

  test(`should have notifications`, () => {
    const notificationListComponent = shallow(
      <NotificationList
        list={notifications}
        onCloseNotification={() => {}}
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
        onCloseNotification={() => {}}
        maxItems={maxItems}
      />
    );
    const notificationItems = notificationListComponent.find(`.notification-list__item`);
    expect(notificationItems).toHaveLength(maxItems);
  });
});
