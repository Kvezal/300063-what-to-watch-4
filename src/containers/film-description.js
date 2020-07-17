import {connect} from "react-redux";

import FilmDescription from "@pages/film-description/film-description";
import {chooseFilmId} from "@store/data/action-creator";
import {getFilmById, getFilteredFilmsByGenre, getLikedFilms, getReviews} from "@store/data/selectors";
import {getAuthorizedFlag} from "@store/user/selector";


const mapStateToProps = (state) => ({
  films: getFilteredFilmsByGenre(state),
  likedFilms: getLikedFilms(state),
  reviews: getReviews(state),
  info: getFilmById(state),
  isAuthorized: getAuthorizedFlag(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilmChoose: (filmId) => {
    dispatch(chooseFilmId(filmId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmDescription);
