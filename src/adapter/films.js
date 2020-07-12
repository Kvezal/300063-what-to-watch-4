import {getTime, getAssessment} from "@utils";

const adaptFilm = (film) => {
  return {
    id: film.id,
    genre: film.genre,
    name: film.name,
    source: {
      video: film.video_link,
      previewVideo: film.preview_video_link,
    },
    picture: {
      poster: film.background_image,
      cover: film.preview_image,
    },
    runTime: getTime(film.run_time),
    releaseDate: film.released,
    rating: {
      score: film.rating,
      level: getAssessment(film.rating),
      count: film.scores_count,
    },
    description: film.description,
    director: film.director,
    starring: film.starring,
  };
};


export default adaptFilm;
