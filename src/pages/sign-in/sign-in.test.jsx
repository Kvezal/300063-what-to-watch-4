import React from "react";
import render from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {ErrorType} from "@store/user/const";

import SignIn from "./sign-in";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`SignInPage`, () => {
  test(`should render component`, () => {
    const tree = render.create(
      <MemoryRouter>
        <SignIn
          error={ErrorType.NONE}
          onFormSubmit={() => {}}
        />
      </MemoryRouter>,
      {createNodeMock: () => ({})}
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const signInComponent = shallow(
      <SignIn
        error={ErrorType.NONE}
        onFormSubmit={() => {}}
      />
    );
    const signIn = signInComponent.find(`.sign-in`);
    expect(signIn).toHaveLength(1);
  });

  test(`shouldn't have error message`, () => {
    const signInComponent = shallow(
      <SignIn
        error={ErrorType.NONE}
        onFormSubmit={() => {}}
      />
    );
    const signIn = signInComponent.find(`.sign-in__message.visually-hidden`);
    expect(signIn).toHaveLength(1);
  });

  test(`input shouldn't be marked if hasn't error`, () => {
    const signInComponent = shallow(
      <SignIn
        error={ErrorType.NONE}
        onFormSubmit={() => {}}
      />
    );
    const signIn = signInComponent.find(`.sign-in__field.sign-in__field--error`);
    expect(signIn).toHaveLength(0);
  });

  test(`should have error message`, () => {
    const signInComponent = shallow(
      <SignIn
        error={ErrorType.EMAIL}
        onFormSubmit={() => {}}
      />
    );
    const signIn = signInComponent.find(`.sign-in__message.visually-hidden`);
    expect(signIn).toHaveLength(0);
  });

  test(`input should be marked if has error`, () => {
    const signInComponent = shallow(
      <SignIn
        error={ErrorType.EMAIL}
        onFormSubmit={() => {}}
      />
    );
    const signIn = signInComponent.find(`.sign-in__field.sign-in__field--error`);
    expect(signIn).toHaveLength(1);
  });

  test(`form should be submitted`, () => {
    const onFormSubmit = jest.fn();
    const signInComponent = shallow(
      <SignIn
        error={ErrorType.EMAIL}
        onFormSubmit={onFormSubmit}
      />
    );
    signInComponent.instance()._emailRef = {
      current: {
        value: `email`,
      },
    };
    signInComponent.instance()._passwordRef = {
      current: {
        value: `password`,
      },
    };
    signInComponent.find(`.sign-in__form`).simulate(`submit`, {preventDefault: () => {}});
    expect(onFormSubmit).toBeCalledTimes(1);
  });
});
