import * as React from "react";
import {IVideo, IWithVideoPlayerHOCProps, IWithVideoPlayerHOCState} from "@hocs/with-video-player/interface";


const withVideoPlayer = (Component) => {
  type TComponent = React.ComponentProps<typeof Component>;
  type THOC = TComponent & IWithVideoPlayerHOCProps;

  return class WithVideoPlayer extends React.PureComponent<THOC, IWithVideoPlayerHOCState> {
    static defaultProps: Partial<THOC> = {
      canStop: true,
      muted: false,
    };

    private videoRef: React.RefObject<IVideo> = React.createRef();

    constructor(props) {
      super(props);

      this._handlePlayerChange = this._handlePlayerChange.bind(this);
      this._handleFullScreenOpen = this._handleFullScreenOpen.bind(this);

      this.state = {
        isLoading: true,
        isPlaying: props.isPlaying,
        time: 0,
        duration: 0,
      };
    }

    render() {
      const {time, duration, isPlaying} = this.state;
      return <Component
        {...this.props}
        time={time}
        duration={duration}
        isPlaying={isPlaying}
        onPlayingChange={this._handlePlayerChange}
        onFullScreenOpen={this._handleFullScreenOpen}
        renderPlayer={() => {
          return <video
            className="player__video"
            ref={this.videoRef}
          />;
        }}
      />;
    }

    _handlePlayerChange(flag) {
      const {isPlaying} = this.state;
      this.setState({
        isPlaying: flag !== undefined ? flag : !isPlaying,
      });
    }

    _handleFullScreenOpen() {
      const video = this.videoRef.current;
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
      const video = this.videoRef.current;

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

      video.ontimeupdate = () => {
        this.setState((prev) => ({
          time: prev.isPlaying || canStop ? Math.floor(video.currentTime) : 0,
        }));
      };
    }

    componentDidUpdate(prevProps) {
      const {source, poster} = this.props;
      const {isPlaying} = this.state;
      const video = this.videoRef.current;

      if (isPlaying) {
        video.play()
          .catch(() => this.setState({
            isPlaying: false,
          }));
      } else {
        video.pause();
      }

      const isChangeVideoProps = prevProps && (prevProps.source !== source || prevProps.poster !== poster);
      if (isChangeVideoProps) {
        video.poster = poster;
        video.src = source;
      }
    }

    componentWillUnmount() {
      const video = this.videoRef.current;
      this._handlePlayerChange = null;
      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.onloadedmetadata = null;
      video.ontimeupdate = null;
    }
  };
};

export default withVideoPlayer;
