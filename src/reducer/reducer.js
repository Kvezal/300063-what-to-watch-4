import {GenreEnum} from "@enums";
import extend from "@utils/extend";

import films from "@mocks/films";


const initialState = {
  genre: GenreEnum.ALL,
  films,
  filteredFilms: films,
  filmId: null,
};

const ActionType = {
  CHANGE_FILTERED_GENRE: `CHANGE_FILTERED_GENRE`,
  UPDATE_FILM_LIST: `UPDATE_FILM_LIST`,
  CHOOSE_FILM: `CHOOSE_FILM`,
};

const ActionCreator = {
  changeFilteredGenre: (genre) => ({
    type: ActionType.CHANGE_FILTERED_GENRE,
    payload: genre,
  }),

  updateFilmList: () => ({
    type: ActionType.UPDATE_FILM_LIST,
    payload: null,
  }),

  chooseFilm: (filmId) => ({
    type: ActionType.CHOOSE_FILM,
    payload: filmId,
  }),
};

const filterFilms = (baseFilms, genre) => {
  let filmList = baseFilms;
  if (genre !== GenreEnum.ALL) {
    filmList = baseFilms.filter((film) => film.genre === genre);
  }
  return filmList;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTERED_GENRE:
      return extend(state, {
        genre: action.payload,
      });
    case ActionType.UPDATE_FILM_LIST:
      return extend(state, {
        filteredFilms: filterFilms(state.films, state.genre),
      });
    case ActionType.CHOOSE_FILM:
      return extend(state, {
        filmId: action.payload,
      });
  }

  return state;
};

export {ActionType, ActionCreator, reducer};
