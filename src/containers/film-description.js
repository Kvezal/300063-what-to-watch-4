import {connect} from "react-redux";

import FilmDescription from "@pages/film-description/film-description";
import {chooseFilmId} from "@store/data/action-creator";
import {getFilmById, getFilteredFilmsByGenre, getReviews} from "@store/data/selectors";


const mapStateToProps = (state) => ({
  films: getFilteredFilmsByGenre(state),
  likedFilms: getFilteredFilmsByGenre(state),
  reviews: getReviews(state),
  info: getFilmById(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilmChoose: (filmId) => {
    dispatch(chooseFilmId(filmId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmDescription);
