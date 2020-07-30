export interface IWithVideoPlayerHOCProps {
  source: string;
  poster: string;
  isPlaying: boolean;
  muted: boolean;
  canStop: boolean;
}

export interface IWithVideoPlayerHOCState {
  isLoading: boolean;
  isPlaying: boolean;
  time: number;
  duration: number;
}

export type IVideo = HTMLVideoElement & {
  mozRequestFullScreen();
  webkitRequestFullscreen();
  msRequestFullscreen();
}
