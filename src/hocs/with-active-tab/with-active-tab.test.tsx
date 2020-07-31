import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {Route, Router} from "react-router-dom";

import history from "@app/history";

import withActiveTab from "./with-active-tab";


configure({
  adapter: new Adapter(),
});

interface ITestComponent {
  list: string[];
  activeTab: string;
  onActiveTabChange: (tab: string) => void;
}
const TestComponent: React.FC<ITestComponent> = (props: ITestComponent) => {
  const {activeTab, onActiveTabChange, list} = props;
  return <React.Fragment>
    {list.map((tab: string) => <div
      key={tab}
      onClick={() => onActiveTabChange(tab)}
      className={`test ${tab === activeTab ? `active` : ``}`}
    >{tab}</div>)}
  </React.Fragment>;
};

const TestComponentWithHOC = withActiveTab(TestComponent);

describe(`withActiveTab`, () => {
  const tabs = [`Overview`, `Details`, `Reviews`];

  test(`should set active tab`, () => {
    const testComponent = mount(
        <Router history={history} initialEntries={[`/`]}>
          <Route path="/" render={(props) =>
            <TestComponentWithHOC
              list={tabs}
              activeTab={tabs[1]}
              {...props}
            />
          }/>
        </Router>
    );
    const activeTabText = testComponent.find(`div.active`).text();
    expect(activeTabText).toBe(tabs[1]);
  });

  test(`should change active tab`, () => {
    const testComponent = mount(
        <Router history={history} initialEntries={[`/`]}>
          <Route path="/" render={(props) =>
            <TestComponentWithHOC
              list={tabs}
              activeTab={tabs[1]}
              {...props}
            />
          }/>
        </Router>
    );
    const activeTabs = testComponent.find(`div.test`);
    activeTabs.at(2).simulate(`click`);
    expect(testComponent.find(`div.active`).text()).toBe(tabs[2]);

    activeTabs.at(0).simulate(`click`);
    expect(testComponent.find(`div.active`).text()).toBe(tabs[0]);

    activeTabs.at(1).simulate(`click`);
    expect(testComponent.find(`div.active`).text()).toBe(tabs[1]);
  });

  test(`hash should set active tab`, () => {
    const testComponent = mount(
        <TestComponentWithHOC
          list={tabs}
          activeTab={tabs[1]}
          location={{hash: `#${tabs[0]}`}}
        />
    );
    expect(testComponent.find(`div.active`).text()).toBe(tabs[0]);
  });
});
