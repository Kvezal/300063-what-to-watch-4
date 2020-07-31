import * as React from "react";
import * as render from "react-test-renderer";

import Tabs from "./tabs";


const tabs = [`Overview`, `Details`, `Reviews`];

test(`should render component`, () => {
  const tree = render
    .create(
        <Tabs
          list={tabs}
          activeTab="Overview"
          onActiveTabChange={() => null}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
