import {FilmInterface} from "@common/types";
import {EGenre} from "@common/enums";
import {ITab} from "@components/tabs/interface";


interface IMainProps {
  authorizationStatus: string;
  tabList: ITab[];
  activeTab: EGenre;
  step: number;
  promoFilm: FilmInterface;
  films: FilmInterface[];
  avatar: string;
  onActiveTabChange: (tab: EGenre) => void;
  onStepChange: () => void;
  onStepReset: () => void;
  onFavoriteFilmClick: (film: FilmInterface) => void;
}

export {
  IMainProps,
};
