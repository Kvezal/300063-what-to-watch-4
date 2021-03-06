import {IFilm, IReview} from "@common/types";

import {
  EDataAction,
  ECommentStatus,
  ILoadPromoFilmAction,
  ILoadFavoriteFilmsAction,
  ILoadFilmReviewsAction,
  IChangeCommentStatusAction,
  IUpdatePromoFilmAction,
  IUpdateFilmAction,
  ILoadFilmsAction,
} from "./interface";


const loadFilms = (payload: IFilm[]): ILoadFilmsAction => ({
  type: EDataAction.LOAD_FILMS,
  payload,
});

const loadFavoriteFilms = (payload: IFilm[]): ILoadFavoriteFilmsAction => ({
  type: EDataAction.LOAD_FAVORITE_FILMS,
  payload,
});

const loadPromoFilm = (payload: IFilm): ILoadPromoFilmAction => ({
  type: EDataAction.LOAD_PROMO_FILM,
  payload,
});

const loadFilmReviews = (payload: IReview[]): ILoadFilmReviewsAction => ({
  type: EDataAction.LOAD_FILM_REVIEWS,
  payload,
});

const changeCommentStatus = (payload: ECommentStatus): IChangeCommentStatusAction => ({
  type: EDataAction.CHANGE_COMMENT_STATUS,
  payload,
});

const updatePromoFilm = (payload: IFilm): IUpdatePromoFilmAction => ({
  type: EDataAction.UPDATE_PROMO_FILM,
  payload,
});

const updateFilm = (payload: IFilm): IUpdateFilmAction => ({
  type: EDataAction.UPDATE_FILM,
  payload,
});

export {
  loadFilms,
  loadFavoriteFilms,
  loadPromoFilm,
  loadFilmReviews,
  changeCommentStatus,
  updatePromoFilm,
  updateFilm,
};
