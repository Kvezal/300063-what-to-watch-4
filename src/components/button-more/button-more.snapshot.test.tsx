import * as React from "react";
import * as render from "react-test-renderer";

import ButtonMore from "./button-more";


test(`should render component`, () => {
  const tree = render
    .create(
        <ButtonMore
          hide={false}
          onButtonClick={() => null}
        >Test</ButtonMore>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
