import * as React from "react";
import {NavLink} from "react-router-dom";

import {IBreadcrumb, IBreadcrumbsProps} from "./interface";


const Breadcrumbs: React.FC<IBreadcrumbsProps> = (props: IBreadcrumbsProps) => {
  const breadcrumbs = props.breadcrumbs.slice();
  const lastBreadcrumb = breadcrumbs.pop();

  return <nav className="breadcrumbs">
    <ul className="breadcrumbs__list">
      {breadcrumbs.map((item: IBreadcrumb) => {
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
        <a className="breadcrumbs__link">{lastBreadcrumb.name}</a>
      </li>
    </ul>
  </nav>;
};

export default Breadcrumbs;
