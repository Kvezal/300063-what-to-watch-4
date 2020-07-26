import {connect} from "react-redux";

import {withLoading} from "@common/hocs";
import FilmDescription from "@pages/film-description/film-description";
import {
  getCurrentFilm,
  getLikedFilms,
  getReviews
} from "@store/data/selectors";
import {getAuthorizedFlag, getAvatar} from "@store/user/selector";
import {changeFavoriteFilmStatus, loadFilmReviews} from "@store/data/operation";
import {FavoriteFilmStatus} from "@store/data/const";


const FilmDescriptionWrapper = withLoading(FilmDescription);

const mapStateToProps = (state, props) => ({
  avatar: getAvatar(state),
  likedFilms: getLikedFilms(state, props),
  reviews: getReviews(state, props),
  info: getCurrentFilm(state, props),
  isAuthorized: getAuthorizedFlag(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteFilmClick: (film) => {
    const favoriteStatus = film.isFavorite ? FavoriteFilmStatus.ADD : FavoriteFilmStatus.DELETE;
    dispatch(changeFavoriteFilmStatus(film.id, favoriteStatus));
  },

  onReviewsLoad: (filmId) => {
    dispatch(loadFilmReviews(filmId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmDescriptionWrapper);
