import {IFilm} from "@common/types";


export interface IFilmListProps {
  list: IFilm[];
  onCardClick: (filmId: number) => void;
  pack?: number;
  step?: number;
}
