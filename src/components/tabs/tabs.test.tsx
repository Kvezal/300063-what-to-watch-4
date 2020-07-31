import * as React from "react";
import * as render from "react-test-renderer";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import Tabs from "./tabs";


configure({
  adapter: new Adapter(),
});

describe(`TabsComponent`, () => {
  const tabs = [`Overview`, `Details`, `Reviews`];

  test(`should render component`, () => {
    const tree = render
      .create(
          <Tabs
            list={tabs}
            activeTab="Overview"
            onActiveTabChange={() => null}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const tabsComponent = shallow(
        <Tabs
          list={tabs}
          activeTab="Overview"
          onActiveTabChange={() => null}
        />
    );
    const tabsContainer = tabsComponent.find(`nav.movie-nav`);
    expect(tabsContainer).toHaveLength(1);
  });

  test(`should display tab item list`, () => {
    const tabsComponent = shallow(
        <Tabs
          list={tabs}
          activeTab="Overview"
          onActiveTabChange={() => null}
        />
    );
    const tabItems = tabsComponent.find(`a.movie-nav__link`);
    expect(tabItems).toHaveLength(tabs.length);
  });

  test(`link should contain correct text`, () => {
    const tabsComponent = shallow(
        <Tabs
          list={tabs}
          activeTab="Overview"
          onActiveTabChange={() => null}
        />
    );
    const tabItems = tabsComponent.find(`a.movie-nav__link`);
    tabs.forEach((item: string, index: number) => {
      expect(tabItems.at(index).text()).toBe(item);
    });
  });

  test(`should have active tab`, () => {
    const activeTabIndex = 1;

    const tabsComponent = shallow(
        <Tabs
          list={tabs}
          activeTab={tabs[activeTabIndex]}
          onActiveTabChange={() => null}
        />
    );
    const activeTabText = tabsComponent.find(`.movie-nav__item--active .movie-nav__link`).text();
    expect(activeTabText).toBe(tabs[activeTabIndex]);
  });

  test(`tab should be pressed`, () => {
    const onActiveTabChange = jest.fn();
    const tabsComponent = shallow(
        <Tabs
          list={tabs}
          activeTab="Overview"
          onActiveTabChange={onActiveTabChange}
        />
    );
    const tabItems = tabsComponent.find(`a.movie-nav__link`);
    tabItems.forEach((tab) => tab.simulate(`click`));
    expect(onActiveTabChange).toHaveBeenCalledTimes(tabs.length);
  });

  test(`onActiveTabChange should have param`, () => {
    const clickedTabIndex = 2;
    const onActiveTabChange = jest.fn();
    const tabsComponent = shallow(
        <Tabs
          list={tabs}
          activeTab="Overview"
          onActiveTabChange={onActiveTabChange}
        />
    );
    const tabItems = tabsComponent.find(`a.movie-nav__link`);
    tabItems.at(clickedTabIndex).simulate(`click`);
    expect(onActiveTabChange).toBeCalledWith(tabs[clickedTabIndex]);
  });
});
