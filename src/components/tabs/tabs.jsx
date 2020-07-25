import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";


const Tabs = (props) => {
  const {list, activeTab, onActiveTabChange} = props;

  return <nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      {list.map((item) => {
        const {name, id} = item;
        const className = classNames({
          "movie-nav__item": true,
          "movie-nav__item--active": activeTab === id,
        });
        return <li key={id} className={className}>
          <a
            className="movie-nav__link"
            onClick={() => onActiveTabChange(id)}
          >
            {name}
          </a>
        </li>;
      })}
    </ul>
  </nav>;
};

Tabs.propTypes = {
  list: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      })
  ).isRequired,
  activeTab: PropTypes.string.isRequired,
  onActiveTabChange: PropTypes.func.isRequired,
};

export default Tabs;
