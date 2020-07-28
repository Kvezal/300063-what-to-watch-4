import React from "react";
import render from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {HTTPMethod, NotificationType} from "@store/notification/const";
import {AuthorizationStatus, UserErrorNotificationName} from "@store/user/const";

import SignIn from "./sign-in";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`SignInPage`, () => {
  const errors = [{
    id: `test-id-1`,
    type: NotificationType.ERROR,
    name: UserErrorNotificationName.EMAIL,
    method: HTTPMethod.GET,
    title: `title`,
    text: `text`,
  }];

  test(`should render component`, () => {
    const tree = render.create(
        <MemoryRouter>
          <SignIn
            errors={[]}
            onFormSubmit={() => {}}
            formState={{
              email: `test-email`,
              password: `test-password`,
            }}
            initialFormDisabled={true}
            loadingParams={[]}
            onControlChange={() => {}}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
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
          errors={[]}
          onFormSubmit={() => {}}
          formState={{
            email: ``,
            password: ``,
          }}
          initialFormDisabled={true}
          loadingParams={[]}
          onControlChange={() => {}}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
        />
    );
    const signIn = signInComponent.find(`.sign-in`);
    expect(signIn).toHaveLength(1);
  });

  test(`shouldn't have error message`, () => {
    const signInComponent = shallow(
        <SignIn
          errors={[]}
          onFormSubmit={() => {}}
          formState={{
            email: ``,
            password: ``,
          }}
          initialFormDisabled={true}
          loadingParams={[]}
          onControlChange={() => {}}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
        />
    );
    const signIn = signInComponent.find(`.sign-in__message.visually-hidden`);
    expect(signIn).toHaveLength(1);
  });

  test(`input shouldn't be marked if hasn't error`, () => {
    const signInComponent = shallow(
        <SignIn
          errors={[]}
          onFormSubmit={() => {}}
          formState={{
            email: ``,
            password: ``,
          }}
          initialFormDisabled={true}
          loadingParams={[]}
          onControlChange={() => {}}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
        />
    );
    const signIn = signInComponent.find(`.sign-in__field.sign-in__field--error`);
    expect(signIn).toHaveLength(0);
  });

  test(`should have error message`, () => {
    const signInComponent = shallow(
        <SignIn
          errors={errors}
          onFormSubmit={() => {}}
          formState={{
            email: ``,
            password: ``,
          }}
          initialFormDisabled={true}
          loadingParams={[]}
          onControlChange={() => {}}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
        />
    );
    const signIn = signInComponent.find(`.sign-in__message.visually-hidden`);
    expect(signIn).toHaveLength(0);
  });

  test(`input should be marked if has error`, () => {
    const signInComponent = shallow(
        <SignIn
          errors={errors}
          onFormSubmit={() => {}}
          formState={{
            email: ``,
            password: ``,
          }}
          initialFormDisabled={true}
          loadingParams={[]}
          onControlChange={() => {}}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
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
          initialFormDisabled={true}
          loadingParams={[]}
          onControlChange={() => {}}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
        />
    );
    signInComponent.find(`.sign-in__form`).simulate(`submit`, {preventDefault: () => {}});
    expect(onFormSubmit).toBeCalledTimes(1);
    expect(onFormSubmit).toHaveBeenCalledWith(formState);
  });
});
