import {ActionType, ActionCreator, reducer} from "./reducer";

const films = [
  {id: 1, preview: ``, genre: `Drama`, href: ``, poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`, title: `Fantastic Beasts: The Crimes of Grindelwald`},
  {id: 2, preview: ``, genre: `Horror`, href: ``, poster: `img/bohemian-rhapsody.jpg`, title: `Bohemian Rhapsody`},
  {id: 3, preview: ``, genre: `Drama`, href: ``, poster: `img/macbeth.jpg`, title: `Macbeth`},
  {id: 4, preview: ``, genre: `Crime`, href: ``, poster: `img/aviator.jpg`, title: `Aviator`}
];

describe(`Reducer`, () => {
  test(`choose film action should return correct object`, () => {
    const filmId = 1;
    expect(ActionCreator.chooseFilm(filmId))
      .toEqual({
        type: ActionType.CHOOSE_FILM,
        payload: filmId,
      });
  });

  test(`choose film with genre action should return correct object`, () => {
    const genre = `Drama`;
    expect(ActionCreator.chooseFilmsWithGenre(genre))
        .toEqual({
          type: ActionType.CHOOSE_FILM_WITH_GENRE,
          payload: genre,
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

  test(`should set filmId`, () => {
    const baseState = {
      filmId: null,
    };
    const action = {
      type: ActionType.CHOOSE_FILM,
      payload: 1,
    };
    expect(reducer(baseState, action)).toEqual({
      filmId: 1,
    });
  });

  test(`should have only current genre films`, () => {
    const genre = `Drama`;
    const baseState = {
      filmId: null,
      films,
      filteredFilms: films,
    };
    const action = {
      type: ActionType.CHOOSE_FILM_WITH_GENRE,
      payload: genre,
    };
    expect(reducer(baseState, action)).toEqual({
      filmId: null,
      films,
      filteredFilms: films.filter((film) => film.genre === genre),
    });
  });
});
