import React from "react";
import PropTypes from "prop-types";
import render from "react-test-renderer";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withLoading from "./with-loading";


Enzyme.configure({
  adapter: new Adapter(),
});

const TestComponent = () => {
  return <div className="test-component"/>;
};

TestComponent.propTypes = {
  propString: PropTypes.string,
  prop: PropTypes.string,
};

const TestComponentWithHOC = withLoading(TestComponent);

describe(`withLoadingHOC`, () => {
  test(`shouldn't create component`, () => {
    const testComponent = mount(
        <TestComponentWithHOC
          prop={null}
          unlessProp={null}
          loadingParams={[`prop`]}
        />
    );
    expect(testComponent.find(`div.test-component`)).toHaveLength(0);
  });

  test(`should create component`, () => {
    const testComponent = mount(
      <TestComponentWithHOC
        prop=""
        unlessProp={null}
        loadingParams={[`prop`]}
      />
    );
    expect(testComponent.find(`div.test-component`)).toHaveLength(1);
  });
});
