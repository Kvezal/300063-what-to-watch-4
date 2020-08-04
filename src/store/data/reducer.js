import {extend} from "@common/utils";

import {ActionType, CommentStatus} from "./const";


const initialState = {
  films: null,
  promoFilm: null,
  filmReviews: null,
  favoriteFilms: null,
  commentStatus: CommentStatus.NONE,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
      });
    case ActionType.LOAD_FILM_REVIEWS:
      return extend(state, {
        filmReviews: action.payload,
      });
    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload,
      });
    case ActionType.CHANGE_COMMENT_STATUS:
      return extend(state, {
        commentStatus: action.payload,
      });
    case ActionType.ADD_FAVORITE_FILM:
      return extend(state, {
        favoriteFilms: state.favoriteFilms.some((film) => film.id === action.payload.id)
          ? state.favoriteFilms.map((film) => film.id === action.payload.id ? action.payload : film)
          : state.favoriteFilms.concat(action.payload),
      });
    case ActionType.REMOVE_FAVORITE_FILM:
      return extend(state, {
        favoriteFilms: state.favoriteFilms.filter((film) => film.id !== action.payload.id),
      });
    case ActionType.UPDATE_FILM:
      return extend(state, {
        films: state.films.map((film) => film.id === action.payload.id ? action.payload : film),
      });
    case ActionType.UPDATE_PROMO_FILM:
      return extend(state, {
        promoFilm: state.promoFilm.id === action.payload.id ? action.payload : state.promoFilm,
      });
    default:
      return state;
  }
};

export default reducer;
