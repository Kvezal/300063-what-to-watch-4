import {ActionType} from "./const";


const chooseGenre = (payload) => ({
  type: ActionType.CHOOSE_GENRE,
  payload,
});

const loadFilms = (payload) => ({
  type: ActionType.LOAD_FILMS,
  payload,
});

const loadFavoriteFilms = (payload) => ({
  type: ActionType.LOAD_FAVORITE_FILMS,
  payload,
});

const loadPromoFilm = (payload) => ({
  type: ActionType.LOAD_PROMO_FILM,
  payload,
});

const loadFilmReviews = (payload) => ({
  type: ActionType.LOAD_FILM_REVIEWS,
  payload,
});

const updateFilm = (payload) => ({
  type: ActionType.UPDATE_FILM,
  payload,
});

export {
  chooseGenre,
  loadFilms,
  loadFavoriteFilms,
  loadPromoFilm,
  loadFilmReviews,
  updateFilm,
};
