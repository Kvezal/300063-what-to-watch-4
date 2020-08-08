import {AxiosInstance} from "axios";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {IFilm} from "@common/types";
import {getUpdatedFavoriteFilms} from "@common/utils";
import {withLoading} from "@hocs/index";
import {IDispatch} from "@middlewares/interface";
import {Film, IFilmProps} from "@pages/film";
import {loadFavoriteFilms} from "@store/data/action-creator";
import {getCurrentFilm, getFavoriteFilms, getLikedFilms, getReviews} from "@store/data/selectors";
import {changeFavoriteFilmStatus, loadFilmReviews} from "@store/data/operation";
import {EFavoriteFilmActionType} from "@store/data/interface";
import {getAuthorizationStatus, getAvatar} from "@store/user/selector";
import {TStoreAction, TStoreState} from "@store/interface";

import {IFilmMapDispatchToProps, IFilmMapStateToProps, IFilmMergeProps, IFilmDispatchProps} from "./interface";


const FilmWrapper = withLoading(Film);

const mapStateToProps = (state: TStoreState, props: IFilmProps): IFilmMapStateToProps => ({
  avatar: getAvatar(state),
  likedFilms: getLikedFilms(state, props),
  reviews: getReviews(state),
  info: getCurrentFilm(state, props),
  authorizationStatus: getAuthorizationStatus(state),
  favoriteFilms: getFavoriteFilms(state),
});

const mapDispatchToProps = (dispatch: IDispatch<TStoreState, AxiosInstance, TStoreAction>): IFilmMapDispatchToProps => {
  return bindActionCreators({
    loadFavoriteFilms,
    onFavoriteFilmClick: changeFavoriteFilmStatus,
    onReviewsLoad: loadFilmReviews,
  }, dispatch);
};

const mergeProps = (
    stateProps: IFilmMapStateToProps,
    dispatchProps: IFilmMapDispatchToProps,
    ownProps: IFilmProps
): IFilmMergeProps => {
  return Object.assign<{}, IFilmMapStateToProps, IFilmProps, IFilmDispatchProps>({}, stateProps, ownProps, {
    onReviewsLoad: dispatchProps.onReviewsLoad,
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

export default connect<IFilmMapStateToProps, IFilmMapDispatchToProps, IFilmMergeProps>(mapStateToProps, mapDispatchToProps, mergeProps)(FilmWrapper);
