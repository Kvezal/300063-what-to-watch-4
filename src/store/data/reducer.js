import {GenreEnum} from "@common/enums";
import {extend} from "@common/utils";

import {ActionType} from "./const";


const initialState = {
  films: [],
  genre: GenreEnum.ALL,
  currentFilmId: 5,
  promoFilm: {},
  filmReviews: [],
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
    case ActionType.CHOOSE_FILM_ID:
      return extend(state, {
        currentFilmId: action.payload,
      });
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
      });
    case ActionType.LOAD_FILM_REVIEWS:
      return extend(state, {
        filmReviews: action.payload,
      });
    default:
      return state;
  }
};

export default reducer;
