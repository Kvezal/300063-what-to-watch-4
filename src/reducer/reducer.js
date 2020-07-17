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
  CHOOSE_FILM: `CHOOSE_FILM`,
  CHOOSE_FILM_WITH_GENRE: `CHOOSE_FILM_WITH_GENRE`,
};

const ActionCreator = {
  chooseFilmsWithGenre: (genre) => ({
    type: ActionType.CHOOSE_FILM_WITH_GENRE,
    payload: genre,
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
    case ActionType.CHOOSE_FILM:
      return extend(state, {
        filmId: action.payload,
      });
    case ActionType.CHOOSE_FILM_WITH_GENRE:
      return extend(state, {
        filteredFilms: filterFilms(state.films, action.payload),
      });
  }

  return state;
};

export {ActionType, ActionCreator, reducer};
