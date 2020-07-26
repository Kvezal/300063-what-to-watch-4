import React from "react";
import PropTypes from "prop-types";
import {Redirect, Route} from "react-router-dom";


const PrivateRoute = (props) => {
  const {path, exact, render, canActivate, redirect} = props;
  return <Route
    path={path}
    exact={exact}
    render={() => canActivate
      ? render()
      : <Redirect to={redirect}/>
    }/>;
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  render: PropTypes.func.isRequired,
  canActivate: PropTypes.bool.isRequired,
};

export default PrivateRoute;
