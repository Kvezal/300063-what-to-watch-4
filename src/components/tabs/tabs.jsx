import React from "react";
import PropTypes from "prop-types";


const Tabs = (props) => {
  const {list, activeTab, onTabClick} = props;

  return <nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      {list.map((item, index) => {
        const {name, href} = item;
        return <li key={index} className={`movie-nav__item ${activeTab === href ? `movie-nav__item--active` : ``}`}>
          <a
            className="movie-nav__link"
            onClick={() => onTabClick(href)}
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
        href: PropTypes.string.isRequired,
      })
  ).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default Tabs;
