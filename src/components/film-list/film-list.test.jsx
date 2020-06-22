import React from "react";
import render from "react-test-renderer";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FilmList from "./film-list";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`FilmListComponent`, () => {
  const filmList = [
    {id: 1, picture: `fantastic-beasts-the-crimes-of-grindelwald.jpg`, title: `Fantastic Beasts: The Crimes of Grindelwald`},
    {id: 2, picture: `bohemian-rhapsody.jpg`, title: `Bohemian Rhapsody`},
    {id: 3, picture: `macbeth.jpg`, title: `Macbeth`},
    {id: 4, picture: `aviator.jpg`, title: `Aviator`},
    {id: 5, picture: `we-need-to-talk-about-kevin.jpg`, title: `We need to talk about Kevin`},
    {id: 6, picture: `what-we-do-in-the-shadows.jpg`, title: `What We Do in the Shadows`},
    {id: 7, picture: `revenant.jpg`, title: `Revenant`},
    {id: 8, picture: `johnny-english.jpg`, title: `Johnny English`}
  ];

  test(`should render component`, () => {
    const tree = render.create(<FilmList list={filmList} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const filmListComponent = mount(<FilmList list={filmList} />);
    const list = filmListComponent.find(`div.catalog__movies-list`);
    expect(list).toHaveLength(1);
  });

  test(`should have film cards`, () => {
    const filmListComponent = mount(<FilmList list={filmList} />);
    const cards = filmListComponent.find(`article.small-movie-card`);
    expect(cards).toHaveLength(filmList.length);
  });
});
