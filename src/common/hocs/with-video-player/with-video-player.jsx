import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";


const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._handleFullScreenOpen = this._handleFullScreenOpen.bind(this);
      this._videoRef = createRef();

      this.state = {
        isLoading: true,
        isPlaying: props.isActive,
        time: 0,
        duration: 0,
      };
    }

    render() {
      const {time, duration} = this.state;
      return <Component
        {...this.props}
        time={time}
        duration={duration}
        onFullScreenOpen={this._handleFullScreenOpen}
        renderPlayer={() => {
          return <video
            className="player__video"
            ref={this._videoRef}
          />;
        }}
      />;
    }

    _handleFullScreenOpen() {
      const video = this._videoRef.current;
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
      }
    }

    componentDidMount() {
      const {source, poster, muted, canStop} = this.props;
      const video = this._videoRef.current;

      video.poster = poster;
      video.muted = muted;
      video.src = source;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });

      video.onplay = () => {
        this.setState({
          isPlaying: true,
        });
      };

      video.onpause = () => {
        if (!canStop) {
          video.src = ``;
          video.src = source;
        }
        this.setState({
          isPlaying: false,
        });
      };

      video.onloadedmetadata = () => {
        this.setState({
          duration: video.duration,
        });
      };

      video.ontimeupdate = () => this.setState((prev) => ({
        time: prev.isPlaying ? Math.floor(video.currentTime) : 0,
      }));
    }

    componentDidUpdate(prevProps) {
      const {isActive: isPlaying, source, poster} = this.props;
      const video = this._videoRef.current;

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }

      const isChangeVideoProps = prevProps && (prevProps.source !== source || prevProps.poster !== poster);
      if (isChangeVideoProps) {
        video.poster = poster;
        video.src = source;
      }
    }
  }

  WithVideoPlayer.defaultProps = {
    canStop: true,
    muted: false,
  };

  WithVideoPlayer.propTypes = {
    source: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    muted: PropTypes.bool.isRequired,
    canStop: PropTypes.bool.isRequired,
  };

  return WithVideoPlayer;
};

export default withVideoPlayer;