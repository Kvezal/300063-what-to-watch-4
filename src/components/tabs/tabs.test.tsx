import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import Tabs from "./tabs";


configure({
  adapter: new Adapter(),
});

const tabs = [`Overview`, `Details`, `Reviews`];

describe(`TabsComponent`, () => {
  test(`should create component`, () => {
    const tabsComponent = shallow(
        <Tabs
          tabs={tabs}
          activeTab="Overview"
          baseURI={`/`}
        />
    );
    const tabsContainer = tabsComponent.find(`nav.movie-nav`);
    expect(tabsContainer).toHaveLength(1);
  });

  test(`should display tab item list`, () => {
    const tabsComponent = shallow(
        <Tabs
          tabs={tabs}
          activeTab="Overview"
          baseURI={`/`}
        />
    );
    const tabItems = tabsComponent.find(`a.movie-nav__link`);
    expect(tabItems).toHaveLength(tabs.length);
  });

  test(`link should contain correct text`, () => {
    const tabsComponent = shallow(
        <Tabs
          tabs={tabs}
          activeTab="Overview"
          baseURI={`/`}
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
          tabs={tabs}
          activeTab={tabs[activeTabIndex]}
          baseURI={`/`}
        />
    );
    const activeTabText = tabsComponent.find(`.movie-nav__item--active .movie-nav__link`).text();
    expect(activeTabText).toBe(tabs[activeTabIndex]);
  });

  test(`links should include baseURI`, () => {
    const baseURI = `/test`;
    const FilmFilterComponent = shallow(
        <Tabs
          tabs={tabs}
          activeTab="Overview"
          baseURI={baseURI}
        />
    );
    FilmFilterComponent.find(`a.movie-nav__link`).forEach((link) => {
      expect(link.props().href.includes(baseURI)).toBeTruthy();
    });
  });
});
