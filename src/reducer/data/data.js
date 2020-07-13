import {extend} from "@utils";
import GenreEnum from "@enums/genres";


const initialState = {
  genre: GenreEnum.ALL,
  films: [],
  filteredFilms: [],
  currentFilm: null,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  FILTER_FILMS: `FILTER_FILMS`,
  CHOOSE_GENRE: `CHOOSE_GENRE`,
  CHOOSE_FILM: `CHOOSE_FILM`,
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
  filterFilms: () => ({
    type: ActionType.FILTER_FILMS,
    payload: null,
  }),
  chooseFilm: (filmId) => ({
    type: ActionType.CHOOSE_FILM,
    payload: filmId,
  }),
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api
      .get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(response.date));
        dispatch(ActionCreator.filterFilms());
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHOOSE_GENRE:
      return extend(state, {
        genre: action.payload
      });
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });
    case ActionType.FILTER_FILMS:
      return extend(state, {
        filteredFilms: state.films.filter((film) => film.genre === state.genre)
      });
    case ActionType.CHOOSE_FILM:
      return extend(state, {
        currentFilm: state.films.find((film) => film.id === action.payload)
      });
    default:
      return state;
  }
};

export {ActionType, ActionCreator, Operation, reducer};
