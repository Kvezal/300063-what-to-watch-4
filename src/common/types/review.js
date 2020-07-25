import PropTypes from "prop-types";


const reviewType = {
  id: PropTypes.number.isRequired,
  ratingScore: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default reviewType;
