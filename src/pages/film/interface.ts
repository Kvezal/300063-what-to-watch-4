import {FilmInterface, ReviewInterface} from "@common/types";
import {ITab} from "@components/tabs/interface";
import {EFilmTab} from "@common/enums";


interface IFilmProps {
  info: FilmInterface;
  likedFilms: FilmInterface[];
  avatar: string;
  tabList: ITab[];
  activeTab: EFilmTab;
  onActiveTabChange: (id: string) => void;
  reviews: ReviewInterface[];
  authorizationStatus: string;
  onReviewsLoad: (filmId: number) => void;
  onFavoriteFilmClick: (film: FilmInterface) => void;
}

export {
  IFilmProps,
};
