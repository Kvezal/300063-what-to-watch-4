import * as React from "react";
import * as render from "react-test-renderer";

import Rating from "./rating";


test(`should render component`, () => {
  const tree = render.create(
      <Rating
        starCount={5}
        value="2"
        name="rating"
        onChange={() => null}
      />
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
