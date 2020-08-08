import {Omit} from "utility-types";

import {IFilm, IReview} from "@common/types";
import {IFilmProps} from "@pages/film";
import {EFavoriteFilmActionType, ILoadFavoriteFilmsAction} from "@store/data/interface";
import {EAuthorizationStatus} from "@store/user/interface";


export interface IFilmMapStateToProps {
  avatar: string;
  likedFilms: IFilm[];
  reviews: IReview[];
  info: IFilm;
  authorizationStatus: EAuthorizationStatus;
  favoriteFilms: IFilm[];
}

export interface IFilmMapDispatchToProps {
  loadFavoriteFilms: (films: IFilm[]) => ILoadFavoriteFilmsAction;
  onFavoriteFilmClick: (filmId: number, status: EFavoriteFilmActionType) => Promise<IFilm | void>;
  onReviewsLoad: (filmId: number) => Promise<void>;
}

type TChangedFilmDispatchProps = `onFavoriteFilmClick` | `loadFavoriteFilms`;

export interface IFilmDispatchProps extends Omit<IFilmMapDispatchToProps, TChangedFilmDispatchProps> {
  onFavoriteFilmClick: (film: IFilm) => Promise<void>;
}

export type IFilmMergeProps = IFilmMapStateToProps & IFilmProps & IFilmDispatchProps;
