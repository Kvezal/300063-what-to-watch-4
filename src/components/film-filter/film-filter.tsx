import * as React from "react";
import classNames from "classnames";

import {IFilmFilterProps} from "./interface";


const FilmFilter: React.FC<IFilmFilterProps> = (props: IFilmFilterProps) => {
  const {list, onItemClick, activeItem} = props;
  return <ul className="catalog__genres-list">
    {list.map((tab: string) => {
      const className = classNames({
        "catalog__genres-item": true,
        "catalog__genres-item--active": tab === activeItem,
      });
      return <li
        key={tab}
        className={className}
        onClick={() => onItemClick(tab)}
      >
        <a className="catalog__genres-link">{tab}</a>
      </li>;
    })}
  </ul>;
};

export default FilmFilter;
