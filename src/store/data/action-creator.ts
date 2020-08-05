import {IFilm, IReview} from "@common/types";
import {IDataAction, EDataAction, ECommentStatus} from "./interface";


const loadFilms = (payload: IFilm[]): IDataAction<IFilm[]> => ({
  type: EDataAction.LOAD_FILMS,
  payload,
});

const loadFavoriteFilms = (payload: IFilm[]): IDataAction<IFilm[]> => ({
  type: EDataAction.LOAD_FAVORITE_FILMS,
  payload,
});

const loadPromoFilm = (payload: IFilm): IDataAction<IFilm> => ({
  type: EDataAction.LOAD_PROMO_FILM,
  payload,
});

const loadFilmReviews = (payload: IReview[]): IDataAction<IReview[]> => ({
  type: EDataAction.LOAD_FILM_REVIEWS,
  payload,
});

const changeCommentStatus = (payload: ECommentStatus): IDataAction<ECommentStatus> => ({
  type: EDataAction.CHANGE_COMMENT_STATUS,
  payload,
});

const addFavoriteFilm = (payload: IFilm): IDataAction<IFilm> => ({
  type: EDataAction.ADD_FAVORITE_FILM,
  payload,
});

const removeFavoriteFilm = (payload: IFilm): IDataAction<IFilm> => ({
  type: EDataAction.REMOVE_FAVORITE_FILM,
  payload,
});

const updatePromoFilm = (payload: IFilm): IDataAction<IFilm> => ({
  type: EDataAction.UPDATE_PROMO_FILM,
  payload,
});

const updateFilm = (payload: IFilm): IDataAction<IFilm> => ({
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
