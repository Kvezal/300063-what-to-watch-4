import {AnyAction} from "redux";
import {FilmInterface, ReviewInterface} from "@common/types";


enum EDataAction {
  LOAD_FILMS = `LOAD_FILMS`,
  LOAD_PROMO_FILM = `LOAD_PROMO_FILM`,
  LOAD_FILM_REVIEWS = `LOAD_FILM_REVIEWS`,
  LOAD_FAVORITE_FILMS = `LOAD_FAVORITE_FILMS`,
  CHANGE_COMMENT_STATUS = `CHANGE_COMMENT_STATUS`,
  ADD_FAVORITE_FILM = `ADD_FAVORITE_FILM`,
  REMOVE_FAVORITE_FILM = `REMOVE_FAVORITE_FILM`,
  UPDATE_PROMO_FILM = `UPDATE_PROMO_FILM`,
  UPDATE_FILM = `UPDATE_FILM`,
}

enum EDataURLHandlerPath {
  FILMS = `/films`,
  PROMO_FILM = `/films/promo`,
  FILM_COMMENT = `/comments/:filmId`,
  FAVORITE_FILM_LIST = `/favorite`,
  FAVORITE_FILM = `/favorite/:filmId/:status`,
}

enum ECommentStatus {
  NONE = `NONE`,
  POSTING = `POSTING`,
  ERROR = `ERROR`,
}

enum EFavoriteFilmActionType {
  ADD = `1`,
  DELETE = `0`,
}

enum EDataErrorNotificationName {
  FILMS = `DATA:FILMS`,
  PROMO_FILM = `DATA:PROMO_FILM`,
  FILM_COMMENT = `DATA:FILM_COMMENT`,
  FAVORITE_FILM_LIST = `DATA:FAVORITE_FILM_LIST`,
  FAVORITE_FILM_STATUS = `DATA:CHANGE_FAVORITE_FILM_STATUS`,
}

interface IDataAction<T = null> extends AnyAction {
  type: EDataAction;
  payload: T;
}

interface IDataState {
  films: FilmInterface[];
  promoFilm: FilmInterface;
  filmReviews: ReviewInterface[];
  favoriteFilms: FilmInterface[];
  commentStatus: ECommentStatus;
}

type TDataAction = IDataAction<FilmInterface[] | FilmInterface | ReviewInterface[] | ECommentStatus>;

export {
  EDataAction,
  IDataAction,
  EDataURLHandlerPath,
  ECommentStatus,
  EFavoriteFilmActionType,
  EDataErrorNotificationName,
  TDataAction,
  IDataState,
};
