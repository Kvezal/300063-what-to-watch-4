import * as React from "react";
import classNames from "classnames";

import {IFilmFilterProps} from "./interface";


const FilmFilter: React.FC<IFilmFilterProps> = (props: IFilmFilterProps) => {
  const {list, onItemClick, activeItem} = props;
  return <ul className="catalog__genres-list">
    {list.map((item) => {
      const {name, id} = item;
      const className = classNames({
        "catalog__genres-item": true,
        "catalog__genres-item--active": id === activeItem,
      });
      return <li
        key={name}
        className={className}
        onClick={() => onItemClick(id)}
      >
        <a className="catalog__genres-link">{name}</a>
      </li>;
    })}
  </ul>;
};

export default FilmFilter;
