import * as React from "react";
import * as render from "react-test-renderer";

import FilmFilter from "./film-filter";


const filterList = [`Documentary`, `Dramas`, `Horror`];

test(`should render component`, () => {
  const tree = render
    .create(
        <FilmFilter
          tabs={filterList}
          onItemClick={() => null}
          activeItem={filterList[0]}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
