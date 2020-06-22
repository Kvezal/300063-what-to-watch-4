import PropTypes from "prop-types";


const filmType = {
  id: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default filmType;
