import * as React from "react";
import {NavLink} from "react-router-dom";

import {IBreadcrumbsProps} from "./interface";


const Breadcrumbs: React.FC<IBreadcrumbsProps> = (props) => {
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

export default Breadcrumbs;
