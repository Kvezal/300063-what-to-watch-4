import * as React from "react";
import {Redirect, Route} from "react-router-dom";

import AppRoute from "@app/app-route";
import {EAuthorizationStatus} from "@store/user/interface";

import {TPrivateRoute} from "./interface";


const PrivateRoute: React.FC<TPrivateRoute> = (props: TPrivateRoute) => {
  const {path, exact, render, authorizationStatus} = props;
  if (authorizationStatus === null) {
    return null;
  }
  return <Route
    path={path}
    exact={exact}
    render={(rendererProps) => authorizationStatus === EAuthorizationStatus.AUTH
      ? render(rendererProps)
      : <Redirect to={AppRoute.LOGIN}/>
    }/>;
};

export default PrivateRoute;
