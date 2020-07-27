import {ActionType} from "./const";


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

const changeCommentStatus = (payload) => ({
  type: ActionType.CHANGE_COMMENT_STATUS,
  payload,
});

const addFavoriteFilm = (payload) => ({
  type: ActionType.ADD_FAVORITE_FILM,
  payload,
});

const removeFavoriteFilm = (payload) => ({
  type: ActionType.REMOVE_FAVORITE_FILM,
  payload,
});

export {
  loadFilms,
  loadFavoriteFilms,
  loadPromoFilm,
  loadFilmReviews,
  changeCommentStatus,
  addFavoriteFilm,
  removeFavoriteFilm,
};
