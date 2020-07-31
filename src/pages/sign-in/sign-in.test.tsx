import * as React from "react";
import * as render from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import SignIn from "@pages/sign-in/sign-in";
import {EAuthorizationStatus} from "@store/user/interface";


test(`should render component`, () => {
  const tree = render.create(
      <MemoryRouter>
        <SignIn
          errors={[]}
          onFormSubmit={() => null}
          formState={{
            email: `test-email`,
            password: `test-password`,
          }}
          onControlChange={() => null}
          authorizationStatus={EAuthorizationStatus.NO_AUTH}
        />
      </MemoryRouter>,
      {createNodeMock: () => ({})}
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
