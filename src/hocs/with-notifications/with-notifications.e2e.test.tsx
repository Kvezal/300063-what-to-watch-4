import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

import ENameSpace from "@store/name-space";

import withNotifications from "./with-notifications";


configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

const store = mockStore({
  [ENameSpace.NOTIFICATION]: {
    notifications: [],
  },
});

const TestComponent = () => {
  return <div className="test-component"/>;
};

const TestComponentWithHOC = withNotifications(TestComponent);

describe(`withNotificationsHOC`, () => {
  test(`should have base component`, () => {
    const testComponent = mount(
        <Provider store={store}>
          <TestComponentWithHOC/>
        </Provider>
    );
    const div = testComponent.find(`div.test-component`);
    expect(div).toHaveLength(1);
  });

  test(`should have NotificationList`, () => {
    const testComponent = mount(
        <Provider store={store}>
          <TestComponentWithHOC/>
        </Provider>
    );
    const notificationList = testComponent.find(`ul.notification-list`);
    expect(notificationList).toHaveLength(1);
  });
});
