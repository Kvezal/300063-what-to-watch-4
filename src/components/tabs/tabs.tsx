import * as React from "react";
import classNames from "classnames";

import {ITabsProps} from "@components/tabs/interface";


const Tabs: React.FC<ITabsProps> = (props: ITabsProps) => {
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

export default Tabs;
