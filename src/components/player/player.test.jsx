import React from "react";
import render from "react-test-renderer";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Player from "./player";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`PlayerComponent`, () => {
  test(`should render component`, () => {
    const tree = render
      .create(
          <Player>
            <video/>
          </Player>,
          {createNodeMock: () => ({})}
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
