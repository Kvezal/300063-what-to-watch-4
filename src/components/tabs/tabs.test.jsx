import React from "react";
import render from "react-test-renderer";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Tabs from "./tabs";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`TabsComponent`, () => {
  const tabList = [
    {name: `Overview`, href: `overview`},
    {name: `Details`, href: `details`},
    {name: `Reviews`, href: `reviews`},
  ];

  test(`should render component`, () => {
    const tree = render
      .create(
          <Tabs
            list={tabList}
            activeTab={`Overview`}
            onTabClick={() => {}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const tabsComponent = shallow(
        <Tabs
          list={tabList}
          activeTab={`Overview`}
          onTabClick={() => {}}
        />
    );
    const tabsContainer = tabsComponent.find(`nav.movie-nav`);
    expect(tabsContainer).toHaveLength(1);
  });

  test(`should display tab item list`, () => {
    const tabsComponent = shallow(
        <Tabs
          list={tabList}
          activeTab={`Overview`}
          onTabClick={() => {}}
        />
    );
    const tabItems = tabsComponent.find(`a.movie-nav__link`);
    expect(tabItems).toHaveLength(tabList.length);
  });

  test(`link should contain correct text`, () => {
    const tabsComponent = shallow(
        <Tabs
          list={tabList}
          activeTab={`Overview`}
          onTabClick={() => {}}
        />
    );
    const tabItems = tabsComponent.find(`a.movie-nav__link`);
    tabList.forEach((item, index) => {
      expect(tabItems.at(index).text()).toBe(item.name);
    });
  });
});
