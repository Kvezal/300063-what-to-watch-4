export interface FilmRatingInterface {
  score: number;
  count: number;
  assessment: string;
}

export interface FilmScoreInterface {
  video: string;
  previewVideo: string;
}

export interface FilmPictureInterface {
  poster: string;
  preview: string;
  cover: string;
  backgroundColor: string;
}

export interface FilmInterface {
  id: number;
  name: string;
  genre: string;
  runTime: string;
  releaseDate: number;
  description: string;
  director: string;
  rating: FilmRatingInterface;
  source: FilmScoreInterface;
  picture: FilmPictureInterface;
  starring: string[];
  isFavorite: boolean;
}

export interface ServerFilmInterface {
  id: number;
  name: string;
  poster_image: string;
  preview_image: string;
  background_image: string;
  background_color: string;
  video_link: string;
  preview_video_link: string;
  description: string;
  rating: number;
  scores_count: number;
  director: string;
  starring: string[];
  run_time: number;
  genre: string;
  released: number;
  is_favorite: boolean;
}
