import React from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withTabs from "./with-tabs";


Enzyme.configure({
  adapter: new Adapter(),
});

const TestComponent = (props) => {
  const {renderTabs} = props;

  const tabList = [
    {name: `Overview`, href: `overview`},
    {name: `Details`, href: `details`},
    {name: `Reviews`, href: `reviews`},
  ];

  return <div>
    {renderTabs(tabList)}
  </div>;
};

TestComponent.propTypes = {
  renderTabs: PropTypes.func.isRequired,
};

const TestComponentWithHOC = withTabs(TestComponent);

describe(`withTabsHOC`, () => {
  test(`should add tabs`, () => {
    const testComponent = mount(
        <TestComponentWithHOC
          baseTab="overview"
        />
    );
    const tabsContainer = testComponent.find(`nav.movie-nav`);
    expect(tabsContainer).toHaveLength(1);
  });
});
