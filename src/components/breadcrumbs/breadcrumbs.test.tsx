import * as React from "react";
import {configure, mount, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {MemoryRouter} from "react-router-dom";

import Breadcrumbs from "./breadcrumbs";


const breadcrumbs = [
  {name: `name-1`, href: `href-1`},
  {name: `name-2`, href: `href-2`},
  {name: `name-3`},
];

configure({
  adapter: new Adapter(),
});

describe(`BreadcrumbsComponent`, () => {
  test(`should create component`, () => {
    const breadcrumbsComponent = shallow(
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
        />
    );
    const breadcrumbsContainer = breadcrumbsComponent.find(`.breadcrumbs`);
    expect(breadcrumbsContainer).toHaveLength(1);
  });

  test(`should display breadcrumbs item`, () => {
    const breadcrumbsComponent = mount(
        <MemoryRouter>
          <Breadcrumbs
            breadcrumbs={breadcrumbs}
          />
        </MemoryRouter>
    );
    const link = breadcrumbsComponent.find(`a.breadcrumbs__link`);
    expect(link).toHaveLength(breadcrumbs.length);
  });

  test(`items should have href`, () => {
    const breadcrumbsComponent = mount(
        <MemoryRouter>
          <Breadcrumbs
            breadcrumbs={breadcrumbs}
          />
        </MemoryRouter>
    );
    const lastLinkHrefs = breadcrumbsComponent.find(`a.breadcrumbs__link[href]`);
    expect(lastLinkHrefs).toHaveLength(2);
  });

  test(`last item shouldn't have href`, () => {
    const breadcrumbsComponent = mount(
        <MemoryRouter>
          <Breadcrumbs
            breadcrumbs={breadcrumbs}
          />
        </MemoryRouter>
    );
    const lastLinkHref = breadcrumbsComponent.find(`a.breadcrumbs__link`).at(2).href;
    expect(lastLinkHref).toBeUndefined();
  });
});
