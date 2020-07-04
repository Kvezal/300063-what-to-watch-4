import {GenreEnum} from "@enums";

import {ActionType, ActionCreator, reducer} from "./reducer";

const films = [
  {id: 1, preview: ``, genre: `Dramas`, href: ``, poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`, title: `Fantastic Beasts: The Crimes of Grindelwald`},
  {id: 2, preview: ``, genre: `Horror`, href: ``, poster: `img/bohemian-rhapsody.jpg`, title: `Bohemian Rhapsody`},
  {id: 3, preview: ``, genre: `Dramas`, href: ``, poster: `img/macbeth.jpg`, title: `Macbeth`},
  {id: 4, preview: ``, genre: `Crime`, href: ``, poster: `img/aviator.jpg`, title: `Aviator`}
];

describe(`Reducer`, () => {
  test.each(Object.values(GenreEnum))(`change filtered genre action should return object with %p genre`, (genre) => {
    expect(ActionCreator.changeFilteredGenre(genre))
      .toEqual({
        type: ActionType.CHANGE_FILTERED_GENRE,
        payload: genre,
      });
  });

  test(`update film list action should return correct object`, () => {
    expect(ActionCreator.updateFilmList())
      .toEqual({
        type: ActionType.UPDATE_FILM_LIST,
        payload: null,
      });
  });

  test(`should return base state if action type is incorrect`, () => {
    const baseState = {
      genre: `test`
    };
    const incorrectAction = {
      type: `test`,
      payload: null,
    };
    expect(reducer(baseState, incorrectAction)).toEqual(baseState);
  });

  test.each(Object.values(GenreEnum))(`should change genre to %p`, (genre) => {
    const baseState = {
      genre: GenreEnum.ALL,
    };
    const action = {
      type: ActionType.CHANGE_FILTERED_GENRE,
      payload: genre,
    };
    expect(reducer(baseState, action)).toEqual({
      genre,
    });
  });

  test.each([GenreEnum.DRAMAS, GenreEnum.HORROR, GenreEnum.CRIME])(`should filter films by %p genre`, (genre) => {
    const baseState = {
      genre,
      films,
    };
    const action = {
      type: ActionType.UPDATE_FILM_LIST,
      payload: null,
    };
    const filteredFilms = films.filter((film) => film.genre === genre);

    expect(reducer(baseState, action)).toEqual({
      genre,
      films: filteredFilms,
    });
  });
});
