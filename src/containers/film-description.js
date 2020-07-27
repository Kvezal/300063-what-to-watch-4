import {connect} from "react-redux";

import {withLoading} from "@common/hocs";
import FilmDescription from "@pages/film-description/film-description";
import {
  getCurrentFilm,
  getFavoriteFilms,
  getLikedFilms,
  getReviews
} from "@store/data/selectors";
import {getAuthorizationStatus, getAvatar} from "@store/user/selector";
import {changeFavoriteFilmStatus, loadFilmReviews} from "@store/data/operation";


const FilmDescriptionWrapper = withLoading(FilmDescription);

const mapStateToProps = (state, props) => ({
  avatar: getAvatar(state),
  likedFilms: getLikedFilms(state, props),
  favoriteFilms: getFavoriteFilms(state),
  reviews: getReviews(state, props),
  info: getCurrentFilm(state, props),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteFilmClick: (filmId, status) => {
    dispatch(changeFavoriteFilmStatus(filmId, status));
  },

  onReviewsLoad: (filmId) => {
    dispatch(loadFilmReviews(filmId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmDescriptionWrapper);
