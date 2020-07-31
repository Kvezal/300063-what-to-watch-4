import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {Router, Route} from "react-router-dom";

import history from "@app/history";
import {ITab} from "@components/tabs/interface";

import withActiveTab from "./with-active-tab";


interface ITestComponent {
  list: ITab[];
  activeTab: string;
  onActiveTabChange: (tabId: string) => void;
}
const TestComponent: React.FC<ITestComponent> = (props: ITestComponent) => {
  const {activeTab, onActiveTabChange, list} = props;
  return <React.Fragment>
    {list.map((item) => <div
      key={item.id}
      onClick={() => onActiveTabChange(item.id)}
      className={`test ${item.id === activeTab ? `active` : ``}`}
    >{item.name}</div>)}
  </React.Fragment>;
};

const TestComponentWithHOC = withActiveTab(TestComponent);

configure({
  adapter: new Adapter(),
});

describe(`withActiveTab`, () => {
  const tabs = [
    {name: `Overview`, id: `overview`},
    {name: `Details`, id: `details`},
    {name: `Reviews`, id: `reviews`},
  ];

  test(`should set active tab`, () => {
    const testComponent = mount(
        <Router history={history} initialEntries={[`/`]}>
          <Route path="/" render={(props) =>
            <TestComponentWithHOC
              list={tabs}
              activeTab={tabs[1].id}
              {...props}
            />
          }/>
        </Router>
    );
    const activeTabText = testComponent.find(`div.active`).text();
    expect(activeTabText).toBe(tabs[1].name);
  });

  test(`should change active tab`, () => {
    const testComponent = mount(
        <Router history={history} initialEntries={[`/`]}>
          <Route path="/" render={(props) =>
            <TestComponentWithHOC
              list={tabs}
              activeTab={tabs[1].id}
              {...props}
            />
          }/>
        </Router>
    );
    const activeTabs = testComponent.find(`div.test`);
    activeTabs.at(2).simulate(`click`);
    expect(testComponent.find(`div.active`).text()).toBe(tabs[2].name);

    activeTabs.at(0).simulate(`click`);
    expect(testComponent.find(`div.active`).text()).toBe(tabs[0].name);

    activeTabs.at(1).simulate(`click`);
    expect(testComponent.find(`div.active`).text()).toBe(tabs[1].name);
  });

  test(`hash should set active tab`, () => {
    const testComponent = mount(
        <TestComponentWithHOC
          list={tabs}
          activeTab={tabs[1].id}
          location={{hash: `#${tabs[0].id}`}}
        />
    );
    expect(testComponent.find(`div.active`).text()).toBe(tabs[0].name);
  });
});
