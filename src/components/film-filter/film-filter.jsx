import React from "react";
import PropTypes from "prop-types";


const FilmFilter = (props) => {
  const {list, onItemClick, activeItem} = props;
  return <ul className="catalog__genres-list">
    {list.map((item) => {
      const {name, id} = item;
      return <li
        key={name}
        className={`catalog__genres-item ${id === activeItem ? `catalog__genres-item--active` : ``}`}
        onClick={() => onItemClick(id)}
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
        id: PropTypes.string.isRequired,
      })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired,
};

export default FilmFilter;
