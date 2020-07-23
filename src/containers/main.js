import {connect} from "react-redux";

import Main from "@pages/main/main";
import {chooseGenre} from "@store/data/action-creator";
import {getFilteredFilmsByGenre, getPromoFilm} from "@store/data/selectors";
import {FavoriteFilmStatus} from "@store/data/const";
import {changeFavoriteFilmStatus} from "@store/data/operation";
import {getAuthorizedFlag, getAvatar} from "@store/user/selector";


const mapStateToProps = (state) => ({
  avatar: getAvatar(state),
  films: getFilteredFilmsByGenre(state),
  promoFilm: getPromoFilm(state),
  isAuthorized: getAuthorizedFlag(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilmsWithGenreChoose: (genre) => {
    dispatch(chooseGenre(genre));
  },

  onFavoriteFilmClick: (film) => {
    const favoriteStatus = film.isFavorite ? FavoriteFilmStatus.ADD : FavoriteFilmStatus.DELETE;
    dispatch(changeFavoriteFilmStatus(film.id, favoriteStatus));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
