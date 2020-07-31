import {IFilm} from "@common/types";


export interface IMainProps {
  authorizationStatus: string;
  tabList: string[];
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
