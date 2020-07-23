import {connect} from "react-redux";

import {withVideoPlayer} from "@common/hocs";
import Player from "@pages/player/player";
import {getFilmById, getFilteredFilmsByGenre} from "@store/data/selectors";


const PlayerWrapper = withVideoPlayer(Player);

const mapStateToProps = (state, props) => {
  const film = getFilmById(state, props);
  return {
    films: getFilteredFilmsByGenre(state),
    source: film ? film.source.video : ``,
    poster: film ? film.picture.cover : ``,
  };
};

export default connect(mapStateToProps)(PlayerWrapper);
