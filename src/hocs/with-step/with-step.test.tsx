import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import withStep from "./with-step";


configure({
  adapter: new Adapter(),
});

interface ITestComponent {
  step: number;
  onStepChange: () => void;
  onStepReset: () => void;
}
const TestComponent: React.FC<ITestComponent> = (props: ITestComponent) => {
  const {step, onStepChange, onStepReset} = props;
  return <React.Fragment>
    <div>{step}</div>
    <button className="increase" onClick={onStepChange}/>
    <button className="reset" onClick={onStepReset}/>
  </React.Fragment>;
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
