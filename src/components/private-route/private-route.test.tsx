import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {MemoryRouter, Route} from "react-router-dom";

import {EAuthorizationStatus} from "@store/user/interface";

import PrivateRoute from "./private-route";


configure({
  adapter: new Adapter(),
});

describe(`PrivateRouteComponent`, () => {
  test(`should display private route`, () => {
    const privateRouteComponent = mount(
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
    );
    expect(privateRouteComponent.find(`.test`)).toHaveLength(1);
    expect(privateRouteComponent.find(`.not-private-route`)).toHaveLength(0);
  });

  test(`should redirect to not private route`, () => {
    const privateRouteComponent = mount(
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
    );
    expect(privateRouteComponent.find(`.test`)).toHaveLength(0);
    expect(privateRouteComponent.find(`.not-private-route`)).toHaveLength(1);
  });
});
