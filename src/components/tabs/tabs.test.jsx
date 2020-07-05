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
            activeTab={`overview`}
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
          activeTab={`overview`}
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
          activeTab={`overview`}
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
          activeTab={`overview`}
          onTabClick={() => {}}
        />
    );
    const tabItems = tabsComponent.find(`a.movie-nav__link`);
    tabList.forEach((item, index) => {
      expect(tabItems.at(index).text()).toBe(item.name);
    });
  });

  test(`should have active tab`, () => {
    const activeTabIndex = 1;

    const tabsComponent = shallow(
        <Tabs
          list={tabList}
          activeTab={tabList[activeTabIndex].href}
          onTabClick={() => {}}
        />
    );
    const activeTabText = tabsComponent.find(`.movie-nav__item--active .movie-nav__link`).text();
    expect(activeTabText).toBe(tabList[activeTabIndex].name);
  });

  test(`tab should be pressed`, () => {
    const onTabClick = jest.fn();
    const tabsComponent = shallow(
        <Tabs
          list={tabList}
          activeTab={`overview`}
          onTabClick={onTabClick}
        />
    );
    const tabItems = tabsComponent.find(`a.movie-nav__link`);
    tabItems.forEach((tab) => tab.simulate(`click`));
    expect(onTabClick).toHaveBeenCalledTimes(tabList.length);
  });

  test(`onTabClick should have param`, () => {
    const clickedTabIndex = 2;
    const onTabClick = jest.fn();
    const tabsComponent = shallow(
        <Tabs
          list={tabList}
          activeTab={`overview`}
          onTabClick={onTabClick}
        />
    );
    const tabItems = tabsComponent.find(`a.movie-nav__link`);
    tabItems.at(clickedTabIndex).simulate(`click`);
    expect(onTabClick).toBeCalledWith(tabList[clickedTabIndex].href);
  });
});
