import {connect} from "react-redux";

import {withLoading} from "@common/hocs";
import Main from "@pages/main/main";
import {getFavoriteFilms, getFilteredFilmsByGenre, getPromoFilm} from "@store/data/selectors";
import {changeFavoriteFilmStatus} from "@store/data/operation";
import {getAuthorizationStatus, getAvatar} from "@store/user/selector";


const MainWrapper = withLoading(Main);


const mapStateToProps = (state, props) => ({
  avatar: getAvatar(state),
  films: getFilteredFilmsByGenre(state, props),
  promoFilm: getPromoFilm(state),
  authorizationStatus: getAuthorizationStatus(state),
  favoriteFilms: getFavoriteFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteFilmClick: (filmId, status) => {
    dispatch(changeFavoriteFilmStatus(filmId, status));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainWrapper);
