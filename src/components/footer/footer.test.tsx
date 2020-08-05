import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import Footer from "./footer";


configure({
  adapter: new Adapter(),
});

describe(`FooterComponent`, () => {

  test(`should create component`, () => {
    const footerComponent = shallow(<Footer/>);
    const footer = footerComponent.find(`footer.page-footer`);
    expect(footer).toHaveLength(1);
  });
});
