import PropTypes from "prop-types";


const reviewType = {
  ratingScore: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default reviewType;
