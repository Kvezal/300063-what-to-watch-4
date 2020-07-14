import PropTypes from "prop-types";


const promoFilmType = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,
  genres: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
  releaseDate: PropTypes.number.isRequired,
};

export default promoFilmType;
