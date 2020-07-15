import {adaptFilm, adaptReview} from "@common/adapter";
import {GenreEnum} from "@common/enums";
import {extend} from "@common/utils";

import {getFilmId} from "./selectors";


const initialState = {
  genre: GenreEnum.ALL,
  promoFilm: {},
  films: [],
  currentFilmId: 1,
  filmReviews: [],
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  CHOOSE_GENRE: `CHOOSE_GENRE`,
  CHOOSE_FILM_ID: `CHOOSE_FILM_ID`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_FILM_REVIEWS: `LOAD_FILM_REVIEWS`,
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
  loadPromoFilm: (film) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: film,
  }),
  loadFilmReviews: (reviews) => ({
    type: ActionType.LOAD_FILM_REVIEWS,
    payload: reviews,
  }),
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api
      .get(`/films`)
      .then((response) => response.data.map((film) => adaptFilm(film)))
      .then((films) => {
        dispatch(ActionCreator.loadFilms(films));
      });
  },
  loadPromoFilm: () => (dispatch, getState, api) => {
    return api
      .get(`/films/promo`)
      .then((response) => adaptFilm(response.data))
      .then((film) => {
        dispatch(ActionCreator.loadPromoFilm(film));
      });
  },
  loadFilmReviews: () => (dispatch, getState, api) => {
    return api
      .get(`/comments/${getFilmId(getState())}`)
      .then((response) => response.data.map((reviews) => adaptReview(reviews)))
      .then((reviews) => {
        dispatch(ActionCreator.loadFilmReviews(reviews));
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
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
      });
    case ActionType.LOAD_FILM_REVIEWS:
      return extend(state, {
        filmReviews: action.payload,
      });
    default:
      return state;
  }
};

export {ActionType, ActionCreator, Operation, reducer};
