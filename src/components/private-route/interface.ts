import * as React from "react";
import {RouteProps} from "react-router-dom";


export interface IPrivateRoute {
  path: string;
  exact: boolean;
  render: (props: RouteProps) => React.ReactNode;
  authorizationStatus: string;
}

export type TPrivateRoute = RouteProps & IPrivateRoute;
