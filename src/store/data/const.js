import NameSpace from "@store/name-space";


const NAME_SPACE = NameSpace.DATA;

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  CHOOSE_FILM_ID: `CHOOSE_FILM_ID`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_FILM_REVIEWS: `LOAD_FILM_REVIEWS`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  CHANGE_COMMENT_STATUS: `CHANGE_COMMENT_STATUS`,
  ADD_FAVORITE_FILM: `ADD_FAVORITE_FILM`,
  REMOVE_FAVORITE_FILM: `REMOVE_FAVORITE_FILM`,
};

const DataErrorNotificationName = {
  FILMS: `${NAME_SPACE}:FILMS`,
  PROMO_FILM: `${NAME_SPACE}:PROMO_FILM`,
  FILM_COMMENT: `${NAME_SPACE}:FILM_COMMENT`,
  FAVORITE_FILM_LIST: `${NAME_SPACE}:FAVORITE_FILM_LIST`,
  FAVORITE_FILM_STATUS: `${NAME_SPACE}:CHANGE_FAVORITE_FILM_STATUS`,
};

const URLHandlerPath = {
  FILMS: `/films`,
  PROMO_FILM: `/films/promo`,
  FILM_COMMENT: `/comments/:filmId`,
  FAVORITE_FILM_LIST: `/favorite`,
  FAVORITE_FILM: `/favorite/:filmId/:status`,
};

const FavoriteFilmActionType = {
  ADD: `1`,
  DELETE: `0`,
};

const CommentStatus = {
  NONE: `NONE`,
  POSTING: `POSTING`,
  ERROR: `ERROR`,
};

export {
  ActionType,
  DataErrorNotificationName,
  URLHandlerPath,
  FavoriteFilmActionType,
  CommentStatus,
};
