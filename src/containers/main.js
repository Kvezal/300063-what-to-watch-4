import {connect} from "react-redux";

import {withLoading} from "@common/hocs";
import Main from "@pages/main/main";
import {getFilteredFilmsByGenre, getPromoFilm} from "@store/data/selectors";
import {FavoriteFilmStatus} from "@store/data/const";
import {changeFavoriteFilmStatus} from "@store/data/operation";
import {getAuthorizationStatus, getAvatar} from "@store/user/selector";


const MainWrapper = withLoading(Main);


const mapStateToProps = (state, props) => ({
  avatar: getAvatar(state),
  films: getFilteredFilmsByGenre(state, props),
  promoFilm: getPromoFilm(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteFilmClick: (film) => {
    const favoriteStatus = film.isFavorite ? FavoriteFilmStatus.ADD : FavoriteFilmStatus.DELETE;
    dispatch(changeFavoriteFilmStatus(film.id, favoriteStatus));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainWrapper);
