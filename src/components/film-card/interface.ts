import {ReactNode} from "react";


export interface IFilmCardProps {
  filmId: number;
  filmName: string;
  onCardClick: (filmId: number) => void;
  onPlayingChange: (isPlaying: boolean) => void;
  renderPlayer: () => ReactNode;
}
