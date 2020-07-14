import React from "react";
import PropTypes from "prop-types";


const FilmFilter = (props) => {
  const {list, onItemClick, activeItem} = props;
  return <ul className="catalog__genres-list">
    {list.map((item) => {
      const {name, value} = item;
      return <li
        key={name}
        className={`catalog__genres-item ${value === activeItem ? `catalog__genres-item--active` : ``}`}
        onClick={() => onItemClick(value)}
      >
        <a className="catalog__genres-link">{name}</a>
      </li>;
    })}
  </ul>;
};

FilmFilter.propTypes = {
  list: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired,
};

export default FilmFilter;
