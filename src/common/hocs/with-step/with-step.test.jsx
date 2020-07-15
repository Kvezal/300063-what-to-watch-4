import React from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withStep from "./with-step";


Enzyme.configure({
  adapter: new Adapter(),
});

const TestComponent = (props) => {
  const {step, onStepChange} = props;
  return <div onClick={onStepChange}>{step}</div>;
};

TestComponent.propTypes = {
  step: PropTypes.number.isRequired,
  onStepChange: PropTypes.func.isRequired,
};

const TestComponentWithHOC = withStep(TestComponent);

describe(`withStepHOC`, () => {
  test(`should add step prop`, () => {
    const testComponent = mount(<TestComponentWithHOC/>);
    const step = testComponent.find(`div`).text();
    expect(step).toEqual(`1`);
  });

  test(`should increase step`, () => {
    const testComponent = mount(<TestComponentWithHOC/>);
    const div = testComponent.find(`div`);
    div.simulate(`click`);
    const step = testComponent.find(`div`).text();
    expect(step).toEqual(`2`);
  });
});
