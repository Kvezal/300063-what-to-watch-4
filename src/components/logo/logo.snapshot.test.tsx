import * as React from "react";
import * as render from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import Logo from "./logo";


test(`should render component`, () => {
  const tree = render
    .create(
        <MemoryRouter>
          <Logo/>
        </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
