import {EFilmTab} from "@common/enums";
import {IFilm, IReview} from "@common/types";


export interface IFilmProps {
  info: IFilm;
  likedFilms: IFilm[];
  avatar: string;
  tabList: EFilmTab[];
  activeTab: EFilmTab;
  onActiveTabChange: (id: string) => void;
  reviews: IReview[];
  authorizationStatus: string;
  onReviewsLoad: (filmId: number) => void;
  onFavoriteFilmClick: (film: IFilm) => void;
}
