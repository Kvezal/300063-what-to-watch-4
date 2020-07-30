import * as React from "react";
import {RouteProps} from "react-router-dom";


interface IPrivateRoute {
  path: string;
  exact: boolean;
  render: (props: RouteProps) => React.ReactNode;
  authorizationStatus: string;
}

type TPrivateRoute = RouteProps & IPrivateRoute;

export {
  IPrivateRoute,
  TPrivateRoute,
};
