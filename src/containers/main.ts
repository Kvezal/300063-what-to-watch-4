import {connect} from "react-redux";

import {getUpdatedFavoriteFilms} from "@common/utils";
import {withActiveTab, withLoading} from "@hocs/index";
import Main from "@pages/main/main";
import {EFavoriteFilmActionType} from "@store/data/interface";
import {getFavoriteFilms, getFilmGenres, getFilteredFilmsByGenre, getPromoFilm} from "@store/data/selectors";
import {changeFavoriteFilmStatus} from "@store/data/operation";
import {getAuthorizationStatus, getAvatar} from "@store/user/selector";
import {IFilm} from "@common/types";
import {bindActionCreators} from "redux";
import {loadFavoriteFilms} from "@store/data/action-creator";


const MainWrapper = withLoading(withActiveTab(Main));

const mapStateToProps = (state, props) => ({
  avatar: getAvatar(state),
  films: getFilteredFilmsByGenre(state, props),
  promoFilm: getPromoFilm(state),
  authorizationStatus: getAuthorizationStatus(state),
  genres: getFilmGenres(state),
  favoriteFilms: getFavoriteFilms(state),
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onFavoriteFilmClick: changeFavoriteFilmStatus,
    loadFavoriteFilms,
  }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, stateProps, ownProps, {
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(MainWrapper);
