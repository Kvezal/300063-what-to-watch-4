import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MemoryRouter, Route} from "react-router-dom";

import PrivateRoute from "./private-route";
import {AuthorizationStatus} from "@store/user/const";


Enzyme.configure({
  adapter: new Adapter(),
});

const TestComponent = () => {
  return <div className="test"/>;
};

describe(`PrivateRouteComponent`, () => {
  test(`should display private route`, () => {
    const privateRouteComponent = mount(
      <MemoryRouter initialEntries={[`/private`]}>
        <PrivateRoute
          path="/private"
          exact
          authorizationStatus={AuthorizationStatus.AUTH}
          redirect="/not-private"
          render={() => <TestComponent/>}
        />
        <Route
          path="/not-private"
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
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          redirect="/not-private"
          render={() => <TestComponent/>}
        />
        <Route
          path="/login"
          render={() => <div className="not-private-route"/>}
        />
      </MemoryRouter>
    );
    expect(privateRouteComponent.find(`.test`)).toHaveLength(0);
    expect(privateRouteComponent.find(`.not-private-route`)).toHaveLength(1);
  })
});
