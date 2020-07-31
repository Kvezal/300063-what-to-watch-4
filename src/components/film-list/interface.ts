import {IFilm} from "@common/types";


export interface IFilmListProps {
  films: IFilm[];
  onCardClick: (filmId: number) => void;
  pack?: number;
  step?: number;
}
