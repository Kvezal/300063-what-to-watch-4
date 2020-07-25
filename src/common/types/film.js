import PropTypes from "prop-types";


const filmType = {
  id: PropTypes.number,
  genre: PropTypes.string,
  runTime: PropTypes.string,
  releaseDate: PropTypes.number,
  description: PropTypes.string,
  director: PropTypes.string,
  rating: PropTypes.shape({
    score: PropTypes.number,
    count: PropTypes.number,
    level: PropTypes.string,
  }),
  source: PropTypes.shape({
    video: PropTypes.string,
    previewVideo: PropTypes.string,
  }),
  picture: PropTypes.shape({
    poster: PropTypes.string,
    preview: PropTypes.string,
    cover: PropTypes.string,
    backgroundColor: PropTypes.string,
  }),
  starring: PropTypes.arrayOf(
      PropTypes.string
  ),
  isFavorite: PropTypes.bool.isRequired,
};

export default filmType;
