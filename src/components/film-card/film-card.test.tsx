import * as React from "react";
import * as render from "react-test-renderer";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import FilmCard from "./film-card";


configure({
  adapter: new Adapter(),
});

describe(`FilmCardComponent`, () => {
  const filmName = `Fantastic Beasts: The Crimes of Grindelwald`;

  test(`should render component`, () => {
    const tree = render
      .create(
          <FilmCard
            filmId={1}
            filmName={filmName}
            onCardClick={() => null}
            onPlayingChange={() => null}
            renderPlayer={() => null}
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
          filmId={1}
          filmName={filmName}
          onCardClick={() => null}
          onPlayingChange={() => null}
          renderPlayer={() => null}
        />
    );
    const card = filmCardComponent.find(`article.small-movie-card`);
    expect(card).toHaveLength(1);
  });

  test(`film name should match`, () => {
    const filmCardComponent = shallow(
        <FilmCard
          filmId={1}
          filmName={filmName}
          onCardClick={() => null}
          onPlayingChange={() => null}
          renderPlayer={() => null}
        />
    );
    const film = filmCardComponent.find(`.small-movie-card__title .small-movie-card__link`).text();
    expect(film.includes(filmName)).toBeTruthy();
  });

  test(`should be pressed`, () => {
    const handleCardClickMock = jest.fn();
    const filmCardComponent = shallow(
        <FilmCard
          filmId={1}
          filmName={filmName}
          onCardClick={handleCardClickMock}
          onPlayingChange={() => null}
          renderPlayer={() => null}
        />
    );
    const filmCard = filmCardComponent.find(`article.small-movie-card`);
    filmCard.simulate(`click`);
    expect(handleCardClickMock).toHaveBeenCalled();
  });
});
