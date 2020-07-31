import * as React from "react";
import * as render from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import Breadcrumbs from "./breadcrumbs";


const breadcrumbs = [
  {name: `name-1`, href: `href-1`},
  {name: `name-2`, href: `href-2`},
  {name: `name-3`},
];

test(`should render component`, () => {
  const tree = render.create(
      <MemoryRouter>
        <Breadcrumbs
          list={breadcrumbs}
        />
      </MemoryRouter>
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
