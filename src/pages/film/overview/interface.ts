import {FilmRatingInterface} from "@common/types/film";


export interface IOverviewProps {
  rating: FilmRatingInterface;
  director: string;
  description: string;
  starring: string[];
}
