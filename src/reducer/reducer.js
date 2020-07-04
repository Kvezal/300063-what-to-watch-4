import {GenreEnum} from "@enums";
import extend from "@utils/extend";

import films from "@mocks/films";


const initialState = {
  genre: GenreEnum.ALL,
  films,
};

const ActionType = {
  CHANGE_FILTERED_GENRE: `CHANGE_FILTERED_GENRE`,
  UPDATE_FILM_LIST: `UPDATE_FILM_LIST`,
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTERED_GENRE:
      return extend(state, {
        genre: action.payload,
      });
    case ActionType.UPDATE_FILM_LIST:
      return extend(state, {
        films: state.films.filter((film) => film.genre === state.genre),
      });
  }

  return state;
};

export {ActionType, ActionCreator, reducer};
