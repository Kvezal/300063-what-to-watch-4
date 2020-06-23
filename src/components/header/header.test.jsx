import React from "react";
import render from "react-test-renderer";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Header from "./header";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`HeaderComponent`, () => {
  const avatar = `avatar.jpg`;

  test(`should render component`, () => {
    const tree = render
      .create()
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const headerComponent = shallow(<Header avatar={avatar}/>);
    const header = headerComponent.find(`header.page-header`);
    expect(header).toHaveLength(1);
  });

  test(`should have h1`, () => {
    const headerComponent = shallow(<Header avatar={avatar}/>);
    const h1 = headerComponent.find(`h1`);
    expect(h1).toHaveLength(1);
  });

  test(`should have user block`, () => {
    const headerComponent = shallow(<Header avatar={avatar}/>);
    const userBlock = headerComponent.find(`.user-block`);
    expect(userBlock).toHaveLength(1);
  });

  test(`user avatar should match`, () => {
    const headerComponent = shallow(<Header avatar={avatar}/>);
    const avatarSource = headerComponent.find(`.user-block img`).props().src;
    expect(avatarSource.includes(avatar)).toBeTruthy();
  });
});
