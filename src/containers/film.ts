import {connect} from "react-redux";

import {withLoading} from "@hocs/index";
import Film from "@pages/film/film";
import {getCurrentFilm, getLikedFilms, getReviews} from "@store/data/selectors";
import {getAuthorizationStatus, getAvatar} from "@store/user/selector";
import {changeFavoriteFilmStatus, loadFilmReviews} from "@store/data/operation";
import {EFavoriteFilmActionType} from "@store/data/interface";
import {IFilm} from "@common/types";


const FilmWrapper = withLoading(Film);

const mapStateToProps = (state, props) => ({
  avatar: getAvatar(state),
  likedFilms: getLikedFilms(state, props),
  reviews: getReviews(state),
  info: getCurrentFilm(state, props),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteFilmClick: (film: IFilm): void => {
    const favoriteFilmActionType = film.isFavorite
      ? EFavoriteFilmActionType.DELETE
      : EFavoriteFilmActionType.ADD;
    dispatch(changeFavoriteFilmStatus(film.id, favoriteFilmActionType));
  },

  onReviewsLoad: (filmId: number): void => {
    dispatch(loadFilmReviews(filmId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmWrapper);