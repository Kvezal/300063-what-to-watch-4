import React from "react";
import PropTypes from "prop-types";
import {Redirect, Route} from "react-router-dom";

import {AuthorizationStatus} from "@store/user/const";
import AppRoute from "@app/app-route";


const PrivateRoute = (props) => {
  const {path, exact, render, authorizationStatus} = props;
  if (authorizationStatus === null) {
    return null;
  }
  return <Route
    path={path}
    exact={exact}
    render={(rendererProps) => authorizationStatus === AuthorizationStatus.AUTH
      ? render(rendererProps)
      : <Redirect to={AppRoute.LOGIN}/>
    }/>;
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  render: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string,
};

export default PrivateRoute;
