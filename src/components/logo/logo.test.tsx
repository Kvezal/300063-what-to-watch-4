import * as React from "react";
import * as render from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import Logo from "./logo";


configure({
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
