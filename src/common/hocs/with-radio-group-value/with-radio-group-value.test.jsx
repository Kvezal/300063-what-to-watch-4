import React, {createRef, Fragment} from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withRadioGroupValue from "./with-radio-group-value";


Enzyme.configure({
  adapter: new Adapter(),
});

const TestComponent = (props) => {
  const {value, onChange} = props;
  return <Fragment>
    <div className="result">{value}</div>
    <input type="radio" value="1" onChange={(event) => {
      onChange(event.target.value)
    }}/>
  </Fragment>;
};

TestComponent.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const TestComponentWithHOC = withRadioGroupValue(TestComponent);

describe(`withRadioGroupValueHOC`, () => {
  test(`should change ref value`, () => {
    const ref = createRef();
    const testComponent = mount(
        <TestComponentWithHOC ref={ref} defaultValue="123" onControlChange={() => {}}/>
    );
    const inputs = testComponent.find(`input`);
    inputs.at(0).simulate(`change`, {target: {value: `2`}});
    expect(ref.current.value).toBe(`2`);
  });

  test(`should call onChangeControl`, () => {
    const onChangeControl = jest.fn();
    const ref = createRef();
    const controlValue = `2`;
    const testComponent = mount(
        <TestComponentWithHOC ref={ref} defaultValue="123" onControlChange={onChangeControl}/>
    );
    const inputs = testComponent.find(`input`);
    inputs.at(0).simulate(`change`, {target: {value: controlValue}});
    expect(onChangeControl).toBeCalledTimes(1);
    expect(onChangeControl.mock.calls[0][0]).toBe(controlValue)
  });
});
