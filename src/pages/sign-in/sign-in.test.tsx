import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import {EHTTPMethod, ENotificationType} from "@store/notification/interface";
import {EAuthorizationStatus, EUserErrorNotificationName} from "@store/user/interface";

import SignIn from "./sign-in";


configure({
  adapter: new Adapter(),
});

const errors = [{
  id: `test-id-1`,
  type: ENotificationType.ERROR,
  name: EUserErrorNotificationName.EMAIL,
  method: EHTTPMethod.GET,
  title: `title`,
  text: `text`,
}];

describe(`SignInPage`, () => {
  test(`should create component`, () => {
    const signInComponent = shallow(
        <SignIn
          errors={[]}
          onFormSubmit={() => null}
          formState={{
            email: ``,
            password: ``,
          }}
          onControlChange={() => null}
          authorizationStatus={EAuthorizationStatus.NO_AUTH}
        />
    );
    const signIn = signInComponent.find(`.sign-in`);
    expect(signIn).toHaveLength(1);
  });

  test(`shouldn't have error message`, () => {
    const signInComponent = shallow(
        <SignIn
          errors={[]}
          onFormSubmit={() => null}
          formState={{
            email: ``,
            password: ``,
          }}
          onControlChange={() => null}
          authorizationStatus={EAuthorizationStatus.NO_AUTH}
        />
    );
    const signIn = signInComponent.find(`.sign-in__message.visually-hidden`);
    expect(signIn).toHaveLength(1);
  });

  test(`input shouldn't be marked if hasn't error`, () => {
    const signInComponent = shallow(
        <SignIn
          errors={[]}
          onFormSubmit={() => null}
          formState={{
            email: ``,
            password: ``,
          }}
          onControlChange={() => null}
          authorizationStatus={EAuthorizationStatus.NO_AUTH}
        />
    );
    const signIn = signInComponent.find(`.sign-in__field.sign-in__field--error`);
    expect(signIn).toHaveLength(0);
  });

  test(`should have error message`, () => {
    const signInComponent = shallow(
        <SignIn
          errors={errors}
          onFormSubmit={() => null}
          formState={{
            email: ``,
            password: ``,
          }}
          onControlChange={() => null}
          authorizationStatus={EAuthorizationStatus.NO_AUTH}
        />
    );
    const signIn = signInComponent.find(`.sign-in__message.visually-hidden`);
    expect(signIn).toHaveLength(0);
  });

  test(`input should be marked if has error`, () => {
    const signInComponent = shallow(
        <SignIn
          errors={errors}
          onFormSubmit={() => null}
          formState={{
            email: ``,
            password: ``,
          }}
          onControlChange={() => null}
          authorizationStatus={EAuthorizationStatus.NO_AUTH}
        />
    );
    const signIn = signInComponent.find(`.sign-in__field.sign-in__field--error`);
    expect(signIn).toHaveLength(1);
  });

  test(`form should be submitted`, () => {
    const onFormSubmit = jest.fn();
    const formState = {
      email: `test-email`,
      password: `test-password`,
    };
    const signInComponent = shallow(
        <SignIn
          errors={[]}
          onFormSubmit={onFormSubmit}
          formState={formState}
          onControlChange={() => null}
          authorizationStatus={EAuthorizationStatus.NO_AUTH}
        />
    );
    signInComponent.find(`.sign-in__form`).simulate(`submit`, {preventDefault: () => null});
    expect(onFormSubmit).toBeCalledTimes(1);
    expect(onFormSubmit).toHaveBeenCalledWith(formState);
  });
});
