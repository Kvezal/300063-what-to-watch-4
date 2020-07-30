import React from "react";
import render from "react-test-renderer";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

import ENameSpace from "@store/name-space";

import withNotifications from "./with-notifications";


const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

const TestComponent = () => {
  return <div className="test-component"/>;
};

const TestComponentWithHOC = withNotifications(TestComponent);

describe(`withNotificationsHOC`, () => {
  const store = mockStore({
    [ENameSpace.NOTIFICATION]: {
      notifications: [],
    },
  });
  test(`should render component with NotificationList`, () => {
    const tree = render.create(
        <Provider store={store}>
          <TestComponentWithHOC/>
        </Provider>
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

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
