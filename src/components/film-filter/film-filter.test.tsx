import * as React from "react";
import * as render from "react-test-renderer";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import FilmFilter from "./film-filter";


configure({
  adapter: new Adapter(),
});

describe(`FilmFilterComponent`, () => {
  const filterList = [`Documentary`, `Dramas`, `Horror`];

  test(`should render component`, () => {
    const tree = render
      .create(
          <FilmFilter
            list={filterList}
            onItemClick={() => null}
            activeItem={filterList[0]}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const FilmFilterComponent = shallow(
        <FilmFilter
          list={filterList}
          onItemClick={() => null}
          activeItem=""
        />
    );
    const filmFilter = FilmFilterComponent.find(`ul.catalog__genres-list`);
    expect(filmFilter).toHaveLength(1);
  });

  test(`should have filter list`, () => {
    const FilmFilterComponent = shallow(
        <FilmFilter
          list={filterList}
          onItemClick={() => null}
          activeItem=""
        />
    );
    const filterItems = FilmFilterComponent.find(`li.catalog__genres-item`);
    expect(filterItems).toHaveLength(filterList.length);
  });

  test(`filter item should be pressed`, () => {
    const onItemClick = jest.fn();
    const FilmFilterComponent = shallow(
        <FilmFilter
          list={filterList}
          onItemClick={onItemClick}
          activeItem=""
        />
    );
    const filterItems = FilmFilterComponent.find(`li.catalog__genres-item`);
    filterItems.forEach((item) => item.simulate(`click`));
    expect(onItemClick).toBeCalledTimes(filterItems.length);
  });

  test(`filter item should return tab after click`, () => {
    const onItemClick = jest.fn();
    const FilmFilterComponent = shallow(
        <FilmFilter
          list={filterList}
          onItemClick={onItemClick}
          activeItem=""
        />
    );
    const filterItems = FilmFilterComponent.find(`li.catalog__genres-item`);
    filterList.forEach((filter, index) => {
      filterItems.at(index).simulate(`click`);
      expect(onItemClick).toBeCalledWith(filter);
    });
  });

  test(`should have one active item`, () => {
    const FilmFilterComponent = shallow(
        <FilmFilter
          list={filterList}
          onItemClick={() => null}
          activeItem={filterList[0]}
        />
    );
    const filmFilter = FilmFilterComponent.find(`li.catalog__genres-item.catalog__genres-item--active`);
    expect(filmFilter).toHaveLength(1);
  });
});
