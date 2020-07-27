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
        favoriteFilms: state.favoriteFilms.concat(action.payload),
      });
    case ActionType.REMOVE_FAVORITE_FILM:
      return extend(state, {
        favoriteFilms: state.favoriteFilms.filter((film) => film.id !== action.payload.id),
      });
    default:
      return state;
  }
};

export default reducer;
