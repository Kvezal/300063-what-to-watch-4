import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import withFormState from "./with-form-state";


configure({
  adapter: new Adapter(),
});

interface ITestComponent {
  formState: {
    checkbox: boolean;
    comment: string;
  };
  formDisabled: boolean;
  onControlChange: (fieldName: string, value: string | boolean) => void;
  onDisabledChange: (isDisabled: boolean) => void;
}
const TestComponent: React.FC<ITestComponent> = (props: ITestComponent) => {
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
      minLength={5}
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
