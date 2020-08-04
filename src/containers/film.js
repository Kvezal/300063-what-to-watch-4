import {connect} from "react-redux";

import {withLoading} from "@common/hocs";
import Film from "@pages/film/film";
import {getCurrentFilm, getLikedFilms, getReviews} from "@store/data/selectors";
import {getAuthorizationStatus, getAvatar} from "@store/user/selector";
import {changeFavoriteFilmStatus, loadFilmReviews} from "@store/data/operation";
import {FavoriteFilmActionType} from "@store/data/const";


const FilmWrapper = withLoading(Film);

const mapStateToProps = (state, props) => ({
  avatar: getAvatar(state),
  likedFilms: getLikedFilms(state, props),
  reviews: getReviews(state, props),
  info: getCurrentFilm(state, props),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteFilmClick: (film) => {
    const favoriteFilmActionType = film.isFavorite
      ? FavoriteFilmActionType.DELETE
      : FavoriteFilmActionType.ADD;
    dispatch(changeFavoriteFilmStatus(film.id, favoriteFilmActionType));
  },

  onReviewsLoad: (filmId) => {
    dispatch(loadFilmReviews(filmId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmWrapper);
