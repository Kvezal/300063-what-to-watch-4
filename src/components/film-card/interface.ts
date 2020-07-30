import {ReactNode} from "react";


interface IFilmCardProps {
  filmId: number;
  filmName: string;
  onCardClick: (filmId: number) => void;
  onPlayingChange: (isPlaying: boolean) => void;
  renderPlayer: () => ReactNode;
}

export {
  IFilmCardProps,
};
