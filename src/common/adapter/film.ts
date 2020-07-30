import {FilmInterface, ServerFilmInterface} from "@common/types";
import {getTime, getAssessment} from "@common/utils";

const adaptFilm = (film: ServerFilmInterface): FilmInterface => {
  return {
    id: film.id,
    genre: film.genre,
    name: film.name,
    source: {
      video: film.video_link,
      previewVideo: film.preview_video_link,
    },
    picture: {
      poster: film.poster_image,
      cover: film.background_image,
      preview: film.preview_image,
      backgroundColor: film.background_color,
    },
    runTime: film.run_time && getTime(film.run_time),
    releaseDate: film.released,
    rating: {
      score: film.rating,
      assessment: film.rating && getAssessment(film.rating),
      count: film.scores_count,
    },
    description: film.description,
    director: film.director,
    starring: film.starring,
    isFavorite: film.is_favorite,
  };
};


export default adaptFilm;
