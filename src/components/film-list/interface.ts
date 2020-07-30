import {FilmInterface} from "@common/types";


interface IFilmListProps {
  list: FilmInterface[];
  onCardClick: (filmId: number) => void;
  pack?: number;
  step?: number;
}

export {
  IFilmListProps,
};
