import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";


const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isLoading: true,
        isPlaying: props.isPlaying,
        time: 0,
      };
    }

    render() {
      return <Component
        {...this.props}
      >
        <video
          width="100%"
          ref={this._videoRef}
        />
      </Component>;
    }

    componentDidMount() {
      const {source, poster, muted} = this.props;
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
        video.src = ``;
        video.src = source;
        this.setState({
          isPlaying: false,
        });
      };

      video.ontimeupdate = () => this.setState((prev) => ({
        time: prev.isPlaying ? Math.floor(video.currentTime) : 0,
      }));
    }

    componentDidUpdate() {
      const {isPlaying} = this.props;
      const video = this._videoRef.current;

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }
  }

  WithVideo.defaultProp = {
    isPlaying: false,
    muted: false,
  };

  WithVideo.propTypes = {
    source: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    onVideoPlayerTimeUpdate: PropTypes.func,
    muted: PropTypes.bool.isRequired,
  };

  return WithVideo;
};

export default withVideo;
