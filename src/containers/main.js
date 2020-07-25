import {connect} from "react-redux";

import Main from "@pages/main/main";
import {chooseFilmId, chooseGenre} from "@store/data/action-creator";
import {getFilteredFilmsByGenre, getPromoFilm} from "@store/data/selectors";
import {getAuthorizedFlag} from "@store/user/selector";


const mapStateToProps = (state) => ({
  films: getFilteredFilmsByGenre(state),
  promoFilm: getPromoFilm(state),
  isAuthorized: getAuthorizedFlag(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilmChoose: (filmId) => {
    dispatch(chooseFilmId(filmId));
  },

  chooseFilmsWithGenre: (genre) => {
    dispatch(chooseGenre(genre));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
