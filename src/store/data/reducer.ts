import {FilmInterface, ReviewInterface} from "@common/types";
import {extend} from "@common/utils";

import {ECommentStatus, EDataAction, IDataState, TDataAction} from "./interface";
import {Reducer} from "redux";


const initialState: IDataState = {
  films: null,
  promoFilm: null,
  filmReviews: null,
  favoriteFilms: null,
  commentStatus: ECommentStatus.NONE,
};

const getFavoriteFilms = (filmList: FilmInterface[], film: FilmInterface) => {
  return filmList.some((film: FilmInterface) => film.id === (film as FilmInterface).id)
    ? filmList.map((film: FilmInterface) => film.id === (film as FilmInterface).id ? film : film)
    : filmList.concat(film as FilmInterface);
};

const reducer: Reducer<IDataState, TDataAction> = (state: IDataState = initialState, action: TDataAction) => {
  switch (action.type) {
    case EDataAction.LOAD_FILMS:
      return extend(state, {
        films: action.payload as FilmInterface[],
      });
    case EDataAction.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload as FilmInterface,
      });
    case EDataAction.LOAD_FILM_REVIEWS:
      return extend(state, {
        filmReviews: action.payload as ReviewInterface[],
      });
    case EDataAction.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload as FilmInterface[],
      });
    case EDataAction.CHANGE_COMMENT_STATUS:
      return extend(state, {
        commentStatus: action.payload as ECommentStatus,
      });
    case EDataAction.ADD_FAVORITE_FILM:
      return extend(state, {
        favoriteFilms: getFavoriteFilms(state.favoriteFilms, action.payload as FilmInterface),
      });
    case EDataAction.REMOVE_FAVORITE_FILM:
      return extend(state, {
        favoriteFilms: state.favoriteFilms.filter((film) => film.id !== (action.payload as FilmInterface).id),
      });
    case EDataAction.UPDATE_FILM:
      return extend(state, {
        films: state.films.map((film: FilmInterface) => film.id === (action.payload as FilmInterface).id ? (action.payload as FilmInterface) : film),
      });
    case EDataAction.UPDATE_PROMO_FILM:
      return extend(state, {
        promoFilm: state.promoFilm.id === (action.payload as FilmInterface).id ? (action.payload as FilmInterface) : state.promoFilm,
      });
    default:
      return state;
  }
};

export default reducer;
