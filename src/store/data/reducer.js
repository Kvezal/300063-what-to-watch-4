import {extend} from "@common/utils";

import {ActionType, CommentStatus} from "./const";


const initialState = {
  films: null,
  promoFilm: null,
  filmReviews: null,
  favoriteFilms: null,
  commentStatus: CommentStatus.NONE,
};

const updateItemFilm = (list, film) => {
  return list.reduce((result, item) => {
    if (item.id === film.id) {
      result.push(film);
    } else {
      result.push(item);
    }
    return result;
  }, []);
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
    case ActionType.UPDATE_FILM:
      return extend(state, {
        favoriteFilms: updateItemFilm(state.favoriteFilms, action.payload),
        films: updateItemFilm(state.films, action.payload),
        promoFilm: state.promoFilm.id === action.payload.id ? action.payload : state.promoFilm,
      });
    case ActionType.CHANGE_COMMENT_STATUS:
      return extend(state, {
        commentStatus: action.payload,
      });
    default:
      return state;
  }
};

export default reducer;
