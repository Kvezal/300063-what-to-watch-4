import * as React from "react";

interface IPlayerProps {
  renderPlayer: () => React.ReactNode;
  isPlaying: boolean;
  onPlayingChange: () => void;
  time: number;
  duration: number;
  onFullScreenOpen: () => void;
}

export {
  IPlayerProps,
};
