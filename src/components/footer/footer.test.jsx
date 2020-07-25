import React from "react";
import render from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Footer from "./footer";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`FooterComponent`, () => {
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

  test(`should create component`, () => {
    const footerComponent = shallow(<Footer/>);
    const footer = footerComponent.find(`footer.page-footer`);
    expect(footer).toHaveLength(1);
  });
});
