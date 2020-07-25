import NameSpace from "@store/name-space";


const NAME_SPACE = NameSpace.DATA;

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  CHOOSE_GENRE: `CHOOSE_GENRE`,
  CHOOSE_FILM_ID: `CHOOSE_FILM_ID`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_FILM_REVIEWS: `LOAD_FILM_REVIEWS`,
};

const DataErrorNotificationName = {
  FILMS: `${NAME_SPACE}:FILMS`,
  PROMO_FILM: `${NAME_SPACE}:PROMO_FILM`,
  FILM_COMMENT: `${NAME_SPACE}:FILM_COMMENT`,
};

const URLHandlerPath = {
  FILMS: `/films`,
  PROMO_FILM: `/films/promo`,
  FILM_COMMENT: `/comments/:filmId`,
};


export {
  ActionType,
  DataErrorNotificationName,
  URLHandlerPath,
};
