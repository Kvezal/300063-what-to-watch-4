import * as React from "react";
import * as render from "react-test-renderer";

import {EHTTPMethod, ENotificationType} from "@store/notification/interface";

import NotificationList from "./notification-list";


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

test(`should render component`, () => {
  const tree = render.create(
      <NotificationList
        notifications={notifications}
        onCloseNotification={() => null}
        maxItems={5}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
