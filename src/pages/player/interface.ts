import * as React from "react";


export interface IPlayerProps {
  renderPlayer: () => React.ReactNode;
  isPlaying: boolean;
  onPlayingChange: () => void;
  time: number;
  duration: number;
  onFullScreenOpen: () => void;
  filmName: string;
}
