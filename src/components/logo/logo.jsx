import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import classNames from "classnames";

import AppRoute from "@app/app-route";
import {extend} from "@common/utils";


const Logo = (props) => {
  const linkClass = classNames(extend({
    "logo__link": true,
  }), props.linkClass);
  return <div className="logo">
    <Link to={AppRoute.ROOT} className={linkClass}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>;
};

Logo.defaultProps = {
  linkClass: {},
};

Logo.propTypes = {
  linkClass: PropTypes.shape({
    [PropTypes.string]: PropTypes.bool,
  }).isRequired,
};

export default Logo;
