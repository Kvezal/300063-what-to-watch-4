import {IFilm} from "@common/types";
import {extend} from "@common/utils";

import {ECommentStatus, EDataAction, IDataState, TDataAction} from "./interface";


const initialState: IDataState = {
  films: null,
  promoFilm: null,
  filmReviews: null,
  favoriteFilms: null,
  commentStatus: ECommentStatus.NONE,
};

const getFavoriteFilms = (filmList: IFilm[], film: IFilm) => {
  return filmList.some((item: IFilm) => item.id === (film as IFilm).id)
    ? filmList.map((item: IFilm) => item.id === (film as IFilm).id ? film : item)
    : filmList.concat(film as IFilm);
};

const reducer = (state: IDataState = initialState, action: TDataAction): IDataState => {
  switch (action.type) {
    case EDataAction.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case EDataAction.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
      });
    case EDataAction.LOAD_FILM_REVIEWS:
      return extend(state, {
        filmReviews: action.payload,
      });
    case EDataAction.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload,
      });
    case EDataAction.CHANGE_COMMENT_STATUS:
      return extend(state, {
        commentStatus: action.payload,
      });
    case EDataAction.ADD_FAVORITE_FILM:
      return extend(state, {
        favoriteFilms: getFavoriteFilms(state.favoriteFilms, action.payload),
      });
    case EDataAction.REMOVE_FAVORITE_FILM:
      return extend(state, {
        favoriteFilms: state.favoriteFilms.filter((film) => film.id !== action.payload.id),
      });
    case EDataAction.UPDATE_FILM:
      return extend(state, {
        films: state.films.map((film: IFilm) => film.id === action.payload.id ? action.payload : film),
      });
    case EDataAction.UPDATE_PROMO_FILM:
      return extend(state, {
        promoFilm: state.promoFilm.id === action.payload.id ? action.payload : state.promoFilm,
      });
    default:
      return state;
  }
};

export default reducer;
