import React from "react";
import render from "react-test-renderer";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FilmCard from "./film-card";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`FilmCardComponent`, () => {
  const film = {
    id: 1,
    picture: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    href: `movie-page.html`,
  };

  test(`should render component`, () => {
    const tree = render.create(<FilmCard info={film} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const filmCardComponent = shallow(<FilmCard info={film} />);
    const card = filmCardComponent.find(`article.small-movie-card`);
    expect(card).toHaveLength(1);
  });

  test(`film name should match`, () => {
    const filmCardComponent = shallow(<FilmCard info={film} />);
    const filmName = filmCardComponent.find(`.small-movie-card__title .small-movie-card__link`).text();
    expect(filmName.includes(film.title)).toBeTruthy();
  });

  test(`link href should match`, () => {
    const filmCardComponent = shallow(<FilmCard info={film} />);
    const filmLink = filmCardComponent.find(`.small-movie-card__title .small-movie-card__link`).props().href;
    expect(filmLink.includes(film.href)).toBeTruthy();
  });

  test(`picture src should match`, () => {
    const filmCardComponent = shallow(<FilmCard info={film} />);
    const filmLink = filmCardComponent.find(`.small-movie-card__image img`).props().src;
    expect(filmLink.includes(film.picture)).toBeTruthy();
  });
});
