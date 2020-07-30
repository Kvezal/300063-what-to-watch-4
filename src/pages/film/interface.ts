import {IFilm, IReview} from "@common/types";
import {ITab} from "@components/tabs/interface";
import {EFilmTab} from "@common/enums";


export interface IFilmProps {
  info: IFilm;
  likedFilms: IFilm[];
  avatar: string;
  tabList: ITab[];
  activeTab: EFilmTab;
  onActiveTabChange: (id: string) => void;
  reviews: IReview[];
  authorizationStatus: string;
  onReviewsLoad: (filmId: number) => void;
  onFavoriteFilmClick: (film: IFilm) => void;
}
