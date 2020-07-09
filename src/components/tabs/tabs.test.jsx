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
    {name: `Overview`, id: `overview`},
    {name: `Details`, id: `details`},
    {name: `Reviews`, id: `reviews`},
  ];

  test(`should render component`, () => {
    const tree = render
      .create(
          <Tabs
            list={tabList}
            activeTab={`overview`}
            onActiveTabChange={() => {}}
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
          onActiveTabChange={() => {}}
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
          onActiveTabChange={() => {}}
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
          onActiveTabChange={() => {}}
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
          activeTab={tabList[activeTabIndex].id}
          onActiveTabChange={() => {}}
        />
    );
    const activeTabText = tabsComponent.find(`.movie-nav__item--active .movie-nav__link`).text();
    expect(activeTabText).toBe(tabList[activeTabIndex].name);
  });

  test(`tab should be pressed`, () => {
    const onActiveTabChange = jest.fn();
    const tabsComponent = shallow(
        <Tabs
          list={tabList}
          activeTab={`overview`}
          onActiveTabChange={onActiveTabChange}
        />
    );
    const tabItems = tabsComponent.find(`a.movie-nav__link`);
    tabItems.forEach((tab) => tab.simulate(`click`));
    expect(onActiveTabChange).toHaveBeenCalledTimes(tabList.length);
  });

  test(`onActiveTabChange should have param`, () => {
    const clickedTabIndex = 2;
    const onActiveTabChange = jest.fn();
    const tabsComponent = shallow(
        <Tabs
          list={tabList}
          activeTab={`overview`}
          onActiveTabChange={onActiveTabChange}
        />
    );
    const tabItems = tabsComponent.find(`a.movie-nav__link`);
    tabItems.at(clickedTabIndex).simulate(`click`);
    expect(onActiveTabChange).toBeCalledWith(tabList[clickedTabIndex].id);
  });
});
