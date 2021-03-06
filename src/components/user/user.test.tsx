import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import User from "./user";


configure({
  adapter: new Adapter(),
});

describe(`LogoComponent`, () => {
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
