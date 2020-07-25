import React from "react";
import render from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Breadcrumbs from "./breadcrumbs";


const breadcrumbs = [
  {name: `name-1`, href: `href-1`},
  {name: `name-2`, href: `href-2`},
  {name: `name-3`},
];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`BreadcrumbsComponent`, () => {
  test(`should render component`, () => {
    const tree = render.create(
        <MemoryRouter>
          <Breadcrumbs
            list={breadcrumbs}
          />
        </MemoryRouter>
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const breadcrumbsComponent = shallow(
        <Breadcrumbs
          list={breadcrumbs}
        />
    );
    const breadcrumbsContainer = breadcrumbsComponent.find(`.breadcrumbs`);
    expect(breadcrumbsContainer).toHaveLength(1);
  });

  test(`should display breadcrumbs item`, () => {
    const breadcrumbsComponent = shallow(
      <Breadcrumbs
        list={breadcrumbs}
      />
    );
    const breadcrumbsContainer = breadcrumbsComponent.find(`.breadcrumbs__item`);
    expect(breadcrumbsContainer).toHaveLength(breadcrumbs.length);
  });
});
