import PropTypes from "prop-types";


const filmType = {
  id: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  runTime: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    score: PropTypes.number,
    count: PropTypes.number,
    level: PropTypes.string,
  }).isRequired,
  source: PropTypes.shape({
    video: PropTypes.string,
    previewVideo: PropTypes.string,
  }).isRequired,
  picture: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  starring: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
};

export default filmType;
