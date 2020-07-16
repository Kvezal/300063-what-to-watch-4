import {GenreEnum} from "@common/enums";
import {extend} from "@common/utils";

import ActionType from "./action-type";


const initialState = {
  films: [],
  genre: GenreEnum.ALL,
  currentFilmId: 1,
  promoFilm: {},
  filmReviews: [],
  notifications: [],
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
    case ActionType.ADD_ERROR_NOTIFICATION:
      const notifications = state.notifications.slice();
      notifications.push(action.payload);
      return extend(state, {
        notifications,
      });
    case ActionType.REMOVE_NOTIFICATION:
      const filteredNotifications = state.notifications.slice()
        .filter((notification) => notification.id !== action.payload);
      return extend(state, {
        notifications: filteredNotifications,
      });
    default:
      return state;
  }
};

export default reducer;