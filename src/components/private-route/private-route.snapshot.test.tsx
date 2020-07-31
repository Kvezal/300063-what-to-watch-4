import * as React from "react";
import * as render from "react-test-renderer";
import {MemoryRouter, Route} from "react-router-dom";
import {EAuthorizationStatus} from "@store/user/interface";

import PrivateRoute from "./private-route";


describe(`PrivateRouterSnapshot`, () => {
  test(`should render private component`, () => {
    const tree = render.create(
        <MemoryRouter initialEntries={[`/private`]}>
          <PrivateRoute
            path="/private"
            exact
            authorizationStatus={EAuthorizationStatus.AUTH}
            redirect="/not-private"
            render={() => <div className="test"/>}
          />
          <Route
            path="/login"
            render={() => <div className="not-private-route"/>}
          />
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`shouldn't render private component`, () => {
    const tree = render.create(
        <MemoryRouter initialEntries={[`/private`]}>
          <PrivateRoute
            path="/private"
            exact
            authorizationStatus={EAuthorizationStatus.NO_AUTH}
            redirect="/not-private"
            render={() => <div className="test"/>}
          />
          <Route
            path="/login"
            render={() => <div className="not-private-route"/>}
          />
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

