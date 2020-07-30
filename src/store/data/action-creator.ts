import {FilmInterface, ReviewInterface} from "@common/types";
import {IDataAction, EDataAction, ECommentStatus} from "./interface";


const loadFilms = (payload: FilmInterface[]): IDataAction<FilmInterface[]> => ({
  type: EDataAction.LOAD_FILMS,
  payload,
});

const loadFavoriteFilms = (payload: FilmInterface[]): IDataAction<FilmInterface[]> => ({
  type: EDataAction.LOAD_FAVORITE_FILMS,
  payload,
});

const loadPromoFilm = (payload: FilmInterface): IDataAction<FilmInterface> => ({
  type: EDataAction.LOAD_PROMO_FILM,
  payload,
});

const loadFilmReviews = (payload: ReviewInterface[]): IDataAction<ReviewInterface[]> => ({
  type: EDataAction.LOAD_FILM_REVIEWS,
  payload,
});

const changeCommentStatus = (payload: ECommentStatus): IDataAction<ECommentStatus> => ({
  type: EDataAction.CHANGE_COMMENT_STATUS,
  payload,
});

const addFavoriteFilm = (payload: FilmInterface): IDataAction<FilmInterface> => ({
  type: EDataAction.ADD_FAVORITE_FILM,
  payload,
});

const removeFavoriteFilm = (payload: FilmInterface): IDataAction<FilmInterface> => ({
  type: EDataAction.REMOVE_FAVORITE_FILM,
  payload,
});

const updatePromoFilm = (payload: FilmInterface): IDataAction<FilmInterface> => ({
  type: EDataAction.UPDATE_PROMO_FILM,
  payload,
});

const updateFilm = (payload: FilmInterface): IDataAction<FilmInterface> => ({
  type: EDataAction.UPDATE_FILM,
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
  updatePromoFilm,
  updateFilm,
};
