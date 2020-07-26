import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Router, Route} from "react-router-dom";

import history from "@app/history";

import withActiveTab from "./with-active-tab";


const TestComponent = (props) => {
  const {activeTab, onActiveTabChange, list} = props;
  return <Fragment>
    {list.map((item) => <div
      key={item.id}
      onClick={() => onActiveTabChange(item.id)}
      className={`test ${item.id === activeTab ? `active` : ``}`}
    >{item.name}</div>)}
  </Fragment>;
};

TestComponent.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onActiveTabChange: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
      })
  ).isRequired
};

const TestComponentWithHOC = withActiveTab(TestComponent);

Enzyme.configure({
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
        <Router history={history} initialEntries={['/']}>
          <Route path="/" render={(props) => {
            return <TestComponentWithHOC
              list={tabs}
              activeTab={tabs[1].id}
              {...props}
            />
          }}/>
        </Router>
    );
    const activeTabText = testComponent.find(`div.active`).text();
    expect(activeTabText).toBe(tabs[1].name);
  });

  test(`should change active tab`, () => {
    const testComponent = mount(
        <Router history={history} initialEntries={['/']}>
          <Route path="/" render={(props) => {
            return <TestComponentWithHOC
              list={tabs}
              activeTab={tabs[1].id}
              {...props}
            />
          }}/>
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
