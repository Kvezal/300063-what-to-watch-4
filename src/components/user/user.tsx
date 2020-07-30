import * as React from "react";
import {Link} from "react-router-dom";

import AppRoute from "@app/app-route";

import {IUserProps} from "./interface";


const User: React.FC<IUserProps> = (props: IUserProps) => {
  const {avatar, isAuthorized} = props;
  return <div className="user-block">
    {isAuthorized
      ? <Link to={AppRoute.MY_LIST}>
        <div className="user-block__avatar">
          <img src={avatar} alt="User avatar" width="63" height="63"/>
        </div>
      </Link>
      : <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
    }
  </div>;
};

export default User;
