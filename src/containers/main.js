import {connect} from "react-redux";

import Main from "@pages/main/main";
import {ActionCreator as DataActionCreator} from "@store/data/data";
import {getFilteredFilmsByGenre, getPromoFilm} from "@store/data/selectors";


const mapStateToProps = (state) => ({
  films: getFilteredFilmsByGenre(state),
  promoFilm: getPromoFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilmChoose: (filmId) => {
    dispatch(DataActionCreator.chooseFilmId(filmId));
  },

  chooseFilmsWithGenre: (genre) => {
    dispatch(DataActionCreator.chooseGenre(genre));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
