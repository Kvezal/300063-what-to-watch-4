import * as React from "react";
import * as render from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import User from "./user";


test(`should render component`, () => {
  const tree = render
    .create(
        <MemoryRouter>
          <User
            avatar="test-avatar"
            isAuthorized={true}
          />
        </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
