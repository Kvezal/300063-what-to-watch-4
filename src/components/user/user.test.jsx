import React from "react";
import render from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import User from "./user";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`LogoComponent`, () => {
  test(`should render component`, () => {
    const tree = render
      .create(
          <MemoryRouter>
            <User
              avatar="test-avatar"
              isAuthorized={true}
            />
          </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const logoComponent = shallow(
        <User
          avatar="test-avatar"
          isAuthorized={true}
        />
    );
    const user = logoComponent.find(`.user-block`);
    expect(user).toHaveLength(1);
  });

  test(`should display user avatar if isAuthorized flag equals "true"`, () => {
    const logoComponent = shallow(
        <User
          avatar="test-avatar"
          isAuthorized={true}
        />
    );
    const avatar = logoComponent.find(`.user-block__avatar`);
    expect(avatar).toHaveLength(1);
  });

  test(`shouldn't display "sign in" if isAuthorized flag equals "true"`, () => {
    const logoComponent = shallow(
        <User
          avatar="test-avatar"
          isAuthorized={true}
        />
    );
    const link = logoComponent.find(`.user-block__link`);
    expect(link).toHaveLength(0);
  });


  test(`shouldn't display user avatar if isAuthorized flag equals "false"`, () => {
    const logoComponent = shallow(
        <User
          avatar="test-avatar"
          isAuthorized={false}
        />
    );
    const avatar = logoComponent.find(`.user-block__avatar`);
    expect(avatar).toHaveLength(0);
  });

  test(`should display "sign in" if isAuthorized flag equals "false"`, () => {
    const logoComponent = shallow(
        <User
          avatar="test-avatar"
          isAuthorized={false}
        />
    );
    const link = logoComponent.find(`.user-block__link`);
    expect(link).toHaveLength(1);
  });
});
