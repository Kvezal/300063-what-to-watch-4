import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";


const Breadcrumbs = (props) => {
  const list = props.list.slice();
  const lastItem = list.pop();

  return <nav className="breadcrumbs">
    <ul className="breadcrumbs__list">
      {list.map((item) => {
        const {name, href} = item;
        return <li key={name} className="breadcrumbs__item">
          <NavLink
            to={href || ``}
            className="breadcrumbs__link"
          >
            {name}
          </NavLink >
        </li>;
      })}
      <li className="breadcrumbs__item">
        <a className="breadcrumbs__link">{lastItem.name}</a>
      </li>
    </ul>
  </nav>;
};

Breadcrumbs.propTypes = {
  list: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        href: PropTypes.string,
      })
  ).isRequired,
};

export default Breadcrumbs;
