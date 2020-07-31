import * as React from "react";
import {configure, shallow, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import withActiveFlag from "./with-active-flag";


configure({
  adapter: new Adapter(),
});

interface TestComponent {
  isActive: boolean;
  onActiveChange: () => void;
}
const TestComponent: React.FC<TestComponent> = (props: TestComponent) => {
  const {onActiveChange} = props;
  return <button onClick={onActiveChange}/>;
};

const TestComponentWithHOC = withActiveFlag(TestComponent);

describe(`withActiveFlag`, () => {
  test(`isActive should be false`, () => {
    const testComponent = shallow(<TestComponentWithHOC/>);
    const isActiveFlag = testComponent.state().isActive;
    expect(isActiveFlag).toBeFalsy();
  });

  test(`isActive should be true`, () => {
    const testComponent = shallow(<TestComponentWithHOC isActive={true}/>);
    const isActiveFlag = testComponent.state().isActive;
    expect(isActiveFlag).toBeTruthy();
  });

  test(`should activate`, () => {
    const isActivatedBeforeClick = true;
    const testComponent = mount(<TestComponentWithHOC isActive={isActivatedBeforeClick}/>);
    const button = testComponent.find(`button`);
    button.simulate(`click`);
    const isActivatedAfterClick = testComponent.state().isActive;
    expect(isActivatedAfterClick !== isActivatedBeforeClick).toBeTruthy();
    expect(isActivatedAfterClick).toBeFalsy();
  });

  test(`should deactivate`, () => {
    const isActivatedBeforeClick = false;
    const testComponent = mount(<TestComponentWithHOC isActive={isActivatedBeforeClick}/>
    );
    const button = testComponent.find(`button`);
    button.simulate(`click`);
    const isActivatedAfterClick = testComponent.state().isActive;
    expect(isActivatedAfterClick !== isActivatedBeforeClick).toBeTruthy();
    expect(isActivatedAfterClick).toBeTruthy();
  });
});
