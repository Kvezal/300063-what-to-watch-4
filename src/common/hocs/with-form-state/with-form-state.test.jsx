import React from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withFormState from "./with-form-state";


Enzyme.configure({
  adapter: new Adapter(),
});

const TestComponent = (props) => {
  const {formState, formDisabled, onControlChange, onDisabledChange} = props;
  const {checkbox, comment} = formState;
  return <form
    onChange={(event) => {
      const isValidForm = event.currentTarget.checkValidity();
      onDisabledChange(!isValidForm);
    }}
  >
    <input
      type="checkbox"
      onChange={(event) => onControlChange(`checkbox`, event.target.checked)}
      checked={checkbox}
    />
    <input
      type="text"
      minLength="5"
      required
      onChange={(event) => onControlChange(`comment`, event.target.value)}
      value={comment}
    />
    <button
      type="submit"
      disabled={formDisabled}
    />
  </form>;
};

TestComponent.propTypes = {
  formState: PropTypes.shape({
    checkbox: PropTypes.bool,
    comment: PropTypes.string,
  }).isRequired,
  formDisabled: PropTypes.bool.isRequired,
  onControlChange: PropTypes.func.isRequired,
  onDisabledChange: PropTypes.func.isRequired,
};

const TestComponentWithHOC = withFormState(TestComponent);

describe(`withFormStateHOC`, () => {
  test(`should set formState`, () => {
    const testComponent = mount(
      <TestComponentWithHOC
        initialFormState={{
          checkbox: false,
          comment: ``,
        }}
        formDisabled={true}
      />
    );
    testComponent.find(`input[type="checkbox"]`).simulate(`change`, {
      target: {
        checked: true,
      }
    });
    expect(testComponent.state().formState.checkbox).toBeTruthy();

    testComponent.find(`input[type="text"]`).simulate(`change`, {
      target: {
        value: `test`,
      }
    });
    expect(testComponent.state().formState.comment).toBe(`test`);
  });

  test(`should disabled form`, () => {
    const testComponent = mount(
      <TestComponentWithHOC
        initialFormState={{
          checkbox: false,
          comment: `test`,
        }}
        formDisabled={true}
      />
    );
    jest.spyOn(HTMLFormElement.prototype, `checkValidity`).mockImplementation(() => true);
    testComponent.find(`form`).simulate(`change`);
    expect(testComponent.state().formDisabled).toBeFalsy();

    jest.spyOn(HTMLFormElement.prototype, `checkValidity`).mockImplementation(() => false);
    testComponent.find(`form`).simulate(`change`);
    expect(testComponent.state().formDisabled).toBeTruthy();
  });
});
