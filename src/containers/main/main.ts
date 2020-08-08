import {AxiosInstance} from "axios";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {IFilm} from "@common/types";
import {getUpdatedFavoriteFilms} from "@common/utils";
import {withActiveTab, withLoading} from "@hocs/index";
import Main from "@pages/main/main";
import {EFavoriteFilmActionType} from "@store/data/interface";
import {getFavoriteFilms, getFilmGenres, getFilteredFilmsByGenre, getPromoFilm} from "@store/data/selectors";
import {changeFavoriteFilmStatus} from "@store/data/operation";
import {getAuthorizationStatus, getAvatar} from "@store/user/selector";
import {loadFavoriteFilms} from "@store/data/action-creator";
import {TStoreAction, TStoreState} from "@store/interface";
import {IDispatch} from "@middlewares/interface";
import {IMainProps} from "@pages/main/interface";

import {
  IMainDispatchProps,
  IMainMapDispatchToProps,
  IMainMapStateToProps,
  IMainMergeProps
} from "./interface";


const MainWrapper = withLoading(withActiveTab(Main));

const mapStateToProps = (state: TStoreState, props: IMainProps): IMainMapStateToProps => ({
  avatar: getAvatar(state),
  films: getFilteredFilmsByGenre(state, props),
  promoFilm: getPromoFilm(state),
  authorizationStatus: getAuthorizationStatus(state),
  genres: getFilmGenres(state),
  favoriteFilms: getFavoriteFilms(state),
});

const mapDispatchToProps = (dispatch: IDispatch<TStoreState, AxiosInstance, TStoreAction>): IMainMapDispatchToProps => {
  return bindActionCreators({
    onFavoriteFilmClick: changeFavoriteFilmStatus,
    loadFavoriteFilms,
  }, dispatch);
};

const mergeProps = (stateProps: IMainMapStateToProps, dispatchProps: IMainMapDispatchToProps, ownProps: IMainProps): IMainMergeProps => {
  return Object.assign<{}, IMainMapStateToProps, IMainProps, IMainDispatchProps>({}, stateProps, ownProps, {
    loadFavoriteFilms: dispatchProps.loadFavoriteFilms,
    onFavoriteFilmClick: (currentFilm: IFilm) => {
      const favoriteFilmActionType = currentFilm.isFavorite
        ? EFavoriteFilmActionType.DELETE
        : EFavoriteFilmActionType.ADD;
      return dispatchProps.onFavoriteFilmClick(currentFilm.id, favoriteFilmActionType)
        .then((film: IFilm) => {
          const favoriteFilms = getUpdatedFavoriteFilms(stateProps.favoriteFilms, film);
          dispatchProps.loadFavoriteFilms(favoriteFilms);
        });
    },
  });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(MainWrapper);
