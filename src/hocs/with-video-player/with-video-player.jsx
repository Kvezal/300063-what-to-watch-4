import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import VideoPlayer from "@components/video-player";


const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);
      this._renderPlayer = this._renderPlayer.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        renderPlayer={this._renderPlayer}
      />;
    }

    _renderPlayer(params) {
      const {preview, poster, isActive, muted} = params;
      return <VideoPlayer
        source={preview}
        poster={poster}
        isPlaying={isActive}
        muted={muted}/>;
    }
  }

  WithVideoPlayer.propTypes = {
    isActive: PropTypes.bool.isRequired,
  };

  return WithVideoPlayer;
};

export default withVideoPlayer;
