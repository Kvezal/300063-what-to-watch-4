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
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    href: `movie-page.html`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `test`,
  };

  test(`should render component`, () => {
    const tree = render
      .create(
          <FilmCard
            info={film}
            onCardClick={() => {}}
            isActive={false}
            onActiveChange={() => {}}
            renderPlayer={() => {}}
          />, {
            createNodeMock: () => ({}),
          }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const filmCardComponent = shallow(
        <FilmCard
          info={film}
          onCardClick={() => {}}
          isActive={false}
          onActiveChange={() => {}}
          renderPlayer={() => {}}
        />
    );
    const card = filmCardComponent.find(`article.small-movie-card`);
    expect(card).toHaveLength(1);
  });

  test(`film name should match`, () => {
    const filmCardComponent = shallow(
        <FilmCard
          info={film}
          onCardClick={() => {}}
          isActive={false}
          onActiveChange={() => {}}
          renderPlayer={() => {}}
        />
    );
    const filmName = filmCardComponent.find(`.small-movie-card__title .small-movie-card__link`).text();
    expect(filmName.includes(film.title)).toBeTruthy();
  });

  test(`link href should match`, () => {
    const filmCardComponent = shallow(
        <FilmCard
          info={film}
          onCardClick={() => {}}
          isActive={false}
          onActiveChange={() => {}}
          renderPlayer={() => {}}
        />
    );
    const filmLink = filmCardComponent.find(`.small-movie-card__title .small-movie-card__link`).props().href;
    expect(filmLink.includes(film.href)).toBeTruthy();
  });

  test(`should be pressed`, () => {
    const handleCardClickMock = jest.fn();
    const filmCardComponent = shallow(
        <FilmCard
          info={film}
          onCardClick={handleCardClickMock}
          isActive={false}
          onActiveChange={() => {}}
          renderPlayer={() => {}}
        />
    );
    const filmCard = filmCardComponent.find(`article.small-movie-card`);
    filmCard.simulate(`click`);
    expect(handleCardClickMock).toHaveBeenCalled();
  });
});
