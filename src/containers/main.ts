import {connect} from "react-redux";

import {withActiveTab, withLoading} from "@hocs/index";
import Main from "@pages/main/main";
import {EFavoriteFilmActionType} from "@store/data/interface";
import {getFilmGenres, getFilteredFilmsByGenre, getPromoFilm} from "@store/data/selectors";
import {changeFavoriteFilmStatus} from "@store/data/operation";
import {getAuthorizationStatus, getAvatar} from "@store/user/selector";


const MainWrapper = withLoading(withActiveTab(Main));


const mapStateToProps = (state, props) => ({
  avatar: getAvatar(state),
  films: getFilteredFilmsByGenre(state, props),
  promoFilm: getPromoFilm(state),
  authorizationStatus: getAuthorizationStatus(state),
  genres: getFilmGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteFilmClick: (film) => {
    const favoriteFilmActionType = film.isFavorite
      ? EFavoriteFilmActionType.DELETE
      : EFavoriteFilmActionType.ADD;
    dispatch(changeFavoriteFilmStatus(film.id, favoriteFilmActionType));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainWrapper);
