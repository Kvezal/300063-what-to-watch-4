import {EGenre} from "@common/enums";
import {extend} from "@common/utils";

import {ActionType} from "./const";


const initialState = {
  films: null,
  genre: EGenre.ALL,
  promoFilm: null,
  filmReviews: null,
  favoriteFilms: null,
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
    case ActionType.CHOOSE_GENRE:
      return extend(state, {
        genre: action.payload,
      });
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
    default:
      return state;
  }
};

export default reducer;
