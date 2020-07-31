import * as React from "react";
import * as render from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import Footer from "./footer";


test(`should render component`, () => {
  const tree = render
    .create(
        <MemoryRouter>
          <Footer/>
        </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
