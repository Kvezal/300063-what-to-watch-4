import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import Logo from "./logo";


configure({
  adapter: new Adapter(),
});

describe(`LogoComponent`, () => {
  test(`should create component`, () => {
    const logoComponent = shallow(<Logo/>);
    const logo = logoComponent.find(`.logo`);
    expect(logo).toHaveLength(1);
  });
});
