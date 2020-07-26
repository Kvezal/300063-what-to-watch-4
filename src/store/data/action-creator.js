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

const updateFilm = (payload) => ({
  type: ActionType.UPDATE_FILM,
  payload,
});

const changeCommentStatus = (payload) => ({
  type: ActionType.CHANGE_COMMENT_STATUS,
  payload,
});

export {
  loadFilms,
  loadFavoriteFilms,
  loadPromoFilm,
  loadFilmReviews,
  updateFilm,
  changeCommentStatus,
};
