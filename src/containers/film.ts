import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {IFilm} from "@common/types";
import {getUpdatedFavoriteFilms} from "@common/utils";
import {withLoading} from "@hocs/index";
import Film from "@pages/film/film";
import {getCurrentFilm, getFavoriteFilms, getLikedFilms, getReviews} from "@store/data/selectors";
import {getAuthorizationStatus, getAvatar} from "@store/user/selector";
import {changeFavoriteFilmStatus, loadFilmReviews} from "@store/data/operation";
import {EFavoriteFilmActionType} from "@store/data/interface";
import {loadFavoriteFilms} from "@store/data/action-creator";


const FilmWrapper = withLoading(Film);

const mapStateToProps = (state, props) => ({
  avatar: getAvatar(state),
  likedFilms: getLikedFilms(state, props),
  reviews: getReviews(state),
  info: getCurrentFilm(state, props),
  authorizationStatus: getAuthorizationStatus(state),
  favoriteFilms: getFavoriteFilms(state),
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onFavoriteFilmClick: changeFavoriteFilmStatus,
    onReviewsLoad: loadFilmReviews,
    loadFavoriteFilms,
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, stateProps, ownProps, {
    onReviewsLoad: dispatchProps.onReviewsLoad,
    onFavoriteFilmClick: (currentFilm) => {
      const favoriteFilmActionType = currentFilm.isFavorite
        ? EFavoriteFilmActionType.DELETE
        : EFavoriteFilmActionType.ADD;
      dispatchProps.onFavoriteFilmClick(currentFilm.id, favoriteFilmActionType)
        .then((film: IFilm) => {
          const favoriteFilms = getUpdatedFavoriteFilms(stateProps.favoriteFilms, film);
          dispatchProps.loadFavoriteFilms(favoriteFilms);
        });
    },
  });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(FilmWrapper);
