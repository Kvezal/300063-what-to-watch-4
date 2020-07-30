import {FilmInterface} from "@common/types";


export interface IFilmListProps {
  list: FilmInterface[];
  onCardClick: (filmId: number) => void;
  pack?: number;
  step?: number;
}
