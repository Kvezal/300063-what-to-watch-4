import {ActionCreator as DataActionCreator, Operation as DataOperation} from "./data/data";
import {getFilteredFilmsByGenre, getFilmById, getPromoFilm, getReviews} from "./data/selectors";
import reducer from "./reducer";


export {
  reducer,
  DataActionCreator,
  DataOperation,
  getFilteredFilmsByGenre,
  getFilmById,
  getPromoFilm,
  getReviews,
};
