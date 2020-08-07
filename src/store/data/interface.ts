import {IFilm, IReview} from "@common/types";


export enum EDataAction {
  LOAD_FILMS = `LOAD_FILMS`,
  LOAD_PROMO_FILM = `LOAD_PROMO_FILM`,
  LOAD_FILM_REVIEWS = `LOAD_FILM_REVIEWS`,
  LOAD_FAVORITE_FILMS = `LOAD_FAVORITE_FILMS`,
  CHANGE_COMMENT_STATUS = `CHANGE_COMMENT_STATUS`,
  UPDATE_PROMO_FILM = `UPDATE_PROMO_FILM`,
  UPDATE_FILM = `UPDATE_FILM`,
}

export enum EDataURLHandlerPath {
  FILMS = `/films`,
  PROMO_FILM = `/films/promo`,
  FILM_COMMENT = `/comments/:filmId`,
  FAVORITE_FILM_LIST = `/favorite`,
  FAVORITE_FILM = `/favorite/:filmId/:status`,
}

export enum ECommentStatus {
  NONE = `NONE`,
  POSTING = `POSTING`,
  ERROR = `ERROR`,
}

export enum EFavoriteFilmActionType {
  ADD = `1`,
  DELETE = `0`,
}

export enum EDataErrorNotificationName {
  FILMS = `DATA:FILMS`,
  PROMO_FILM = `DATA:PROMO_FILM`,
  FILM_COMMENT = `DATA:FILM_COMMENT`,
  FAVORITE_FILM_LIST = `DATA:FAVORITE_FILM_LIST`,
  FAVORITE_FILM_STATUS = `DATA:CHANGE_FAVORITE_FILM_STATUS`,
}

export interface ILoadFilmsAction {
  type: EDataAction.LOAD_FILMS;
  payload: IFilm[];
}

export interface ILoadFavoriteFilmsAction {
  type: EDataAction.LOAD_FAVORITE_FILMS;
  payload: IFilm[];
}

export interface ILoadPromoFilmAction {
  type: EDataAction.LOAD_PROMO_FILM;
  payload: IFilm;
}

export interface ILoadFilmReviewsAction {
  type: EDataAction.LOAD_FILM_REVIEWS;
  payload: IReview[];
}

export interface IChangeCommentStatusAction {
  type: EDataAction.CHANGE_COMMENT_STATUS;
  payload: ECommentStatus;
}

export interface IUpdatePromoFilmAction {
  type: EDataAction.UPDATE_PROMO_FILM;
  payload: IFilm;
}

export interface IUpdateFilmAction {
  type: EDataAction.UPDATE_FILM;
  payload: IFilm;
}

export interface IDataState {
  films: IFilm[];
  promoFilm: IFilm;
  filmReviews: IReview[];
  favoriteFilms: IFilm[];
  commentStatus: ECommentStatus;
}

export type TDataAction = ILoadFilmsAction
  | ILoadFavoriteFilmsAction
  | ILoadPromoFilmAction
  | ILoadFilmReviewsAction
  | IChangeCommentStatusAction
  | IUpdatePromoFilmAction
  | IUpdateFilmAction;
