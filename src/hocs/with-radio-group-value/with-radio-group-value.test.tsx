import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import withRadioGroupValue from "./with-radio-group-value";


configure({
  adapter: new Adapter(),
});

interface ITestComponent {
  value: string;
  onChange: (value: string) => void;
}
const TestComponent: React.FC<ITestComponent> = (props: ITestComponent) => {
  const {value, onChange} = props;
  return <React.Fragment>
    <div className="result">{value}</div>
    <input
      type="radio"
      value="1"
      onChange={(event) => onChange(event.target.value)}
    />
  </React.Fragment>;
};

const TestComponentWithHOC = withRadioGroupValue(TestComponent);

describe(`withRadioGroupValueHOC`, () => {
  test(`should call onChangeControl`, () => {
    const onChangeControl = jest.fn();
    const controlValue = `2`;
    const testComponent = mount(
        <TestComponentWithHOC defaultValue="123" onControlChange={onChangeControl}/>
    );
    const inputs = testComponent.find(`input`);
    inputs.at(0).simulate(`change`, {target: {value: controlValue}});
    expect(onChangeControl).toBeCalledTimes(1);
    expect(onChangeControl.mock.calls[0][0]).toBe(controlValue);
  });
});
