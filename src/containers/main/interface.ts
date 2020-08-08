import {Omit} from "utility-types";

import {IFilm} from "@common/types";
import {IMainProps} from "@pages/main/interface";
import {EFavoriteFilmActionType, ILoadFavoriteFilmsAction} from "@store/data/interface";
import {EAuthorizationStatus} from "@store/user/interface";


export interface IMainMapStateToProps {
  avatar: string;
  films: IFilm[];
  promoFilm: IFilm;
  authorizationStatus: EAuthorizationStatus;
  genres: string[];
  favoriteFilms: IFilm[];
}

export interface IMainMapDispatchToProps {
  onFavoriteFilmClick: (filmId: number, status: EFavoriteFilmActionType) => Promise<IFilm | void>;
  loadFavoriteFilms: (films: IFilm[]) => ILoadFavoriteFilmsAction;
}

type TChangedMainDispatchProps = `onFavoriteFilmClick`;

export interface IMainDispatchProps extends Omit<IMainMapDispatchToProps, TChangedMainDispatchProps> {
  onFavoriteFilmClick: (film: IFilm) => Promise<void>;
}

export type IMainMergeProps = IMainMapStateToProps & IMainProps & IMainDispatchProps;
