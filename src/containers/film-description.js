import {connect} from "react-redux";

import FilmDescription from "@pages/film-description/film-description";
import {ActionCreator as DataActionCreator} from "@store/data/data";
import {getFilmById, getFilteredFilmsByGenre, getReviews} from "@store/data/selectors";


const mapStateToProps = (state) => ({
  films: getFilteredFilmsByGenre(state),
  likedFilms: getFilteredFilmsByGenre(state),
  reviews: getReviews(state),
  info: getFilmById(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilmChoose: (filmId) => {
    dispatch(DataActionCreator.chooseFilmId(filmId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmDescription);
