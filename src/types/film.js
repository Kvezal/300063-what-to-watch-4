import PropTypes from "prop-types";


const filmType = {
  id: PropTypes.number.isRequired,
  preview: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default filmType;
