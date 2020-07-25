import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withStep from "./with-step";


Enzyme.configure({
  adapter: new Adapter(),
});

const TestComponent = (props) => {
  const {step, onStepChange, onStepReset} = props;
  return <Fragment>
    <div>{step}</div>;
    <button className="increase" onClick={onStepChange}/>
    <button className="reset" onClick={onStepReset}/>
  </Fragment>
};

TestComponent.propTypes = {
  step: PropTypes.number.isRequired,
  onStepChange: PropTypes.func.isRequired,
  onStepReset: PropTypes.func.isRequired,
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
    testComponent.find(`button.increase`).simulate(`click`);
    const step = testComponent.find(`div`).text();
    expect(step).toEqual(`2`);
  });

  test(`should reset step`, () => {
    const testComponent = mount(<TestComponentWithHOC/>);
    const increaseButton = testComponent.find(`button.increase`);
    increaseButton.simulate(`click`);
    increaseButton.simulate(`click`);
    increaseButton.simulate(`click`);
    expect(testComponent.find(`div`).text())
      .toEqual(`4`);
    testComponent.find(`button.reset`).simulate(`click`);
    expect(testComponent.find(`div`).text())
      .toEqual(`1`);
  });
});
