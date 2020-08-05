import * as render from "react-test-renderer";
import * as React from "react";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

import ENameSpace from "@store/name-space";
import withNotifications from "@hocs/with-notifications/with-notifications";


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

test(`should render component with NotificationList`, () => {
  const tree = render.create(
      <Provider store={store}>
        <TestComponentWithHOC/>
      </Provider>
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
