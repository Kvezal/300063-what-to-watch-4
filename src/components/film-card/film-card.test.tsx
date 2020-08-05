import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import FilmCard from "./film-card";


configure({
  adapter: new Adapter(),
});

const filmName = `Fantastic Beasts: The Crimes of Grindelwald`;

describe(`FilmCardComponent`, () => {

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

  test(`should have film name`, () => {
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
    expect(film).toBe(filmName);
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
    expect(handleCardClickMock).toHaveBeenCalledTimes(1);
    filmCard.simulate(`click`);
    filmCard.simulate(`click`);
    expect(handleCardClickMock).toHaveBeenCalledTimes(3);
  });
});
