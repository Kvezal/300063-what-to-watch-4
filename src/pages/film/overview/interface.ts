import {FilmRatingInterface} from "@common/types/film";


interface IOverviewProps {
  rating: FilmRatingInterface;
  director: string;
  description: string;
  starring: string[];
}

export {
  IOverviewProps,
};
