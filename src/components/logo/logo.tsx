import * as React from "react";
import {Link} from "react-router-dom";
import classNames from "classnames";

import AppRoute from "@app/app-route";
import {extend} from "@common/utils";

import {ILogoProps} from "./interface";


const Logo: React.FC<ILogoProps> = (props) => {
  const linkClass = classNames(extend({
    "logo__link": true,
  }, props.linkClass));
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

export default Logo;
