import {connect} from "react-redux";

import {withLoading, withVideoPlayer} from "@hocs/index";
import Player from "@pages/player/player";
import {getCurrentFilmPicturePreview, getCurrentFilmVideoSource} from "@store/data/selectors";


const PlayerWrapper = withLoading(withVideoPlayer(Player));

const mapStateToProps = (state, props) => ({
  source: getCurrentFilmVideoSource(state, props),
  poster: getCurrentFilmPicturePreview(state, props),
});

export default connect(mapStateToProps)(PlayerWrapper);
