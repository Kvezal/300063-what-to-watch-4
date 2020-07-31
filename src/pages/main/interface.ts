import {IFilm} from "@common/types";


export interface IMainProps {
  authorizationStatus: string;
  genres: string[];
  activeTab: string;
  step: number;
  promoFilm: IFilm;
  films: IFilm[];
  avatar: string;
  onActiveTabChange: (tab: string) => void;
  onStepChange: () => void;
  onStepReset: () => void;
  onFavoriteFilmClick: (film: IFilm) => void;
}
