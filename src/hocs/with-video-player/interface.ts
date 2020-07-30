interface IWithVideoPlayerHOCProps {
  source: string;
  poster: string;
  isPlaying: boolean;
  muted: boolean;
  canStop: boolean;
}

interface IWithVideoPlayerHOCState {
  isLoading: boolean;
  isPlaying: boolean;
  time: number;
  duration: number;
}

type IVideo = HTMLVideoElement & {
  mozRequestFullScreen();
  webkitRequestFullscreen();
  msRequestFullscreen();
}

export {
  IWithVideoPlayerHOCProps,
  IWithVideoPlayerHOCState,
  IVideo,
};
