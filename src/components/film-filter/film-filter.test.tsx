import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import FilmFilter from "./film-filter";


configure({
  adapter: new Adapter(),
});

const filterList = [`Documentary`, `Dramas`, `Horror`];

describe(`FilmFilterComponent`, () => {
  test(`should create component`, () => {
    const FilmFilterComponent = shallow(
        <FilmFilter
          tabs={filterList}
          onItemClick={() => null}
          activeItem=""
          baseURI={`/`}
        />
    );
    const filmFilter = FilmFilterComponent.find(`ul.catalog__genres-list`);
    expect(filmFilter).toHaveLength(1);
  });

  test(`should have filter list`, () => {
    const FilmFilterComponent = shallow(
        <FilmFilter
          tabs={filterList}
          onItemClick={() => null}
          activeItem=""
          baseURI={`/`}
        />
    );
    const filterItems = FilmFilterComponent.find(`li.catalog__genres-item`);
    expect(filterItems).toHaveLength(filterList.length);
  });

  test(`filter item should be pressed`, () => {
    const onItemClick = jest.fn();
    const FilmFilterComponent = shallow(
        <FilmFilter
          tabs={filterList}
          onItemClick={onItemClick}
          activeItem=""
          baseURI={`/`}
        />
    );
    const filterItems = FilmFilterComponent.find(`li.catalog__genres-item`);
    filterItems.forEach((item) => item.simulate(`click`));
    expect(onItemClick).toBeCalledTimes(filterItems.length);
  });

  test(`should have one active item`, () => {
    const FilmFilterComponent = shallow(
        <FilmFilter
          tabs={filterList}
          onItemClick={() => null}
          activeItem={filterList[0]}
          baseURI={`/`}
        />
    );
    const filmFilter = FilmFilterComponent.find(`li.catalog__genres-item.catalog__genres-item--active`);
    expect(filmFilter).toHaveLength(1);
  });

  test(`links should include baseURI`, () => {
    const baseURI = `/test`;
    const FilmFilterComponent = shallow(
        <FilmFilter
          tabs={filterList}
          onItemClick={() => null}
          activeItem={filterList[0]}
          baseURI={baseURI}
        />
    );
    FilmFilterComponent.find(`li.catalog__genres-item a`).forEach((link) => {
      expect(link.props().href.includes(baseURI)).toBeTruthy();
    });
  });
});
