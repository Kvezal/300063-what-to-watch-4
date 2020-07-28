import React from "react";
import render from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Logo from "./logo";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`LogoComponent`, () => {
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

  test(`should create component`, () => {
    const logoComponent = shallow(<Logo/>);
    const logo = logoComponent.find(`.logo`);
    expect(logo).toHaveLength(1);
  });
});
