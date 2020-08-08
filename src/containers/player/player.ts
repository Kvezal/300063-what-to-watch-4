import {connect} from "react-redux";

import {withLoading, withVideoPlayer} from "@hocs/index";
import {IPlayerProps} from "@pages/player/interface";
import Player from "@pages/player/player";
import {getCurrentFilmName, getCurrentFilmPicturePreview, getCurrentFilmVideoSource} from "@store/data/selectors";
import {TStoreState} from "@store/interface";

import {IPlayerMapStateToProps} from "./interface";


const PlayerWrapper = withLoading(withVideoPlayer(Player));

const mapStateToProps = (state: TStoreState, props: IPlayerProps): IPlayerMapStateToProps => ({
  source: getCurrentFilmVideoSource(state, props),
  poster: getCurrentFilmPicturePreview(state, props),
  filmName: getCurrentFilmName(state, props),
});

export default connect<IPlayerMapStateToProps>(mapStateToProps)(PlayerWrapper);
