import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const Header = (props) => {
  const {avatar} = props;
  return <Fragment>
    <h1 className="visually-hidden">WTW</h1>

    <header className="page-header movie-card__head">
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="user-block">
        <div className="user-block__avatar">
          <img src={`img/${avatar}`} alt="User avatar" width="63" height="63"/>
        </div>
      </div>
    </header>
  </Fragment>;
};

Header.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Header;
