import PropTypes from "prop-types";

const mainPageModel = {
  currentFilmGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  releaseDate: PropTypes.number.isRequired,
  filmList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        picture: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
  ).isRequired,
};

export default mainPageModel;
