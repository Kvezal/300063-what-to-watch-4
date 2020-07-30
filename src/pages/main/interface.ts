import {IFilm} from "@common/types";
import {EGenre} from "@common/enums";
import {ITab} from "@components/tabs/interface";


export interface IMainProps {
  authorizationStatus: string;
  tabList: ITab[];
  activeTab: EGenre;
  step: number;
  promoFilm: IFilm;
  films: IFilm[];
  avatar: string;
  onActiveTabChange: (tab: EGenre) => void;
  onStepChange: () => void;
  onStepReset: () => void;
  onFavoriteFilmClick: (film: IFilm) => void;
}
