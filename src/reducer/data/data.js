import {extend} from "@utils";
import GenreEnum from "@enums/genres";


const initialState = {
  genre: GenreEnum.ALL,
  films: [],
  currentFilmId: null,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  CHOOSE_GENRE: `CHOOSE_GENRE`,
  CHOOSE_FILM_ID: `CHOOSE_FILM_ID`,
};

const ActionCreator = {
  chooseGenre: (genre) => ({
    type: ActionType.CHOOSE_GENRE,
    payload: genre,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  chooseFilmId: (filmId) => ({
    type: ActionType.CHOOSE_FILM_ID,
    payload: filmId,
  }),
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api
      .get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(response.date));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHOOSE_GENRE:
      return extend(state, {
        genre: action.payload,
      });
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.CHOOSE_FILM_ID:
      return extend(state, {
        currentFilmId: action.payload,
      });
    default:
      return state;
  }
};

export {ActionType, ActionCreator, Operation, reducer};
