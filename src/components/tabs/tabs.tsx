import * as React from "react";
import classNames from "classnames";

import {ITabsProps} from "@components/tabs/interface";


const Tabs: React.FC<ITabsProps> = (props: ITabsProps) => {
  const {tabs, activeTab, baseURI} = props;

  return <nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      {tabs.map((tab: string) => {
        const className = classNames({
          "movie-nav__item": true,
          "movie-nav__item--active": activeTab === tab,
        });
        return <li key={tab} className={className}>
          <a
            href={`${baseURI}#${tab}`}
            className="movie-nav__link"
          >
            {tab}
          </a>
        </li>;
      })}
    </ul>
  </nav>;
};

export default Tabs;
