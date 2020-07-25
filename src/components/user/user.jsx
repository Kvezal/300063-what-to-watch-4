import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const User = (props) => {
  const {avatar, isAuthorized} = props;
  return <div className="user-block">
    {isAuthorized
      ? <div className="user-block__avatar">
        <img src={avatar} alt="User avatar" width="63" height="63"/>
      </div>
      : <Link to="/login" className="user-block__link">Sign in</Link>
    }
  </div>;
};

User.propTypes = {
  avatar: PropTypes.string,
  isAuthorized: PropTypes.bool.isRequired,
};

export default User;
