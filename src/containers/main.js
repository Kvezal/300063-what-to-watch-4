import {connect} from "react-redux";

import {withLoading} from "@common/hocs";
import Main from "@pages/main/main";
import {getFilteredFilmsByGenre, getPromoFilm} from "@store/data/selectors";
import {changeFavoriteFilmStatus} from "@store/data/operation";
import {getAuthorizationStatus, getAvatar} from "@store/user/selector";
import {FavoriteFilmActionType} from "@store/data/const";


const MainWrapper = withLoading(Main);


const mapStateToProps = (state, props) => ({
  avatar: getAvatar(state),
  films: getFilteredFilmsByGenre(state, props),
  promoFilm: getPromoFilm(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteFilmClick: (film) => {
    const favoriteFilmActionType = film.isFavorite
      ? FavoriteFilmActionType.DELETE
      : FavoriteFilmActionType.ADD;
    dispatch(changeFavoriteFilmStatus(film.id, favoriteFilmActionType));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainWrapper);
